import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { allCities, services, business, generateMeta } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, LocationIcon, ClockIcon, ArrowRightIcon, ScissorsIcon, BeardIcon, StylingIcon } from "@/components/icons";

const serviceIcons: Record<string, React.ComponentType<{ className?: string; animate?: boolean }>> = {
  scissors: ScissorsIcon,
  beard: BeardIcon,
  styling: StylingIcon
};

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return allCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const meta = generateMeta("city", city);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description
    }
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;

  // Find city
  const city = allCities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: `${business.name} - ${city.name}`,
    description: `Premium Barbershop für ${city.name}. Professionelle Haarschnitte, Bartpflege & Styling.`,
    url: `https://friseur-legende.de/${citySlug}`,
    telephone: business.phone,
    areaServed: {
      "@type": "City",
      name: city.name
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressCountry: "DE"
    }
  };

  // Nearby cities
  const nearbyCities = allCities
    .filter((c) => c.slug !== citySlug && Math.abs((c.distance || 0) - (city.distance || 0)) < 15)
    .slice(0, 6);

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Schema markup
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
                <Link href="/staedte" className="hover:text-primary">Städte</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">{city.name}</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <LocationIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {city.region} • {city.distance || 0} km von Nürnberg
              </span>
            </div>

            <h1 className="heading-xl mb-6">
              <span className="text-foreground">Herrenfriseur in</span>{" "}
              <span className="text-gradient neon-text">{city.name}</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Friseur Legende bietet professionelle Haarschnitte, erstklassige Bartpflege
              und exklusives Styling für Herren in {city.name} und Umgebung.
              Erleben Sie Premium-Qualität in luxuriösem Ambiente.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="btn-primary btn-pulse rounded-full px-8">
                <a href={`tel:${business.phone}`}>
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  {business.phone}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10"
              >
                <a
                  href={`https://wa.me/${business.whatsapp}?text=Hallo, ich komme aus ${city.name} und möchte einen Termin vereinbaren.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Services in City */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="heading-md text-center mb-8">
              Unsere Leistungen in {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon] || ScissorsIcon;
                return (
                  <Link
                    key={service.id}
                    href={`/${citySlug}/${service.slug}`}
                    className="group p-6 rounded-2xl bg-card/50 border border-border/50 card-hover text-center"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" animate />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {service.description}
                    </p>
                    <span className="text-primary font-medium">{service.price}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Info Cards */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-card/50 border border-border/50">
                <LocationIcon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1">Standort</h3>
                <p className="text-sm text-muted-foreground">{business.address.city}</p>
              </div>
              <div className="p-5 rounded-xl bg-card/50 border border-border/50">
                <ClockIcon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1">Öffnungszeiten</h3>
                <p className="text-sm text-muted-foreground">Mo-Sa: {business.hours.weekdays}</p>
              </div>
              <div className="p-5 rounded-xl bg-card/50 border border-border/50 col-span-2 md:col-span-1">
                <PhoneIcon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1">Kontakt</h3>
                <a href={`tel:${business.phone}`} className="text-sm text-primary hover:underline">
                  {business.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-invert max-w-none">
              <h2 className="heading-md mb-4">
                Ihr Premium Barbershop für {city.name}
              </h2>
              <p className="text-muted-foreground mb-4">
                Sie suchen einen professionellen Herrenfriseur in {city.name}? Bei Friseur Legende
                erwartet Sie erstklassiger Service in luxuriösem Ambiente. Unser erfahrenes Team
                beherrscht alle modernen Techniken - von klassischen Herrenschnitten bis zu
                trendigen Fades und präziser Bartpflege.
              </p>
              <p className="text-muted-foreground mb-4">
                Als Bewohner von {city.name} profitieren Sie von unserer zentralen Lage in Nürnberg,
                die nur {city.distance || "wenige"} km entfernt ist. Vereinbaren Sie noch heute
                Ihren Termin und erleben Sie den Unterschied.
              </p>
              <p className="text-muted-foreground">
                Wir legen größten Wert auf Qualität, Hygiene und individuelle Beratung.
                Jeder Kunde erhält bei uns die volle Aufmerksamkeit für ein perfektes Ergebnis.
              </p>
            </div>
          </div>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md mb-6">Weitere Städte in der Nähe</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/${nearbyCity.slug}`}
                    className="flex items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <LocationIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{nearbyCity.name}</span>
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
