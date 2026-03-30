"use client";

import { testimonials } from "@/lib/data";
import { StarIcon, QuoteIcon } from "@/components/icons";

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            <span className="text-foreground">Was unsere</span>{" "}
            <span className="text-gradient">Kunden sagen</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Echte Erfahrungen von zufriedenen Kunden
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-testimonials max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-card border border-border/40 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <QuoteIcon className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-[hsl(var(--gold))]"
                    filled={i < testimonial.rating}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.city} • {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
