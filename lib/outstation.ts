import { googleMapsRoute } from "./site";

export type OutFaq = { q: string; a: string };
export type OutstationInfo = {
  slug: string;
  crumb: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  facts: { big: string; small: string }[];
  image: string;
  imageAlt: string;
  sections: { h2: string; paras?: string[]; list?: string[] }[];
  mapsUrl?: string;
  mapsLabel?: string;
  waExtra: string;
  faqs: OutFaq[];
  related: { href: string; label: string }[];
};

const outRoutes = [
  { href: "/solapur-to-pune-taxi", label: "Solapur to Pune taxi" },
  { href: "/solapur-to-mumbai-taxi", label: "Solapur to Mumbai taxi" },
  { href: "/solapur-to-kolhapur-taxi", label: "Solapur to Kolhapur taxi" },
  { href: "/solapur-to-hyderabad-taxi", label: "Solapur to Hyderabad taxi" },
  { href: "/solapur-airport-taxi", label: "Solapur airport taxi" },
  { href: "/solapur-outstation-taxi", label: "All Solapur outstation routes" },
];
const others = (slug: string) => outRoutes.filter((r) => r.href !== `/${slug}`);

const carsParas = [
  "We run Swift Dzire, Ertiga, Innova Crysta, Tempo Traveller and Urbania, all with a driver. A Dzire suits two to four people with light bags. An Ertiga or Innova Crysta suits a family with luggage. For a wedding party, an office group or a large family, ask about the Tempo Traveller or Urbania.",
  "Tell us how many people are travelling and how many bags. We suggest a car that fits, not the biggest one.",
];

const commonEnquire = [
  "Your pickup address in Solapur (or other pickup town)",
  "Travel date and the time you want to leave",
  "One way, or a return trip with a wait",
  "Number of passengers and bags",
  "Any stops on the way",
];

export const outstationPages: OutstationInfo[] = [
  {
    slug: "solapur-outstation-taxi",
    crumb: "Solapur outstation taxi",
    title: "Solapur Outstation Taxi | Cab with Driver | Shri Samarth Cabs",
    description: "Outstation taxi from Solapur with a driver: Pune, Mumbai, Kolhapur, Satara, Sangli, Hyderabad and airport transfers. Call Shri Samarth Cabs and we confirm the quote.",
    eyebrow: "Outstation cab from Solapur",
    h1: "Solapur outstation taxi with a driver",
    lead: "Going out of Solapur for the day or longer? Call us, tell us where and when, and we confirm the car, the driver and the quote before you travel.",
    facts: [
      { big: "Driver included", small: "on every car" },
      { big: "Quote on call", small: "confirmed before you go" },
      { big: "7am to 10pm", small: "phone answered by the owner" },
    ],
    image: "/fleet/Innova_crysta.webp",
    imageAlt: "Innova Crysta cab available for outstation trips from Solapur",
    sections: [
      {
        h2: "Where we take you from Solapur",
        paras: ["These are the outstation trips people ask us for most. Each page has trip details for that route."],
        list: [
          "Solapur to Pune: the main road to the city, for family visits, offices and the Pune airport",
          "Solapur to Mumbai: a long day trip or overnight run, including Mumbai airport transfers",
          "Solapur to Kolhapur: for Mahalaxmi darshan, family visits and business",
          "Solapur to Satara and Sangli: shorter runs, one way or return",
          "Solapur to Hyderabad: across the Telangana border, also for the Hyderabad airport",
          "Airport transfers: Solapur to Pune, Mumbai or Hyderabad airport, timed to your flight",
        ],
      },
      {
        h2: "How booking works",
        paras: [
          "There is no booking form to fill. Call or WhatsApp us, say where you are going and on which date, and we reply with the car options and the quote. The quote is confirmed with you directly before you travel.",
          "The owner answers the phone from 7am to 10pm. If you call outside those hours, send a WhatsApp message and we reply in the morning.",
        ],
      },
      { h2: "Which car should you pick", paras: carsParas },
      { h2: "What to tell us when you call", list: commonEnquire },
      {
        h2: "Temple trips from Solapur",
        paras: ["Besides outstation runs we also take families to Tuljapur, Akkalkot, Gangapur and Pandharpur. See the one-day and two-day temple trips on the home page."],
      },
    ],
    waExtra: "Enquiry: outstation taxi",
    faqs: [
      { q: "Is the driver included?", a: "Yes. Every car goes with a driver. You do not drive yourself." },
      { q: "Do you publish fixed fares?", a: "No. The fare depends on the route, the date, the car and whether the trip is one way or return, so we confirm the quote directly when you call or message." },
      { q: "Can I book a one way trip?", a: "Yes, one way trips are possible. Say so when you call so we quote it correctly." },
      { q: "Do you take trips to Hyderabad and the airports?", a: "Yes. Pune, Mumbai and Hyderabad airport transfers and trips to Hyderabad city can be arranged. Call us with your flight time and pickup address." },
      { q: "What are your phone hours?", a: "The owner answers from 7am to 10pm. Outside those hours please send a WhatsApp message." },
    ],
    related: outRoutes.filter((r) => r.href !== "/solapur-outstation-taxi"),
  },
  {
    slug: "solapur-to-pune-taxi",
    crumb: "Solapur to Pune taxi",
    title: "Solapur to Pune Taxi | Cab with Driver | Shri Samarth Cabs",
    description: "Book a taxi from Solapur to Pune with a driver. Dzire, Ertiga, Innova Crysta and Tempo Traveller. Call Shri Samarth Cabs and we confirm the route and quote.",
    eyebrow: "Taxi from Solapur to Pune",
    h1: "Solapur to Pune taxi with a driver",
    lead: "A driver and a car sent to your door in Solapur and taken to Pune, for one way or return. Call us with your date and we confirm the quote before you travel.",
    facts: [
      { big: "About 250 km", small: "Google Maps estimate" },
      { big: "Driver included", small: "on every car" },
      { big: "Quote on call", small: "confirmed before you go" },
    ],
    image: "/fleet/Ertiga.webp",
    imageAlt: "Ertiga cab for Solapur to Pune trips",
    sections: [
      {
        h2: "The road from Solapur to Pune",
        paras: [
          "The drive follows the national highway north-west through Mohol and Indapur to Pune. Most of it is a divided road, so the trip is usually about four and a half to five hours. Traffic on the Pune side near Hadapsar and Solapur Road can add time, so we advise leaving early if you have a train, a flight or a meeting to reach.",
        ],
      },
      {
        h2: "Who books this trip",
        list: [
          "Families visiting relatives or going for a hospital appointment",
          "Students and parents travelling for admissions or exams",
          "Office staff and small business owners with a meeting in Pune",
          "Passengers going to Pune airport or railway station",
        ],
      },
      { h2: "Which car for Pune", paras: carsParas },
      { h2: "Pune airport and station transfers", paras: ["If you are catching a flight from Pune, tell us the flight time. We plan the departure with a buffer for traffic. For pickups from Pune back to Solapur, send us the arrival time and we keep to it."] },
      { h2: "What to tell us when you call", list: commonEnquire },
    ],
    mapsUrl: googleMapsRoute("Pune, Maharashtra"),
    mapsLabel: "Open the Google Maps driving route to Pune",
    waExtra: "Destination: Pune",
    faqs: [
      { q: "How long does Solapur to Pune take by car?", a: "Usually four and a half to five hours without long stops. Traffic near Pune can add time." },
      { q: "Is the driver included?", a: "Yes. Every car goes with a driver." },
      { q: "Do you do Pune airport drops?", a: "Yes. Tell us the flight time and your pickup address and we plan the timing." },
      { q: "Can I book one way?", a: "Yes. One way and return trips are both possible. Say which when you call." },
      { q: "How do I get the fare?", a: "Call or WhatsApp. We confirm the quote directly for your date and car. We do not publish fixed fares." },
    ],
    related: others("solapur-to-pune-taxi"),
  },
  {
    slug: "solapur-to-mumbai-taxi",
    crumb: "Solapur to Mumbai taxi",
    title: "Solapur to Mumbai Taxi | Cab with Driver | Shri Samarth Cabs",
    description: "Taxi from Solapur to Mumbai with a driver, including Mumbai airport transfers. Call Shri Samarth Cabs and we confirm your route and quote before you travel.",
    eyebrow: "Taxi from Solapur to Mumbai",
    h1: "Solapur to Mumbai taxi with a driver",
    lead: "A comfortable long-distance run to Mumbai with a driver who knows the route. Call with your date, pickup point and passengers, and we confirm the quote first.",
    facts: [
      { big: "About 400 km", small: "Google Maps estimate" },
      { big: "Driver included", small: "on every car" },
      { big: "Quote on call", small: "confirmed before you go" },
    ],
    image: "/fleet/Innova_crysta.webp",
    imageAlt: "Innova Crysta for Solapur to Mumbai trips",
    sections: [
      {
        h2: "The road from Solapur to Mumbai",
        paras: [
          "The route goes through Pune and on to Mumbai by the expressway. It is a long day, often seven to nine hours depending on the time of day and the traffic entering Mumbai. For this reason we advise an early start, and for return trips we discuss the driver's rest and waiting time with you before the trip, so there are no surprises.",
        ],
      },
      {
        h2: "Who books this trip",
        list: [
          "Families travelling for weddings, hospital visits or a flight",
          "Passengers going to Mumbai airport for an international flight",
          "Business travellers with meetings in Mumbai",
          "Groups travelling together who want one vehicle",
        ],
      },
      { h2: "Which car for Mumbai", paras: ["For a long run, comfort matters. An Innova Crysta or Ertiga gives families more room for the hours on the road. For groups, ask about the Tempo Traveller or Urbania.", "Tell us the number of passengers and bags and we suggest the right car."] },
      { h2: "Mumbai airport transfers", paras: ["For an international flight, leave Solapur with plenty of time. Give us your flight time and we plan the departure with a safe buffer. Because the run is long, many travellers prefer to leave the night before or very early in the morning."] },
      { h2: "What to tell us when you call", list: commonEnquire },
    ],
    mapsUrl: googleMapsRoute("Mumbai, Maharashtra"),
    mapsLabel: "Open the Google Maps driving route to Mumbai",
    waExtra: "Destination: Mumbai",
    faqs: [
      { q: "How long does Solapur to Mumbai take?", a: "Often seven to nine hours with short stops. It depends on the hour and the traffic entering Mumbai." },
      { q: "Do you do Mumbai airport transfers?", a: "Yes. Send us the flight time and your pickup address and we plan the departure." },
      { q: "Is the driver included?", a: "Yes. Every car goes with a driver." },
      { q: "Can I go one way and return later?", a: "Yes. Tell us if you want a one way trip or a return with a wait, and we quote it accordingly." },
      { q: "How do I get the fare?", a: "Call or WhatsApp. We confirm the quote for your date and car. We do not publish fixed fares." },
    ],
    related: others("solapur-to-mumbai-taxi"),
  },
  {
    slug: "solapur-to-kolhapur-taxi",
    crumb: "Solapur to Kolhapur taxi",
    title: "Solapur to Kolhapur Taxi | Cab with Driver | Shri Samarth Cabs",
    description: "Taxi from Solapur to Kolhapur with a driver for Mahalaxmi darshan, family visits and business. Call Shri Samarth Cabs and we confirm the route and quote.",
    eyebrow: "Taxi from Solapur to Kolhapur",
    h1: "Solapur to Kolhapur taxi with a driver",
    lead: "From your door in Solapur to Kolhapur and back, with a driver. Call with your date and we confirm the car and the quote before you travel.",
    facts: [
      { big: "About 230 km", small: "Google Maps estimate" },
      { big: "Driver included", small: "on every car" },
      { big: "Quote on call", small: "confirmed before you go" },
    ],
    image: "/fleet/Swift_Dzire.webp",
    imageAlt: "Swift Dzire cab for Solapur to Kolhapur trips",
    sections: [
      {
        h2: "The road from Solapur to Kolhapur",
        paras: [
          "The drive goes south-west through the Sangli district to Kolhapur, usually in about four to five hours. Many travellers combine it with a visit to Sangli or Satara on the way, and we can plan a stop if you tell us in advance.",
        ],
      },
      {
        h2: "Who books this trip",
        list: [
          "Families going for Mahalaxmi Ambabai darshan",
          "Travellers visiting relatives in Kolhapur or Sangli",
          "Business travellers with work in the Kolhapur industrial belt",
          "Groups making a one-day trip there and back",
        ],
      },
      { h2: "Which car for Kolhapur", paras: carsParas },
      { h2: "Stops on the way", paras: ["If you want to stop at Pandharpur, Sangli or Satara along the way, say so when you call. A stop changes the time and the quote, so it is better to settle it before you leave."] },
      { h2: "What to tell us when you call", list: commonEnquire },
    ],
    mapsUrl: googleMapsRoute("Kolhapur, Maharashtra"),
    mapsLabel: "Open the Google Maps driving route to Kolhapur",
    waExtra: "Destination: Kolhapur",
    faqs: [
      { q: "How long does Solapur to Kolhapur take?", a: "Usually about four to five hours without long stops." },
      { q: "Can I do Kolhapur in a single day?", a: "Yes, a day trip there and back is possible. Tell us the time you want to leave and return." },
      { q: "Is the driver included?", a: "Yes. Every car goes with a driver." },
      { q: "Can we add Sangli or Satara?", a: "Yes. Tell us the stops and we confirm the time and the quote." },
      { q: "How do I get the fare?", a: "Call or WhatsApp. We confirm the quote for your date and car. We do not publish fixed fares." },
    ],
    related: others("solapur-to-kolhapur-taxi"),
  },
  {
    slug: "solapur-to-hyderabad-taxi",
    crumb: "Solapur to Hyderabad taxi",
    title: "Solapur to Hyderabad Taxi | Cab with Driver | Shri Samarth Cabs",
    description: "Taxi from Solapur to Hyderabad with a driver, including Hyderabad airport transfers. Call Shri Samarth Cabs and we confirm your route and quote before you travel.",
    eyebrow: "Taxi from Solapur to Hyderabad",
    h1: "Solapur to Hyderabad taxi with a driver",
    lead: "A long run south-east across the Telangana border, with a driver who handles the road. Call with your date and pickup and we confirm the car and the quote first.",
    facts: [
      { big: "About 300 km", small: "Google Maps estimate" },
      { big: "Driver included", small: "on every car" },
      { big: "Quote on call", small: "confirmed before you go" },
    ],
    image: "/fleet/Ertiga.webp",
    imageAlt: "Ertiga cab for Solapur to Hyderabad trips",
    sections: [
      {
        h2: "The road from Solapur to Hyderabad",
        paras: [
          "The drive heads south-east through Karnataka and into Telangana on the national highway, usually in about six hours before city traffic. You cross a state border on the way, so tell us in advance if you plan stops, and we confirm how the border permit and any road charges affect the quote before you leave.",
        ],
      },
      {
        h2: "Who books this trip",
        list: [
          "Families visiting relatives in Hyderabad or Secunderabad",
          "Travellers going for a medical visit or an exam",
          "Passengers catching a flight at Hyderabad airport",
          "Business travellers with meetings in Hyderabad",
        ],
      },
      { h2: "Which car for Hyderabad", paras: carsParas },
      { h2: "Hyderabad airport transfers", paras: ["For a flight from Hyderabad, tell us the departure time. We plan the start from Solapur with a buffer for the road and city traffic. For a pickup from the airport back to Solapur, send us the landing time and flight number."] },
      { h2: "What to tell us when you call", list: commonEnquire },
    ],
    mapsUrl: googleMapsRoute("Hyderabad, Telangana"),
    mapsLabel: "Open the Google Maps driving route to Hyderabad",
    waExtra: "Destination: Hyderabad",
    faqs: [
      { q: "How long does Solapur to Hyderabad take?", a: "Usually about six hours before city traffic. It depends on the hour and the road." },
      { q: "Do you do Hyderabad airport drops and pickups?", a: "Yes. Send us the flight time and your address and we plan the timing." },
      { q: "Is the driver included?", a: "Yes. Every car goes with a driver." },
      { q: "Does the trip cost more because it crosses into Telangana?", a: "Permit and road charges can apply on an inter-state trip. We include them in the quote we confirm before you travel." },
      { q: "How do I get the fare?", a: "Call or WhatsApp. We confirm the quote for your date and car. We do not publish fixed fares." },
    ],
    related: others("solapur-to-hyderabad-taxi"),
  },
  {
    slug: "solapur-airport-taxi",
    crumb: "Solapur airport taxi",
    title: "Solapur Airport Taxi | Pune, Mumbai, Hyderabad | Shri Samarth Cabs",
    description: "Airport taxi from Solapur to Pune, Mumbai and Hyderabad airports, and back, with a driver. Call Shri Samarth Cabs with your flight time and we confirm the quote.",
    eyebrow: "Airport taxi from Solapur",
    h1: "Solapur airport taxi with a driver",
    lead: "Catching a flight or landing in Pune, Mumbai or Hyderabad? Give us your flight time and we plan the pickup so you are not rushing.",
    facts: [
      { big: "3 airports", small: "Pune, Mumbai, Hyderabad" },
      { big: "Driver included", small: "on every car" },
      { big: "Quote on call", small: "confirmed before you go" },
    ],
    image: "/fleet/Swift_Dzire.webp",
    imageAlt: "Swift Dzire cab for airport transfers from Solapur",
    sections: [
      {
        h2: "Airports we go to from Solapur",
        list: [
          "Pune airport, about 260 km from Solapur on the Google Maps estimate",
          "Mumbai airport, about 410 km, usually a full day or an early start",
          "Hyderabad airport, about 330 km, across the Telangana border",
        ],
      },
      {
        h2: "How we plan the timing",
        paras: [
          "Tell us the flight time and whether it is a domestic or international flight. We work backwards from check-in time and add a buffer for the road and the city traffic near the airport. For long runs like Mumbai, many travellers leave the night before or very early in the morning, and we can plan for that.",
          "For arrivals, send us the landing time and flight number. Your driver reaches the airport in time and waits for you.",
        ],
      },
      { h2: "Which car for the airport", paras: carsParas },
      { h2: "What to tell us when you call", list: ["Which airport, and whether you are departing or arriving", "Flight time and flight number", "Your pickup or drop address", "Number of passengers and bags", "One way, or a return later"] },
    ],
    waExtra: "Enquiry: airport taxi",
    faqs: [
      { q: "Which airports do you go to?", a: "Pune, Mumbai and Hyderabad airports, from Solapur and back." },
      { q: "Do you wait if my flight is delayed?", a: "Send us the flight number and we track the arrival. Any waiting time is agreed with you before the trip." },
      { q: "Is the driver included?", a: "Yes. Every car goes with a driver." },
      { q: "How do I get the fare?", a: "Call or WhatsApp. We confirm the quote for your airport, date and car. We do not publish fixed fares." },
    ],
    related: others("solapur-airport-taxi"),
  },
];

export const outstationBySlug = (slug: string) => outstationPages.find((p) => p.slug === slug);
