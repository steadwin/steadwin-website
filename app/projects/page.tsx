import { ProjectsPage } from "../components/growth";

const details = {
  title: "Interior Project Planning | STEADWIN GROUP",
  description: "Plan a complete residential or commercial interior project in Bengaluru with STEADWIN GROUP. Book a free site visit or request a quotation.",
};

export const metadata = { ...details, openGraph: { ...details, type: "website" } };

export default ProjectsPage;
