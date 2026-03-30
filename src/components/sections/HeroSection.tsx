"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services, business } from "@/lib/data";
import { ScissorsIcon, BeardIcon, StylingIcon, PhoneIcon, ArrowRightIcon } from "@/components/icons";
import { trackCTAClick, trackPhoneClick } from "@/lib/tracking";

const serviceIcons: Record<string, React.ComponentType<{ className?: string; animate?: boolean }>> = {
  scissors: ScissorsIcon,
  beard: BeardIcon,
  styling: StylingIcon
};

export function HeroSection() {
  const handleCTAClick = (name: string) => {
    trackCTAClick(name, "hero");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Theme Adaptive Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-background to-secondary/30 dark:from-background dark:via-secondary/10 dark:to-background" />

      {/* Grid Pattern - Subtle */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Elegant Accent Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding py-24 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-down shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary">
              Premium Barbershop in Nürnberg
            </span>
          </div>

          {/* Heading */}
          <h1 className="heading-xl mb-6 animate-fade-in-up">
            <span className="text-foreground">Dein Style.</span>{" "}
            <span className="text-primary font-extrabold">Deine Legende.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
            Professionelle Haarschnitte, erstklassige Bartpflege und exklusives Styling
            in luxuriösem Ambiente. Erlebe den Unterschied.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
            <Button
              asChild
              size="lg"
              className="btn-primary btn-pulse shimmer rounded-full px-8 text-base shadow-lg"
            >
              <a
                href={`tel:${business.phone}`}
                onClick={() => {
                  handleCTAClick("phone_hero");
                  trackPhoneClick("hero");
                }}
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Jetzt Termin buchen
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base border-primary/40 hover:bg-primary/10 hover:border-primary/60 shadow-sm"
            >
              <Link
                href="/leistungen"
                onClick={() => handleCTAClick("services_hero")}
              >
                Unsere Leistungen
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto animate-fade-in-up delay-400">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] || ScissorsIcon;
              return (
                <Link
                  key={service.id}
                  href={`/service/${service.slug}`}
                  className="group relative p-4 sm:p-6 rounded-2xl bg-white dark:bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 card-hover"
                  onClick={() => handleCTAClick(`service_${service.slug}`)}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon
                      className="w-5 h-5 sm:w-7 sm:h-7 text-primary"
                      animate
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {service.shortName}
                  </h3>

                  {/* Price */}
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {service.price}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
