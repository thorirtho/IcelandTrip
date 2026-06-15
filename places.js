const PLACES = [
  {
    "name": "Reykjadalur",
    "region": "South Iceland",
    "lat": 64.021,
    "lng": -21.211,
    "type": "Hot spring hike",
    "desc": "A geothermal valley above Hveragerði where you can hike for about an hour and bathe in a naturally warm river surrounded by steaming hillsides."
  },
  {
    "name": "Þingvellir National Park",
    "region": "South Iceland",
    "lat": 64.2559,
    "lng": -21.1295,
    "type": "National park",
    "desc": "UNESCO-listed national park where Iceland’s parliament was founded and where the North American and Eurasian tectonic plates pull apart."
  },
  {
    "name": "Efstidalur II",
    "region": "South Iceland",
    "lat": 64.229,
    "lng": -20.506,
    "type": "Farm ice cream",
    "desc": "A friendly farm stop on the Golden Circle known for ice cream made on site, with windows into the cowshed so visitors can see the cows."
  },
  {
    "name": "Friðheimar",
    "region": "South Iceland",
    "lat": 64.176,
    "lng": -20.447,
    "type": "Tomato greenhouse",
    "desc": "A popular greenhouse restaurant in Reykholt where tomatoes are grown year-round with geothermal energy. Booking ahead is often wise."
  },
  {
    "name": "Secret Lagoon",
    "region": "South Iceland",
    "lat": 64.137,
    "lng": -20.309,
    "type": "Geothermal pool",
    "desc": "One of Iceland’s oldest swimming pools, a relaxed natural hot spring in Flúðir with little geothermal features bubbling nearby."
  },
  {
    "name": "Háifoss",
    "region": "South Iceland",
    "lat": 64.2079,
    "lng": -19.6869,
    "type": "Waterfall",
    "desc": "One of Iceland’s tallest waterfalls, dropping dramatically into a rugged canyon beside Granni waterfall."
  },
  {
    "name": "Þjóðveldisbærinn Stöng",
    "region": "South Iceland",
    "lat": 64.119,
    "lng": -19.821,
    "type": "Historic site",
    "desc": "A reconstructed medieval turf farm based on the nearby excavated Viking Age farm Stöng in Þjórsárdalur."
  },
  {
    "name": "Hjálparfoss",
    "region": "South Iceland",
    "lat": 64.1145,
    "lng": -19.8538,
    "type": "Waterfall",
    "desc": "A graceful twin waterfall framed by basalt formations, close to the Þjórsárdalur historic sites."
  },
  {
    "name": "Glanni",
    "region": "West Iceland",
    "lat": 64.755,
    "lng": -21.548,
    "type": "Waterfall",
    "desc": "A pretty waterfall in Norðurá, often combined with a walk around the mossy lava landscape at Grábrók."
  },
  {
    "name": "Seljalandsfoss",
    "region": "South Iceland",
    "lat": 63.6156,
    "lng": -19.9886,
    "type": "Waterfall",
    "desc": "A famous waterfall that you can walk behind in good conditions, right by the Ring Road on the South Coast."
  },
  {
    "name": "Gljúfurbúi",
    "region": "South Iceland",
    "lat": 63.6213,
    "lng": -19.9856,
    "type": "Hidden waterfall",
    "desc": "A partially hidden waterfall inside a narrow cliff opening, just a short walk from Seljalandsfoss but often missed."
  },
  {
    "name": "Nauthúsagil",
    "region": "South Iceland",
    "lat": 63.683,
    "lng": -19.887,
    "type": "Ravine walk",
    "desc": "A narrow ravine with rowan trees and small waterfalls. The walk can involve stepping through water, ending at a waterfall in the gorge."
  },
  {
    "name": "Laugarás Lagoon",
    "region": "South Iceland",
    "lat": 64.139,
    "lng": -20.493,
    "type": "Geothermal lagoon",
    "desc": "A new geothermal bathing lagoon in Laugarás, designed as a relaxing stop in the Golden Circle area."
  },
  {
    "name": "Skógafoss",
    "region": "South Iceland",
    "lat": 63.5321,
    "lng": -19.5114,
    "type": "Waterfall",
    "desc": "A powerful, photogenic waterfall with a staircase to the top and access to the Fimmvörðuháls trail."
  },
  {
    "name": "Kvernufoss",
    "region": "South Iceland",
    "lat": 63.5275,
    "lng": -19.4803,
    "type": "Waterfall",
    "desc": "A beautiful waterfall in a sheltered gorge near Skógar, usually quieter than nearby Skógafoss."
  },
  {
    "name": "Reynisfjara",
    "region": "South Iceland",
    "lat": 63.4043,
    "lng": -19.0455,
    "type": "Black sand beach",
    "desc": "A dramatic black sand beach with basalt columns and sea stacks. It is beautiful but dangerous due to sneaker waves."
  },
  {
    "name": "Gígjagjá / Yoda Cave",
    "region": "South Iceland",
    "lat": 63.462,
    "lng": -18.757,
    "type": "Cave",
    "desc": "A sea-eroded cave near Hjörleifshöfði whose entrance resembles Yoda. A fun short detour near Vík."
  },
  {
    "name": "Fjaðrárgljúfur",
    "region": "South Iceland",
    "lat": 63.771,
    "lng": -18.172,
    "type": "Canyon",
    "desc": "A winding mossy canyon near Kirkjubæjarklaustur, with viewpoints above the river gorge."
  },
  {
    "name": "Jökulsárlón",
    "region": "South Iceland",
    "lat": 64.0481,
    "lng": -16.1794,
    "type": "Glacier lagoon",
    "desc": "A spectacular glacier lagoon filled with blue icebergs drifting from Breiðamerkurjökull toward the sea."
  },
  {
    "name": "Diamond Beach",
    "region": "South Iceland",
    "lat": 64.0436,
    "lng": -16.1771,
    "type": "Beach",
    "desc": "Black sand beach where chunks of glacier ice wash ashore like diamonds, across the road from Jökulsárlón."
  },
  {
    "name": "Heinabergsjökull",
    "region": "South Iceland",
    "lat": 64.258,
    "lng": -15.628,
    "type": "Glacier area",
    "desc": "A quieter glacier outlet and lagoon area reached by a side road from the Ring Road. Road conditions matter for RVs."
  },
  {
    "name": "Skaftafell",
    "region": "South Iceland",
    "lat": 64.0167,
    "lng": -16.9667,
    "type": "National park area",
    "desc": "A major Vatnajökull National Park hub with a good campsite and hikes to waterfalls, viewpoints and glaciers."
  },
  {
    "name": "Svartifoss",
    "region": "South Iceland",
    "lat": 64.0275,
    "lng": -16.9753,
    "type": "Waterfall",
    "desc": "A waterfall framed by dark basalt columns, reached by a popular hike from Skaftafell."
  },
  {
    "name": "Stokksnes / Vestrahorn",
    "region": "East Iceland",
    "lat": 64.244,
    "lng": -14.972,
    "type": "Mountain coast",
    "desc": "A striking black-sand headland with views of Vestrahorn mountain and a reconstructed Viking village nearby."
  },
  {
    "name": "Egilsstaðir",
    "region": "East Iceland",
    "lat": 65.2669,
    "lng": -14.3948,
    "type": "Town",
    "desc": "The main town of East Iceland, a useful base for the region with access to forests, lakes, reindeer country and Vök Baths."
  },
  {
    "name": "Vök Baths",
    "region": "East Iceland",
    "lat": 65.283,
    "lng": -14.449,
    "type": "Geothermal baths",
    "desc": "Floating geothermal pools on Lake Urriðavatn, close to Egilsstaðir."
  },
  {
    "name": "Seyðisfjörður",
    "region": "East Iceland",
    "lat": 65.2609,
    "lng": -14.0098,
    "type": "Town",
    "desc": "A colorful, artistic fjord town with wooden houses, mountain views and the famous rainbow street by the blue church."
  },
  {
    "name": "Stuðlagil",
    "region": "East Iceland",
    "lat": 65.1635,
    "lng": -15.3077,
    "type": "Basalt canyon",
    "desc": "A basalt-column canyon on the Jökla river, known for turquoise water in favorable conditions."
  },
  {
    "name": "Borgarfjörður eystri",
    "region": "East Iceland",
    "lat": 65.5269,
    "lng": -13.815,
    "type": "Puffins & village",
    "desc": "A remote, beautiful fjord village with excellent puffin viewing at Hafnarhólmi in season and a campsite nearby."
  },
  {
    "name": "Stórurð",
    "region": "East Iceland",
    "lat": 65.525,
    "lng": -13.991,
    "type": "Hike",
    "desc": "A magical boulder field and blue pools below the Dyrfjöll mountains. The hike is long but highly rewarding."
  },
  {
    "name": "Mývatn",
    "region": "North Iceland",
    "lat": 65.6039,
    "lng": -17.0,
    "type": "Lake area",
    "desc": "A volcanic lake district with lava fields, pseudo-craters, geothermal areas and rich birdlife."
  },
  {
    "name": "Dimmuborgir",
    "region": "North Iceland",
    "lat": 65.591,
    "lng": -16.912,
    "type": "Lava formations",
    "desc": "A maze of unusual lava pillars and arches near Lake Mývatn."
  },
  {
    "name": "Hverir / Námaskarð",
    "region": "North Iceland",
    "lat": 65.641,
    "lng": -16.807,
    "type": "Geothermal area",
    "desc": "A vivid geothermal area with boiling mud pots, steaming vents and sulfur-colored ground near Námafjall."
  },
  {
    "name": "Mývatn Nature Baths / Jarðböðin",
    "region": "North Iceland",
    "lat": 65.63,
    "lng": -16.848,
    "type": "Geothermal baths",
    "desc": "Warm mineral-rich bathing pools overlooking the Mývatn landscape."
  },
  {
    "name": "Grjótagjá",
    "region": "North Iceland",
    "lat": 65.626,
    "lng": -16.883,
    "type": "Lava cave",
    "desc": "A small lava cave with a geothermal pool, famous as a Game of Thrones filming location, but bathing is not allowed."
  },
  {
    "name": "Stóragjá",
    "region": "North Iceland",
    "lat": 65.621,
    "lng": -16.912,
    "type": "Fissure cave",
    "desc": "A fissure and cave area near Reykjahlíð, less visited than Grjótagjá."
  },
  {
    "name": "Dettifoss",
    "region": "North Iceland",
    "lat": 65.8147,
    "lng": -16.3846,
    "type": "Waterfall",
    "desc": "One of Europe’s most powerful waterfalls, thundering into Jökulsárgljúfur canyon."
  },
  {
    "name": "Akureyri",
    "region": "North Iceland",
    "lat": 65.6826,
    "lng": -18.0907,
    "type": "Town",
    "desc": "The capital of North Iceland, with a lively harbor, botanical garden, good pool and nearby Christmas House."
  },
  {
    "name": "Jólagarðurinn / Christmas House",
    "region": "North Iceland",
    "lat": 65.616,
    "lng": -18.071,
    "type": "Shop attraction",
    "desc": "A charming Christmas-themed shop and garden just outside Akureyri."
  },
  {
    "name": "Forest Lagoon / Skógarböðin",
    "region": "North Iceland",
    "lat": 65.666,
    "lng": -18.044,
    "type": "Geothermal baths",
    "desc": "A forest-fringed geothermal spa overlooking Eyjafjörður, close to Akureyri."
  },
  {
    "name": "Ásbyrgi",
    "region": "North Iceland",
    "lat": 66.017,
    "lng": -16.508,
    "type": "Canyon",
    "desc": "A horseshoe-shaped canyon with cliffs, birch woodland and calm walking routes. A must-see in Jökulsárgljúfur."
  },
  {
    "name": "Húsavík",
    "region": "North Iceland",
    "lat": 66.0449,
    "lng": -17.3389,
    "type": "Whale watching town",
    "desc": "A classic whale-watching town on Skjálfandi Bay with a pretty harbor and museums."
  },
  {
    "name": "GeoSea",
    "region": "North Iceland",
    "lat": 66.048,
    "lng": -17.308,
    "type": "Sea baths",
    "desc": "Geothermal sea baths on the cliffs above Húsavík with wide ocean views."
  },
  {
    "name": "Hauganes",
    "region": "North Iceland",
    "lat": 65.924,
    "lng": -18.303,
    "type": "Village & baths",
    "desc": "A small seaside village with camping, whale tours and hot tubs by the sea."
  },
  {
    "name": "Hrísey",
    "region": "North Iceland",
    "lat": 66.005,
    "lng": -18.382,
    "type": "Island",
    "desc": "A peaceful island in Eyjafjörður reached by a short ferry ride from Árskógssandur."
  },
  {
    "name": "Siglufjörður",
    "region": "North Iceland",
    "lat": 66.1513,
    "lng": -18.9082,
    "type": "Town",
    "desc": "A scenic fjord town with colorful houses, mountain views and a famous herring-era museum."
  },
  {
    "name": "Grímsey",
    "region": "North Iceland",
    "lat": 66.543,
    "lng": -18.017,
    "type": "Island",
    "desc": "Iceland’s northern island on the Arctic Circle, reached by ferry from Dalvík or by flight."
  },
  {
    "name": "Dynjandi",
    "region": "Westfjords",
    "lat": 65.7328,
    "lng": -23.1998,
    "type": "Waterfall",
    "desc": "The crown jewel of the Westfjords, a broad tiered waterfall cascading down a mountainside."
  },
  {
    "name": "Látrabjarg",
    "region": "Westfjords",
    "lat": 65.502,
    "lng": -24.531,
    "type": "Bird cliffs",
    "desc": "Europe’s westernmost cliffs and a major seabird nesting site, especially known for puffins in season."
  },
  {
    "name": "Rauðisandur",
    "region": "Westfjords",
    "lat": 65.466,
    "lng": -24.032,
    "type": "Beach",
    "desc": "A wide red-gold sand beach in the southern Westfjords, with big views and changing colors."
  },
  {
    "name": "Hellulaug",
    "region": "Westfjords",
    "lat": 65.579,
    "lng": -23.159,
    "type": "Hot spring",
    "desc": "A small natural seaside hot pool near Flókalundur with views over Vatnsfjörður."
  },
  {
    "name": "Pollurinn",
    "region": "Westfjords",
    "lat": 65.836,
    "lng": -23.987,
    "type": "Hot pots",
    "desc": "Simple geothermal hot pots near Tálknafjörður with fjord views."
  },
  {
    "name": "Krossneslaug",
    "region": "Westfjords",
    "lat": 66.056,
    "lng": -21.513,
    "type": "Remote pool",
    "desc": "A remote swimming pool and hot pots at the edge of the sea in the Strandir region."
  },
  {
    "name": "Reykjafjarðarlaug",
    "region": "Westfjords",
    "lat": 65.623,
    "lng": -23.469,
    "type": "Hot spring pool",
    "desc": "A quiet geothermal pool and hot spring in a remote Westfjords valley."
  },
  {
    "name": "Hvalfjörður",
    "region": "West Iceland",
    "lat": 64.375,
    "lng": -21.574,
    "type": "Fjord",
    "desc": "A scenic fjord north of Reykjavík with quiet roads, wartime history and access to the Glymur hike."
  },
  {
    "name": "Glymur",
    "region": "West Iceland",
    "lat": 64.385,
    "lng": -21.251,
    "type": "Waterfall hike",
    "desc": "A classic hike to one of Iceland’s tallest waterfalls, involving river crossings and canyon views."
  },
  {
    "name": "Kirkjufell",
    "region": "West Iceland",
    "lat": 64.9417,
    "lng": -23.3069,
    "type": "Mountain",
    "desc": "The iconic arrow-shaped mountain by Grundarfjörður, often photographed with Kirkjufellsfoss waterfall."
  },
  {
    "name": "Snæfellsjökull National Park",
    "region": "West Iceland",
    "lat": 64.805,
    "lng": -23.773,
    "type": "National park",
    "desc": "A national park around the glacier-capped volcano Snæfellsjökull, with lava fields, cliffs, beaches and coastal villages."
  },
  {
    "name": "Rauðfeldsgjá",
    "region": "West Iceland",
    "lat": 64.747,
    "lng": -23.646,
    "type": "Gorge",
    "desc": "A narrow gorge in the Botnsfjall mountain near Arnarstapi, reached by a short walk from the road."
  },
  {
    "name": "Landbrotalaug",
    "region": "West Iceland",
    "lat": 64.833,
    "lng": -22.324,
    "type": "Hot spring",
    "desc": "A tiny natural hot spring near Eldborg. Access depends on local rules and respect for private land."
  },
  {
    "name": "Arnarstapi",
    "region": "West Iceland",
    "lat": 64.766,
    "lng": -23.627,
    "type": "Coastal village",
    "desc": "A scenic village with basalt sea cliffs, rock arches and coastal walks toward Hellnar."
  },
  {
    "name": "Hellnar",
    "region": "West Iceland",
    "lat": 64.752,
    "lng": -23.649,
    "type": "Coastal village",
    "desc": "A small historic coastal settlement with dramatic lava cliffs and views of Snæfellsjökull."
  },
  {
    "name": "Guðrúnarlaug",
    "region": "West Iceland",
    "lat": 65.246,
    "lng": -21.805,
    "type": "Hot spring",
    "desc": "A small reconstructed hot pool near Búðardalur, named after Guðrún Ósvífursdóttir from the Icelandic sagas."
  }
];
