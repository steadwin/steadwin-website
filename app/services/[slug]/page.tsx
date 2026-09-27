import { notFound } from "next/navigation";
import { ServicePage } from "../../components/pages";
import { services } from "../../lib/site-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return { title: "Service not found | STEADWIN GROUP" };
  const title = service.title + " | STEADWIN GROUP";
  return { title, description: service.intro, openGraph: { title, description: service.intro, type: "website" } };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!services.some(item => item.slug === slug)) notFound();
  return <ServicePage slug={slug} />;
}
