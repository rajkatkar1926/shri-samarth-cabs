import type { Metadata } from "next";
import { Breadcrumb, PageShell } from "@/components/site/PageShell";
import { EMAIL, PHONE_DISPLAY } from "@/lib/site";

const title = "Privacy | Shri Samarth Cabs";
const description = "How Shri Samarth Cabs, Solapur handles your calls, WhatsApp messages and website cookies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
};

export default function Page() {
  return (
    <PageShell>
      <section className="pg-hero pg-hero-single">
        <div className="pg-hero-copy">
          <Breadcrumb trail={[{ name: "Privacy", path: "/privacy" }]} />
          <p className="eyebrow">Your data</p>
          <h1>Privacy at Shri Samarth Cabs</h1>
          <p className="pg-lead">We keep this short because we collect very little. Updated 15 October 2026.</p>
        </div>
      </section>
      <article className="pg-body">
        <h2>Who we are</h2>
        <p>Shri Samarth Cabs, near Bus Stand, Shivaji Maharaj Chowk, Solapur 413001, Maharashtra. For any question about your data, write to <a className="pg-link" href={`mailto:${EMAIL}`}>{EMAIL}</a> or call {PHONE_DISPLAY}.</p>

        <h2>What we collect</h2>
        <ul className="pg-list">
          <li>When you call or message us on WhatsApp, we see your phone number and what you tell us (trip, date, pickup, number of passengers). We use it only to answer you and to run your trip.</li>
          <li>This website has no sign-up and no booking form. It does not ask for your name, ID or payment details.</li>
        </ul>

        <h2>Cookies and the Google tag</h2>
        <p>If you tap Accept on the cookie notice, a Google Ads tag counts that you reached our site from an advertisement and that you tapped Call or WhatsApp. It helps us see whether our ads work. If you tap No thanks, or ignore the notice, the tag does not load. Google handles that data under its own privacy policy. We do not receive your phone number from Google, and we do not sell your data.</p>

        <h2>How long we keep it</h2>
        <p>We keep trip enquiries and messages only as long as needed to serve you and to meet our records and tax duties, then delete them.</p>

        <h2>Your rights</h2>
        <p>You can ask us what we hold about you, ask us to correct it, or ask us to delete it, under India's Digital Personal Data Protection Act 2023. Write to the email above and we reply within a reasonable time. If you are unhappy with our answer, you may complain to the Data Protection Board of India.</p>
      </article>
    </PageShell>
  );
}
