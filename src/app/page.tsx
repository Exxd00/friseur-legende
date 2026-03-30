import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Section (Stats & Brands) */}
      <TrustSection />

      {/* 3. Contact Form / Booking */}
      <ContactFormSection />

      {/* 4. Process (How It Works) */}
      <ProcessSection />

      {/* 5. Why Us (Features) */}
      <WhyUsSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Gallery */}
      <GallerySection />

      {/* 8. CTA & Contact Info */}
      <CTASection />
    </>
  );
}
