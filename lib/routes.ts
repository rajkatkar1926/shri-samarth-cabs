import { googleMapsRoute } from "./site";

export type RouteFaq = { q: string; a: string };
export type RouteInfo = {
  slug: string;
  id: "tuljapur" | "akkalkot" | "pandharpur" | "gangapur";
  place: string;
  templeName: string;
  distance: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  mapsUrl: string;
  intro: string;
  trip: string[];
  temple: string[];
  matters: string[];
  nearby: string;
  combine: { text: string; href: string; label: string };
  group: string;
  enquire: string[];
  faqs: RouteFaq[];
};

// Temple paragraphs below: VERIFY against each official temple trust site before changing.
export const routes: RouteInfo[] = [
  {
    slug: "solapur-to-tuljapur-taxi",
    id: "tuljapur",
    place: "Tuljapur",
    templeName: "Shri Tuljabhavani Temple",
    distance: "44.9 km",
    title: "Solapur to Tuljapur Taxi | Shri Samarth Cabs",
    description: "Hire a car with a driver from Solapur to Tuljapur for Tulja Bhavani darshan. Call or WhatsApp Shri Samarth Cabs and we confirm your quote directly.",
    image: "/cards/t-tuljapur.webp?v=3",
    imageAlt: "Tulja Bhavani murti decorated with flowers at Tuljapur",
    mapsUrl: googleMapsRoute("Shri Tuljabhavani Temple, Tuljapur"),
    intro: "Shri Samarth Cabs arranges car hire with a driver from Solapur to Tuljapur, the town of the Tulja Bhavani temple. Tuljapur is about 44.9 km from Solapur on the Google Maps driving route we use, which makes it one of the nearer stops on the Solapur pilgrimage circuit. Call or WhatsApp us with your date and group size, and we confirm the trip and the quote directly.",
    trip: [
      "From Solapur the drive to Tuljapur is a single straightforward run of about 44.9 km. That figure is a Google Maps driving estimate measured from central Solapur. It changes with your pickup point, the route taken and the day, so treat it as a guide rather than a promise.",
      "Because the distance is short compared with Gangapur or the full circuit, many families plan Tuljapur as the first stop of a longer day. We do not publish a fixed fare. The quote depends on your date, group size and whether you return the same day, and we confirm it when you call or message us.",
    ],
    temple: [
      "Tulja Bhavani is a form of the Goddess worshipped at Tuljapur in Maharashtra. For many Maharashtrian families she is the kuladevata, the family deity, so a visit is often tied to family occasions, vows and thanksgiving as much as to ordinary darshan.",
      "The temple is one of the best known Devi temples in the state, and pilgrims arrive from across Maharashtra and neighbouring states. Queues, darshan arrangements and dress rules are set by the temple trust, so please check the trust's official information for the day you plan to visit.",
    ],
    matters: ["Tuljapur is one of the best known Devi pilgrimage places in Maharashtra, and the Tulja Bhavani temple is traditionally counted among the Shakti Peethas of the state. Families come here for blessings, to give thanks, and to pray before a wedding, a new home or a new venture."],
    nearby: "Nearby: the market streets around the temple, where pilgrims pick up puja items.",
    combine: { text: "Tuljapur pairs naturally with Pandharpur, and we offer both as a one-day package from Solapur. Tuljapur is also the first temple stop in our two-day circuit of all four destinations.", href: "/packages/tuljapur-pandharpur-one-day", label: "See the Tuljapur and Pandharpur one-day trip" },
    group: "A couple or a small family usually travels comfortably in the Swift Dzire. Families with elders, children or more luggage often choose the Ertiga or the Toyota Innova Crysta. For a larger group, ask us about the Cruiser. Seating for each car is confirmed when you enquire.",
    enquire: ["Your travel date", "Pickup point in Solapur", "Number of people, including children and elders", "Whether you return to Solapur the same day", "Any other temple you want to add"],
    faqs: [
      { q: "How far is Tuljapur from Solapur?", a: "About 44.9 km by the Google Maps driving route we use from central Solapur. Actual distance changes with your pickup point and route." },
      { q: "Can I visit Tuljapur and return to Solapur on the same day?", a: "Many pilgrims plan Tuljapur as a day trip because of the short distance. Tell us your date and we confirm how the day can be arranged." },
      { q: "Can I add Pandharpur to the same trip?", a: "Yes. We offer a one-day Tuljapur and Pandharpur package from Solapur, and we can also build a longer plan on request." },
      { q: "How do I get a quote?", a: "Call or WhatsApp +91 95116 00787 with your date, pickup point and group size. We confirm the quote directly rather than publishing fixed fares." },
    ],
  },
  {
    slug: "solapur-to-akkalkot-taxi",
    id: "akkalkot",
    place: "Akkalkot",
    templeName: "Shri Vatavruksha Swami Maharaj Devasthan",
    distance: "43.3 km",
    title: "Solapur to Akkalkot Taxi | Shri Samarth Cabs",
    description: "Car hire with a driver from Solapur to Akkalkot for Swami Samarth darshan. Call or WhatsApp Shri Samarth Cabs for your quote.",
    image: "/cards/t-akkalkot.webp?v=3",
    imageAlt: "Swami Samarth murti with a red turban at Akkalkot",
    mapsUrl: googleMapsRoute("Shri Vatavruksha Swami Maharaj Devasthan, Akkalkot"),
    intro: "If you are looking for a Solapur to Akkalkot taxi for Swami Samarth darshan, Shri Samarth Cabs provides car hire with a driver on this route. Akkalkot is about 43.3 km from Solapur by the Google Maps driving route we use. Call or WhatsApp us with your date and group size and we confirm the quote directly.",
    trip: [
      "Akkalkot is the closest of the four circuit stops to Solapur, at about 43.3 km. The figure is a Google Maps driving estimate from central Solapur and shifts with your pickup point.",
      "Akkalkot also sits on the way toward the Karnataka side of the circuit. That is why many travellers take it together with Gangapur: the Akkalkot stop comes first, and the longer run to Gangapur follows. If you only want Akkalkot, a short trip works well. If you want both, ask us for the one-day plan.",
    ],
    temple: [
      "Akkalkot is closely associated with Shri Swami Samarth Maharaj, who is revered by devotees across Maharashtra and beyond. The Vatavruksha Swami Maharaj Devasthan, named for the banyan tree, is one of the places devotees visit to remember him.",
      "Because the town is a centre of Swami Samarth devotion, the number of visitors can vary a lot from day to day. Darshan arrangements and timings are decided by the devasthan, so please check their official information for your visit and enquire with us early if you are travelling on a busy day.",
    ],
    matters: ["Akkalkot holds a special place for devotees of Shri Swami Samarth Maharaj. People travel here from many parts of Maharashtra and beyond, often seeking peace of mind as much as blessings, and the town keeps a calm, devotional character even when it is busy."],
    nearby: "Nearby: the Vatavruksha banyan-tree site and other places in Akkalkot linked with the Maharaj.",
    combine: { text: "Most travellers pair Akkalkot with Gangapur, the Dattatreya temple across the state border. We offer both together as a one-day package from Solapur, and Akkalkot is also part of the two-day four-temple circuit.", href: "/packages/akkalkot-gangapur-one-day", label: "See the Akkalkot and Gangapur one-day trip" },
    group: "Families visiting for darshan usually choose between the Ertiga and the Toyota Innova Crysta when elders are travelling. Two or three people can go in the Swift Dzire. For a bigger group, ask about the Cruiser. We confirm seating for the car you are offered.",
    enquire: ["Your travel date", "Pickup point in Solapur", "Group size and whether elders are travelling", "Whether you want Akkalkot alone or with Gangapur", "Return the same day or stay overnight"],
    faqs: [
      { q: "How far is Akkalkot from Solapur?", a: "About 43.3 km by the Google Maps driving route we use from central Solapur. Your pickup point can change it." },
      { q: "Can I visit Akkalkot and Gangapur in one day?", a: "We offer an Akkalkot and Gangapur one-day package from Solapur. We confirm the plan and quote for your date when you enquire." },
      { q: "Is the driver included?", a: "Yes. Every car we offer comes with a driver." },
      { q: "Do you publish fixed prices for Akkalkot?", a: "No. The quote depends on the date, group size and plan, so we confirm it directly by call or WhatsApp." },
      { q: "Which car should I choose for Akkalkot darshan with elders?", a: "Families with elders usually choose the Ertiga or the Toyota Innova Crysta. Two or three people can go in the Swift Dzire, and for a bigger group you can ask about the Cruiser. We confirm seating for the car you are offered." },
      { q: "Is Akkalkot on the way to Gangapur?", a: "Akkalkot is the closest stop to Solapur and sits on the way toward the Karnataka side of the circuit, so the Akkalkot stop comes first and the longer run to Gangapur follows. Ask us for the one-day plan if you want both." },
      { q: "What should I tell you when I book an Akkalkot taxi?", a: "Your travel date, pickup point in Solapur, group size and whether elders are travelling, whether you want Akkalkot alone or with Gangapur, and whether you return the same day or stay overnight. Call or WhatsApp +91 95116 00787 and we confirm the quote directly." },
    ],
  },
  {
    slug: "solapur-to-pandharpur-taxi",
    id: "pandharpur",
    place: "Pandharpur",
    templeName: "Shree Vitthal Rukmini Temple",
    distance: "69.2 km",
    title: "Solapur to Pandharpur Taxi | Shri Samarth Cabs",
    description: "Book a car with a driver from Solapur to Pandharpur for Vitthal Rukmini darshan. Call or WhatsApp Shri Samarth Cabs for a direct quote.",
    image: "/cards/t-pandharpur.webp?v=3",
    imageAlt: "Vitthal murti with a lotus garland at Pandharpur",
    mapsUrl: googleMapsRoute("Shree Vitthal Rukmini Temple, Pandharpur"),
    intro: "Shri Samarth Cabs offers car hire with a driver from Solapur to Pandharpur for darshan at the Vitthal Rukmini temple. Pandharpur is about 69.2 km from Solapur by the Google Maps driving route we use. Call or WhatsApp us with your date, pickup point and group size, and we confirm the quote directly.",
    trip: [
      "At about 69.2 km, Pandharpur is the longest of the three stops that lie close to Solapur, though still a manageable run for a day. The distance is a Google Maps driving estimate from central Solapur, and your pickup point and the route on the day will move it.",
      "Pandharpur is a busy town, so the time you spend there depends more on queues than on the road. For that reason we suggest telling us whether you want a relaxed day with room for waiting, or a combined day with Tuljapur, so we can plan around it when we quote.",
    ],
    temple: [
      "Pandharpur is the centre of the Varkari tradition. The temple of Shree Vitthal and Rukmini stands on the banks of the Bhima river, known locally as the Chandrabhaga, and pilgrims walk here in large numbers on the yearly wari, especially around Ashadhi and Kartiki Ekadashi.",
      "On those festival periods the town becomes extremely crowded, and darshan arrangements are decided by the temple committee. If you plan to travel near an Ekadashi, enquire well in advance and check the committee's official information for the day.",
    ],
    matters: ["Pandharpur is often called the spiritual heart of Maharashtra and sits at the centre of the Varkari tradition. The Vitthal Rukmini temple draws very large numbers of pilgrims every year, and the crowds are greatest around Ashadhi and Kartiki Ekadashi."],
    nearby: "Nearby: the river ghat on the Chandrabhaga, as the Bhima is called at Pandharpur.",
    combine: { text: "Pandharpur is usually paired with Tuljapur. We offer the two together as a one-day package from Solapur, and Pandharpur is also the closing stop in the longer circuit.", href: "/packages/tuljapur-pandharpur-one-day", label: "See the Tuljapur and Pandharpur one-day trip" },
    group: "For a family with senior members, the Ertiga or the Toyota Innova Crysta gives more room for a day with waiting and walking. Smaller parties can use the Swift Dzire. If you are travelling as part of a larger group, ask about the Cruiser.",
    enquire: ["Your travel date, and whether it is near an Ekadashi", "Pickup point in Solapur", "Group size and any senior members", "Whether you want Pandharpur alone or with Tuljapur", "Return the same day or not"],
    faqs: [
      { q: "How far is Pandharpur from Solapur?", a: "About 69.2 km by the Google Maps driving route we use from central Solapur." },
      { q: "Can I travel during Ashadhi or Kartiki Ekadashi?", a: "Yes, but these are very busy times at Pandharpur. Enquire early with your date, and we confirm what can be arranged." },
      { q: "Can I combine Pandharpur with Tuljapur?", a: "Yes. We offer a one-day Tuljapur and Pandharpur package from Solapur." },
      { q: "How is the quote decided?", a: "By your date, group size and plan. We confirm it directly by call or WhatsApp." },
    ],
  },
  {
    slug: "solapur-to-gangapur-taxi",
    id: "gangapur",
    place: "Gangapur",
    templeName: "Ganagapur Dattatreya Temple",
    distance: "about 110 km",
    title: "Solapur to Gangapur Taxi | Shri Samarth Cabs",
    description: "Car hire with a driver from Solapur to Gangapur (Ganagapur) for Dattatreya darshan. Call or WhatsApp Shri Samarth Cabs for a direct quote.",
    image: "/cards/t-gangapur.webp?v=3",
    imageAlt: "Temple tower at Gangapur with an orange Dattatreya banner against a blue sky",
    mapsUrl: googleMapsRoute("Ganagapur Dattatreya Temple Sri Kshetra Ganagapur, Deval Ganagapur, Afzalpur Taluk, Karnataka"),
    intro: "Shri Samarth Cabs provides car hire with a driver from Solapur to Gangapur, also spelt Ganagapur, for darshan at the Dattatreya temple. Gangapur is about 110 km from Solapur by the Google Maps driving route we use, and it lies across the state border in Karnataka. Call or WhatsApp us with your date and group size and we confirm the plan and quote directly.",
    trip: [
      "Gangapur is the farthest stop on our circuit, at about 110 km from Solapur. That is a Google Maps driving estimate from central Solapur, and the route and your pickup point can change it. The temple is at Ganagapur in Afzalpur taluk, Karnataka, so this trip crosses from Maharashtra into Karnataka.",
      "Because of the distance and the border, we recommend planning Gangapur as a full day, usually together with Akkalkot, which lies on the way. Tell us whether you want to return the same day or stay near Gangapur, and we confirm what can be arranged for your date.",
    ],
    temple: [
      "Gangapur is a major centre of devotion to Shri Dattatreya. The place is associated with Shri Narasimha Saraswati, and the temple stands near the meeting point of the Bhima and Amarja rivers, which devotees call the sangam.",
      "Pilgrims travel here from Maharashtra and Karnataka. Worship routines, timings and any rules are set by the temple, so please check its official information before you travel and confirm with us if you want to align the day with a particular ritual.",
    ],
    matters: ["Gangapur is a well known place of pilgrimage for devotees of Shri Dattatreya, and visitors come from Maharashtra, Karnataka and further afield. The temple carries a long tradition, and the town feels historic and quiet compared with larger pilgrimage centres."],
    nearby: "Nearby: the Bhima and Amarja sangam, where the two rivers meet close to the temple.",
    combine: { text: "Gangapur is most often paired with Akkalkot. We offer both as a one-day package from Solapur, and Gangapur is the farthest point of the two-day four-temple circuit.", href: "/packages/akkalkot-gangapur-one-day", label: "See the Akkalkot and Gangapur one-day trip" },
    group: "On a long day with a state border in the middle, comfort matters. Families often prefer the Ertiga or the Toyota Innova Crysta. A couple can use the Swift Dzire. For a larger group, ask about the Cruiser. We confirm seating for the car on your date.",
    enquire: ["Your travel date", "Pickup point in Solapur", "Group size, including elders and children", "Whether you want Gangapur with Akkalkot", "Return the same day or stay overnight", "Anything you want to plan around at the temple"],
    faqs: [
      { q: "Is Gangapur the same as Ganagapur?", a: "Yes. The same place is written both ways. The temple is the Dattatreya temple at Ganagapur in Afzalpur taluk, Karnataka." },
      { q: "How far is Gangapur from Solapur?", a: "About 110 km by the Google Maps driving route we use from central Solapur." },
      { q: "Does this trip go outside Maharashtra?", a: "Yes. Gangapur is in Karnataka. Tell us your date and we confirm the plan and quote when you enquire." },
      { q: "Can I visit Akkalkot on the same trip?", a: "Yes. We offer an Akkalkot and Gangapur one-day package from Solapur." },
    ],
  },
];

export const routeBySlug = (slug: string) => routes.find((r) => r.slug === slug);
