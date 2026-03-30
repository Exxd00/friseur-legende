"use client";

import { processSteps } from "@/lib/data";
import { CalendarIcon, UsersIcon, CheckIcon } from "@/components/icons";

const stepIcons = [CalendarIcon, UsersIcon, CheckIcon];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            <span className="text-foreground">So</span>{" "}
            <span className="text-gradient">funktioniert's</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            In drei einfachen Schritten zu Ihrem perfekten Style
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] || CheckIcon;
            return (
              <div
                key={step.step}
                className="relative p-4 sm:p-6 rounded-2xl bg-white dark:bg-card border border-border/40 text-center card-hover"
              >
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center text-xs sm:text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 mt-2 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {step.description}
                </p>

                {/* Connector Line (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 sm:-right-6 w-6 sm:w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
