"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CloseIcon } from "@/components/icons";
import { trackGalleryView, trackCTAClick } from "@/lib/tracking";

// Sample gallery images - Replace with real images
const galleryImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop",
    alt: "Moderner Barbershop Interior",
    category: "salon"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop",
    alt: "Professioneller Herrenhaarschnitt",
    category: "haircut"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop",
    alt: "Bartpflege und Styling",
    category: "beard"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop",
    alt: "Premium Barbershop Ambiente",
    category: "salon"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
    alt: "Fade Haarschnitt",
    category: "haircut"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&h=600&fit=crop",
    alt: "Klassische Rasur",
    category: "styling"
  }
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<typeof galleryImages[0] | null>(null);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    trackGalleryView(image.id);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            <span className="text-foreground">Unsere</span>{" "}
            <span className="text-gradient">Arbeiten</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Impressionen aus unserem Salon und unserer Arbeit
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid-gallery max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group relative aspect-square rounded-xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Category Badge */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] sm:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category === "salon" && "Salon"}
                {image.category === "haircut" && "Haarschnitt"}
                {image.category === "beard" && "Bartpflege"}
                {image.category === "styling" && "Styling"}
              </div>
            </button>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            onClick={() => trackCTAClick("view_gallery", "gallery_section")}
          >
            <Link href="/galerie">
              Alle Bilder ansehen
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Schließen"
            >
              <CloseIcon className="w-6 h-6 text-white" />
            </button>
            <img
              src={currentImage.src.replace("w=600&h=600", "w=1200&h=1200")}
              alt={currentImage.alt}
              className="w-full h-auto rounded-xl"
            />
            <p className="text-center text-white/80 mt-4 text-sm">
              {currentImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
