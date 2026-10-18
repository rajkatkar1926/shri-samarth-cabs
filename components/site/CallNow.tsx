import { Phone } from "lucide-react";

const PHONE_HREF = "tel:+919511600787";

type Props = {
  size?: "lg" | "md" | "sm" | "nav";
  where: string;
  label?: string;
  className?: string;
};

/** One highlighted Call Now button, used in every section so the look never drifts. */
export function CallNow({ size = "md", where, label = "Call Now", className = "" }: Props) {
  return (
    <a
      className={`call-now call-now-${size} ${className}`.trim()}
      href={PHONE_HREF}
      aria-label={`Call Shri Samarth Cabs now on +91 95116 00787 (${where})`}
      data-call-from={where}
    >
      <span className="call-now-icon" aria-hidden="true"><Phone size={size === "sm" || size === "nav" ? 16 : 22} strokeWidth={2.4} /></span>
      <span className="call-now-text"><b>{label}</b>{size === "sm" || size === "nav" ? null : <small>+91 95116 00787</small>}</span>
    </a>
  );
}
