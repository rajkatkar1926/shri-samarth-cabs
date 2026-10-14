import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, Cta, FaqList, PageShell } from "@/components/site/PageShell";
import { waLink } from "@/lib/site";

const title = "Cars with Driver in Solapur | Shri Samarth Cabs";
const description = "Swift Dzire, Ertiga, Toyota Innova Crysta and Cruiser with a driver from Solapur. Call or WhatsApp Shri Samarth Cabs to pick the right car.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cars" },
  openGraph: { title, description, url: "/cars", type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
};

const cars = [
  { name: "Swift Dzire", file: "/fleet/Swift_Dzire.webp", alt: "Swift Dzire sedan available with a driver from Solapur", seats: "A compact sedan that usually seats up to 4 passengers.", suits: "A couple, a small family, or a solo traveller who wants a comfortable car with a driver. Good for the nearer stops such as Tuljapur and Akkalkot." },
  { name: "Ertiga", file: "/fleet/Ertiga.webp", alt: "Maruti Ertiga seven-seater available with a driver from Solapur", seats: "A family car that usually seats 6 to 7 passengers.", suits: "A family with children or elders, or two small families travelling together. A sensible choice for a full day with some luggage." },
  { name: "Toyota Innova Crysta", file: "/fleet/Innova_crysta.webp", alt: "Toyota Innova Crysta available with a driver from Solapur", seats: "A roomy people carrier that usually seats up to 7 passengers.", suits: "Families who want more space on a long day, such as the Gangapur trip or the two-day circuit, and groups with senior members." },
  { name: "Cruiser", file: "/fleet/Cruiser.webp", alt: "Cruiser group vehicle available with a driver from Solapur", seats: "A larger group vehicle. Seating is confirmed directly for your date.", suits: "A bigger group, a joint family or a corporate outing that would otherwise need more than one car." },
];

const faqs = [
  { q: "Is the driver included with every car?", a: "Yes. Every car we offer comes with a driver." },
  { q: "How do I know the exact seating?", a: "The seat counts on this page are the usual ones for each type of car. We confirm the exact seating of the car on your date when you enquire." },
  { q: "Can I choose the car?", a: "Yes. Tell us your preferred car, or your group size, and we suggest one." },
  { q: "Do you take outstation trips?", a: "Yes, on request. Besides the Solapur temple circuit we can discuss trips to cities such as Pune and Hyderabad. Call or WhatsApp with your plan." },
];

export default function CarsPage() {
  return (
    <PageShell>
      <section className="pg-hero pg-hero-single">
        <div className="pg-hero-copy">
          <Breadcrumb trail={[{ name: "Cars", path: "/cars" }]} />
          <p className="eyebrow">Car hire with a driver</p>
          <h1>Cars with a driver in Solapur</h1>
          <p className="pg-lead">Shri Samarth Cabs offers four cars with a driver for temple trips and outstation travel from Solapur: the Swift Dzire, the Ertiga, the Toyota Innova Crysta and the Cruiser. Tell us your group size and date, and we confirm the right car and your quote directly.</p>
          <Cta />
        </div>
      </section>
      <article className="pg-body pg-wide">
        <div className="pg-cars">
          {cars.map((car) => (
            <section className="pg-car" key={car.name}>
              <Image src={car.file} alt={car.alt} width={700} height={467} />
              <div>
                <h2>{car.name}</h2>
                <p>{car.seats}</p>
                <p>{car.suits}</p>
                <a className="pg-link" href={waLink(`Preferred car: ${car.name}`)} target="_blank" rel="noopener">WhatsApp about the {car.name}</a>
              </div>
            </section>
          ))}
        </div>

        <h2>Choosing between them</h2>
        <p>If you are unsure, start with your group. Up to four people usually fit the Swift Dzire. Five to seven people, or a family with elders and luggage, usually need the Ertiga or the Toyota Innova Crysta. A larger group is best discussed with us for the Cruiser. Our guide to choosing a car for your group goes through this in more detail once you have a date in mind.</p>
        <p>Every car comes with a driver, and the quote for your trip is confirmed directly. See the trips we run most often: <Link className="pg-link" href="/packages/akkalkot-gangapur-one-day">Akkalkot and Gangapur</Link>, <Link className="pg-link" href="/packages/tuljapur-pandharpur-one-day">Tuljapur and Pandharpur</Link> and the <Link className="pg-link" href="/packages/four-temple-two-day-circuit">two-day four-temple circuit</Link>.</p>

        <h2>Questions about our cars</h2>
        <FaqList items={faqs} />
        <p className="pg-note">We do not publish fixed fares. Call or WhatsApp +91 97637 47437 and we confirm the car and the quote for your date.</p>
      </article>
    </PageShell>
  );
}
