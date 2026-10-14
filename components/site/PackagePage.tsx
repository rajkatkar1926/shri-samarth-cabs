import Image from "next/image";
import Link from "next/link";
import { packages, type PackageInfo } from "@/lib/packages";
import { Breadcrumb, Cta, FaqList, PageShell } from "./PageShell";

export function PackagePage({ pack }: { pack: PackageInfo }) {
  const others = packages.filter((p) => p.slug !== pack.slug);
  const extra = `Interested in: ${pack.name}`;
  return (
    <PageShell>
      <section className="pg-hero">
        <div className="pg-hero-copy">
          <Breadcrumb trail={[{ name: pack.name, path: `/packages/${pack.slug}` }]} />
          <p className="eyebrow">{pack.duration} · driver included</p>
          <h1>{pack.h1}</h1>
          <p className="pg-lead">{pack.intro}</p>
          <ul className="pg-facts">
            <li><b>{pack.duration}</b><span>from Solapur</span></li>
            <li><b>Driver included</b><span>on every car</span></li>
            <li><b>Quote on call</b><span>confirmed directly</span></li>
          </ul>
          <Cta extra={extra} />
        </div>
        <div className={`pg-hero-image${pack.images.length > 1 ? " pg-duo" : ""}`}>
          {pack.images.map((img) => <Image key={img.src} src={img.src} alt={img.alt} width={img.w} height={img.h} priority />)}
        </div>
      </section>

      <article className="pg-body">
        <h2>Stops on this trip</h2>
        <ul className="pg-list">{pack.stops.map((s) => <li key={s.name}><b>{s.name}.</b> {s.text}</li>)}</ul>

        <h2>How the trip is usually shaped</h2>
        {pack.shape.map((p) => <p key={p}>{p}</p>)}

        <h2>Who this trip suits</h2>
        <ul className="pg-list">{pack.suits.map((s) => <li key={s}>{s}</li>)}</ul>

        <h2>What "quote confirmed directly" means</h2>
        {pack.quote.map((p) => <p key={p}>{p}</p>)}

        <h2>What we need from you</h2>
        <ul className="pg-list">{pack.needs.map((n) => <li key={n}>{n}</li>)}</ul>
        <Cta extra={extra} label={`WhatsApp about ${pack.name}`} />

        <h2>Read more about each stop</h2>
        <ul className="pg-list">{pack.routes.map((r) => <li key={r.href}><Link className="pg-link" href={r.href}>{r.label}</Link></li>)}<li><Link className="pg-link" href="/cars">Our cars, all with a driver</Link></li></ul>

        <h2>Questions about this trip</h2>
        <FaqList items={pack.faqs} />

        <h2>Other trips from Solapur</h2>
        <ul className="pg-list">{others.map((p) => <li key={p.slug}><Link className="pg-link" href={`/packages/${p.slug}`}>{p.name}</Link> <span>({p.duration.toLowerCase()})</span></li>)}</ul>
        <p className="pg-note">Distances are Google Maps driving estimates from central Solapur and can change with your pickup point and route. We do not publish fixed package prices; we confirm your quote directly.</p>
      </article>
    </PageShell>
  );
}
