"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Lang = "en" | "de"

/* ─── Translation strings ─── */
const T = {
  en: {
    hero_subtitle: "Sri Lanka's Ancient Sacred Capital",
    badge_province: "North Central Province",
    badge_sacred: "Sacred City",
    badge_founded: "Founded 4th Century BC",

    nav_intro: "Introduction",
    nav_facts: "Quick Facts",
    nav_transport: "How to Get There",
    nav_sites: "Sacred Sites",
    nav_itinerary: "Sample Itinerary",
    nav_arch: "Archaeological Wonders",
    nav_guide: "Visiting Guide",

    intro_heading: "Welcome to Anuradhapura: Cradle of Buddhism",
    intro_p1: "Step back 2,300 years into Sri Lanka's glorious past at Anuradhapura, the island's first capital and one of the oldest continuously inhabited cities in the world. This UNESCO World Heritage site is not just an archaeological wonder — it's the sacred heart of Sri Lankan Buddhism, home to the world's oldest recorded tree and some of the most magnificent ancient monuments in Asia.",
    intro_p2: "From towering dagobas (stupas) that rival the pyramids in age and grandeur to the sacred Sri Maha Bodhi tree grown from a cutting of the very tree under which Buddha attained enlightenment, Anuradhapura offers a profound journey through both spiritual and temporal history that continues to inspire pilgrims and visitors from around the world.",

    qf_heading: "Quick Anuradhapura Facts",
    qf_founded_label: "Founded:",
    qf_founded_val: "4th Century BC",
    qf_capital_label: "Capital Period:",
    qf_capital_val: "1,400 years (380 BC – 1017 AD)",
    qf_bodhi_label: "Sacred Bodhi Tree:",
    qf_bodhi_val: "2,300+ years old",
    qf_area_label: "Area:",
    qf_area_val: "40 square kilometers",
    qf_unesco_label: "UNESCO Status:",
    qf_unesco_val: "World Heritage (1982)",
    qf_duration_label: "Visit Duration:",
    qf_duration_val: "Full day (8+ hours)",
    fact_irrigation_title: "Irrigation Marvels of the Ancient World",
    fact_irrigation_body: "Anuradhapura's ancient engineers built massive reservoirs (tanks) like Nuwara Wewa and Tissa Wewa, some over 2,000 years old and still functioning today. These marvels turned the dry zone into a lush, thriving kingdom — an engineering legacy admired worldwide.",
    fact_duration_title: "Ideal Duration",
    fact_duration_body: "1–2 full days to explore the sacred sites, ancient tanks, and local culture at a relaxed pace.",
    fact_besttime_title: "Best Time to Visit",
    fact_besttime_body: "May to September (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.",

    transport_heading: "How to Get to Anuradhapura",
    transport_car_heading: "By Private Car/Taxi (Recommended)",
    transport_car_distance: "Distance:",
    transport_car_distance_val: "205 km (127 miles) from Colombo",
    transport_car_duration: "Duration:",
    transport_car_duration_val: "4–4.5 hours",
    transport_car_best: "Best option:",
    transport_car_best_val: "Most convenient and flexible",
    transport_rec_label: "🌟 Recommended:",
    transport_rec_body: "Ceylanka Tours offers reliable, comfortable vehicles with experienced drivers who know the best routes to Anuradhapura. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.",
    transport_contact: "Contact:",
    transport_airport: "Airport Transfer Services",
    transport_airport_suffix: "– Click for details & booking",
    transport_bus_heading: "By Bus",
    transport_bus_route: "Route:",
    transport_bus_route_val: "Colombo Fort → Kurunegala → Anuradhapura",
    transport_bus_duration: "Duration:",
    transport_bus_duration_val: "5–6 hours",
    transport_bus_cost: "Cost:",
    transport_bus_cost_val: "$3–5 USD (very budget-friendly)",
    transport_bus_freq: "Frequency:",
    transport_bus_freq_val: "Every 30 minutes from Colombo",
    transport_train_heading: "By Train",
    transport_train_route: "Route:",
    transport_train_route_val: "Colombo Fort → Anuradhapura",
    transport_train_duration: "Duration:",
    transport_train_duration_val: "5.5–6 hours",
    transport_train_cost: "Cost:",
    transport_train_cost_val: "$2–8 USD (depending on class)",
    transport_train_scenic: "Scenic journey:",
    transport_train_scenic_val: "Through countryside",
    transport_tips_heading: "💡 Travel Tips",
    transport_tip1: "Start early morning to avoid traffic and heat",
    transport_tip2: "Carry water and snacks for the journey",
    transport_tip3: "Book accommodations in advance during peak season",
    transport_tip4: "Consider staying overnight to explore all sites properly",

    sacred_heading: "Sacred Sites & Ancient Monuments",
    sacred_subheading: 'Local people make pilgrimage to Anuradhapura as "Atamasthana"',

    site1_title: "1. Sri Maha Bodhi Tree",
    site1_desc: "The world's oldest recorded tree – 2,300+ years old",
    site1_p1: "This sacred fig tree is the most revered site in Anuradhapura and one of the holiest places in the Buddhist world. Grown from a cutting of the original Bodhi tree in India under which Buddha attained enlightenment, it was brought to Sri Lanka in 288 BC by Sanghamitta Theri, the daughter of Emperor Ashoka. The tree has survived storms, invasions, and centuries of change, remaining a living symbol of peace and resilience.",
    site1_p2: "Pilgrims from all over the world come to offer flowers, light oil lamps, and walk quietly around the golden railings. The air is filled with the scent of jasmine and the gentle sound of prayers. Visiting at dawn or dusk is especially magical, as the tree glows in the soft light and the atmosphere is calm and spiritual.",
    site1_tip_title: "Visitor Tip",
    site1_tip_body: "Dress modestly, remove your shoes, and bring a small flower offering. Take a moment to sit quietly and reflect under the ancient branches.",
    site1_h1: "World's oldest recorded tree with documented history",
    site1_h2: "Direct descendant of Buddha's enlightenment tree",
    site1_h3: "Continuous worship for over 2,300 years",
    site1_h4: "Protected by golden railings and platforms",

    site2_title: "2. Ruwanwelisaya Dagoba",
    site2_desc: "The Great Stupa – architectural marvel of ancient world",
    site2_p1: "Built by King Dutugemunu in 140 BC, this magnificent white dagoba stands 103 meters tall and is considered one of the finest examples of ancient Sinhalese architecture. The structure contains sacred relics of Buddha and remains an active pilgrimage site. The Ruwanwelisaya is surrounded by a wall of 344 stone elephants, each one unique, symbolizing strength and protection.",
    site2_p2: "The stupa is especially beautiful at sunrise and sunset, when its white dome glows against the sky and the chanting of monks fills the air. During full moon (Poya) days, thousands of devotees gather here, creating a sea of white-clad pilgrims and colorful lotus flowers. Restoration efforts have kept the dagoba shining for generations to come.",
    site2_did_title: "Did You Know?",
    site2_did_body: "The Ruwanwelisaya is believed to enshrine the largest collection of Buddha relics in Sri Lanka. Walk clockwise around the stupa for good luck and spiritual merit.",
    site2_h1: "103 meters tall with 292-meter circumference",
    site2_h2: "Contains sacred relics of Lord Buddha",
    site2_h3: "Surrounded by elephant wall with 344 elephants",
    site2_h4: "Restored to original glory in modern times",

    site3_title: "3. Jetavanaramaya Dagoba",
    site3_desc: "Once the world's third tallest structure",
    site3_p1: "Built in the 3rd century AD, Jetavanaramaya was once the world's third tallest structure after the pyramids of Giza. At its peak, it soared to 122 meters (400 feet) and was the tallest stupa in the ancient world. The massive brick monument is a testament to the engineering genius and spiritual devotion of ancient Sri Lanka.",
    site3_p2: "Today, Jetavanaramaya is a place of quiet reflection, surrounded by grassy courtyards and ancient ruins. Archaeological excavations continue to reveal new secrets about the monastery complex that once housed thousands of monks. The stupa's reddish bricks glow warmly in the afternoon sun, and the site is less crowded than other main attractions, making it perfect for peaceful exploration.",
    site3_tip_title: "Travel Tip",
    site3_tip_body: "Bring water and a hat, as the area can be hot and exposed. Look for ancient inscriptions and carvings on the surrounding ruins.",
    site3_h1: "Originally 122 meters tall (400 feet)",
    site3_h2: "Built with over 93 million bricks",
    site3_h3: "Contains Buddha's sash relic",
    site3_h4: "Ongoing archaeological excavations",

    site4_title: "4. Thuparamaya Dagoba",
    site4_desc: "The first dagoba built in Sri Lanka – oldest Buddhist monument",
    site4_p1: "Thuparamaya holds the distinction of being the very first dagoba built in Sri Lanka, constructed in the 3rd century BCE by King Devanampiya Tissa. This sacred monument houses the right collarbone relic of Lord Buddha, making it one of the most important pilgrimage sites in the Buddhist world. The original bell-shaped design has influenced Sri Lankan stupa architecture for over 2,000 years.",
    site4_p2: "What makes Thuparamaya unique is its architectural evolution – it has been restored multiple times throughout history, each restoration reflecting the artistic styles of different periods. The dagoba is surrounded by stone pillars that once supported a wooden roof, a distinctive feature that sets it apart from other stupas.",
    site4_h1: "First dagoba built in Sri Lanka (3rd century BCE)",
    site4_h2: "Contains Buddha's right collarbone relic",
    site4_h3: "Original bell-shaped architectural prototype",
    site4_h4: "Unique stone pillar arrangement around the stupa",
    site4_h5: "Multiple historical restorations spanning centuries",

    site5_title: "5. Lovamahapaya (Brazen Palace)",
    site5_desc: "Ancient nine-story monastery – marvel of ancient architecture",
    site5_p1: `Lovamahapaya, also known as the "Brazen Palace," was once a magnificent nine-story monastery built by King Dutugemunu in the 2nd century BCE. This architectural marvel housed 1,000 monks and was entirely covered with copper tiles, giving it the name "Brazen Palace." Today, only the stone pillars remain, but they still convey the grandeur of this ancient structure.`,
    site5_p2: "The building was constructed using advanced engineering techniques of the time, with 1,600 stone pillars supporting multiple floors. Each floor had specific purposes — from dining halls and meditation chambers to libraries and living quarters. The palace was destroyed and rebuilt several times throughout history, with the current stone pillars representing the foundation of various reconstruction attempts.",
    site5_h1: "Originally nine stories tall with 1,600 stone pillars",
    site5_h2: "Housed 1,000 monks in its heyday",
    site5_h3: 'Covered with copper tiles (hence "Brazen Palace")',
    site5_h4: "Advanced ancient engineering and architectural design",
    site5_h5: "Multiple reconstruction attempts throughout history",

    site6_title: "6. Abhayagiri Dagaba",
    site6_desc: "Ancient monastery complex and center of Mahayana Buddhism",
    site6_p1: "Abhayagiri Dagaba was the centerpiece of one of the most important monastic complexes in ancient Sri Lanka, built in the 1st century BCE by King Valagamba. This massive stupa, standing 75 meters tall, was once part of a monastery that housed over 5,000 monks and served as a major center of Mahayana Buddhist learning. The complex was so large it covered an area of 200 hectares.",
    site6_p2: "The monastery was famous for its international character, attracting scholars from China, Korea, and other Buddhist countries. It had advanced facilities including hospitals, libraries, and refectories. The shape of this stupa is slightly different from Jetavanaramaya, featuring a more elegant bell-shaped dome that has influenced Buddhist architecture across Asia.",
    site6_link: "Read more about Shapes of Stupa",
    site6_h1: "75 meters tall with 200-hectare monastery complex",
    site6_h2: "Housed over 5,000 monks at its peak",
    site6_h3: "International center of Mahayana Buddhist learning",
    site6_h4: "Advanced facilities: hospitals, libraries, refectories",
    site6_h5: "Unique architectural style influencing Asian Buddhism",

    site7_title: "7. Mirisavetiya Stupa",
    site7_desc: "A monument of royal regret and Buddhist devotion",
    site7_p1: "Mirisavetiya Stupa has one of the most poignant origin stories in Sri Lankan Buddhist history. Built by King Dutugemunu in the 2nd century BCE, this stupa was constructed as an act of atonement. According to legend, the king once forgot to share his meal with the sangha (monks) while eating chili curry, a breach of Buddhist protocol that deeply troubled his conscience.",
    site7_p2: `To atone for this oversight, the king built this beautiful stupa on the exact spot where he had his meal. The name "Mirisavetiya" literally means "the place where chili was consumed." Standing 60 meters tall, it enshrines sacred relics and represents the Buddhist principle of mindfulness in daily actions. The surrounding area contains ruins of ancient buildings and beautiful stone carvings.`,
    site7_h1: "Built as royal atonement for forgotten Buddhist protocol",
    site7_h2: "60 meters tall with beautiful proportions",
    site7_h3: "Contains sacred Buddhist relics",
    site7_h4: "Surrounded by ancient ruins and stone carvings",
    site7_h5: "Symbol of mindfulness in Buddhist practice",

    site8_title: "8. Lankarama Dagaba",
    site8_desc: "An intimate forest monastery with unique architectural features",
    site8_p1: "Lankarama Dagaba, built in the 1st century CE by King Valagamba, represents a unique architectural style among Anuradhapura's great stupas. Unlike the massive monuments elsewhere in the city, Lankarama was designed as an intimate forest monastery with distinctive circular stone pillars surrounding the stupa. This 30-meter tall structure showcases the Vajrayana architectural influence that was rare in Sri Lankan Buddhist construction.",
    site8_p2: "The most striking feature of Lankarama is its unique design with stone pillars arranged in concentric circles around the stupa base. These pillars once supported wooden structures that served as meditation halls and living quarters for forest-dwelling monks. The peaceful forest setting and smaller scale create an atmosphere perfect for contemplation and meditation, making it a favorite among visitors seeking tranquility.",
    site8_h1: "Unique circular stone pillar arrangement",
    site8_h2: "Intimate 30-meter forest monastery design",
    site8_h3: "Vajrayana architectural influence",
    site8_h4: "Peaceful forest setting for meditation",
    site8_h5: "Built by King Valagamba in 1st century CE",

    more_heading: "Additional Sacred Sites",

    avukana_title: "Avukana Buddha Statue",
    avukana_desc: "A stunning rock-cut statue of the Buddha in a serene meditation pose",
    avukana_p1: "The Avukana Buddha Statue is a magnificent rock-cut statue located about 8 kilometers from Anuradhapura. Carved out of a large granite rock face in the 5th century AD, this statue stands approximately 12 meters tall and depicts the Buddha in a standing posture with his right hand raised in the gesture of reassurance (abhaya mudra). The intricate details of the robe and facial features showcase the exceptional craftsmanship of ancient Sri Lankan artisans.",
    avukana_link: "If you want to know more about the gesture",
    avukana_p2: "The statue is set against a natural rock backdrop, creating a striking contrast that enhances its visual impact. The serene expression on the Buddha's face and the intricate details of the carving invite contemplation and reflection.",
    avukana_h1: "Carved from a single granite rock face",
    avukana_h2: "Stands approximately 12 meters tall",
    avukana_h3: "Depicts Buddha in abhaya mudra (gesture of reassurance)",
    avukana_h4: "Exceptional craftsmanship with intricate details",
    avukana_h5: "Set against a natural rock backdrop for visual impact",

    sandah_title: "Sandahirusaya",
    sandah_desc: "A smaller but equally sacred stupa with unique historical significance",
    sandah_p1: "If you visit Anuradhapura, you might have seen this stupa — it's similar to the Ruwanwelisaya but not as large. Sandahirusaya, also known as \"Sandahiru Seya,\" is a beautiful white dagoba that showcases the classic bell-shaped architectural style of ancient Sri Lankan stupas. This is actually a modern construction, built in recent times following traditional Buddhist architectural principles and designs.",
    sandah_p2: "What makes Sandahirusaya unique is its role as a contemporary Buddhist monument that maintains traditional design elements. While it may appear ancient due to its classical style, it represents modern Sri Lankan Buddhist devotion and craftsmanship. The stupa is surrounded by well-maintained gardens and provides excellent opportunities for meditation and photography, especially during sunrise and sunset.",
    sandah_h1: "Modern construction following traditional Buddhist architecture",
    sandah_h2: "Classic bell-shaped design with white limestone coating",
    sandah_h3: "Contemporary Buddhist devotion and craftsmanship",
    sandah_h4: "Peaceful setting ideal for meditation and reflection",
    sandah_h5: "Less crowded alternative to ancient stupas",

    cta_heading: "Want to See All These Sacred Places Hassle-Free?",
    cta_sub: "Experience Anuradhapura with professional guides and comfortable vehicles",
    cta_body: "Travel with Ceylanka Tours for a memorable journey through Sri Lanka's ancient heritage. Expert local guides, air-conditioned vehicles, and personalized service ensure a comfortable and enriching experience.",
    cta_book: "📅 Book Your Tour Now",
    cta_call: "📞 Call: +94 70 764 6765",
    cta_guide_title: "✨ Professional Guides",
    cta_guide_body: "Expert local guides with deep knowledge of history and culture",
    cta_car_title: "🚗 Comfortable Vehicles",
    cta_car_body: "Air-conditioned cars and vans for a relaxing journey",
    cta_hassle_title: "🎯 Hassle-Free Experience",
    cta_hassle_body: "We handle all the details so you can enjoy the journey",
    cta_tours_label: "Explore our curated tour packages:",
    cta_tours_link: "View All Available Tours →",

    arch_heading: "Nearby Archaeological Wonders",
    arch_subheading: "Discover more ancient treasures within the sacred city of Anuradhapura",

    isuru_title: "Isurumuniya Temple",
    isuru_body: 'Famous for the "Isurumuniya Lovers" carving and beautiful rock-cut architecture from the 3rd century BC.',
    isuru_location: "Within Anuradhapura",

    ranmusu_title: "Ranmusu Uyana with Universal Stargate",
    ranmusu_body: "Explore the mysterious Ranmusu Uyana, an ancient site with unique stone carvings and a universal stargate.",
    ranmusu_location: "Within Anuradhapura",

    mihin_title: "Mihinthalaya",
    mihin_body: "Sacred site where Buddhism was first introduced to Sri Lanka. A pilgrimage mountain with stunning views.",
    mihin_location: "13 km from Anuradhapura",

    kuttam_title: "Twin Ponds (Kuttam Pokuna)",
    kuttam_body: "Sophisticated bathing pools for monks, showcasing advanced hydraulic engineering from ancient times.",
    kuttam_location: "Within Anuradhapura",

    see_more: "See More →",
    read_more: "Read more →",

    daytrip_heading: "Suggested Day Trip Combinations",
    daytrip1_title: "Sacred Sites Explorer",
    daytrip1_body: "Anuradhapura (Atamasthana) → Mihinthalaya → Ritigala Forest Monastery → Return",
    daytrip1_time: "Full day trip (8-10 hours)",
    daytrip2_title: "Ancient Cities Circuit",
    daytrip2_body: "Anuradhapura → Polonnaruwa → Sigiriya → Return",
    daytrip2_time: "Full day trip (12-14 hours)",

    guide_heading: "Complete Visiting Guide",
    guide_plan_title: "Planning Your Visit",
    guide_fees_heading: "Entry Fees & Tickets",
    guide_fee1: "• Foreign adults: $25 USD",
    guide_fee2: "• Foreign children: $12.50 USD",
    guide_fee3: "• SAARC nationals: Discounted rates",
    guide_fee4: "• Valid for same day only",
    guide_besttime_heading: "Best Time to Visit",
    guide_bt1: "• Early morning (6:00–9:00 AM)",
    guide_bt2: "• Late afternoon (4:00–6:00 PM)",
    guide_bt3: "• Avoid midday heat (11 AM–3 PM)",
    guide_bt4: "• Dry season: May to September",
    guide_transport_heading: "Transportation",
    guide_tr1: "• Bicycle rental (most popular)",
    guide_tr2: "• Three-wheeler (tuk-tuk)",
    guide_tr3: "• Private car with driver",
    guide_tr4: "• Organized tour groups",
    guide_tips_title: "Essential Tips",
    guide_bring_heading: "What to Bring",
    guide_b1: "• Comfortable walking shoes",
    guide_b2: "• Sun protection (hat, sunscreen)",
    guide_b3: "• Water bottles (2–3 liters)",
    guide_b4: "• Modest clothing for temples",
    guide_b5: "• Camera with extra batteries",
    guide_etiquette_heading: "Cultural Etiquette",
    guide_e1: "• Remove shoes at sacred sites",
    guide_e2: "• Cover shoulders and knees",
    guide_e3: "• Don't point feet toward Buddha statues",
    guide_e4: "• Maintain respectful silence",
    guide_e5: "• Photography rules vary by site",
    guide_health_heading: "Health & Safety",
    guide_hs1: "• Stay hydrated in hot weather",
    guide_hs2: "• Watch for uneven ancient surfaces",
    guide_hs3: "• Beware of monkeys near food",
    guide_hs4: "• Use insect repellent",

    accom_heading: "Where to Stay in Anuradhapura",
    accom_budget_title: "Budget Options",
    accom_budget_price: "$15–40 per night",
    accom_budget1: "• Guesthouses near sacred area",
    accom_budget2: "• Backpacker hostels in town",
    accom_budget3: "• Government rest houses",
    accom_budget4: "• Family-run accommodations",
    accom_budget5: "• Basic but clean facilities",
    accom_mid_title: "Mid-Range Hotels",
    accom_mid_price: "$40–100 per night",
    accom_mid1: "• Hotels with air conditioning",
    accom_mid2: "• Swimming pools and restaurants",
    accom_mid3: "• Tour arrangement services",
    accom_mid4: "• Bicycle rental facilities",
    accom_mid5: "• Good location for sightseeing",
    accom_lux_title: "Luxury Resorts",
    accom_lux_price: "$100+ per night",
    accom_lux1: "• Heritage hotels with character",
    accom_lux2: "• Spa and wellness facilities",
    accom_lux3: "• Fine dining restaurants",
    accom_lux4: "• Professional guide services",
    accom_lux5: "• Cultural programs and activities",

    final_title: "Your Sacred Journey Through Anuradhapura",
    final_p1: "Anuradhapura is more than an archaeological site — it's a living testament to 2,300 years of continuous Buddhist civilization. As you cycle through this ancient city, you're following paths walked by kings, monks, and pilgrims for over two millennia. Each dagoba, each carved stone, and each sacred tree tells a story of faith, artistry, and human achievement.",
    final_p2: "Take time to sit quietly at the sacred Bodhi tree, marvel at the engineering genius of the ancient dagobas, and appreciate the spiritual atmosphere that has made this city a pilgrimage destination for centuries. Remember that you're visiting not just historical monuments, but active places of worship that continue to inspire devotion and wonder.",
    final_p3: "May your journey through this sacred city bring you peace, wisdom, and a deeper appreciation for Sri Lanka's incredible spiritual heritage! 🙏🌳✨",
  },
  de: {
    hero_subtitle: "Das antike heilige Zentrum Sri Lankas",
    badge_province: "Nordzentroprovinz",
    badge_sacred: "Heilige Stadt",
    badge_founded: "Gegründet im 4. Jh. v. Chr.",

    nav_intro: "Einführung",
    nav_facts: "Schnelle Fakten",
    nav_transport: "Anreise",
    nav_sites: "Heilige Stätten",
    nav_itinerary: "Reiseplan",
    nav_arch: "Archäologische Wunder",
    nav_guide: "Besucherführer",

    intro_heading: "Willkommen in Anuradhapura: Wiege des Buddhismus",
    intro_p1: "Reisen Sie 2.300 Jahre in Sri Lankas glorreiche Vergangenheit nach Anuradhapura, der ersten Hauptstadt der Insel und einer der ältesten dauerhaft bewohnten Städte der Welt. Dieses UNESCO-Weltkulturerbe ist nicht nur ein archäologisches Wunder — es ist das heilige Herz des sri-lankischen Buddhismus, Heimat des ältesten dokumentierten Baumes der Welt und einiger der prächtigsten antiken Denkmäler in Asien.",
    intro_p2: "Von riesigen Dagobas (Stupas), die mit den ägyptischen Pyramiden an Alter und Größe mithalten können, bis hin zum heiligen Sri Maha Bodhi-Baum — gezogen aus einem Ableger des Baumes, unter dem Buddha die Erleuchtung erlangte — bietet Anuradhapura eine tiefe Reise durch spirituelle und weltliche Geschichte, die Pilger und Besucher aus aller Welt weiterhin inspiriert.",

    qf_heading: "Anuradhapura auf einen Blick",
    qf_founded_label: "Gegründet:",
    qf_founded_val: "4. Jahrhundert v. Chr.",
    qf_capital_label: "Hauptstadtzeit:",
    qf_capital_val: "1.400 Jahre (380 v. Chr. – 1017 n. Chr.)",
    qf_bodhi_label: "Heiliger Bodhi-Baum:",
    qf_bodhi_val: "Über 2.300 Jahre alt",
    qf_area_label: "Fläche:",
    qf_area_val: "40 Quadratkilometer",
    qf_unesco_label: "UNESCO-Status:",
    qf_unesco_val: "Welterbe (1982)",
    qf_duration_label: "Besuchsdauer:",
    qf_duration_val: "Ganztägig (8+ Stunden)",
    fact_irrigation_title: "Bewässerungswunder der Antike",
    fact_irrigation_body: "Die antiken Ingenieure Anuradhapuras bauten riesige Stauseen wie Nuwara Wewa und Tissa Wewa, einige über 2.000 Jahre alt und bis heute in Betrieb. Diese Meisterwerke verwandelten die Trockenzone in ein üppiges, blühendes Königreich — ein weltweit bewundertes ingenieurtechnisches Erbe.",
    fact_duration_title: "Ideale Aufenthaltsdauer",
    fact_duration_body: "1–2 volle Tage, um die heiligen Stätten, antiken Stauseen und die lokale Kultur in einem entspannten Tempo zu erkunden.",
    fact_besttime_title: "Beste Reisezeit",
    fact_besttime_body: "Mai bis September (Trockenzeit) für angenehmes Wetter und klaren Himmel. Frühe Morgenstunden und späte Nachmittage sind am besten für Besichtigungen geeignet.",

    transport_heading: "So kommen Sie nach Anuradhapura",
    transport_car_heading: "Mit Privatwagen/Taxi (Empfohlen)",
    transport_car_distance: "Entfernung:",
    transport_car_distance_val: "205 km von Colombo",
    transport_car_duration: "Dauer:",
    transport_car_duration_val: "4–4,5 Stunden",
    transport_car_best: "Beste Option:",
    transport_car_best_val: "Bequemste und flexibelste Reisemöglichkeit",
    transport_rec_label: "🌟 Empfehlung:",
    transport_rec_body: "Ceylanka Tours bietet zuverlässige, komfortable Fahrzeuge mit erfahrenen Fahrern, die die besten Routen nach Anuradhapura kennen. Professioneller Service, faire Preise und hervorragende Ortskenntnisse machen sie zur ersten Wahl für stressfreies Reisen.",
    transport_contact: "Kontakt:",
    transport_airport: "Flughafentransferdienste",
    transport_airport_suffix: "– Hier klicken für Details & Buchung",
    transport_bus_heading: "Mit dem Bus",
    transport_bus_route: "Route:",
    transport_bus_route_val: "Colombo Fort → Kurunegala → Anuradhapura",
    transport_bus_duration: "Dauer:",
    transport_bus_duration_val: "5–6 Stunden",
    transport_bus_cost: "Kosten:",
    transport_bus_cost_val: "3–5 USD (sehr günstig)",
    transport_bus_freq: "Häufigkeit:",
    transport_bus_freq_val: "Alle 30 Minuten ab Colombo",
    transport_train_heading: "Mit dem Zug",
    transport_train_route: "Route:",
    transport_train_route_val: "Colombo Fort → Anuradhapura",
    transport_train_duration: "Dauer:",
    transport_train_duration_val: "5,5–6 Stunden",
    transport_train_cost: "Kosten:",
    transport_train_cost_val: "2–8 USD (je nach Klasse)",
    transport_train_scenic: "Landschaftliche Fahrt:",
    transport_train_scenic_val: "Durch das ländliche Sri Lanka",
    transport_tips_heading: "💡 Reisetipps",
    transport_tip1: "Früh morgens starten, um Verkehr und Hitze zu vermeiden",
    transport_tip2: "Wasser und Snacks für die Reise mitbringen",
    transport_tip3: "Unterkunft in der Hochsaison im Voraus buchen",
    transport_tip4: "Übernachtung in Betracht ziehen, um alle Sehenswürdigkeiten richtig zu erkunden",

    sacred_heading: "Heilige Stätten & Antike Monumente",
    sacred_subheading: 'Die lokale Bevölkerung pilgert nach Anuradhapura als "Atamasthana"',

    site1_title: "1. Sri Maha Bodhi-Baum",
    site1_desc: "Der älteste dokumentierte Baum der Welt – über 2.300 Jahre alt",
    site1_p1: "Dieser heilige Feigenbaum ist die verehrteste Stätte in Anuradhapura und einer der heiligsten Orte der buddhistischen Welt. Aus einem Ableger des ursprünglichen Bodhi-Baums in Indien gezogen, unter dem Buddha die Erleuchtung erlangte, wurde er 288 v. Chr. von Sanghamitta Theri, der Tochter von Kaiser Ashoka, nach Sri Lanka gebracht. Der Baum hat Stürme, Invasionen und Jahrhunderte des Wandels überstanden und bleibt ein lebendiges Symbol des Friedens und der Widerstandskraft.",
    site1_p2: "Pilger aus aller Welt kommen hierher, um Blumen zu opfern, Öllampen anzuzünden und still um die goldenen Geländer zu gehen. Die Luft ist erfüllt vom Duft des Jasmins und dem sanften Klang der Gebete. Ein Besuch in der Morgendämmerung oder Abenddämmerung ist besonders zauberhaft, da der Baum im sanften Licht strahlt und die Atmosphäre ruhig und spirituell ist.",
    site1_tip_title: "Besuchertipp",
    site1_tip_body: "Kleiden Sie sich bescheiden, ziehen Sie die Schuhe aus und bringen Sie eine kleine Blumenopfergabe mit. Nehmen Sie sich einen Moment, um sich still hinzusetzen und unter den alten Ästen nachzudenken.",
    site1_h1: "Ältester dokumentierter Baum mit belegter Geschichte",
    site1_h2: "Direkter Nachkomme von Buddhas Erleuchtungsbaum",
    site1_h3: "Ununterbrochene Verehrung seit über 2.300 Jahren",
    site1_h4: "Geschützt von goldenen Geländern und Plattformen",

    site2_title: "2. Ruwanwelisaya Dagoba",
    site2_desc: "Die Große Stupa – architektonisches Wunderwerk der Antike",
    site2_p1: "Von König Dutugemunu im Jahr 140 v. Chr. erbaut, steht diese prächtige weiße Dagoba 103 Meter hoch und gilt als eines der schönsten Beispiele antiker singhalesischer Architektur. Das Bauwerk beherbergt heilige Reliquien Buddhas und ist ein aktiver Pilgerort. Die Ruwanwelisaya ist von einer Mauer mit 344 Steinelefanten umgeben, jeder einzigartig, als Symbol von Stärke und Schutz.",
    site2_p2: "Die Stupa ist besonders schön bei Sonnenaufgang und -untergang, wenn ihre weiße Kuppel gegen den Himmel leuchtet und der Gesang der Mönche die Luft erfüllt. An Vollmond-(Poya-)Tagen versammeln sich hier Tausende von Gläubigen, die ein Meer aus weißgekleideten Pilgern und bunten Lotusblumen bilden. Restaurierungsmaßnahmen haben dafür gesorgt, dass die Dagoba für kommende Generationen in ihrem Glanz erhalten bleibt.",
    site2_did_title: "Wussten Sie?",
    site2_did_body: "Es wird geglaubt, dass die Ruwanwelisaya die größte Sammlung von Buddha-Reliquien in Sri Lanka beherbergt. Gehen Sie im Uhrzeigersinn um die Stupa für Glück und spirituelles Verdienst.",
    site2_h1: "103 Meter hoch mit 292 Meter Umfang",
    site2_h2: "Enthält heilige Reliquien des Herrn Buddha",
    site2_h3: "Umgeben von einer Elefantenmauer mit 344 Elefanten",
    site2_h4: "In moderner Zeit zu ursprünglichem Glanz restauriert",

    site3_title: "3. Jetavanaramaya Dagoba",
    site3_desc: "Einst das drittgrößte Bauwerk der Welt",
    site3_p1: "Erbaut im 3. Jahrhundert n. Chr. war die Jetavanaramaya einst das drittgrößte Bauwerk der Welt nach den Pyramiden von Gizeh. Auf ihrem Höhepunkt ragte sie 122 Meter (400 Fuß) in die Höhe und war die höchste Stupa der antiken Welt. Das riesige Backsteindenkmal ist ein Zeugnis für den ingenieurtechnischen Genius und die spirituelle Hingabe des antiken Sri Lanka.",
    site3_p2: "Heute ist die Jetavanaramaya ein Ort stiller Besinnung, umgeben von grasbewachsenen Innenhöfen und antiken Ruinen. Archäologische Ausgrabungen enthüllen weiterhin neue Geheimnisse des Klosterkomplexes, der einst Tausende von Mönchen beherbergte. Die rötlichen Ziegel der Stupa erstrahlen warm in der Nachmittagssonne, und der Ort ist weniger überfüllt als andere Hauptattraktionen, was ihn perfekt für ruhige Erkundungen macht.",
    site3_tip_title: "Reisetipp",
    site3_tip_body: "Bringen Sie Wasser und einen Hut mit, da der Bereich heiß und ungeschützt sein kann. Achten Sie auf antike Inschriften und Schnitzereien an den umliegenden Ruinen.",
    site3_h1: "Ursprünglich 122 Meter hoch (400 Fuß)",
    site3_h2: "Aus über 93 Millionen Ziegeln erbaut",
    site3_h3: "Enthält die Schärpenreliquie Buddhas",
    site3_h4: "Laufende archäologische Ausgrabungen",

    site4_title: "4. Thuparamaya Dagoba",
    site4_desc: "Die erste in Sri Lanka erbaute Dagoba – ältestes buddhistisches Denkmal",
    site4_p1: "Die Thuparamaya hat die Besonderheit, die allererste in Sri Lanka errichtete Dagoba zu sein, erbaut im 3. Jahrhundert v. Chr. von König Devanampiya Tissa. Dieses heilige Denkmal beherbergt die rechte Schlüsselbeins-Reliquie des Herrn Buddha und macht es zu einem der wichtigsten Pilgerorte der buddhistischen Welt. Das ursprüngliche glockenförmige Design hat die Stupa-Architektur Sri Lankas über 2.000 Jahre lang beeinflusst.",
    site4_p2: "Was die Thuparamaya einzigartig macht, ist ihre architektonische Entwicklung — sie wurde im Laufe der Geschichte mehrmals restauriert, wobei jede Restaurierung die künstlerischen Stile verschiedener Epochen widerspiegelt. Die Dagoba ist von Steinpfeilern umgeben, die einst ein Holzdach trugen — ein charakteristisches Merkmal, das sie von anderen Stupas unterscheidet.",
    site4_h1: "Erste in Sri Lanka erbaute Dagoba (3. Jh. v. Chr.)",
    site4_h2: "Enthält Buddhas rechte Schlüsselbeinsreliquie",
    site4_h3: "Ursprünglicher glockenförmiger Architekturprototyp",
    site4_h4: "Einzigartige Steinpfeileranordnung um die Stupa",
    site4_h5: "Jahrhundertelange Restaurierungsarbeiten",

    site5_title: "5. Lovamahapaya (Kupferpalast)",
    site5_desc: "Antikes neunstöckiges Kloster – Wunderwerk der antiken Architektur",
    site5_p1: 'Die Lovamahapaya, auch bekannt als der "Kupferpalast", war einst ein prächtiges neunstöckiges Kloster, erbaut von König Dutugemunu im 2. Jahrhundert v. Chr. Dieses architektonische Wunderwerk beherbergte 1.000 Mönche und war vollständig mit Kupferziegeln bedeckt, was ihm den Namen "Kupferpalast" einbrachte. Heute stehen nur noch die Steinpfeiler, aber sie vermitteln immer noch die Größe dieses antiken Bauwerks.',
    site5_p2: "Das Gebäude wurde mit fortschrittlichen Ingenieurtechniken seiner Zeit errichtet, mit 1.600 Steinpfeilern, die mehrere Stockwerke trugen. Jedes Stockwerk hatte spezifische Zwecke — von Speisesälen und Meditationsräumen bis hin zu Bibliotheken und Wohnquartieren. Der Palast wurde im Laufe der Geschichte mehrmals zerstört und wiederaufgebaut.",
    site5_h1: "Ursprünglich neun Stockwerke hoch mit 1.600 Steinpfeilern",
    site5_h2: "Beherbergte 1.000 Mönche auf dem Höhepunkt seiner Zeit",
    site5_h3: 'Mit Kupferziegeln bedeckt (daher "Kupferpalast")',
    site5_h4: "Fortschrittliches antikes Ingenieurwesen und Architektur",
    site5_h5: "Mehrere Wiederaufbauversuche im Laufe der Geschichte",

    site6_title: "6. Abhayagiri Dagaba",
    site6_desc: "Antiker Klosterkomplex und Zentrum des Mahayana-Buddhismus",
    site6_p1: "Die Abhayagiri Dagaba war das Herzstück eines der bedeutendsten Klosterkomplexe im antiken Sri Lanka, erbaut im 1. Jahrhundert v. Chr. von König Valagamba. Diese massive Stupa, 75 Meter hoch, war einst Teil eines Klosters, das über 5.000 Mönche beherbergte und als bedeutendes Zentrum des Mahayana-buddhistischen Lernens diente. Der Komplex war so groß, dass er eine Fläche von 200 Hektar bedeckte.",
    site6_p2: "Das Kloster war für seinen internationalen Charakter bekannt und zog Gelehrte aus China, Korea und anderen buddhistischen Ländern an. Es verfügte über fortschrittliche Einrichtungen, darunter Krankenhäuser, Bibliotheken und Speisesäle. Die Form dieser Stupa unterscheidet sich leicht von der Jetavanaramaya und zeigt eine elegantere glockenförmige Kuppel, die die buddhistische Architektur in ganz Asien beeinflusst hat.",
    site6_link: "Mehr über die Formen von Stupas lesen",
    site6_h1: "75 Meter hoch mit 200-Hektar-Klosterkomplex",
    site6_h2: "Beherbergte über 5.000 Mönche auf dem Höhepunkt",
    site6_h3: "Internationales Zentrum des Mahayana-buddhistischen Lernens",
    site6_h4: "Fortschrittliche Einrichtungen: Krankenhäuser, Bibliotheken, Speisesäle",
    site6_h5: "Einzigartiger Architekturstil prägte den asiatischen Buddhismus",

    site7_title: "7. Mirisavetiya Stupa",
    site7_desc: "Ein Denkmal königlichen Bedauerns und buddhistischer Hingabe",
    site7_p1: "Die Mirisavetiya Stupa hat eine der ergreifendsten Ursprungsgeschichten in der sri-lankischen buddhistischen Geschichte. Von König Dutugemunu im 2. Jahrhundert v. Chr. erbaut, wurde diese Stupa als Buße errichtet. Der Legende nach vergaß der König einmal, seine Mahlzeit mit dem Sangha (den Mönchen) zu teilen, während er Chilicurry aß — ein Verstoß gegen das buddhistische Protokoll, der sein Gewissen tief belastete.",
    site7_p2: 'Um dieses Versehen zu sühnen, ließ der König diese schöne Stupa genau an dem Ort errichten, wo er seine Mahlzeit zu sich genommen hatte. Der Name "Mirisavetiya" bedeutet wörtlich "der Ort, wo Chili gegessen wurde." Mit 60 Metern Höhe beherbergt sie heilige Reliquien und repräsentiert das buddhistische Prinzip der Achtsamkeit im täglichen Leben.',
    site7_h1: "Als königliche Buße für vergessenes buddhistisches Protokoll erbaut",
    site7_h2: "60 Meter hoch mit schönen Proportionen",
    site7_h3: "Enthält heilige buddhistische Reliquien",
    site7_h4: "Umgeben von antiken Ruinen und Steinschnitzereien",
    site7_h5: "Symbol für Achtsamkeit in der buddhistischen Praxis",

    site8_title: "8. Lankarama Dagaba",
    site8_desc: "Ein intimes Waldkloster mit einzigartigen architektonischen Merkmalen",
    site8_p1: "Die Lankarama Dagaba, erbaut im 1. Jahrhundert n. Chr. von König Valagamba, repräsentiert einen einzigartigen Architekturstil unter den großen Stupas von Anuradhapura. Im Gegensatz zu den massiven Denkmälern anderswo in der Stadt wurde die Lankarama als intimes Waldkloster mit charakteristischen kreisförmigen Steinpfeilern rund um die Stupa konzipiert. Diese 30 Meter hohe Struktur zeigt den Vajrayana-Architektureinfluss, der im sri-lankischen buddhistischen Bauwesen selten war.",
    site8_p2: "Das auffälligste Merkmal der Lankarama ist ihr einzigartiges Design mit Steinpfeilern, die in konzentrischen Kreisen um die Stupa-Basis angeordnet sind. Diese Pfeiler stützten einst Holzstrukturen, die als Meditationshallen und Wohnquartiere für Waldmönche dienten. Die ruhige Waldumgebung und das kleinere Ausmaß schaffen eine Atmosphäre, die perfekt für Kontemplation und Meditation ist.",
    site8_h1: "Einzigartige kreisförmige Steinpfeileranordnung",
    site8_h2: "Intimes 30-Meter-Waldkloster-Design",
    site8_h3: "Vajrayana-Architektureinfluss",
    site8_h4: "Ruhige Waldumgebung für Meditation",
    site8_h5: "Von König Valagamba im 1. Jahrhundert n. Chr. erbaut",

    more_heading: "Weitere Heilige Stätten",

    avukana_title: "Avukana Buddha-Statue",
    avukana_desc: "Eine beeindruckende in Fels gehauene Statue des Buddha in einer ruhigen Meditationshaltung",
    avukana_p1: "Die Avukana Buddha-Statue ist eine prächtige in Fels gehauene Statue, die sich etwa 8 Kilometer von Anuradhapura entfernt befindet. Im 5. Jahrhundert n. Chr. aus einer großen Granitwand herausgemeißelt, steht diese Statue ungefähr 12 Meter hoch und zeigt den Buddha in einer stehenden Haltung, wobei seine rechte Hand in der Geste der Beruhigung (Abhaya Mudra) erhoben ist. Die aufwendigen Details des Gewandes und der Gesichtszüge zeigen das außergewöhnliche Handwerk antiker sri-lankischer Künstler.",
    avukana_link: "Wenn Sie mehr über die Geste erfahren möchten",
    avukana_p2: "Die Statue ist vor einem natürlichen Felsuntergrund aufgestellt, der einen markanten Kontrast schafft, der ihre visuelle Wirkung verstärkt. Der ruhige Ausdruck auf dem Gesicht des Buddha und die aufwendigen Details der Schnitzerei laden zur Kontemplation und Reflexion ein.",
    avukana_h1: "Aus einem einzigen Granit-Fels gemeißelt",
    avukana_h2: "Steht ungefähr 12 Meter hoch",
    avukana_h3: "Zeigt Buddha in Abhaya Mudra (Geste der Beruhigung)",
    avukana_h4: "Außergewöhnliches Handwerk mit aufwändigen Details",
    avukana_h5: "Vor einem natürlichen Felsuntergrund für visuelle Wirkung aufgestellt",

    sandah_title: "Sandahirusaya",
    sandah_desc: "Eine kleinere, aber ebenso heilige Stupa mit einzigartiger historischer Bedeutung",
    sandah_p1: 'Wenn Sie Anuradhapura besuchen, haben Sie diese Stupa vielleicht gesehen — sie ähnelt der Ruwanwelisaya, ist aber nicht so groß. Sandahirusaya, auch bekannt als "Sandahiru Seya", ist eine schöne weiße Dagoba, die den klassischen glockenförmigen Architekturstil antiker sri-lankischer Stupas zeigt. Es handelt sich tatsächlich um eine moderne Konstruktion, die in jüngerer Zeit nach traditionellen buddhistischen Architekturprinzipien und -designs errichtet wurde.',
    sandah_p2: "Was die Sandahirusaya einzigartig macht, ist ihre Rolle als zeitgenössisches buddhistisches Denkmal, das traditionelle Designelemente beibehält. Obwohl sie aufgrund ihres klassischen Stils antik wirken mag, repräsentiert sie moderne sri-lankische buddhistische Hingabe und Handwerkskunst. Die Stupa ist von gepflegten Gärten umgeben und bietet hervorragende Möglichkeiten für Meditation und Fotografie, insbesondere bei Sonnenaufgang und -untergang.",
    sandah_h1: "Moderne Konstruktion nach traditioneller buddhistischer Architektur",
    sandah_h2: "Klassisches glockenförmiges Design mit weißem Kalksteinüberzug",
    sandah_h3: "Zeitgenössische buddhistische Hingabe und Handwerkskunst",
    sandah_h4: "Ruhige Umgebung ideal für Meditation und Reflexion",
    sandah_h5: "Weniger überfüllte Alternative zu antiken Stupas",

    cta_heading: "Möchten Sie all diese heiligen Orte stressfrei besuchen?",
    cta_sub: "Erleben Sie Anuradhapura mit professionellen Guides und komfortablen Fahrzeugen",
    cta_body: "Reisen Sie mit Ceylanka Tours für eine unvergessliche Reise durch Sri Lankas antikes Erbe. Sachkundige einheimische Guides, klimatisierte Fahrzeuge und persönlicher Service gewährleisten ein komfortables und bereicherndes Erlebnis.",
    cta_book: "📅 Tour jetzt buchen",
    cta_call: "📞 Anruf: +94 70 764 6765",
    cta_guide_title: "✨ Professionelle Guides",
    cta_guide_body: "Erfahrene lokale Guides mit tiefem Wissen über Geschichte und Kultur",
    cta_car_title: "🚗 Komfortable Fahrzeuge",
    cta_car_body: "Klimatisierte Autos und Vans für eine entspannte Reise",
    cta_hassle_title: "🎯 Stressfreies Erlebnis",
    cta_hassle_body: "Wir kümmern uns um alle Details, damit Sie die Reise genießen können",
    cta_tours_label: "Erkunden Sie unsere kuratierten Tourpakete:",
    cta_tours_link: "Alle verfügbaren Touren anzeigen →",

    arch_heading: "Archäologische Wunder in der Nähe",
    arch_subheading: "Entdecken Sie weitere antike Schätze in der heiligen Stadt Anuradhapura",

    isuru_title: "Isurumuniya-Tempel",
    isuru_body: 'Bekannt für die Schnitzerei "Die Liebenden von Isurumuniya" und schöne in Fels gehauene Architektur aus dem 3. Jahrhundert v. Chr.',
    isuru_location: "Innerhalb Anuradhapuras",

    ranmusu_title: "Ranmusu Uyana mit dem Universalen Sternentor",
    ranmusu_body: "Erkunden Sie das geheimnisvolle Ranmusu Uyana, eine antike Stätte mit einzigartigen Steinschnitzereien und einem universalen Sternentor.",
    ranmusu_location: "Innerhalb Anuradhapuras",

    mihin_title: "Mihinthalaya",
    mihin_body: "Heilige Stätte, wo der Buddhismus erstmals nach Sri Lanka eingeführt wurde. Ein Pilgrimsberg mit atemberaubender Aussicht.",
    mihin_location: "13 km von Anuradhapura",

    kuttam_title: "Zwillingsteiche (Kuttam Pokuna)",
    kuttam_body: "Ausgefeilte Badebecken für Mönche, die fortgeschrittene hydraulische Ingenieurskunst aus antiken Zeiten zeigen.",
    kuttam_location: "Innerhalb Anuradhapuras",

    see_more: "Mehr anzeigen →",
    read_more: "Mehr lesen →",

    daytrip_heading: "Empfohlene Tagesausflug-Kombinationen",
    daytrip1_title: "Erkundung heiliger Stätten",
    daytrip1_body: "Anuradhapura (Atamasthana) → Mihinthalaya → Ritigala Waldkloster → Rückkehr",
    daytrip1_time: "Ganztägiger Ausflug (8-10 Stunden)",
    daytrip2_title: "Antike Städte-Rundreise",
    daytrip2_body: "Anuradhapura → Polonnaruwa → Sigiriya → Rückkehr",
    daytrip2_time: "Ganztägiger Ausflug (12-14 Stunden)",

    guide_heading: "Vollständiger Besucherführer",
    guide_plan_title: "Planung Ihres Besuchs",
    guide_fees_heading: "Eintrittspreise & Tickets",
    guide_fee1: "• Ausländische Erwachsene: 25 USD",
    guide_fee2: "• Ausländische Kinder: 12,50 USD",
    guide_fee3: "• SAARC-Staatsangehörige: Ermäßigte Preise",
    guide_fee4: "• Nur am selben Tag gültig",
    guide_besttime_heading: "Beste Besuchszeit",
    guide_bt1: "• Früher Morgen (6:00–9:00 Uhr)",
    guide_bt2: "• Später Nachmittag (16:00–18:00 Uhr)",
    guide_bt3: "• Mittagshitze meiden (11:00–15:00 Uhr)",
    guide_bt4: "• Trockenzeit: Mai bis September",
    guide_transport_heading: "Transport",
    guide_tr1: "• Fahrradverleih (beliebteste Option)",
    guide_tr2: "• Dreirad (Tuk-Tuk)",
    guide_tr3: "• Privatwagen mit Fahrer",
    guide_tr4: "• Organisierte Reisegruppen",
    guide_tips_title: "Wichtige Tipps",
    guide_bring_heading: "Was mitbringen",
    guide_b1: "• Bequeme Wanderschuhe",
    guide_b2: "• Sonnenschutz (Hut, Sonnencreme)",
    guide_b3: "• Wasserflaschen (2–3 Liter)",
    guide_b4: "• Bescheidene Kleidung für Tempel",
    guide_b5: "• Kamera mit Ersatzbatterien",
    guide_etiquette_heading: "Kulturelle Etikette",
    guide_e1: "• Schuhe an heiligen Stätten ausziehen",
    guide_e2: "• Schultern und Knie bedecken",
    guide_e3: "• Füße nicht auf Buddha-Statuen zeigen",
    guide_e4: "• Respektvolle Stille bewahren",
    guide_e5: "• Fotografierregeln variieren je nach Stätte",
    guide_health_heading: "Gesundheit & Sicherheit",
    guide_hs1: "• Bei Hitze ausreichend trinken",
    guide_hs2: "• Auf unebene antike Oberflächen achten",
    guide_hs3: "• Vorsicht vor Affen in der Nähe von Lebensmitteln",
    guide_hs4: "• Insektenschutzmittel verwenden",

    accom_heading: "Unterkunft in Anuradhapura",
    accom_budget_title: "Günstige Optionen",
    accom_budget_price: "15–40 USD pro Nacht",
    accom_budget1: "• Pensionen in der Nähe des heiligen Bereichs",
    accom_budget2: "• Backpacker-Hostels in der Stadt",
    accom_budget3: "• Staatliche Rasthäuser",
    accom_budget4: "• Familiengeführte Unterkünfte",
    accom_budget5: "• Einfache, aber saubere Einrichtungen",
    accom_mid_title: "Mittelklasse-Hotels",
    accom_mid_price: "40–100 USD pro Nacht",
    accom_mid1: "• Hotels mit Klimaanlage",
    accom_mid2: "• Schwimmbäder und Restaurants",
    accom_mid3: "• Tourorganisationsdienste",
    accom_mid4: "• Fahrradverleih",
    accom_mid5: "• Gute Lage für Besichtigungen",
    accom_lux_title: "Luxusresorts",
    accom_lux_price: "100+ USD pro Nacht",
    accom_lux1: "• Heritage-Hotels mit Charakter",
    accom_lux2: "• Spa- und Wellnesseinrichtungen",
    accom_lux3: "• Feine Restaurants",
    accom_lux4: "• Professionelle Guide-Services",
    accom_lux5: "• Kulturprogramme und Aktivitäten",

    final_title: "Ihre heilige Reise durch Anuradhapura",
    final_p1: "Anuradhapura ist mehr als eine archäologische Stätte — es ist ein lebendiges Zeugnis von 2.300 Jahren kontinuierlicher buddhistischer Zivilisation. Wenn Sie durch diese antike Stadt radeln, folgen Sie Wegen, die von Königen, Mönchen und Pilgern über zwei Jahrtausende begangen wurden. Jede Dagoba, jeder gemeißelte Stein und jeder heilige Baum erzählt eine Geschichte von Glauben, Kunstfertigkeit und menschlicher Leistung.",
    final_p2: "Nehmen Sie sich Zeit, still am heiligen Bodhi-Baum zu sitzen, das ingenieurtechnische Genie der antiken Dagobas zu bestaunen und die spirituelle Atmosphäre zu schätzen, die diese Stadt seit Jahrhunderten zu einem Pilgerort gemacht hat. Denken Sie daran, dass Sie nicht nur historische Denkmäler besuchen, sondern aktive Kultstätten, die weiterhin Hingabe und Staunen wecken.",
    final_p3: "Möge Ihre Reise durch diese heilige Stadt Ihnen Frieden, Weisheit und eine tiefere Wertschätzung für Sri Lankas unglaubliches spirituelles Erbe bringen! 🙏🌳✨",
  },
}

export default function AnuradhapuraClient({ defaultLang = "en" }: { defaultLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(defaultLang)
  const t = T[lang]
  const de = lang === "de"

  return (
    <>
      {/* ── Language Toggle Banner ── */}
      <div className="fixed bottom-24 right-4 z-50 bg-white dark:bg-gray-800 shadow-xl rounded-xl px-2 py-2 sm:px-4 sm:py-3 border border-gray-200 dark:border-gray-700 flex items-center gap-2">
        <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">
          {de ? "Read in English?" : "Auf Deutsch lesen?"}
        </span>
        <button
          onClick={() => setLang(de ? "en" : "de")}
          className="text-xs sm:text-sm font-semibold bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-1.5"
        >
          {de ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://flagcdn.com/w20/gb.png" alt="English" width={16} height={12} className="rounded-sm" />
              <span>EN</span>
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width={16} height={12} className="rounded-sm" />
              <span>DE</span>
            </>
          )}
        </button>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Anuradhapura.jpg"
          alt="Ancient Ruwanwelisaya dagoba in Anuradhapura with white dome against blue sky and pilgrims visiting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Anuradhapura</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">{t.hero_subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              {t.badge_province}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              {t.badge_sacred}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              {t.badge_founded}
            </Badge>
          </div>
        </div>
      </section>

      {/* ── Section Navigation ── */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">{t.nav_intro}</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">{t.nav_facts}</a>
          <a href="#how-to-get-there" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">{t.nav_transport}</a>
          <a href="#sacred-sites" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">{t.nav_sites}</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">{t.nav_itinerary}</a>
          <a href="#nearby-archaeological-wonders" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">{t.nav_arch}</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">{t.nav_guide}</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* ── Introduction ── */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">{t.intro_heading}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">{t.intro_p1}</p>
            <p className="text-lg">{t.intro_p2}</p>
          </div>
        </section>

        {/* ── Quick Facts & How to Get There ── */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  {t.qf_heading}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span><strong>{t.qf_founded_label}</strong> {t.qf_founded_val}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span><strong>{t.qf_capital_label}</strong> {t.qf_capital_val}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span><strong>{t.qf_bodhi_label}</strong> {t.qf_bodhi_val}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>{t.qf_area_label}</strong> {t.qf_area_val}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span><strong>{t.qf_unesco_label}</strong> {t.qf_unesco_val}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span><strong>{t.qf_duration_label}</strong> {t.qf_duration_val}</span>
                  </div>
                </div>
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image src="/Gregory_Lake.jpg" alt="Ancient reservoir" width={120} height={80} className="rounded shadow-md object-cover" />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">{t.fact_irrigation_title}</p>
                      <p className="text-sm text-blue-800">{t.fact_irrigation_body}</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">{t.fact_duration_title}</p>
                      <p className="text-sm text-yellow-800">{t.fact_duration_body}</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">{t.fact_besttime_title}</p>
                      <p className="text-sm text-green-800">{t.fact_besttime_body}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  {t.transport_heading}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">{t.transport_car_heading}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>{t.transport_car_distance}</strong> {t.transport_car_distance_val}</li>
                      <li>• <strong>{t.transport_car_duration}</strong> {t.transport_car_duration_val}</li>
                      <li>• <strong>{t.transport_car_best}</strong> {t.transport_car_best_val}</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>{t.transport_rec_label}</strong> <span className="font-semibold"> Ceylanka Tours</span> — {t.transport_rec_body}
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>{t.transport_contact}</strong> +94 70 764 6765</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✈️</span>
                          <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300">
                            <strong>{t.transport_airport}</strong> {t.transport_airport_suffix}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">{t.transport_bus_heading}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>{t.transport_bus_route}</strong> {t.transport_bus_route_val}</li>
                      <li>• <strong>{t.transport_bus_duration}</strong> {t.transport_bus_duration_val}</li>
                      <li>• <strong>{t.transport_bus_cost}</strong> {t.transport_bus_cost_val}</li>
                      <li>• <strong>{t.transport_bus_freq}</strong> {t.transport_bus_freq_val}</li>
                    </ul>
                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">{t.transport_train_heading}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>{t.transport_train_route}</strong> {t.transport_train_route_val}</li>
                      <li>• <strong>{t.transport_train_duration}</strong> {t.transport_train_duration_val}</li>
                      <li>• <strong>{t.transport_train_cost}</strong> {t.transport_train_cost_val}</li>
                      <li>• <strong>{t.transport_train_scenic}</strong> {t.transport_train_scenic_val}</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">{t.transport_tips_heading}</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• {t.transport_tip1}</li>
                    <li>• {t.transport_tip2}</li>
                    <li>• {t.transport_tip3}</li>
                    <li>• {t.transport_tip4}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* ── Sacred Sites ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="sacred-sites">{t.sacred_heading}</h2>
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-4">{t.sacred_subheading}</h3>

            {/* 1. Sri Maha Bodhi */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site1_title}</CardTitle>
                <CardDescription>{t.site1_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/JayaSrimahaBodhi.jpeg" alt="Sacred Sri Maha Bodhi tree" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site1_p1}</p>
                    <p className="text-muted-foreground mb-4">{t.site1_p2}</p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400 dark:border-yellow-600 mt-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-100 mb-2">{t.site1_tip_title}</h4>
                      <p className="text-sm text-yellow-700 dark:text-gray-200">{t.site1_tip_body}</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site1_h1, t.site1_h2, t.site1_h3, t.site1_h4].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/jaya-sri-maha-bodhi" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Ruwanwelisaya */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site2_title}</CardTitle>
                <CardDescription>{t.site2_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site2_p1}</p>
                    <p className="text-muted-foreground mb-4">{t.site2_p2}</p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 mt-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-2">{t.site2_did_title}</h4>
                      <p className="text-sm text-blue-700 dark:text-gray-200">{t.site2_did_body}</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site2_h1, t.site2_h2, t.site2_h3, t.site2_h4].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/ruwanwali-saya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                  <Image src="/Ruwanwalisaya.jpeg" alt="Magnificent white Ruwanwelisaya dagoba" width={400} height={300} className="rounded-lg" />
                </div>
              </CardContent>
            </Card>

            {/* 3. Jetavanaramaya */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site3_title}</CardTitle>
                <CardDescription>{t.site3_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/Jetavanaramaya.jpg" alt="Massive Jetavanaramaya dagoba" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site3_p1}</p>
                    <p className="text-muted-foreground mb-4">{t.site3_p2}</p>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-400 dark:border-orange-600 mt-4">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">{t.site3_tip_title}</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-100">{t.site3_tip_body}</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site3_h1, t.site3_h2, t.site3_h3, t.site3_h4].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/jethawanaramaya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Thuparamaya */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site4_title}</CardTitle>
                <CardDescription>{t.site4_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/Thooparamaya.jpeg" alt="Thuparamaya dagoba" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site4_p1}</p>
                    <p className="text-muted-foreground mb-4">{t.site4_p2}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site4_h1, t.site4_h2, t.site4_h3, t.site4_h4, t.site4_h5].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/thuparamaya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Lovamahapaya */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site5_title}</CardTitle>
                <CardDescription>{t.site5_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/Lovamahapaya.jpeg" alt="Lovamahapaya stone pillars" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site5_p1}</p>
                    <p className="text-muted-foreground mb-4">{t.site5_p2}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site5_h1, t.site5_h2, t.site5_h3, t.site5_h4, t.site5_h5].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/lovamahapaya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 6. Abhayagiri */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site6_title}</CardTitle>
                <CardDescription>{t.site6_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/Abhayagiriya.jpeg" alt="Abhayagiri dagoba" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site6_p1}</p>
                    <p className="text-muted-foreground mb-4">
                      {t.site6_p2}
                      <Link href="/destinations/anuradhapura/abhyagiri" className="text-blue-600 hover:underline ml-1">
                        {t.site6_link}
                      </Link>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site6_h1, t.site6_h2, t.site6_h3, t.site6_h4, t.site6_h5].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/abhayagiriya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7. Mirisavetiya */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site7_title}</CardTitle>
                <CardDescription>{t.site7_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/Mirisawatiya.jpeg" alt="Mirisavetiya Stupa" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site7_p1}</p>
                    <p className="text-muted-foreground mb-4">{t.site7_p2}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site7_h1, t.site7_h2, t.site7_h3, t.site7_h4, t.site7_h5].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/mirisavatiya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 8. Lankarama */}
            <Card>
              <CardHeader>
                <CardTitle>{t.site8_title}</CardTitle>
                <CardDescription>{t.site8_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/Lankaramaya.jpeg" alt="Lankarama Dagaba" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.site8_p1}</p>
                    <p className="text-muted-foreground mb-4">{t.site8_p2}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.site8_h1, t.site8_h2, t.site8_h3, t.site8_h4, t.site8_h5].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/lankarama" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.read_more}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Additional Sacred Sites ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t.more_heading}</h2>

          {/* Avukana */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{t.avukana_title}</CardTitle>
                <CardDescription>{t.avukana_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image src="/Avukana-statue.jpg" alt="Avukana Buddha Statue" width={400} height={300} className="rounded-lg" />
                  <div>
                    <p className="text-muted-foreground mb-4">{t.avukana_p1}</p>
                    <Link href="/destinations/anuradhapura/avukana-buddha" className="text-blue-600 hover:underline mb-4 inline-block">
                      {t.avukana_link}
                    </Link>
                    <p className="text-muted-foreground mb-4">{t.avukana_p2}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {[t.avukana_h1, t.avukana_h2, t.avukana_h3, t.avukana_h4, t.avukana_h5].map((h) => (
                        <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sandahirusaya */}
          <Card>
            <CardHeader>
              <CardTitle>{t.sandah_title}</CardTitle>
              <CardDescription>{t.sandah_desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <Image src="/Sandahirusaya.jpeg" alt="Sandahirusaya stupa" width={400} height={300} className="rounded-lg" />
                <div>
                  <p className="text-muted-foreground mb-4">{t.sandah_p1}</p>
                  <p className="text-muted-foreground mb-4">{t.sandah_p2}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {[t.sandah_h1, t.sandah_h2, t.sandah_h3, t.sandah_h4, t.sandah_h5].map((h) => (
                      <li key={h} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── CTA ── */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta_heading}</h2>
                <p className="text-xl md:text-2xl mb-6 text-white/90">{t.cta_sub}</p>
                <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">{t.cta_body}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Link href="/contact-us">
                    <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg cursor-pointer">
                      {t.cta_book}
                    </Button>
                  </Link>
                  <a href="tel:+94707646765">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold shadow-lg cursor-pointer">
                      {t.cta_call}
                    </Button>
                  </a>
                  <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold shadow-lg cursor-pointer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </Button>
                  </a>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">{t.cta_guide_title}</h4>
                    <p className="text-sm text-white/90">{t.cta_guide_body}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">{t.cta_car_title}</h4>
                    <p className="text-sm text-white/90">{t.cta_car_body}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">{t.cta_hassle_title}</h4>
                    <p className="text-sm text-white/90">{t.cta_hassle_body}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/30">
                  <p className="text-white/90 mb-3">{t.cta_tours_label}</p>
                  <Link href="/tours" className="text-white underline hover:text-white/80 font-semibold text-lg">
                    {t.cta_tours_link}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Archaeological Wonders ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="nearby-archaeological-wonders">{t.arch_heading}</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">{t.arch_subheading}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Isurumuniya */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image src="/Isurumuniya.jpeg" alt="Isurumuniya rock temple" fill className="object-cover rounded-t-lg" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">15 mins</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.isuru_title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.isuru_body}</p>
                <div className="flex items-center text-xs text-blue-600 mb-2"><MapPin className="w-3 h-3 mr-1" />{t.isuru_location}</div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/isurumuniya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.see_more}</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Ranmusu Uyana */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image src="/Ranmusuuyana.jpeg" alt="Ranmusu Uyana stargate" fill className="object-cover rounded-t-lg" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">10 mins</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.ranmusu_title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.ranmusu_body}</p>
                <div className="flex items-center text-xs text-blue-600 mb-2"><MapPin className="w-3 h-3 mr-1" />{t.ranmusu_location}</div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ranmusu-uyana" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.see_more}</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Mihinthalaya */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image src="/Mihinthale.jpg" alt="Mihinthale sacred mountain" fill className="object-cover rounded-t-lg" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">20 mins</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.mihin_title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.mihin_body}</p>
                <div className="flex items-center text-xs text-blue-600 mb-2"><MapPin className="w-3 h-3 mr-1" />{t.mihin_location}</div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.see_more}</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Twin Ponds */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image src="/Kuttampokuna.jpeg" alt="Twin Ponds Kuttam Pokuna" fill className="object-cover rounded-t-lg" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">10 mins</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.kuttam_title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.kuttam_body}</p>
                <div className="flex items-center text-xs text-blue-600 mb-2"><MapPin className="w-3 h-3 mr-1" />{t.kuttam_location}</div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kuttam-pokuna" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">{t.see_more}</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Day Trips */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">{t.daytrip_heading}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">{t.daytrip1_title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t.daytrip1_body}</p>
                <div className="flex items-center text-xs text-purple-600"><Clock className="w-3 h-3 mr-1" />{t.daytrip1_time}</div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">{t.daytrip2_title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t.daytrip2_body}</p>
                <div className="flex items-center text-xs text-blue-600"><Clock className="w-3 h-3 mr-1" />{t.daytrip2_time}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Visiting Guide ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="visiting-guide">{t.guide_heading}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">{t.guide_plan_title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">{t.guide_fees_heading}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{t.guide_fee1}</li><li>{t.guide_fee2}</li><li>{t.guide_fee3}</li><li>{t.guide_fee4}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.guide_besttime_heading}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{t.guide_bt1}</li><li>{t.guide_bt2}</li><li>{t.guide_bt3}</li><li>{t.guide_bt4}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.guide_transport_heading}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{t.guide_tr1}</li><li>{t.guide_tr2}</li><li>{t.guide_tr3}</li><li>{t.guide_tr4}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">{t.guide_tips_title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">{t.guide_bring_heading}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{t.guide_b1}</li><li>{t.guide_b2}</li><li>{t.guide_b3}</li><li>{t.guide_b4}</li><li>{t.guide_b5}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.guide_etiquette_heading}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{t.guide_e1}</li><li>{t.guide_e2}</li><li>{t.guide_e3}</li><li>{t.guide_e4}</li><li>{t.guide_e5}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.guide_health_heading}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{t.guide_hs1}</li><li>{t.guide_hs2}</li><li>{t.guide_hs3}</li><li>{t.guide_hs4}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Accommodation ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t.accom_heading}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">{t.accom_budget_title}</CardTitle>
                <CardDescription>{t.accom_budget_price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t.accom_budget1}</li><li>{t.accom_budget2}</li><li>{t.accom_budget3}</li><li>{t.accom_budget4}</li><li>{t.accom_budget5}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">{t.accom_mid_title}</CardTitle>
                <CardDescription>{t.accom_mid_price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t.accom_mid1}</li><li>{t.accom_mid2}</li><li>{t.accom_mid3}</li><li>{t.accom_mid4}</li><li>{t.accom_mid5}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">{t.accom_lux_title}</CardTitle>
                <CardDescription>{t.accom_lux_price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t.accom_lux1}</li><li>{t.accom_lux2}</li><li>{t.accom_lux3}</li><li>{t.accom_lux4}</li><li>{t.accom_lux5}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Final Tips ── */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">{t.final_title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{t.final_p1}</p>
              <p className="text-muted-foreground mb-4">{t.final_p2}</p>
              <p className="text-muted-foreground font-medium">{t.final_p3}</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
