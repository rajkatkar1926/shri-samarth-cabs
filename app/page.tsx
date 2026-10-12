"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, MapPin, Menu, Phone, Users, X } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { PathDraw } from "@/components/motion/PathDraw";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollPin } from "@/components/motion/ScrollPin";
import { Button } from "@/components/ui/button";

const phone = "+919763747437";
const wa = `https://wa.me/919763747437?text=${encodeURIComponent("Hello, I'm planning a trip from Solapur.\nDestination:\nTravel date:\nPreferred car:\nPlease share route availability and a quote.")}`;
const googleMapsRoute = (destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("SPOT ON Nivant Lodge, Solapur")}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
const stops = ["Tuljapur", "Akkalkot", "Gangapur", "Pandharpur", "Full two-day circuit"];
const dham = [
  { id: "tuljapur", number: "01", title: "Tulja Bhavani", local: "तुळजाभवानी", image: "/temples/tuljapur/2.png", imageAlt: "Tulja Bhavani murti adorned with flowers", location: "Tuljapur", distance: "44.9 km", mapsUrl: googleMapsRoute("Shri Tuljabhavani Temple, Tuljapur"), descriptor: "A pilgrimage stop on the Tuljapur + Pandharpur day trip." },
  { id: "akkalkot", number: "02", title: "Akkalkot", local: "अक्कलकोट", image: "/temples/akkalkot/4.png", imageAlt: "Shrine and murti image supplied for the Akkalkot pilgrimage stop", location: "Akkalkot", distance: "43.3 km", mapsUrl: googleMapsRoute("Shri Vatavruksha Swami Maharaj Devasthan, Akkalkot"), descriptor: "A pilgrimage stop on the Akkalkot + Gangapur day trip." },
  { id: "gangapur", number: "03", title: "Gangapur", local: "गाणगापूर", image: "/temples/gangapur/6.png", imageAlt: "Temple tower image supplied for the Gangapur pilgrimage stop", location: "Ganagapur Dattatreya Temple", distance: "110 km", mapsUrl: googleMapsRoute("Ganagapur Dattatreya Temple Sri Kshetra Ganagapur, Deval Ganagapur, Afzalpur Taluk, Karnataka"), descriptor: "A pilgrimage stop on the Akkalkot + Gangapur day trip." },
  { id: "pandharpur", number: "04", title: "Pandharpur", local: "पंढरपूर", image: "/temples/pandharpur/5.jpeg", imageAlt: "Vitthal murti in the Pandharpur temple", location: "Pandharpur", distance: "69.2 km", mapsUrl: googleMapsRoute("Shree Vitthal Rukmini Temple, Pandharpur"), descriptor: "A pilgrimage stop on the Tuljapur + Pandharpur day trip." },
];
const fleet = [
  { name: "Swift Dzire", file: "/fleet/Swift_Dzire.jpeg", alt: "Swift Dzire car photo supplied for the fleet" },
  { name: "Ertiga", file: "/fleet/Ertiga.jpeg", alt: "Ertiga car photo supplied for the fleet" },
  { name: "Toyota Innova Crysta", file: "/fleet/Innova_crysta.jpeg", alt: "Toyota Innova Crysta car photo supplied for the fleet" },
  { name: "Cruiser", file: "/fleet/Cruiser.jpeg", alt: "Cruiser vehicle photo supplied for the fleet" },
];

function useScrollLetters() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = Math.min(window.scrollY * 0.16, 180);
        element.style.setProperty("--hero-shift", `${distance}px`);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); };
  }, []);
  return ref;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("tuljapur");
  const [scrolled, setScrolled] = useState(false);
  const links = [{ href: "#tuljapur", label: "Tuljapur" }, { href: "#akkalkot", label: "Akkalkot" }, { href: "#gangapur", label: "Gangapur" }, { href: "#pandharpur", label: "Pandharpur" }];
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", update, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-28% 0px -58% 0px", threshold: [0, .15, .5] });
    links.forEach(({ href }) => { const section = document.querySelector(href); if (section) observer.observe(section); });
    return () => { window.removeEventListener("scroll", update); observer.disconnect(); };
  }, []);
  return <>
    <div className="scroll-progress" data-scroll-progress />
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Shri Samarth Cabs home"><span className="brand-seal">S</span><span>Shri Samarth <b>Cabs</b><small>Solapur · Maharashtra</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <a key={link.href} href={link.href} className={active === link.href.slice(1) ? "is-active" : ""} aria-current={active === link.href.slice(1) ? "location" : undefined}>{link.label}<i /></a>)}</nav>
      <div className="nav-actions"><a className="nav-call" href={`tel:${phone}`} aria-label="Call Shri Samarth Cabs"><Phone size={15} /> <span>Call</span></a><MagneticButton className="nav-whatsapp" href={wa} target="_blank" rel="noopener">WhatsApp <ArrowUpRight size={15} /></MagneticButton></div>
      <Button variant="outline" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
    </header>
    <AnimatePresence>{open && <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} aria-label="Mobile navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16} /></a>)}<a href="#circuit" onClick={() => setOpen(false)}>The circuit</a><a href="#packages" onClick={() => setOpen(false)}>Trip options</a><a href="#fleet" onClick={() => setOpen(false)}>Our cars</a><a href={`tel:${phone}`} onClick={() => setOpen(false)}>Call Shri Samarth Cabs</a><a href={wa} target="_blank" rel="noopener" onClick={() => setOpen(false)}>WhatsApp enquiry</a></motion.nav>}</AnimatePresence>
  </>;
}

function Hero() {
  const letterRef = useScrollLetters();
  const heroRef = useRef<HTMLElement>(null);
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("1");
  const reduce = useReducedMotion();
  useEffect(() => {
    const image = heroRef.current?.querySelector(".hero-photo");
    const hero = heroRef.current;
    if (!image || !hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(image, { scale: 1 }, { scale: 1.12, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 } });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);
  const bookingUrl = `https://wa.me/919763747437?text=${encodeURIComponent(`Hello, I'm planning a trip from Solapur.\nDestination: ${destination || "Not chosen yet"}\nTravel date: ${travelDate || "Not chosen yet"}\nGroup size: ${travellers}\nPreferred car: \nPlease share route availability and a quote.`)}`;
  return <section className="hero" id="top" ref={heroRef}>
    <div className="hero-media">
      <Image className="hero-photo" src="/temples/main/5.PNG" alt="Pilgrimage route background image supplied for Shri Samarth Cabs" fill priority quality={92} sizes="100vw" />
      <div className="hero-shade" />
    </div>
    <div ref={letterRef} className="hero-outline" aria-hidden="true"><span className="outline-left">SOLAPUR</span><span className="outline-right">FOUR STOPS</span></div>
    <div className="hero-content">
      <motion.p className="eyebrow hero-eyebrow" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .35 }}>A quieter way to make the journey</motion.p>
      <motion.h1 initial={reduce ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .5, ease: [0.22, 1, .36, 1] }}>Pilgrimage travel<br /><em>from Solapur.</em></motion.h1>
      <motion.p className="hero-description" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85, duration: .7 }}>Driver-included car travel from Solapur. Share your destination and date; we’ll confirm the route and your quote.</motion.p>
      <motion.div className="booking-card" initial={reduce ? false : { y: 44, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 90, damping: 18, delay: 1.05 }}>
        <label className="booking-field"><span><MapPin size={14} /> From</span><input aria-label="Pickup city" value="Solapur" readOnly /></label>
        <label className="booking-field"><span><ArrowDownRight size={14} /> To</span><span className="select-wrap"><select aria-label="Choose destination" value={destination} onChange={(e) => setDestination(e.target.value)}><option value="">Choose destination</option>{stops.map((stop) => <option key={stop}>{stop}</option>)}</select><ChevronDown size={15} /></span></label>
        <label className="booking-field"><span><CalendarDays size={14} /> Date</span><input aria-label="Travel date" type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} /></label>
        <label className="booking-field people-field"><span><Users size={14} /> People</span><input aria-label="Number of travellers" type="number" min="1" inputMode="numeric" value={travellers} onChange={(e) => setTravellers(e.target.value)} /></label>
        <a className="booking-submit" href={bookingUrl} target="_blank" rel="noopener">Get a trip quote <ArrowUpRight size={16} /></a>
      </motion.div>
      <div className="hero-trust"><span><Check size={14} /> Driver included</span><span><Check size={14} /> Call or WhatsApp</span><span><Check size={14} /> Quote confirmed directly</span></div>
    </div>
    <div className="hero-bottom"><span>BASED IN SOLAPUR</span><a href="#circuit">SCROLL TO EXPLORE <ArrowDown size={14} /></a><span>01 — 04 / PILGRIMAGE STOPS</span></div>
    <div className="hero-side-note">A JOURNEY MADE FOR THE DARSHAN</div>
  </section>;
}

function Circuit() {
  const cards = [
    { n: "01", name: "Tuljapur + Pandharpur", tag: "ONE DAY", text: "A one-day pilgrimage package. Exact stops, timings and quote confirmed directly." },
    { n: "02", name: "Akkalkot + Gangapur", tag: "ONE DAY", text: "A one-day pilgrimage package. Route and quote confirmed directly." },
    { n: "03", name: "Four destinations + Solapur", tag: "TWO DAYS", text: "A two-day circuit including local Solapur darshan. Stops, overnight plan and fare confirmed directly." },
  ];
  return <section className="circuit-section" id="circuit">
    <div className="section-kicker"><span>THE SOLAPUR CIRCUIT</span><span>04 DESTINATIONS · 01 HOME BASE</span></div>
    <div className="circuit-layout">
      <div className="circuit-map-wrap"><PathDraw /><div className="map-legend"><span className="legend-dot" />Illustrative route diagram <small>Route sequence and availability confirmed directly</small></div></div>
      <div className="circuit-copy"><Reveal><p className="eyebrow">The map is only the beginning</p><h2>One home base.<br /><em>Many meaningful stops.</em></h2><p className="circuit-intro">Shri Samarth Cabs is based in Solapur and offers car hire with a driver for customer-chosen trips. Pilgrimage circuits are one way to travel.</p></Reveal>
        <div className="circuit-options">{cards.map((card) => <Reveal key={card.n}><article className="circuit-option"><span className="option-no">{card.n}</span><div><span className="option-tag">{card.tag}</span><h3>{card.name}</h3><p>{card.text}</p></div><ArrowUpRight className="option-arrow" size={17} /></article></Reveal>)}</div>
      </div>
    </div>
  </section>;
}

function TempleStory({ item }: { item: typeof dham[number] }) {
  const imageReveal = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = imageReveal.current;
    const trigger = document.querySelector<HTMLElement>(`.temple-${item.id}`);
    if (!trigger) return;
    const tween = element ? gsap.fromTo(element, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", ease: "none", scrollTrigger: { trigger, start: "top 85%", end: "top 20%", scrub: 1 } }) : undefined;
    const subject = trigger.querySelector(".temple-still-image");
    const zoomedScale = window.matchMedia("(max-width: 760px)").matches ? 1.12 : 1.24;
    const scale = subject ? gsap.fromTo(subject, { scale: 1 }, { scale: zoomedScale, ease: "none", scrollTrigger: { trigger, start: "top top", end: "+=110%", scrub: 1 } }) : undefined;
    return () => { tween?.scrollTrigger?.kill(); tween?.kill(); scale?.scrollTrigger?.kill(); scale?.kill(); };
  }, [item.id]);
  return <ScrollPin id={item.id} className={`temple-story temple-${item.id}`}>
    <div className="temple-media">
      <div className="temple-still-frame" ref={imageReveal}><ParallaxImage src={item.image} alt={item.imageAlt} className="temple-still-image" sizes="(max-width: 768px) 100vw, 70vw" quality={92} /></div>
      <div className="temple-overlay" />
    </div>
    <div className="temple-story-inner"><div className="temple-index">{item.number} <span>/ PILGRIMAGE STOP</span></div><div className="temple-story-copy"><p className="eyebrow">SOLAPUR · {item.number} OF 04</p><p className="temple-local">{item.local}</p><h2>{item.title}</h2><p>{item.descriptor}</p><div className="temple-facts"><a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open Google Maps driving route from Solapur to ${item.location}`}><MapPin size={15} /> Distance from Solapur <b>{item.distance} · Google Maps</b><ArrowUpRight size={13} /></a></div><a href={`${wa}%0ADestination%3A%20${encodeURIComponent(item.location)}`} className="text-link" target="_blank" rel="noopener">Ask about this destination <ArrowUpRight size={16} /></a></div></div>
  </ScrollPin>;
}

function Packages() {
  const packages = [
    { id: "01", title: "Akkalkot + Gangapur", time: "ONE DAY", note: "Pilgrimage package. Trip details and quote confirmed directly.", art: "package-art-1" },
    { id: "02", title: "Tuljapur + Pandharpur", time: "ONE DAY", note: "Pilgrimage package. Stops, timings, inclusions, and final quote confirmed directly.", art: "package-art-2" },
    { id: "03", title: "Four-destination circuit", time: "TWO DAYS", note: "Includes Solapur local darshan with the circuit. Overnight plan and price confirmed directly.", art: "package-art-3" },
  ];
  return <section className="packages-section" id="packages"><div className="section-heading centered"><p className="eyebrow">Pilgrimage trip options</p><h2>Plan around what<br /><em>matters to you.</em></h2><p>Tell us your dates and group size. We’ll discuss the trip details and provide a quote directly.</p></div><div className="package-grid">{packages.map((item) => <Reveal key={item.id}><article className={`package-card ${item.art}`}><div className="package-topline"><span>{item.id} / CIRCUIT</span><span className="package-duration">{item.time}</span></div><div className="package-motif" aria-hidden="true"><span className="motif-sun"/><span className="motif-horizon"/><span className="motif-road"/></div><div className="package-content"><h3>{item.title}</h3><p>{item.note}</p><div className="package-bottom"><span className="package-price">Package quote<br /><b>Ask us</b></span><a href={`${wa}%0AInterested%20in%3A%20${encodeURIComponent(item.title)}`} target="_blank" rel="noopener" aria-label={`Ask for a quote for ${item.title}`}><ArrowUpRight size={19} /></a></div></div></article></Reveal>)}</div><p className="package-disclaimer">Package totals depend on dates and group size. We confirm the itinerary and quote directly.</p></section>;
}

function Fleet() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const dragStart = useRef(0);
  const dragOrigin = useRef(0);
  const dragMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!track.current || !dragStart.current) return;
    const dx = event.clientX - dragStart.current;
    track.current.scrollLeft = dragOrigin.current - dx;
    const itemWidth = track.current.querySelector(".fleet-card")?.clientWidth ?? 1;
    setActive(Math.min(fleet.length - 1, Math.max(0, Math.round(track.current.scrollLeft / (itemWidth + 20)))));
  };
  return <section className="fleet-section" id="fleet"><div className="fleet-heading"><div><p className="eyebrow">A car for the way you travel</p><h2>Choose your<br /><em>ride for the road.</em></h2></div><p>Four car options, each with a driver. Share your route for a trip quote.</p></div><div className="fleet-track" ref={track} onPointerDown={(e) => { dragStart.current = e.clientX; dragOrigin.current = track.current?.scrollLeft ?? 0; e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={dragMove} onPointerUp={() => { dragStart.current = 0; }} onPointerCancel={() => { dragStart.current = 0; }}>
      {fleet.map((car, index) => <article className="fleet-card" key={car.name}><div className="fleet-card-top"><span>0{index + 1} / 04</span><span>DRIVER INCLUDED</span></div><div className="fleet-image"><ParallaxImage src={car.file} alt={car.alt} sizes="(max-width: 760px) 87vw, 33vw" quality={90} /></div><div className="fleet-info"><div><h3>{car.name}</h3><p>Driver included</p></div></div></article>)}
    </div><div className="fleet-controls"><div className="fleet-pagination">{fleet.map((car, i) => <button key={car.name} aria-label={`Show ${car.name}`} aria-current={active === i} onClick={() => { if (track.current) { const width = track.current.querySelector(".fleet-card")?.clientWidth ?? 0; track.current.scrollTo({ left: i * (width + 20), behavior: "smooth" }); setActive(i); } }} />)}</div><span>DRAG TO EXPLORE <ArrowRight size={15} /></span></div></section>;
}

const reviews = [
  { quote: "Our outstation family trip was perfectly arranged. Budget-friendly rates and on-time pickup made the journey stress-free. Definitely recommending to others!", name: "Riya Thakur" },
  { quote: "We booked for a corporate team outing. Excellent service with great comfort and professional driving. Everyone appreciated the smooth travel experience.", name: "Kunal Patil" },
  { quote: "Affordable pricing and top-quality service. The driver had good route knowledge, which saved us time. Will surely travel again with you!", name: "Harish Chavan" },
];
function Testimonials() {
  return <section className="reviews-section"><div className="review-wave" aria-hidden="true"><svg viewBox="0 0 1440 160" preserveAspectRatio="none"><path d="M0 60 C210 150 300 20 520 65 S830 155 1060 62 S1300 30 1440 90 V160 H0Z"/><path d="M0 95 C190 10 360 150 560 94 S860 15 1070 98 S1280 120 1440 48 V160 H0Z"/></svg></div><div className="reviews-inner"><Reveal><div className="review-heading"><p className="eyebrow">Words from the road</p><h2>Shared by travellers.</h2><p>Customer testimonials from our earlier website.</p></div></Reveal><div className="review-marquee" aria-label="Customer testimonials"><div className="review-track">{[...reviews, ...reviews].map((review, i) => <figure className="review-card" key={`${review.name}-${i}`}><span className="review-quote-mark">“</span><blockquote>{review.quote}</blockquote><figcaption><span>{review.name}</span><small>Customer testimonial</small></figcaption></figure>)}</div></div></div></section>;
}

function MobileContactBar() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const footer = document.querySelector(".footer");
    if (!hero || !footer) return;
    const intersections = new Map<Element, boolean>([[hero, true], [footer, false]]);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => intersections.set(entry.target, entry.isIntersecting));
      setVisible(!Array.from(intersections.values()).some(Boolean));
    }, { threshold: 0.04 });
    observer.observe(hero);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return <AnimatePresence>{visible && <motion.div className="mobile-contact-bar" aria-label="Quick contact" initial={reduce ? false : { y: 64, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 64, opacity: 0 }} transition={{ duration: reduce ? 0 : .28, ease: [0.22, 1, .36, 1] }}><a href={`tel:${phone}`}><Phone size={16} /> Call</a><a href={wa} target="_blank" rel="noopener">WhatsApp <ArrowUpRight size={16} /></a></motion.div>}</AnimatePresence>;
}

function Footer() {
  return <footer className="footer" id="contact"><div className="footer-silhouette" aria-hidden="true"><span className="temple-tower tower-a"/><span className="temple-tower tower-b"/><span className="temple-dome"/></div><div className="footer-content"><Reveal><p className="eyebrow">Your next journey starts here</p><h2>Chala, Darshan<br /><em>Karuya?</em></h2><p>Share your destination and travel date. Call or WhatsApp Shri Samarth Cabs to discuss route availability and get a quote.</p><div className="footer-actions"><MagneticButton className="footer-cta" href={wa} target="_blank" rel="noopener">WhatsApp to plan your trip <ArrowUpRight size={18} /></MagneticButton><a className="footer-call" href={`tel:${phone}`}><Phone size={16} /> +91 97637 47437</a></div></Reveal></div><div className="footer-base"><a className="brand footer-brand" href="#top"><span className="brand-seal">S</span><span>Shri Samarth <b>Cabs</b><small>Solapur · Maharashtra</small></span></a><span>Driver-included car travel from Solapur</span><a href="mailto:Swamicabs48@gmail.com">Swamicabs48@gmail.com</a><span>© 2026 Shri Samarth Cabs</span></div></footer>;
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => { const id = window.setTimeout(() => setLoaded(true), reduce ? 0 : 900); return () => window.clearTimeout(id); }, [reduce]);
  return <>
    <AnimatePresence>{!loaded && <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .55 } }}><div className="preloader-inner"><svg className="bell" viewBox="0 0 64 72" fill="none" aria-hidden="true"><path d="M12 48h40l-5-8V27a15 15 0 0 0-30 0v13l-5 8Z"/><path d="M25 56a7 7 0 0 0 14 0M32 6v5"/></svg><p aria-label="Solapur to darshan">{"SOLAPUR TO DARSHAN".split("").map((letter, i) => <motion.span key={`${letter}-${i}`} aria-hidden="true" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .035, duration: .28 }}>{letter === " " ? "\u00a0" : letter}</motion.span>)}</p><div className="preloader-line"><i /></div></div></motion.div>}</AnimatePresence>
    <Header />
    <main><Hero /><div className="intro-band"><div><span>BASED IN</span><strong>Solapur</strong></div><i /><div><span>CAR HIRE</span><strong>Driver included</strong></div><i /><div><span>TRAVEL</span><strong>Your chosen destination</strong></div><i /><div><span>ENQUIRE</span><strong>Call or WhatsApp</strong></div></div><Circuit /><section className="journey-heading" id="journey"><Reveal><p className="eyebrow">Four stops, one shared intention</p><h2>Make space for<br /><em>the moments between.</em></h2><p>Distances are Google Maps driving estimates from SPOT ON Nivant Lodge, Solapur; routes can change.</p></Reveal></section>{dham.map((item) => <TempleStory item={item} key={item.id} />)}<Packages /><Fleet /><Testimonials /></main>
    <Footer />
    <MobileContactBar />
  </>;
}
