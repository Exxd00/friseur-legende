"use client";

import { features } from "@/lib/data";
import { CrownIcon, ScissorsIcon, SparklesIcon, ClockIcon, TagIcon, LocationIcon } from "@/components/icons";

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  crown: CrownIcon,
  scissors: ScissorsIcon,
  sparkles: SparklesIcon,
  clock: ClockIcon,
  tag: TagIcon,
  location: LocationIcon
};

export function WhyUsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            <span className="text-foreground">Warum</span>{" "}
            <span className="text-gradient">Friseur Legende?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wir bieten mehr als nur einen Haarschnitt – wir bieten ein Erlebnis
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid-features max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon] || SparklesIcon;
            return (
              <div
                key={feature.title}
                className="group p-4 sm:p-6 rounded-2xl bg-white dark:bg-card border border-border/40 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
