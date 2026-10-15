"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { ADS_CALL_TAP_LABEL, ADS_ID, ADS_WHATSAPP_TAP_LABEL } from "@/lib/site";

const KEY = "ssc-cookie-choice";

declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
}

function read(): string | null {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

/** Cookie notice plus the Google Ads tag. The tag loads only after the visitor taps Accept. Renders nothing until ADS_ID is set. */
export function ConsentTag() {
  const [choice, setChoice] = useState<string | null | undefined>(undefined);

  useEffect(() => { setChoice(read()); }, []);

  useEffect(() => {
    if (choice !== "yes" || !ADS_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest("a");
      const href = a?.getAttribute("href") ?? "";
      if (!a || !window.gtag) return;
      const where = a.getAttribute("data-call-from") ?? a.getAttribute("data-whatsapp-from") ?? "page";
      if (href.startsWith("tel:") && ADS_CALL_TAP_LABEL) window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_CALL_TAP_LABEL}`, event_label: where });
      else if (href.includes("wa.me") && ADS_WHATSAPP_TAP_LABEL) window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_WHATSAPP_TAP_LABEL}`, event_label: where });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [choice]);

  if (!ADS_ID || choice === undefined) return null;

  const decide = (value: "yes" | "no") => {
    try { localStorage.setItem(KEY, value); } catch { /* choice just lasts this visit */ }
    setChoice(value);
  };

  return (
    <>
      {choice === "yes" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
          <Script id="ads-tag" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${ADS_ID}');`}</Script>
        </>
      )}
      {choice === null && (
        <div className="cookie-note" role="dialog" aria-label="Cookie notice">
          <p>We use a Google cookie to count how many people find us through our ads and tap Call or WhatsApp. Nothing else. <Link href="/privacy">Read how we handle your data</Link>.</p>
          <div>
            <button type="button" onClick={() => decide("yes")}>Accept</button>
            <button type="button" className="cookie-no" onClick={() => decide("no")}>No thanks</button>
          </div>
        </div>
      )}
    </>
  );
}
