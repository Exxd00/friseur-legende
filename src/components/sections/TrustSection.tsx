"use client";

import { stats } from "@/lib/data";
import { AwardIcon, UsersIcon, MapIcon, QualityIcon } from "@/components/icons";

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  experience: AwardIcon,
  customers: UsersIcon,
  area: MapIcon,
  quality: QualityIcon
};

export function TrustSection() {
  return (
    <section className="section-padding-sm bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto container-padding">
        {/* Stats Grid */}
        <div className="grid-stats">
          {stats.map((stat, index) => {
            const Icon = statIcons[stat.icon] || QualityIcon;
            return (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-6 rounded-2xl bg-white dark:bg-card border border-border/40 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brands Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Professionelle Pflegeprodukte & hochwertige Styling-Produkte
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Brand placeholders - can be replaced with real brand logos */}
            {["Premium Care", "Pro Style", "Barber Pro", "Men's Line"].map((brand) => (
              <div
                key={brand}
                className="px-4 py-2 rounded-lg bg-white dark:bg-card border border-border/40 text-xs sm:text-sm text-muted-foreground font-medium shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
