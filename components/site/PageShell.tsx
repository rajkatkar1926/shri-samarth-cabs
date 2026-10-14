import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_PAGES, SITE_URL, waLink } from "@/lib/site";

const groups = ["Routes", "Trips", "Company", "Guides"] as const;
const topLinks = [
  { href: "/solapur-to-tuljapur-taxi", label: "Tuljapur" },
  { href: "/solapur-to-akkalkot-taxi", label: "Akkalkot" },
  { href: "/solapur-to-pandharpur-taxi", label: "Pandharpur" },
  { href: "/solapur-to-gangapur-taxi", label: "Gangapur" },
];

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={footer ? "brand footer-brand" : "brand"} href="/" aria-label="Shri Samarth Cabs home">
      <span className="brand-seal"><Image src="/brand/logo-mark.webp" alt={footer ? "" : "Shri Samarth Cabs logo: Swami Samarth"} aria-hidden={footer ? true : undefined} width={48} height={48} /></span>
      <span>Shri Samarth <b>Cabs</b><small>Solapur · Maharashtra</small></span>
    </Link>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const live = new Set(SITE_PAGES.map((p) => p.href));
  const extras = [
    { href: "/cars", label: "Cars" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ].filter((l) => live.has(l.href));
  return (
    <>
      <header className="site-header pg-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {[...topLinks, ...extras].map((link) => <Link key={link.href} href={link.href}>{link.label}<i /></Link>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-call" href={`tel:${PHONE_TEL}`} aria-label="Call Shri Samarth Cabs">Call</a>
          <a className="nav-whatsapp" href={waLink()} target="_blank" rel="noopener">WhatsApp</a>
        </div>
        <details className="pg-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {SITE_PAGES.map((p) => <Link key={p.href} href={p.href}>{p.label}</Link>)}
            <a href={`tel:${PHONE_TEL}`}>Call Shri Samarth Cabs</a>
            <a href={waLink()} target="_blank" rel="noopener">WhatsApp enquiry</a>
          </nav>
        </details>
      </header>
      <main className="pg-main">{children}</main>
      <footer className="pg-footer">
        <div className="pg-footer-top">
          <div>
            <Brand footer />
            <p>Car hire with a driver from Solapur for pilgrimage trips. Call or WhatsApp and we confirm the trip and your quote directly.</p>
            <p><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
          {groups.map((group) => {
            const items = SITE_PAGES.filter((p) => p.group === group);
            return items.length ? (
              <div key={group}>
                <h2>{group}</h2>
                <ul>{items.map((p) => <li key={p.href}><Link href={p.href}>{p.label}</Link></li>)}</ul>
              </div>
            ) : null;
          })}
        </div>
        <div className="pg-footer-base"><span>© 2026 Shri Samarth Cabs, Solapur, Maharashtra</span><Link href="/">Back to home</Link></div>
      </footer>
      <div className="mobile-contact-bar pg-contact-bar" aria-label="Quick contact">
        <a href={`tel:${PHONE_TEL}`}>Call</a>
        <a href={waLink()} target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </>
  );
}

export function Cta({ extra, label = "WhatsApp for a quote" }: { extra?: string; label?: string }) {
  return (
    <div className="pg-cta">
      <a className="pg-btn pg-btn-primary" href={waLink(extra)} target="_blank" rel="noopener">{label}</a>
      <a className="pg-btn pg-btn-ghost" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
    </div>
  );
}

export function Breadcrumb({ trail }: { trail: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...trail];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: `${SITE_URL}${item.path === "/" ? "" : item.path}` })),
  };
  return (
    <>
      <nav className="pg-crumbs" aria-label="Breadcrumb">
        {all.map((item, i) => (i < all.length - 1 ? <span key={item.path}><Link href={item.path}>{item.name}</Link> / </span> : <span key={item.path} aria-current="page">{item.name}</span>))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="pg-faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
