"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/data";
import { CheckIcon, PhoneIcon, WhatsAppIcon, HomeIcon, ArrowRightIcon } from "@/components/icons";
import { trackThankYouPage } from "@/lib/tracking";

export default function ThankYouPage() {
  useEffect(() => {
    trackThankYouPage();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto container-padding">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center animate-bounce-in">
            <CheckIcon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
          </div>

          {/* Heading */}
          <h1 className="heading-lg mb-4 animate-fade-in-up">
            <span className="text-foreground">Vielen Dank</span>{" "}
            <span className="text-gradient">für Ihre Anfrage!</span>
          </h1>

          {/* Message */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 animate-fade-in-up delay-200">
            Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.
            In der Regel antworten wir innerhalb von 24 Stunden.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-2 gap-4 mb-10 animate-fade-in-up delay-300">
            <div className="p-5 rounded-2xl bg-card/50 border border-border/50">
              <PhoneIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">
                Rufen Sie uns an
              </h3>
              <a
                href={`tel:${business.phone}`}
                className="text-sm text-primary hover:underline"
              >
                {business.phone}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-card/50 border border-border/50">
              <WhatsAppIcon className="w-8 h-8 text-[#25D366] mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">
                WhatsApp
              </h3>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#25D366] hover:underline"
              >
                Jetzt schreiben
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Button
              asChild
              size="lg"
              className="btn-primary rounded-full px-8"
            >
              <Link href="/">
                <HomeIcon className="w-5 h-5 mr-2" />
                Zur Startseite
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary/30 hover:bg-primary/10"
            >
              <Link href="/leistungen">
                Unsere Leistungen
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Business Hours */}
          <p className="text-xs text-muted-foreground mt-10 animate-fade-in delay-500">
            Öffnungszeiten: Mo-Sa {business.hours.weekdays} | So: {business.hours.sunday}
          </p>
        </div>
      </div>
    </div>
  );
}
