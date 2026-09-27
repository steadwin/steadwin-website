import { SiteShell } from "./components/site";

export default function NotFound() {
  return <SiteShell active=""><section className="section"><div className="container section-copy"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Let’s get you<br />back on track.</h1><p style={{ marginTop: "24px" }}>This page could not be found. Explore our services or return to the home page.</p><a className="button button-dark" href="/">Back to home <span aria-hidden="true">↗</span></a></div></section></SiteShell>;
}
