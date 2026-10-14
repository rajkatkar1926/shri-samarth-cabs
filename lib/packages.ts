export type PackageInfo = {
  slug: string;
  name: string;
  duration: string;
  title: string;
  description: string;
  h1: string;
  images: { src: string; alt: string; w: number; h: number }[];
  intro: string;
  stops: { name: string; text: string }[];
  shape: string[];
  suits: string[];
  quote: string[];
  needs: string[];
  routes: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const packages: PackageInfo[] = [
  {
    slug: "akkalkot-gangapur-one-day",
    name: "Akkalkot + Gangapur",
    duration: "One day",
    title: "Akkalkot Gangapur One Day Trip | Shri Samarth Cabs",
    description: "One-day Akkalkot and Gangapur trip from Solapur with a driver-included car. Call or WhatsApp Shri Samarth Cabs for the plan and quote.",
    h1: "Akkalkot and Gangapur one-day trip from Solapur",
    images: [
      { src: "/cards/akkalkot.webp?v=2", alt: "Painting of Swami Samarth of Akkalkot", w: 512, h: 768 },
      { src: "/cards/gangapur.webp?v=2", alt: "Painting of Shri Dattatreya of Gangapur with his cow and dog", w: 512, h: 768 },
    ],
    intro: "This is a one-day pilgrimage trip from Solapur that visits Akkalkot, the town of Swami Samarth, and Gangapur, the Dattatreya temple across the state border in Karnataka. It runs in a driver-included car from your pickup point in Solapur. We confirm the plan and the quote directly when you call or WhatsApp us.",
    stops: [
      { name: "Akkalkot", text: "The first stop. Akkalkot is about 43.3 km from Solapur by the Google Maps route we use. Devotees visit the Vatavruksha Swami Maharaj Devasthan and the places linked with Shri Swami Samarth Maharaj." },
      { name: "Gangapur", text: "The second and farthest stop, about 110 km from Solapur. The Ganagapur Dattatreya Temple is in Afzalpur taluk, Karnataka, near the meeting of the Bhima and Amarja rivers." },
    ],
    shape: [
      "The usual shape of the day follows the road: you leave Solapur, reach Akkalkot first, continue to Gangapur, and return the same way. Because Gangapur is across the state border and the farthest point, this is a full day rather than a half day.",
      "We do not print timings here, because they depend on your start time, queues at each temple and traffic. When you enquire, we discuss the start, the order and the breaks that suit your group.",
    ],
    suits: [
      "Devotees of Swami Samarth and Dattatreya who want both places in one day.",
      "Families who prefer one clear day of travel instead of two separate trips.",
      "Groups that want a driver who plans the route and waits during darshan.",
    ],
    quote: [
      "We do not list a fixed price for this trip. After you share your date, group size, pickup point and car preference, we reply with the plan and the quote before you commit. What the quote covers is confirmed in that same message so that nothing is assumed.",
    ],
    needs: ["Your travel date", "Pickup point in Solapur", "Number of people, including elders and children", "Preferred car, or ask us to suggest one", "Whether you want to add another stop"],
    routes: [
      { href: "/solapur-to-akkalkot-taxi", label: "Solapur to Akkalkot taxi" },
      { href: "/solapur-to-gangapur-taxi", label: "Solapur to Gangapur taxi" },
    ],
    faqs: [
      { q: "Can Akkalkot and Gangapur really be done in one day?", a: "It is a long day because Gangapur is about 110 km away across the state border. We confirm whether it suits your date and group when you enquire." },
      { q: "Is the driver included?", a: "Yes. Every car comes with a driver." },
      { q: "Can I add Tuljapur or Pandharpur?", a: "That usually makes the plan longer. Ask us about our two-day circuit, which covers all four temples." },
    ],
  },
  {
    slug: "tuljapur-pandharpur-one-day",
    name: "Tuljapur + Pandharpur",
    duration: "One day",
    title: "Tuljapur Pandharpur One Day Trip | Shri Samarth Cabs",
    description: "One-day Tuljapur and Pandharpur trip from Solapur with a driver-included car. Call or WhatsApp Shri Samarth Cabs for your quote.",
    h1: "Tuljapur and Pandharpur one-day trip from Solapur",
    images: [
      { src: "/cards/tuljapur.webp?v=2", alt: "Painting of Tulja Bhavani of Tuljapur", w: 512, h: 768 },
      { src: "/cards/pandharpur.webp?v=2", alt: "Painting of Vitthal of Pandharpur", w: 512, h: 768 },
    ],
    intro: "This one-day trip from Solapur takes you to Tuljapur for Tulja Bhavani darshan and to Pandharpur for the Vitthal Rukmini temple. It is a driver-included car trip from your pickup point in Solapur, and we confirm the plan and quote directly when you contact us.",
    stops: [
      { name: "Tuljapur", text: "The Tulja Bhavani temple, about 44.9 km from Solapur by the Google Maps route we use. For many Maharashtrian families this is the kuladevata, the family deity." },
      { name: "Pandharpur", text: "The Shree Vitthal Rukmini Temple on the Bhima river, about 69.2 km from Solapur. It is the centre of the Varkari tradition." },
    ],
    shape: [
      "Most travellers go to Tuljapur first and continue to Pandharpur, then return to Solapur. Both towns are well within reach of Solapur, so this is often the easier of our two one-day trips for senior members of the family.",
      "Pandharpur can be extremely busy around Ashadhi and Kartiki Ekadashi, and queues there change the shape of the day. Tell us your date and we plan around it. We do not publish timings because they depend on queues and traffic.",
    ],
    suits: [
      "Families with elders who want two major darshans without a very long drive.",
      "Pilgrims whose family deity is Tulja Bhavani or who follow the Varkari tradition.",
      "Groups who want one day out of Solapur with a driver who handles the road.",
    ],
    quote: [
      "We confirm the quote directly. It depends on the date, the group size and the car, and we share it before you commit. We would rather ask a few questions than print a fare that does not fit your trip.",
    ],
    needs: ["Your travel date, and whether it is near an Ekadashi", "Pickup point in Solapur", "Group size, including senior members", "Preferred car, or ask us to suggest one", "Whether you want to extend to the full circuit"],
    routes: [
      { href: "/solapur-to-tuljapur-taxi", label: "Solapur to Tuljapur taxi" },
      { href: "/solapur-to-pandharpur-taxi", label: "Solapur to Pandharpur taxi" },
    ],
    faqs: [
      { q: "Which stop comes first?", a: "Most travellers go to Tuljapur first and then Pandharpur. We confirm the order that suits your date and group." },
      { q: "Is Pandharpur crowded?", a: "It can be very crowded around Ashadhi and Kartiki Ekadashi. Enquire early if your date is near those periods." },
      { q: "Is this suitable for elders?", a: "Many senior travellers choose this trip because both towns are closer to Solapur than Gangapur. Tell us about any mobility needs when you enquire." },
    ],
  },
  {
    slug: "four-temple-two-day-circuit",
    name: "Four-temple circuit",
    duration: "Two days",
    title: "Solapur Temple Tour 2 Days | Shri Samarth Cabs",
    description: "Two-day Solapur temple tour covering Tuljapur, Akkalkot, Gangapur and Pandharpur with a driver-included car. Call or WhatsApp for the plan.",
    h1: "Two-day four-temple circuit from Solapur",
    images: [{ src: "/hero/mobile.webp", alt: "Paintings of Tulja Bhavani, Swami Samarth, Vitthal and Dattatreya, the four stops of the Solapur circuit", w: 1024, h: 1536 }],
    intro: "This two-day circuit from Solapur covers all four destinations: Tuljapur, Akkalkot, Gangapur and Pandharpur, along with local darshan in Solapur. It runs in a driver-included car. The itinerary, the overnight plan and the quote are confirmed directly when you call or WhatsApp us.",
    stops: [
      { name: "Tuljapur", text: "Tulja Bhavani, about 44.9 km from Solapur." },
      { name: "Akkalkot", text: "Swami Samarth Maharaj and the Vatavruksha Devasthan, about 43.3 km from Solapur." },
      { name: "Gangapur", text: "The Dattatreya temple at Ganagapur in Karnataka, about 110 km from Solapur." },
      { name: "Pandharpur", text: "The Vitthal Rukmini temple, about 69.2 km from Solapur." },
      { name: "Solapur", text: "Local darshan in Solapur is fitted into the circuit." },
    ],
    shape: [
      "One natural way to split two days is to take Tuljapur and Pandharpur on one day, and Akkalkot and Gangapur on the other, with Solapur local darshan fitted in where it suits you. Those pairings follow our two one-day trips.",
      "The order, the overnight stop and the timings depend on your dates and your group, so we confirm them with you instead of fixing them here. Two days also leave more room for waiting at busy temples.",
    ],
    suits: [
      "Families and groups who want all four temples without rushing.",
      "Pilgrims travelling for a vow or family occasion that covers the whole circuit.",
      "Travellers coming to Solapur from elsewhere who want a single planned trip.",
    ],
    quote: [
      "A two-day trip has more moving parts, so the quote is confirmed directly after we know your dates, group size, car and overnight preference. We do not print a package price on this page.",
    ],
    needs: ["Your two travel dates", "Pickup point in Solapur", "Group size, including elders and children", "Preferred car, or ask us to suggest one", "Your overnight preference, to be discussed with us"],
    routes: [
      { href: "/solapur-to-tuljapur-taxi", label: "Solapur to Tuljapur taxi" },
      { href: "/solapur-to-akkalkot-taxi", label: "Solapur to Akkalkot taxi" },
      { href: "/solapur-to-gangapur-taxi", label: "Solapur to Gangapur taxi" },
      { href: "/solapur-to-pandharpur-taxi", label: "Solapur to Pandharpur taxi" },
    ],
    faqs: [
      { q: "Does the circuit include an overnight stay?", a: "Two days means one night away or near the route. We discuss the overnight plan with you when we confirm the quote." },
      { q: "Can I do the temples in a different order?", a: "Usually yes. Tell us your priorities and we suggest an order that works for the road and your date." },
      { q: "Can I shorten it to one day?", a: "Yes. We offer two one-day trips: Akkalkot and Gangapur, and Tuljapur and Pandharpur." },
    ],
  },
];

export const packageBySlug = (slug: string) => packages.find((p) => p.slug === slug);
