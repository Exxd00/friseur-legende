"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, LocationIcon, ClockIcon, ArrowRightIcon } from "@/components/icons";
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects - Theme Adaptive */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-primary/5 dark:from-primary/10 dark:via-background dark:to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - CTA */}
            <div className="text-center md:text-left">
              <h2 className="heading-lg mb-4">
                <span className="text-foreground">Bereit für deinen</span>{" "}
                <span className="text-primary font-bold">neuen Look?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Vereinbare jetzt deinen Termin und erlebe den Unterschied.
                Wir freuen uns auf dich!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="btn-primary btn-pulse shimmer rounded-full px-8 shadow-lg"
                >
                  <a
                    href={`tel:${business.phone}`}
                    onClick={() => {
                      trackCTAClick("phone_cta", "cta_section");
                      trackPhoneClick("cta_section");
                    }}
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    {business.phone}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/70 shadow-sm"
                >
                  <a
                    href={`https://wa.me/${business.whatsapp}?text=Hallo, ich möchte einen Termin vereinbaren.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackCTAClick("whatsapp_cta", "cta_section");
                      trackWhatsAppClick("cta_section");
                    }}
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-card border border-border/40 card-hover">
                <LocationIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3" />
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Standort
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {business.address.city}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {business.address.country}
                </p>
              </div>

              {/* Hours Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-card border border-border/40 card-hover">
                <ClockIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3" />
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Öffnungszeiten
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Mo-Sa: {business.hours.weekdays}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  So: {business.hours.sunday}
                </p>
              </div>

              {/* Service Area Card */}
              <div className="col-span-2 p-4 sm:p-5 rounded-2xl bg-white border border-border/40 card-hover">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                      Service-Gebiet
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Nürnberg und Umgebung ({business.radius} km)
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10"
                    onClick={() => trackCTAClick("view_cities", "cta_section")}
                  >
                    <Link href="/staedte">
                      Alle Städte
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
