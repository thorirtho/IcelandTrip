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
  },
  { "name": "Hallgrímskirkja", "region": "Capital Region", "lat": 64.1417, "lng": -21.9266, "type": "Church", "desc": "Reykjavík's iconic basalt-inspired church with a tower offering panoramic city views.", "recommended": false },
  { "name": "Harpa Concert Hall", "region": "Capital Region", "lat": 64.1500, "lng": -21.9325, "type": "Landmark", "desc": "Striking glass-honeycomb concert hall on Reykjavík's harbor, free to wander inside.", "recommended": false },
  { "name": "Sun Voyager (Sólfar)", "region": "Capital Region", "lat": 64.1475, "lng": -21.9219, "type": "Sculpture", "desc": "A stainless-steel ship sculpture on the Reykjavík waterfront, popular at sunset.", "recommended": false },
  { "name": "Perlan", "region": "Capital Region", "lat": 64.1289, "lng": -21.9192, "type": "Museum & viewpoint", "desc": "Glass-dome museum on Öskjuhlíð hill with planetarium, ice cave and 360° observation deck.", "recommended": false },
  { "name": "Sky Lagoon", "region": "Capital Region", "lat": 64.1119, "lng": -21.9047, "type": "Geothermal lagoon", "desc": "Clifftop infinity-edge geothermal lagoon in Kópavogur with a seven-step bathing ritual.", "recommended": false },
  { "name": "Blue Lagoon", "region": "Reykjanes", "lat": 63.8804, "lng": -22.4495, "type": "Geothermal spa", "desc": "Iceland's most famous milky-blue geothermal spa, set in a black lava field near Grindavík.", "recommended": false },
  { "name": "Bridge Between Continents", "region": "Reykjanes", "lat": 63.8688, "lng": -22.6750, "type": "Tectonic landmark", "desc": "A short footbridge spanning a rift between the North American and Eurasian plates.", "recommended": false },
  { "name": "Gunnuhver", "region": "Reykjanes", "lat": 63.8189, "lng": -22.6856, "type": "Geothermal area", "desc": "Iceland's largest mud pool, steaming dramatically on the southwestern tip of Reykjanes.", "recommended": false },
  { "name": "Reykjanesviti", "region": "Reykjanes", "lat": 63.8156, "lng": -22.7053, "type": "Lighthouse", "desc": "Iceland's oldest lighthouse, standing on a windswept headland near Valahnúkur cliffs.", "recommended": false },
  { "name": "Brimketill", "region": "Reykjanes", "lat": 63.8253, "lng": -22.6622, "type": "Lava pool", "desc": "A natural lava-rock pool at the edge of the surf with a viewing platform.", "recommended": false },
  { "name": "Fagradalsfjall", "region": "Reykjanes", "lat": 63.9020, "lng": -22.2730, "type": "Volcano", "desc": "Site of recent eruptions; hiking trails reach fresh lava fields (check safety conditions before visiting).", "recommended": false },
  { "name": "Krýsuvík / Seltún", "region": "Reykjanes", "lat": 63.8966, "lng": -22.0541, "type": "Geothermal area", "desc": "A colorful geothermal field with boardwalks past bubbling mud pots and steaming vents.", "recommended": false },
  { "name": "Geysir & Strokkur", "region": "South Iceland", "lat": 64.3104, "lng": -20.3024, "type": "Geyser", "desc": "The original Geysir gave its name to all geysers; nearby Strokkur erupts every few minutes.", "recommended": false },
  { "name": "Gullfoss", "region": "South Iceland", "lat": 64.3275, "lng": -20.1199, "type": "Waterfall", "desc": "A massive two-tier waterfall on the Hvítá river and a Golden Circle highlight.", "recommended": false },
  { "name": "Kerið", "region": "South Iceland", "lat": 64.0411, "lng": -20.8853, "type": "Crater lake", "desc": "A red-walled volcanic crater with a turquoise lake at the bottom, near the Golden Circle.", "recommended": false },
  { "name": "Dyrhólaey", "region": "South Iceland", "lat": 63.4031, "lng": -19.1264, "type": "Sea arch & cliffs", "desc": "A dramatic promontory with a giant sea arch and puffin nesting in summer, near Vík.", "recommended": false },
  { "name": "Sólheimajökull", "region": "South Iceland", "lat": 63.5283, "lng": -19.3675, "type": "Glacier tongue", "desc": "An accessible glacier outlet of Mýrdalsjökull, often used for guided glacier walks.", "recommended": false },
  { "name": "Vík í Mýrdal", "region": "South Iceland", "lat": 63.4194, "lng": -19.0064, "type": "Village", "desc": "Iceland's southernmost village, with a famous cliff-top church and easy access to nearby beaches.", "recommended": false },
  { "name": "LAVA Centre", "region": "South Iceland", "lat": 63.7497, "lng": -20.2227, "type": "Museum", "desc": "An interactive volcano and earthquake museum in Hvolsvöllur, great for a rainy day.", "recommended": false },
  { "name": "Vestmannaeyjar / Heimaey", "region": "South Iceland", "lat": 63.4427, "lng": -20.2734, "type": "Volcanic island", "desc": "An archipelago reached by ferry from Landeyjahöfn; puffins, the Eldfell volcano and a charming town.", "recommended": false },
  { "name": "Deildartunguhver", "region": "West Iceland", "lat": 64.6633, "lng": -21.4117, "type": "Hot spring", "desc": "Europe's most powerful hot spring by flow rate, steaming beside the road in Reykholtsdalur.", "recommended": false },
  { "name": "Hraunfossar & Barnafoss", "region": "West Iceland", "lat": 64.7022, "lng": -20.9778, "type": "Waterfalls", "desc": "Hraunfossar trickles out of a lava field over a long stretch; Barnafoss thunders through a nearby gorge.", "recommended": false },
  { "name": "Krauma", "region": "West Iceland", "lat": 64.6633, "lng": -21.4117, "type": "Geothermal baths", "desc": "Modern geothermal baths fed directly by Deildartunguhver hot spring water.", "recommended": false },
  { "name": "Borgarnes / Settlement Center", "region": "West Iceland", "lat": 64.5388, "lng": -21.9213, "type": "Town & museum", "desc": "A handy stopover town with the Settlement Center museum on Iceland's saga history.", "recommended": false },
  { "name": "Vatnshellir Cave", "region": "West Iceland", "lat": 64.7536, "lng": -23.8233, "type": "Lava tube", "desc": "A guided 35-minute descent into an 8,000-year-old lava tube in Snæfellsjökull National Park.", "recommended": false },
  { "name": "Djúpalónssandur", "region": "West Iceland", "lat": 64.7517, "lng": -23.8950, "type": "Beach", "desc": "A black pebble beach on Snæfellsnes with rusted shipwreck remains and lifting stones used by old fishermen.", "recommended": false },
  { "name": "Ísafjörður", "region": "Westfjords", "lat": 66.0750, "lng": -23.1339, "type": "Town", "desc": "The main town of the Westfjords, set under steep mountains with old wooden houses and a small museum.", "recommended": false },
  { "name": "Hornstrandir", "region": "Westfjords", "lat": 66.4167, "lng": -22.5000, "type": "Nature reserve", "desc": "A remote, uninhabited reserve in the far north of the Westfjords, reached by boat. Hiking and arctic foxes.", "recommended": false },
  { "name": "Museum of Icelandic Sorcery & Witchcraft", "region": "Westfjords", "lat": 65.7050, "lng": -21.6889, "type": "Museum", "desc": "A quirky museum in Hólmavík on 17th-century Icelandic magic, including the famous necropants exhibit.", "recommended": false },
  { "name": "Goðafoss", "region": "North Iceland", "lat": 65.6833, "lng": -17.5500, "type": "Waterfall", "desc": "The 'Waterfall of the Gods,' a wide horseshoe-shaped falls on the Skjálfandafljót river.", "recommended": false },
  { "name": "Aldeyjarfoss", "region": "North Iceland", "lat": 65.3667, "lng": -17.3375, "type": "Waterfall", "desc": "A striking waterfall framed by tall basalt columns, accessed by a rough gravel road.", "recommended": false },
  { "name": "Hofsós", "region": "North Iceland", "lat": 65.8939, "lng": -19.4292, "type": "Village & pool", "desc": "A historic village on Skagafjörður famous for its infinity-edge swimming pool with fjord views.", "recommended": false },
  { "name": "Tröllaskagi peninsula", "region": "North Iceland", "lat": 65.9000, "lng": -18.7500, "type": "Scenic drive", "desc": "A mountainous peninsula between Skagafjörður and Eyjafjörður with scenic fjords, tunnels and ski areas.", "recommended": false },
  { "name": "Kolugljúfur", "region": "North Iceland", "lat": 65.3781, "lng": -20.5042, "type": "Canyon & waterfall", "desc": "A dramatic canyon with a series of waterfalls, a short detour from the Ring Road in Víðidalur.", "recommended": false },
  { "name": "Hengifoss & Litlanesfoss", "region": "East Iceland", "lat": 65.0833, "lng": -14.8833, "type": "Waterfalls", "desc": "A tall waterfall with red clay stripes; the trail also passes Litlanesfoss framed by basalt columns.", "recommended": false },
  { "name": "Djúpivogur", "region": "East Iceland", "lat": 64.6553, "lng": -14.2864, "type": "Harbor village", "desc": "A quiet East Fjords village with the Eggin í Gleðivík egg-sculpture promenade by the harbor.", "recommended": false },
  { "name": "Petra's Stone Collection", "region": "East Iceland", "lat": 64.8378, "lng": -13.8731, "type": "Museum", "desc": "A famous garden and museum of Icelandic minerals in Stöðvarfjörður, collected over a lifetime.", "recommended": false },
  { "name": "Landmannalaugar", "region": "Highlands", "lat": 63.9908, "lng": -19.0608, "type": "Rhyolite mountains", "desc": "Multicolored rhyolite mountains, hot springs and the start of the Laugavegur trek. Highland roads only.", "recommended": false },
  { "name": "Þórsmörk", "region": "Highlands", "lat": 63.6800, "lng": -19.5006, "type": "Valley & hikes", "desc": "A green valley between three glaciers, reached by river-crossing 4x4 or guided bus; great hiking base.", "recommended": false },
  { "name": "Askja", "region": "Highlands", "lat": 65.0322, "lng": -16.7522, "type": "Volcanic caldera", "desc": "A vast caldera in the central Highlands with the milky-blue Víti crater lake.", "recommended": false },
  { "name": "Kerlingarfjöll", "region": "Highlands", "lat": 64.6500, "lng": -19.3000, "type": "Geothermal mountains", "desc": "Colorful rhyolite mountains and steaming valleys at Hveradalir, with a lodge and good hiking.", "recommended": false },
  { "name": "Hveravellir", "region": "Highlands", "lat": 64.8650, "lng": -19.5594, "type": "Geothermal area", "desc": "A geothermal oasis midway along the Kjölur Highland route with a small natural bathing pool.", "recommended": false }
];
