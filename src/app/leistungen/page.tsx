"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { services, subServices, business } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScissorsIcon, BeardIcon, StylingIcon, SearchIcon, ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { trackServiceView, trackCTAClick } from "@/lib/tracking";

const serviceIcons: Record<string, React.ComponentType<{ className?: string; animate?: boolean }>> = {
  scissors: ScissorsIcon,
  beard: BeardIcon,
  styling: StylingIcon
};

const categories = [
  { id: "all", name: "Alle Leistungen" },
  { id: "herrenhaarschnitt", name: "Haarschnitte" },
  { id: "bartpflege", name: "Bartpflege" },
  { id: "styling", name: "Styling" }
];

export default function LeistungenPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Get all services with their sub-services
  const allServicesData = useMemo(() => {
    return services.map((service) => ({
      ...service,
      subServices: subServices.filter((sub) => sub.parentId === service.id)
    }));
  }, []);

  // Filter services
  const filteredServices = useMemo(() => {
    let result = allServicesData;

    if (activeCategory !== "all") {
      result = result.filter((s) => s.id === activeCategory);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.map((service) => ({
        ...service,
        subServices: service.subServices.filter((sub) =>
          sub.name.toLowerCase().includes(searchLower)
        )
      })).filter(
        (s) =>
          s.name.toLowerCase().includes(searchLower) ||
          s.description.toLowerCase().includes(searchLower) ||
          s.subServices.length > 0
      );
    }

    return result;
  }, [allServicesData, activeCategory, search]);

  return (
    <div className="min-h-screen py-20 pt-28">
      <div className="container mx-auto container-padding">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">
            <span className="text-foreground">Unsere</span>{" "}
            <span className="text-gradient">Leistungen</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professionelle Dienstleistungen für den modernen Mann.
            Von klassischen Schnitten bis zu trendigen Styles.
          </p>
        </div>

        {/* Filter & Search */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Leistung suchen..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                className="pl-12 h-12 bg-secondary/50 border-border/50 rounded-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {filteredServices.map((service) => {
            const Icon = serviceIcons[service.icon] || ScissorsIcon;
            return (
              <div
                key={service.id}
                className="p-6 sm:p-8 rounded-2xl bg-card/50 border border-border/50 card-hover"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Service Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" animate />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                          {service.name}
                        </h2>
                        <p className="text-primary font-medium">
                          {service.price}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Sub-Services */}
                    {service.subServices.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          Varianten:
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {service.subServices.map((sub) => (
                            <Link
                              key={sub.id}
                              href={`/service/${sub.slug}`}
                              className="text-xs text-primary hover:underline"
                              onClick={() => trackServiceView(sub.name, sub.slug)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3 md:w-48">
                    <Button
                      asChild
                      className="btn-primary rounded-full"
                      onClick={() => trackCTAClick("book_service", "services_page")}
                    >
                      <a href={`tel:${business.phone}`}>
                        <PhoneIcon className="w-4 h-4 mr-2" />
                        Termin buchen
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-primary/30 hover:bg-primary/10"
                    >
                      <Link
                        href={`/service/${service.slug}`}
                        onClick={() => trackServiceView(service.name, service.slug)}
                      >
                        Mehr erfahren
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Keine Leistungen gefunden. Versuchen Sie eine andere Suche.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
