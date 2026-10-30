export type InfoSection = {
  h2: string;
  paras?: string[];
  list?: string[];
  links?: { href: string; label: string }[];
};

export type InfoPage = {
  slug: string; // path without leading slash, e.g. "about" or "guides/which-car-for-your-group"
  kind: "about" | "contact" | "faq" | "guide";
  crumb: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  sections: InfoSection[];
  faqs?: { q: string; a: string }[];
};

const tripLinks = [
  { href: "/packages/akkalkot-gangapur-one-day", label: "Akkalkot and Gangapur, one day" },
  { href: "/packages/tuljapur-pandharpur-one-day", label: "Tuljapur and Pandharpur, one day" },
  { href: "/packages/four-temple-two-day-circuit", label: "Four-temple circuit, two days" },
];
const routeLinks = [
  { href: "/solapur-to-tuljapur-taxi", label: "Solapur to Tuljapur taxi" },
  { href: "/solapur-to-akkalkot-taxi", label: "Solapur to Akkalkot taxi" },
  { href: "/solapur-to-pandharpur-taxi", label: "Solapur to Pandharpur taxi" },
  { href: "/solapur-to-gangapur-taxi", label: "Solapur to Gangapur taxi" },
];

export const infoPages: InfoPage[] = [
  {
    slug: "about",
    kind: "about",
    crumb: "About",
    title: "About Shri Samarth Cabs | Solapur Car Hire",
    description: "Shri Samarth Cabs is a Solapur car hire service with a driver for temple trips and outstation travel. Call or WhatsApp for a direct quote.",
    h1: "About Shri Samarth Cabs, Solapur",
    eyebrow: "Car hire with a driver",
    lead: "Shri Samarth Cabs is a car hire service based in Solapur, Maharashtra. We provide cars with a driver for pilgrimage trips to Tuljapur, Akkalkot, Gangapur and Pandharpur, and for other trips on request.",
    sections: [
      { h2: "What we do", paras: ["Our work is simple: a clean car, a driver who knows the roads, and a plan that fits your group. Most of our trips start in Solapur and go to one or more of the four temples on the Solapur circuit. We also take outstation trips on request, for example to cities such as Pune and Hyderabad.", "Every car comes with a driver. We do not offer self-drive hire."] },
      { h2: "How an enquiry works", list: ["You call or WhatsApp us on +91 95116 00787 with your date, pickup point in Solapur and group size.", "We reply with the trip plan, the car we suggest and the quote.", "We confirm the details directly with you before the trip. We do not publish fixed fares, because the right price depends on your date, group and plan."] },
      { h2: "Our cars", paras: ["We offer the Swift Dzire, the Ertiga, the Toyota Innova Crysta, the Cruiser, the Tempo Traveller and the Urbania, all with a driver. You can see each one, and who it suits, on our cars page."], links: [{ href: "/cars", label: "See our cars" }] },
      { h2: "Trips we run most often", links: tripLinks },
      { h2: "Routes from Solapur", links: routeLinks },
      { h2: "Get in touch", paras: ["The quickest way to reach us is a call or a WhatsApp message. Our contact page has the phone number, WhatsApp link and email."], links: [{ href: "/contact", label: "Contact Shri Samarth Cabs" }] },
    ],
  },
  {
    slug: "contact",
    kind: "contact",
    crumb: "Contact",
    title: "Contact Shri Samarth Cabs | Call or WhatsApp",
    description: "Call or WhatsApp Shri Samarth Cabs in Solapur on +91 95116 00787 to plan a temple trip or outstation journey and get a direct quote.",
    h1: "Contact Shri Samarth Cabs",
    eyebrow: "Based in Solapur, Maharashtra",
    lead: "The quickest way to reach us is a call or a WhatsApp message. Tell us your date, pickup point in Solapur and group size, and we reply with a plan and a quote.",
    sections: [
      { h2: "Phone and WhatsApp", paras: ["Call or WhatsApp +91 95116 00787. The WhatsApp button below opens a message with the details we usually need already listed, so you only fill in the blanks."] },
      { h2: "Email", paras: ["You can also write to Swamicabs48@gmail.com. For a quicker reply, use a call or WhatsApp."] },
      { h2: "Where we are", paras: ["Shri Samarth Cabs is based in Solapur, Maharashtra. Pickup points in Solapur are confirmed when you enquire. We also take outstation trips on request, for example to cities such as Pune and Hyderabad."] },
      { h2: "What to include in your message", list: ["Your travel date", "Pickup point in Solapur", "Where you want to go", "Number of people, including elders and children", "Your preferred car, or ask us to suggest one"] },
      { h2: "Before you write", links: [{ href: "/faq", label: "Read the common questions" }, { href: "/cars", label: "See our cars" }, ...tripLinks] },
    ],
  },
  {
    slug: "faq",
    kind: "faq",
    crumb: "FAQ",
    title: "Solapur Cab Service FAQ | Shri Samarth Cabs",
    description: "Answers about car hire with a driver from Solapur: temples covered, one-day and two-day trips, quotes, cars and how to book with Shri Samarth Cabs.",
    h1: "Frequently asked questions",
    eyebrow: "Solapur cab service",
    lead: "Short answers to the questions travellers ask us most about car hire with a driver from Solapur.",
    sections: [{ h2: "Questions and answers" }],
    faqs: [
      { q: "Do you provide a driver?", a: "Yes. Every car we offer comes with a driver." },
      { q: "Which temples do you cover?", a: "Our circuit covers Tuljapur, Akkalkot, Gangapur and Pandharpur, with local darshan in Solapur. You can pick one temple or combine several." },
      { q: "Do you offer one-day trips?", a: "Yes. We offer two one-day trips from Solapur: Akkalkot and Gangapur, and Tuljapur and Pandharpur." },
      { q: "Do you offer a two-day trip?", a: "Yes. Our two-day circuit covers all four temples along with local darshan in Solapur. The overnight plan is confirmed with you." },
      { q: "How do I get a quote?", a: "Call or WhatsApp +91 95116 00787 with your date, pickup point and group size. We confirm the quote directly." },
      { q: "Do you publish fixed prices?", a: "No. The right quote depends on your date, group size, car and plan, so we confirm it directly instead of printing a price that may not fit your trip." },
      { q: "Which cars do you have?", a: "The Swift Dzire, the Ertiga, the Toyota Innova Crysta, the Cruiser, the Tempo Traveller and the Urbania, all with a driver." },
      { q: "What information do you need to quote a trip?", a: "Your date, pickup point in Solapur, destination, group size and preferred car. If you are unsure of the car, tell us your group size and we suggest one." },
      { q: "Can I combine temples in one trip?", a: "Yes. Common combinations are Tuljapur with Pandharpur, and Akkalkot with Gangapur. Our two-day circuit covers all four." },
      { q: "Is Gangapur in Maharashtra?", a: "No. The Dattatreya temple at Ganagapur is in Afzalpur taluk, Karnataka, so the trip crosses the state border. About 110 km from Solapur by the Google Maps route we use." },
      { q: "Do you take outstation trips?", a: "Yes, on request. Besides the temple circuit we can discuss trips to cities such as Pune and Hyderabad. Call or WhatsApp with your plan." },
      { q: "Is the distance on your site exact?", a: "Distances are Google Maps driving estimates from central Solapur and can change with your pickup point and route." },
    ],
  },
  {
    slug: "guides/solapur-temple-trip-planning",
    kind: "guide",
    crumb: "Temple trip planning guide",
    title: "How to Plan a Solapur Temple Trip | Shri Samarth Cabs",
    description: "A practical guide to planning a Solapur pilgrimage trip to Tuljapur, Akkalkot, Gangapur and Pandharpur: one day or two, order of stops and what to prepare.",
    h1: "How to plan a Solapur temple trip",
    eyebrow: "Planning guide",
    lead: "Solapur is a convenient base for four well-known pilgrimage stops: Tuljapur, Akkalkot, Gangapur and Pandharpur. This guide helps you decide how many days you need, in what order to go, and what to share when you ask for a quote.",
    sections: [
      { h2: "Start with the four distances", paras: ["The distances below are Google Maps driving estimates from central Solapur. They change with your pickup point and route, but they show the shape of the circuit.", "Akkalkot is about 43.3 km and Tuljapur about 44.9 km. Pandharpur is about 69.2 km. Gangapur is the farthest at about 110 km, and it lies in Karnataka, across the state border."] },
      { h2: "One day or two days?", paras: ["Two stops fit comfortably into one day. A full day for Tuljapur and Pandharpur is the easier of the two combinations, because both are closer to Solapur. A full day for Akkalkot and Gangapur is longer, because Gangapur is the farthest point and the border adds planning.", "If you want all four temples, or if you have elders who need to rest, or if you expect long queues, two days gives you room. Our two-day circuit also fits in local darshan in Solapur."] },
      { h2: "Which temples go well together", paras: ["Tuljapur and Pandharpur are the common pair, because they sit in the same direction from Solapur and are both on the nearer side. Akkalkot and Gangapur are the other pair, because Akkalkot lies on the way toward Gangapur.", "You can also visit a single temple. Akkalkot and Tuljapur, at roughly 43 to 45 km each, work well as a shorter trip."] },
      { h2: "What to share when you enquire", list: ["Your travel date", "Your pickup point in Solapur", "Group size, including children and elders", "Whether you return the same day or want an overnight stay", "Your preferred car, or ask us to suggest one"] },
      { h2: "Preparing for the day", paras: ["Start early where you can, because queues at popular temples build up during the day. Dress modestly, carry a photo ID and keep water and any regular medicines within easy reach. These are general suggestions only.", "Darshan timings, dress rules and any entry arrangements are set by each temple trust, so please check the official information for the day you plan to visit. If your date is close to a major festival, such as Ashadhi or Kartiki Ekadashi at Pandharpur, expect large crowds and enquire early."] },
      { h2: "Choosing the car", paras: ["A small family usually travels well in the Swift Dzire. Families with elders or luggage often prefer the Ertiga or the Toyota Innova Crysta. Larger groups should ask us about the Cruiser. Our car guide goes through this step by step."], links: [{ href: "/guides/which-car-for-your-group", label: "Which car for your group" }, { href: "/cars", label: "See our cars" }] },
      { h2: "See the trips and routes", links: [...tripLinks, ...routeLinks] },
    ],
  },
  {
    slug: "guides/which-car-for-your-group",
    kind: "guide",
    crumb: "Which car for your group",
    title: "Which Car for Your Group? | Shri Samarth Cabs",
    description: "Choose between the Swift Dzire, Ertiga, Toyota Innova Crysta and Cruiser for a family pilgrimage trip from Solapur. A plain guide by group size.",
    h1: "Which car is right for your group?",
    eyebrow: "Car guide",
    lead: "The right car depends on how many people are travelling, who they are and how long the day is. This guide goes through the cars we offer, all with a driver, and who each one suits.",
    sections: [
      { h2: "Start with the group", paras: ["Count everyone who will sit in the car, including children, and think about whether any senior members need extra space or easy seating. Then think about luggage. For a one-day temple trip you may carry little. For a two-day circuit you will carry more.", "The seat counts here are the usual ones for each type of car. We confirm the exact seating of the car on your date when you enquire."] },
      { h2: "A couple or a small family: Swift Dzire", paras: ["A compact sedan that usually seats up to 4 passengers. It suits two to four people with light luggage and works well for the nearer stops, such as Tuljapur and Akkalkot."] },
      { h2: "A family with children or elders: Ertiga", paras: ["A family car that usually seats 6 to 7 passengers. It suits a family of five or six, or two small families, and gives more room for a full day of waiting and walking at busy temples."] },
      { h2: "A longer day or senior members: Toyota Innova Crysta", paras: ["A roomy people carrier that usually seats up to 7 passengers. Families often choose it for the longer Gangapur day or the two-day circuit, because the extra space makes a long drive easier."] },
      { h2: "A larger group: Cruiser", paras: ["A larger group vehicle. Seating is confirmed directly for your date. It suits a bigger group, a joint family or an outing that would otherwise need more than one car. If your group is large, ask us about the Cruiser, or whether two cars would suit you better."] },
      { h2: "Matching the car to the trip", list: ["Tuljapur or Akkalkot only: a shorter trip, so the Swift Dzire works for small groups.", "Tuljapur and Pandharpur in a day: the Ertiga or the Toyota Innova Crysta if elders are travelling.", "Akkalkot and Gangapur in a day: a longer drive, so many families prefer the Toyota Innova Crysta.", "Two-day circuit: choose for comfort and luggage, and tell us about any overnight needs."] },
      { h2: "Not sure? Ask us", paras: ["Tell us your group size, your date and the trip you have in mind, and we suggest a car. Every car comes with a driver, and we confirm the quote directly."], links: [{ href: "/cars", label: "See all our cars" }, { href: "/guides/solapur-temple-trip-planning", label: "How to plan a Solapur temple trip" }, { href: "/faq", label: "Common questions" }] },
    ],
  },
  {
    slug: "guides/akkalkot-swami-samarth-darshan-guide",
    kind: "guide",
    crumb: "Akkalkot darshan guide",
    title: "Akkalkot Swami Samarth Darshan: How to Reach from Solapur | Shri Samarth Cabs",
    description: "A practical guide to visiting Akkalkot for Swami Samarth darshan from Solapur: distance, how to plan the day and what to check before you go.",
    h1: "Akkalkot Swami Samarth darshan: how to reach from Solapur",
    eyebrow: "Pilgrim guide",
    lead: "Akkalkot is the town of Shri Swami Samarth Maharaj and the nearest of the four Solapur pilgrimage stops. This guide covers the distance, how to plan the day and what to check before you leave.",
    sections: [
      { h2: "How far is Akkalkot from Solapur?", paras: ["Akkalkot is about 43.3 km from Solapur by the Google Maps driving route we use. The figure changes with your pickup point and route, but it makes Akkalkot an easy half-day or one-day trip."] },
      { h2: "Darshan timings", paras: ["We do not print darshan or aarti timings here, because they are decided by the Vatavruksha Swami Maharaj Devasthan and can change on festival days. Please check the devasthan's official information for the day you plan to visit."] },
      { h2: "Planning the day", paras: ["Start early where you can, because queues build during the day. If you also want Gangapur, plan a full day, since Gangapur is about 110 km from Solapur across the state border. Our Akkalkot and Gangapur one-day trip covers both.", "Dress modestly, carry a photo ID, and keep water and any regular medicines within easy reach, especially for elders."] },
      { h2: "Getting there by cab", paras: ["A driver-included car takes you from your pickup point in Solapur to Akkalkot and waits during darshan. Tell us your date, group size and whether you return the same day, and we confirm the quote directly."] },
      { h2: "Related trips and routes", links: [{ href: "/solapur-to-akkalkot-taxi", label: "Solapur to Akkalkot taxi" }, { href: "/packages/akkalkot-gangapur-one-day", label: "Akkalkot and Gangapur, one day" }, { href: "/guides/solapur-temple-trip-planning", label: "How to plan a temple trip" }] },
    ],
    faqs: [
      { q: "How far is Akkalkot from Solapur?", a: "About 43.3 km by the Google Maps route we use from central Solapur." },
      { q: "What are the darshan timings?", a: "They are set by the devasthan and can change on festival days, so please check their official information before you go." },
      { q: "Can I visit Akkalkot and Gangapur together?", a: "Yes. We offer a one-day Akkalkot and Gangapur trip from Solapur. It is a long day." },
    ],
  },
  {
    slug: "guides/pandharpur-wari-travel-tips",
    kind: "guide",
    crumb: "Pandharpur wari travel tips",
    title: "Pandharpur Ashadhi and Kartiki Wari Travel Tips from Solapur | Shri Samarth Cabs",
    description: "Travel tips for visiting Pandharpur from Solapur during the Ashadhi and Kartiki wari seasons: planning ahead, timing and how to book a cab.",
    h1: "Pandharpur Ashadhi and Kartiki wari: travel tips from Solapur",
    eyebrow: "Pilgrim guide",
    lead: "Pandharpur, the town of the Vitthal Rukmini temple, draws very large crowds around the Ashadhi and Kartiki wari seasons. This guide helps you plan a smoother trip from Solapur.",
    sections: [
      { h2: "How far is Pandharpur from Solapur?", paras: ["Pandharpur is about 69.2 km from Solapur by the Google Maps driving route we use. On a normal day that is a straightforward drive. During wari seasons, roads near the town and the temple area can be much slower."] },
      { h2: "Plan around the crowds", paras: ["Ashadhi and Kartiki wari are among the busiest times in Pandharpur. Expect long queues and slow traffic near the town. Start early, allow extra time, and enquire with us well ahead of your date so we can confirm a car.", "We do not print wari dates or darshan timings here. Please check the temple committee's official information for the day you plan to visit."] },
      { h2: "Travelling with elders and children", paras: ["Choose a roomier car such as the Ertiga or the Toyota Innova Crysta if you are travelling with elders, children or luggage. Keep water and any regular medicines within easy reach, and agree a clear meeting point with your driver before darshan."] },
      { h2: "Booking a cab", paras: ["Tell us your date, pickup point, group size and whether you return the same day. We confirm the car and the quote directly. We do not publish fixed fares."] },
      { h2: "Related trips and routes", links: [{ href: "/solapur-to-pandharpur-taxi", label: "Solapur to Pandharpur taxi" }, { href: "/packages/tuljapur-pandharpur-one-day", label: "Tuljapur and Pandharpur, one day" }, { href: "/guides/which-car-for-your-group", label: "Which car for your group" }] },
    ],
    faqs: [
      { q: "How far is Pandharpur from Solapur?", a: "About 69.2 km by the Google Maps route we use from central Solapur." },
      { q: "Should I book early for wari?", a: "Yes. Wari seasons are very busy, so enquire well ahead of your date and we confirm availability." },
      { q: "Do you publish wari dates?", a: "No. Please check the temple committee's official information for dates and darshan arrangements." },
    ],
  },
];

export const infoBySlug = (slug: string) => infoPages.find((p) => p.slug === slug);
