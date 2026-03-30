"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { allCities, mainCity, business } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { SearchIcon, LocationIcon, ArrowRightIcon } from "@/components/icons";
import { trackCityView } from "@/lib/tracking";

// Group cities by region
const regions = ["Mittelfranken", "Oberfranken", "Oberpfalz"];

export default function StaedtePage() {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // Filter cities
  const filteredCities = useMemo(() => {
    let result = allCities;

    if (activeRegion) {
      result = result.filter((c) => c.region === activeRegion);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter((c) =>
        c.name.toLowerCase().includes(searchLower)
      );
    }

    return result;
  }, [activeRegion, search]);

  // Group filtered cities by distance
  const groupedCities = useMemo(() => {
    const groups: Record<string, typeof allCities> = {
      "0-10 km": [],
      "10-25 km": [],
      "25-50 km": []
    };

    for (const city of filteredCities) {
      const distance = city.distance || 0;
      if (distance <= 10) {
        groups["0-10 km"].push(city);
      } else if (distance <= 25) {
        groups["10-25 km"].push(city);
      } else {
        groups["25-50 km"].push(city);
      }
    }

    return groups;
  }, [filteredCities]);

  return (
    <div className="min-h-screen py-20 pt-28">
      <div className="container mx-auto container-padding">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">
            <span className="text-foreground">Service</span>{" "}
            <span className="text-gradient">Gebiet</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wir bedienen {business.address.city} und alle Städte im Umkreis von {business.radius} km.
            Finden Sie Ihre Stadt und entdecken Sie unsere Leistungen.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Stadt suchen..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                className="pl-12 h-12 bg-secondary/50 border-border/50 rounded-full"
              />
            </div>

            {/* Region Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
              <button
                type="button"
                onClick={() => setActiveRegion(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeRegion === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
              >
                Alle Regionen
              </button>
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeRegion === region
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex justify-center gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {allCities.length}+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Städte</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {business.radius} km
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Radius</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {filteredCities.length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Ergebnisse</div>
            </div>
          </div>
        </div>

        {/* Main City */}
        <div className="max-w-4xl mx-auto mb-10">
          <Link
            href={`/${mainCity.slug}`}
            className="block p-6 rounded-2xl bg-primary/10 border-2 border-primary/30 card-hover"
            onClick={() => trackCityView(mainCity.name, mainCity.slug)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <LocationIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {mainCity.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Hauptstandort • {mainCity.region}
                  </p>
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 text-primary" />
            </div>
          </Link>
        </div>

        {/* Cities by Distance */}
        <div className="max-w-5xl mx-auto space-y-10">
          {Object.entries(groupedCities).map(([distance, cities]) => {
            if (cities.length === 0) return null;
            return (
              <div key={distance}>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {distance} von Nürnberg
                  <span className="text-sm font-normal text-muted-foreground">
                    ({cities.length} Städte)
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      className="group p-4 rounded-xl bg-card/50 border border-border/50 card-hover"
                      onClick={() => trackCityView(city.name, city.slug)}
                    >
                      <div className="flex items-center gap-3">
                        <LocationIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                            {city.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {city.distance} km
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredCities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Keine Städte gefunden. Versuchen Sie eine andere Suche.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
