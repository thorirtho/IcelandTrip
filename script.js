
const REGION_COLORS = {
  "South Iceland": "#0f766e",
  "East Iceland": "#2563eb",
  "North Iceland": "#7c3aed",
  "West Iceland": "#b45309",
  "North West Iceland": "#be123c"
};
const REGION_EMOJI = {
  "South Iceland": "🌋",
  "East Iceland": "🏔️",
  "North Iceland": "❄️",
  "West Iceland": "🌊",
  "North West Iceland": "🧭"
};
let map, layer, activeRegion = "All", currentPlaces = [...PLACES];
const imageCache = new Map();
const $ = (id) => document.getElementById(id);

function init() {
  if (!window.L) {
    $('loadWarning').style.display = 'block';
    return;
  }
  map = L.map('map', { zoomControl: true, worldCopyJump: false, preferCanvas: true }).setView([64.96, -18.9], 6);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  layer = window.L.markerClusterGroup ? L.markerClusterGroup({ showCoverageOnHover:false, maxClusterRadius:48 }) : L.layerGroup();
  map.addLayer(layer);
  buildChips();
  $('search').addEventListener('input', applyFilters);
  $('fitBtn').addEventListener('click', fitAll);
  $('zoomIceland').addEventListener('click', () => map.flyTo([64.96, -18.9], 6, {duration:.7}));
  $('closeCard').addEventListener('click', hideCard);
  $('totalCount').textContent = PLACES.length;
  render();
  setTimeout(() => { map.invalidateSize(); fitAll(); }, 250);
  window.addEventListener('resize', () => setTimeout(() => map.invalidateSize(), 100));
}

function buildChips() {
  const regions = ['All', ...Array.from(new Set(PLACES.map(p => p.region)))];
  $('chips').innerHTML = regions.map(r => `<button class="chip-btn ${r==='All'?'active':''}" data-region="${escapeHtml(r)}">${r==='All'?'All':REGION_EMOJI[r]+' '+r.replace(' Iceland','')}</button>`).join('');
  document.querySelectorAll('.chip-btn').forEach(btn => btn.addEventListener('click', () => {
    activeRegion = btn.dataset.region;
    document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  }));
}

function applyFilters() {
  const q = $('search').value.trim().toLowerCase();
  currentPlaces = PLACES.filter(p => {
    const regionMatch = activeRegion === 'All' || p.region === activeRegion;
    const hay = `${p.name} ${p.region} ${p.type} ${p.desc}`.toLowerCase();
    return regionMatch && (!q || hay.includes(q));
  });
  render();
}

function render() {
  layer.clearLayers();
  currentPlaces.forEach((p, idx) => layer.addLayer(makeMarker(p, idx)));
  $('visibleCount').textContent = currentPlaces.length;
  $('placeList').innerHTML = currentPlaces.map((p,i) => {
    const color = REGION_COLORS[p.region] || '#0f766e';
    const emoji = REGION_EMOJI[p.region] || '🇮🇸';
    return `<div class="place-item" data-index="${i}">
      <div class="place-thumb" data-name="${escapeHtml(p.name)}" style="background:linear-gradient(135deg, ${color}, #38bdf8)"><span class="thumb-emoji">${emoji}</span></div>
      <div class="place-text">
        <strong>${escapeHtml(p.name)}</strong>
        <span>${escapeHtml(p.region)} · ${escapeHtml(p.type)}</span>
        <em class="tag">${escapeHtml(shortDesc(p.desc))}</em>
      </div>
    </div>`;
  }).join('');
  document.querySelectorAll('.place-item').forEach(el => el.addEventListener('click', () => focusPlace(currentPlaces[Number(el.dataset.index)])));
  lazyLoadThumbs();
}

function lazyLoadThumbs() {
  const thumbs = document.querySelectorAll('.place-thumb');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);
      const name = el.dataset.name;
      loadWikiImage(name).then(url => {
        if (url) {
          el.style.backgroundImage = `url('${url}')`;
          el.classList.add('loaded');
        }
      });
    });
  }, { root: $('placeList'), rootMargin: '200px' });
  thumbs.forEach(t => io.observe(t));
}

function makeMarker(p, idx) {
  const color = REGION_COLORS[p.region] || '#0f766e';
  const icon = L.divIcon({
    className:'custom-pin',
    html:`<div class="pin" style="background:${color}"><span>${REGION_EMOJI[p.region] || '•'}</span></div>`,
    iconSize:[30,42], iconAnchor:[15,30], popupAnchor:[0,-28]
  });
  const marker = L.marker([p.lat, p.lng], {icon});
  marker.bindPopup(`<strong>${escapeHtml(p.name)}</strong><br><span>${escapeHtml(p.type)}</span>`);
  marker.on('click', () => showCard(p));
  return marker;
}

function focusPlace(p) {
  map.flyTo([p.lat, p.lng], 10, {duration:.65});
  showCard(p);
}
function fitAll() {
  const arr = currentPlaces.length ? currentPlaces : PLACES;
  const bounds = L.latLngBounds(arr.map(p => [p.lat,p.lng]));
  map.fitBounds(bounds, {padding:[45,45], maxZoom:8});
}
function hideCard() { $('card').classList.remove('visible'); }
function showCard(p) {
  $('cardTitle').textContent = p.name;
  $('cardRegion').textContent = `${p.region} · ${p.type}`;
  $('cardText').textContent = p.desc;
  $('mapsLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' Iceland')}`;
  $('imageLink').href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(p.name + ' Iceland')}`;
  $('cardFallback').textContent = REGION_EMOJI[p.region] || '🇮🇸';
  const img = $('cardImg');
  img.style.backgroundImage = `linear-gradient(135deg, ${REGION_COLORS[p.region] || '#0f766e'}, #38bdf8)`;
  loadWikiImage(p.name).then(url => {
    if (url && $('cardTitle').textContent === p.name) img.style.backgroundImage = `url('${url}')`;
  });
  $('card').classList.add('visible');
}

async function loadWikiImage(title) {
  if (imageCache.has(title)) return imageCache.get(title);
  const queries = [`${title} Iceland`, title];
  for (const q of queries) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrlimit=3&prop=pageimages&piprop=original%7Cthumbnail&pithumbsize=600&origin=*`;
      const r = await fetch(url);
      if (!r.ok) continue;
      const j = await r.json();
      const pages = j && j.query && j.query.pages ? Object.values(j.query.pages) : [];
      pages.sort((a, b) => (a.index || 99) - (b.index || 99));
      for (const p of pages) {
        const src = (p.original && p.original.source) || (p.thumbnail && p.thumbnail.source);
        if (src) {
          imageCache.set(title, src);
          return src;
        }
      }
    } catch (e) {}
  }
  imageCache.set(title, null);
  return null;
}
function shortDesc(s){ return s.length > 62 ? s.slice(0,61) + '…' : s; }
function escapeHtml(s){ return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

document.addEventListener('DOMContentLoaded', init);
