import { ServicesPage } from "../components/pages";
import { pageDetails } from "../lib/site-data";

const details = pageDetails[2];
export const metadata = { title: details.title, description: details.description, openGraph: { title: details.title, description: details.description, type: "website" } };
export default ServicesPage;
