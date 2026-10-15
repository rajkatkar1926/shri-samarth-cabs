import Image from "next/image";
import Link from "next/link";
import type { OutstationInfo } from "@/lib/outstation";
import { waLink } from "@/lib/site";
import { CallNow } from "./CallNow";
import { Breadcrumb, FaqList, PageShell } from "./PageShell";

export function OutstationPage({ page }: { page: OutstationInfo }) {
  return (
    <PageShell>
      <section className="pg-hero">
        <div className="pg-hero-copy">
          <Breadcrumb trail={[{ name: page.crumb, path: `/${page.slug}` }]} />
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="pg-lead">{page.lead}</p>
          <ul className="pg-facts">
            {page.facts.map((f) => <li key={f.big}><b>{f.big}</b><span>{f.small}</span></li>)}
          </ul>
          <div className="pg-cta">
            <CallNow size="lg" where={`${page.slug}-hero`} />
            <a className="pg-btn pg-btn-ghost" href={waLink(page.waExtra)} target="_blank" rel="noopener" data-whatsapp-from={`${page.slug}-hero`}>WhatsApp us</a>
          </div>
        </div>
        <div className="pg-hero-image">
          <Image src={page.image} alt={page.imageAlt} width={640} height={420} priority />
        </div>
      </section>

      <article className="pg-body">
        {page.sections.map((s, i) => (
          <section key={s.h2}>
            <h2>{s.h2}</h2>
            {s.paras?.map((p) => <p key={p}>{p}</p>)}
            {s.list && <ul className="pg-list">{s.list.map((item) => <li key={item}>{item}</li>)}</ul>}
            {i === 1 && <p><CallNow size="md" where={`${page.slug}-mid`} /></p>}
          </section>
        ))}
        {page.mapsUrl && <p><a className="pg-link" href={page.mapsUrl} target="_blank" rel="noopener noreferrer">{page.mapsLabel}</a></p>}
        <p><Link className="pg-link" href="/cars">See our cars</Link></p>

        <h2>Questions and answers</h2>
        <FaqList items={page.faqs} />

        <h2>Other routes from Solapur</h2>
        <ul className="pg-list pg-routes">{page.related.map((r) => <li key={r.href}><Link className="pg-link" href={r.href}>{r.label}</Link></li>)}</ul>

        <p className="pg-note">Distances and times are Google Maps driving estimates from central Solapur and change with your pickup point, the hour and the traffic. We do not publish fixed fares: call or <a className="pg-link" href={waLink(page.waExtra)} target="_blank" rel="noopener" data-whatsapp-from={`${page.slug}-note`}>message us</a> and we confirm your quote directly.</p>
        <p><CallNow size="lg" where={`${page.slug}-end`} label="Call Now to Book" /></p>
      </article>
    </PageShell>
  );
}
