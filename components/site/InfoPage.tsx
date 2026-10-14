import Link from "next/link";
import type { InfoPage as InfoPageData } from "@/lib/info";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/site";
import { Breadcrumb, Cta, FaqList, PageShell } from "./PageShell";

export function InfoPage({ page }: { page: InfoPageData }) {
  return (
    <PageShell>
      <section className="pg-hero pg-hero-single">
        <div className="pg-hero-copy">
          <Breadcrumb trail={[{ name: page.crumb, path: `/${page.slug}` }]} />
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="pg-lead">{page.lead}</p>
          <Cta />
        </div>
      </section>
      <article className="pg-body">
        {page.sections.map((section) => (
          <section key={section.h2}>
            <h2>{section.h2}</h2>
            {section.paras?.map((p) => <p key={p}>{p}</p>)}
            {section.list && <ul className="pg-list">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
            {section.links && <ul className="pg-list">{section.links.map((l) => <li key={l.href}><Link className="pg-link" href={l.href}>{l.label}</Link></li>)}</ul>}
          </section>
        ))}
        {page.faqs && <FaqList items={page.faqs} />}
        {page.kind === "contact" && (
          <p className="pg-contact-lines">
            <a className="pg-link" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a><br />
            <a className="pg-link" href={waLink()} target="_blank" rel="noopener">WhatsApp {PHONE_DISPLAY}</a><br />
            <a className="pg-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        )}
        <p className="pg-note">Distances are Google Maps driving estimates from central Solapur and can change with your pickup point and route. We do not publish fixed fares: we confirm your quote directly.</p>
      </article>
    </PageShell>
  );
}
