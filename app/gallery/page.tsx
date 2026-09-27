import { GalleryPage } from "../components/pages";
import { pageDetails } from "../lib/site-data";

const details = pageDetails[5];
export const metadata = { title: details.title, description: details.description, openGraph: { title: details.title, description: details.description, type: "website" } };
export default GalleryPage;
