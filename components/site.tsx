import type { ReactNode } from "react";
import { company, navigation, services, steps, contactHref } from "@/data/site-data";

export function Arrow() { return <span aria-hidden="true">↗</span>; }

export function Brand() {
  return <a className="brand" href="/" aria-label="STEADWIN GROUP home"><span className="brand-mark"><img src="/assets/steadwin-logo.jpg" width="60" height="60" alt="" /></span><span className="brand-name">STEADWIN<span>G R O U P</span></span></a>;
}

function ContactIcon({ type }: { type: "mail" | "phone" | "pin" | "whatsapp" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{type === "mail" ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></> : type === "pin" ? <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></> : type === "phone" ? <path d="m7 3 3 5-2 2c1.3 2.7 3.3 4.7 6 6l2-2 5 3-1 4C10 21 3 14 3 4l4-1Z" /> : <><path d="M20.5 11.7a8.3 8.3 0 0 1-12.3 7.4L3.5 20.5l1.4-4.7a8.3 8.3 0 1 1 15.6-4.1Z" /><path d="M8.5 7.7c-.6.4-.7 1.2-.4 2.1.9 2.8 2.5 4.4 5.3 5.3.9.3 1.7.2 2.1-.4l.7-1.1-2.4-1.3-.9 1c-1.3-.5-2.6-1.8-3.1-3.1l1-.9-1.3-2.4-1 .8Z" /></>}</svg>;
}

export function QuickContact() {
  return <aside className="contact-rail" aria-label="Quick contact"><button className="rail-toggle" type="button" aria-expanded="true" aria-controls="rail-links" aria-label="Hide contact shortcuts"><span aria-hidden="true">→</span></button><div id="rail-links"><a className="rail-contact" href={contactHref()} aria-label="Contact STEADWIN GROUP"><ContactIcon type="mail" /><span>Contact us</span></a><a className="rail-icon rail-whatsapp" href="https://wa.me/918792695400" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><ContactIcon type="whatsapp" /><span className="rail-tooltip">WhatsApp</span></a><a className="rail-icon" href={"tel:" + company.tel} aria-label={"Call " + company.phone}><ContactIcon type="phone" /><span className="rail-tooltip">Call now</span></a><a className="rail-icon" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(company.address)} target="_blank" rel="noopener noreferrer" aria-label="Open office location in Google Maps"><ContactIcon type="pin" /><span className="rail-tooltip">Office location</span></a></div></aside>;
}

export function SiteShell({ active, children }: { active: string; children: ReactNode }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header" id="top"><div className="container header-inner"><Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.key} href={item.href} className={active === item.key ? "active" : undefined} aria-current={active === item.key ? "page" : undefined}>{item.label}</a>)}</nav>
      <a className="button header-cta" href={contactHref(undefined, undefined, "Project quotation")}>Get a quote <Arrow /></a>
      <button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button>
    </div><nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden>{navigation.map(item => <a key={item.key} href={item.href} aria-current={active === item.key ? "page" : undefined}>{item.label}<Arrow /></a>)}<a className="mobile-phone" href={"tel:" + company.tel}>{company.phone}</a></nav></header>
    <main id="main">{children}</main>
    <QuickContact />
    <footer className="footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Brand /><p>Complete interiors.<br />For the way you live &amp; work.</p><span className="footer-location">BENGALURU, KARNATAKA</span></div><nav aria-label="Footer navigation"><p className="eyebrow">EXPLORE</p>{navigation.filter(item => item.key !== "home").map(item => <a href={item.href} key={item.key}>{item.label}</a>)}</nav><div className="footer-contact"><p className="eyebrow">VISIT OUR OFFICE</p><address>{company.address}</address><a href={"tel:" + company.tel}>{company.phone}</a><a href={"mailto:" + company.email}>{company.email}</a></div></div><div className="footer-bottom"><span>© <span id="year" suppressHydrationWarning>2026</span> STEADWIN GROUP. All rights reserved.</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div></div></footer>
  </>;
}

export function Breadcrumbs({ current, service = false }: { current: string; service?: boolean }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span>{service && <><a href="/services/">Services</a><span aria-hidden="true">/</span></>}<span aria-current="page">{current}</span></nav>;
}

export function PageIntro({ label, title, text, current, dark = false }: { label: string; title: ReactNode; text: string; current: string; dark?: boolean }) {
  return <section className={"page-intro" + (dark ? " page-intro-dark" : "")}><div className="container"><Breadcrumbs current={current} /><div className="intro-grid"><div><p className="eyebrow">{label}</p><h1>{title}</h1></div><p className="intro-description">{text}</p></div></div></section>;
}

export function CTA({ title = "Let’s talk about your space.", text = "A complete interior or an individual requirement. Tell us what you have in mind.", service, project }: { title?: string; text?: string; service?: string; project?: string }) {
  return <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow">YOUR NEXT SPACE STARTS HERE</p><h2>{title}</h2><p>{text}</p></div><a className="button button-dark" href={contactHref(service, project)}>Discuss your project <Arrow /></a></div></section>;
}

export function ServiceCards({ items = services }: { items?: typeof services }) {
  return <div className="service-cards">{items.map(service => <a className="service-card" href={"/services/" + service.slug + "/"} key={service.slug}><div className="card-top"><span className="service-number">{service.number}</span><span className="circle-arrow" aria-hidden="true">↗</span></div><h3>{service.short}</h3><p>{service.intro}</p><span className="card-link">Explore service</span></a>)}</div>;
}

export function Process() {
  return <section className="section soft-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">FROM IDEA TO INTERIOR</p><h2>A clear way forward.</h2></div><p>The details of your space shape the scope, materials and sequence of work.</p></div><ol className="process-grid">{steps.map((step, i) => <li key={step.title}><span className="process-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>;
}

export function ImagePanel({ src, alt, caption, priority = false }: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return <figure className="image-panel"><img src={"/assets/" + src} width={1448} height={1086} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} />{caption && <figcaption>{caption}</figcaption>}</figure>;
}
