import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { services, subServices, allCities, business, generateMeta } from "@/lib/data";
import { ScissorsIcon, BeardIcon, StylingIcon, PhoneIcon, WhatsAppIcon, ArrowRightIcon, CheckIcon, LocationIcon } from "@/components/icons";

const serviceIcons: Record<string, React.ComponentType<{ className?: string; animate?: boolean }>> = {
  scissors: ScissorsIcon,
  beard: BeardIcon,
  styling: StylingIcon
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allServiceSlugs = [...services.map((s) => s.slug), ...subServices.map((s) => s.slug)];
  return allServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = generateMeta("service", undefined, slug);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  // Find service
  const mainService = services.find((s) => s.slug === slug);
  const subService = subServices.find((s) => s.slug === slug);
  const service = mainService || subService;

  if (!service) {
    notFound();
  }

  // Get parent service for sub-services
  const parentService = subService
    ? services.find((s) => s.id === subService.parentId)
    : null;

  // Get related sub-services
  const relatedServices = mainService
    ? subServices.filter((s) => s.parentId === mainService.id)
    : subServices.filter((s) => s.parentId === parentService?.id && s.id !== subService?.id);

  // Get icon
  const Icon = mainService
    ? serviceIcons[mainService.icon] || ScissorsIcon
    : parentService
      ? serviceIcons[parentService.icon] || ScissorsIcon
      : ScissorsIcon;

  // Top cities
  const topCities = allCities.slice(0, 12);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Was kostet ${service.name} bei Friseur Legende?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: mainService?.price || "Kontaktieren Sie uns für aktuelle Preise."
        }
      },
      {
        "@type": "Question",
        name: `Wie kann ich einen Termin für ${service.name} buchen?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Sie können uns telefonisch unter ${business.phone} oder per WhatsApp erreichen.`
        }
      }
    ]
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Schema markup
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen py-20 pt-28">
        <div className="container mx-auto container-padding">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">Startseite</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/leistungen" className="hover:text-primary">Leistungen</Link>
              </li>
              {parentService && (
                <>
                  <li>/</li>
                  <li>
                    <Link href={`/service/${parentService.slug}`} className="hover:text-primary">
                      {parentService.shortName}
                    </Link>
                  </li>
                </>
              )}
              <li>/</li>
              <li className="text-foreground">{service.name}</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-10 h-10 text-primary" animate />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h1 className="heading-lg mb-4">
                  <span className="text-gradient">{service.name}</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {mainService?.longDescription || (mainService?.description || `Professionelle ${service.name} bei Friseur Legende.`)}
                </p>

                {/* Price */}
                {mainService?.price && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
                    {mainService.price}
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-primary btn-pulse rounded-full px-8">
                    <a href={`tel:${business.phone}`}>
                      <PhoneIcon className="w-5 h-5 mr-2" />
                      Jetzt Termin buchen
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-8 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10"
                  >
                    <a
                      href={`https://wa.me/${business.whatsapp}?text=Hallo, ich interessiere mich für ${service.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          {mainService?.features && (
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="heading-md mb-6">Was ist inbegriffen?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mainService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="heading-md mb-6">Weitere Varianten</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/service/${rel.slug}`}
                    className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-sm font-medium text-foreground hover:text-primary">
                      {rel.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Service in Cities */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">
              {service.name} in Ihrer Nähe
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/${slug}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <LocationIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{city.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/staedte"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Alle Städte anzeigen
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
