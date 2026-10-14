import Image from "next/image";
import Link from "next/link";
import { routes, type RouteInfo } from "@/lib/routes";
import { waLink } from "@/lib/site";
import { Breadcrumb, Cta, FaqList, PageShell } from "./PageShell";

export function RoutePage({ route }: { route: RouteInfo }) {
  const others = routes.filter((r) => r.slug !== route.slug);
  return (
    <PageShell>
      <section className="pg-hero">
        <div className="pg-hero-copy">
          <Breadcrumb trail={[{ name: `Solapur to ${route.place}`, path: `/${route.slug}` }]} />
          <p className="eyebrow">Car hire with a driver</p>
          <h1>Solapur to {route.place} by car with a driver</h1>
          <p className="pg-lead">{route.intro}</p>
          <ul className="pg-facts">
            <li><b>{route.distance}</b><span>from Solapur (Google Maps estimate)</span></li>
            <li><b>Driver included</b><span>on every car</span></li>
            <li><b>Quote on call</b><span>confirmed directly</span></li>
          </ul>
          <Cta extra={`Destination: ${route.place}`} />
        </div>
        <div className="pg-hero-image">
          <Image src={route.image} alt={route.imageAlt} width={512} height={768} priority />
        </div>
      </section>

      <article className="pg-body">
        <h2>The trip from Solapur to {route.place}</h2>
        {route.trip.map((p) => <p key={p}>{p}</p>)}

        <h2>{route.templeName} in brief</h2>
        {route.temple.map((p) => <p key={p}>{p}</p>)}
        <p><a className="pg-link" href={route.mapsUrl} target="_blank" rel="noopener noreferrer">Open the Google Maps driving route to {route.place}</a></p>

        <h2>Ways to combine {route.place} with other temples</h2>
        <p>{route.combine.text}</p>
        <p><Link className="pg-link" href={route.combine.href}>{route.combine.label}</Link></p>

        <h2>Which car suits your group</h2>
        <p>{route.group}</p>
        <p><Link className="pg-link" href="/cars">See our cars</Link></p>

        <h2>What to tell us when you enquire</h2>
        <ul className="pg-list">{route.enquire.map((e) => <li key={e}>{e}</li>)}</ul>
        <Cta extra={`Destination: ${route.place}`} label={`WhatsApp about ${route.place}`} />

        <h2>Questions about Solapur to {route.place}</h2>
        <FaqList items={route.faqs} />

        <h2>Other routes from Solapur</h2>
        <ul className="pg-list pg-routes">{others.map((r) => <li key={r.slug}><Link className="pg-link" href={`/${r.slug}`}>Solapur to {r.place} taxi</Link> <span>({r.distance})</span></li>)}</ul>
        <p className="pg-note">Distances are Google Maps driving estimates from central Solapur and can change with your pickup point and route. We do not publish fixed fares: <a className="pg-link" href={waLink(`Destination: ${route.place}`)} target="_blank" rel="noopener">message us</a> and we confirm your quote directly.</p>
      </article>
    </PageShell>
  );
}
