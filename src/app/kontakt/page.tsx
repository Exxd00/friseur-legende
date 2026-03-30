import { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { business } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, LocationIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${business.name} in Nürnberg. Telefon: ${business.phone}. Vereinbaren Sie jetzt Ihren Termin!`
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen py-20 pt-28">
      <div className="container mx-auto container-padding">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">
            <span className="text-foreground">Kontaktieren</span>{" "}
            <span className="text-gradient">Sie uns</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wir freuen uns auf Ihre Nachricht. Vereinbaren Sie jetzt Ihren Termin
            oder stellen Sie uns Ihre Fragen.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href={`tel:${business.phone}`}
              className="p-5 rounded-xl bg-card/50 border border-border/50 card-hover text-center"
            >
              <PhoneIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">Telefon</h3>
              <p className="text-xs text-muted-foreground">{business.phone}</p>
            </a>

            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-card/50 border border-border/50 card-hover text-center"
            >
              <WhatsAppIcon className="w-8 h-8 text-[#25D366] mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">WhatsApp</h3>
              <p className="text-xs text-muted-foreground">Jetzt schreiben</p>
            </a>

            <div className="p-5 rounded-xl bg-card/50 border border-border/50 text-center">
              <LocationIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">Standort</h3>
              <p className="text-xs text-muted-foreground">{business.address.city}</p>
            </div>

            <div className="p-5 rounded-xl bg-card/50 border border-border/50 text-center">
              <ClockIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">Öffnungszeiten</h3>
              <p className="text-xs text-muted-foreground">Mo-Sa: {business.hours.weekdays}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactFormSection />
      </div>
    </div>
  );
}
