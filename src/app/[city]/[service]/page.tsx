import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { allCities, services, subServices, business, generateMeta } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, LocationIcon, CheckIcon, ArrowRightIcon, ScissorsIcon, BeardIcon, StylingIcon } from "@/components/icons";

const serviceIcons: Record<string, React.ComponentType<{ className?: string; animate?: boolean }>> = {
  scissors: ScissorsIcon,
  beard: BeardIcon,
  styling: StylingIcon
};

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ city: string; service: string }> = [];

  for (const city of allCities) {
    for (const service of [...services, ...subServices]) {
      params.push({
        city: city.slug,
        service: service.slug
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const meta = generateMeta("cityService", city, service);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description
    }
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  // Find city and service
  const city = allCities.find((c) => c.slug === citySlug);
  const mainService = services.find((s) => s.slug === serviceSlug);
  const subService = subServices.find((s) => s.slug === serviceSlug);
  const service = mainService || subService;

  if (!city || !service) {
    notFound();
  }

  // Get parent service for sub-services
  const parentService = subService
    ? services.find((s) => s.id === subService.parentId)
    : null;

  // Get icon
  const Icon = mainService
    ? serviceIcons[mainService.icon] || ScissorsIcon
    : parentService
      ? serviceIcons[parentService.icon] || ScissorsIcon
      : ScissorsIcon;

  // Related services
  const otherServices = services.filter((s) => s.slug !== serviceSlug);

  // Nearby cities
  const nearbyCities = allCities
    .filter((c) => c.slug !== citySlug && Math.abs((c.distance || 0) - (city.distance || 0)) < 15)
    .slice(0, 4);

  // Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}`,
    description: `${service.name} bei Friseur Legende für Kunden aus ${city.name}. ${mainService?.description || `Professionelle ${service.name} vom Experten.`}`,
    provider: {
      "@type": "BarberShop",
      name: business.name,
      telephone: business.phone
    },
    areaServed: {
      "@type": "City",
      name: city.name
    }
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Schema markup
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen py-20 pt-28">
        <div className="container mx-auto container-padding">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">Startseite</Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/${citySlug}`} className="hover:text-primary">{city.name}</Link>
              </li>
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
                <div className="flex items-center gap-2 mb-4">
                  <LocationIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">{city.name}</span>
                </div>

                <h1 className="heading-lg mb-4">
                  <span className="text-gradient">{service.name}</span>
                  <span className="text-foreground"> in {city.name}</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  Professionelle {service.name} vom Experten bei Friseur Legende.
                  Als Bewohner von {city.name} sind Sie nur {city.distance || "wenige"} km
                  von unserem Premium Barbershop in Nürnberg entfernt.
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
                      href={`https://wa.me/${business.whatsapp}?text=Hallo, ich komme aus ${city.name} und interessiere mich für ${service.name}.`}
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
              <h2 className="heading-md mb-6">{service.name} - Was ist inbegriffen?</h2>
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

          {/* Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-invert max-w-none">
              <h2 className="heading-md mb-4">
                Warum {service.name} bei Friseur Legende?
              </h2>
              <p className="text-muted-foreground mb-4">
                Als Premium Barbershop in Nürnberg bieten wir Ihnen höchste Qualität bei {service.name}.
                Unsere erfahrenen Barbiere beherrschen alle modernen Techniken und beraten Sie
                individuell für Ihren perfekten Look.
              </p>
              <p className="text-muted-foreground mb-4">
                Für Kunden aus {city.name} sind wir leicht erreichbar. Mit nur {city.distance || "wenigen"} km
                Entfernung profitieren Sie von unserem erstklassigen Service, ohne lange Anfahrtswege.
              </p>
              <p className="text-muted-foreground">
                Vereinbaren Sie noch heute Ihren Termin und erleben Sie den Unterschied eines
                echten Premium Barbershops. Wir freuen uns auf Ihren Besuch!
              </p>
            </div>
          </div>

          {/* Other Services */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="heading-md mb-6">Weitere Leistungen in {city.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {otherServices.map((otherService) => {
                const OtherIcon = serviceIcons[otherService.icon] || ScissorsIcon;
                return (
                  <Link
                    key={otherService.id}
                    href={`/${citySlug}/${otherService.slug}`}
                    className="group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <OtherIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {otherService.shortName}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md mb-6">{service.name} in weiteren Städten</h2>
              <div className="grid grid-cols-2 gap-3">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/${nearbyCity.slug}/${serviceSlug}`}
                    className="flex items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <LocationIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">
                      {service.name} in {nearbyCity.name}
                    </span>
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
          )}
        </div>
      </div>
    </>
  );
}
