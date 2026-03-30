"use client";

import { useState } from "react";
import { CloseIcon, FilterIcon } from "@/components/icons";
import { trackGalleryView } from "@/lib/tracking";

// Extended gallery images
const galleryImages = [
  { id: "1", src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop", alt: "Moderner Barbershop Interior", category: "salon" },
  { id: "2", src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=800&fit=crop", alt: "Professioneller Herrenhaarschnitt", category: "haircut" },
  { id: "3", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop", alt: "Bartpflege und Styling", category: "beard" },
  { id: "4", src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop", alt: "Premium Barbershop Ambiente", category: "salon" },
  { id: "5", src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=800&fit=crop", alt: "Fade Haarschnitt", category: "haircut" },
  { id: "6", src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&h=800&fit=crop", alt: "Klassische Rasur", category: "styling" },
  { id: "7", src: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=800&h=800&fit=crop", alt: "Barbershop Tools", category: "salon" },
  { id: "8", src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=800&fit=crop", alt: "Moderne Haarschnitte", category: "haircut" },
  { id: "9", src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop", alt: "Luxuriöses Ambiente", category: "salon" },
  { id: "10", src: "https://images.unsplash.com/photo-1560869713-bf96c070bf5d?w=800&h=800&fit=crop", alt: "Vollbart Pflege", category: "beard" },
  { id: "11", src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&h=800&fit=crop", alt: "Herren Styling", category: "styling" },
  { id: "12", src: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&h=800&fit=crop", alt: "Premium Service", category: "styling" }
];

const categories = [
  { id: "all", name: "Alle" },
  { id: "salon", name: "Salon" },
  { id: "haircut", name: "Haarschnitte" },
  { id: "beard", name: "Bartpflege" },
  { id: "styling", name: "Styling" }
];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    trackGalleryView(image.id);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!currentImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === currentImage.id);
    let newIndex: number;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentImage(filteredImages[newIndex]);
    trackGalleryView(filteredImages[newIndex].id);
  };

  return (
    <div className="min-h-screen py-20 pt-28">
      <div className="container mx-auto container-padding">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">
            <span className="text-foreground">Unsere</span>{" "}
            <span className="text-gradient">Galerie</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Impressionen aus unserem Salon, unserer Arbeit und zufriedenen Kunden
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid-gallery max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => openLightbox(image)}
              className="group relative aspect-square rounded-xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-white truncate">{image.alt}</p>
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Keine Bilder in dieser Kategorie.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Schließen"
            >
              <CloseIcon className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              type="button"
              onClick={() => navigateImage("prev")}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Vorheriges Bild"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => navigateImage("next")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Nächstes Bild"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={currentImage.src.replace("w=800&h=800", "w=1400&h=1400")}
              alt={currentImage.alt}
              className="w-full h-auto rounded-xl max-h-[80vh] object-contain"
            />

            <p className="text-center text-white/80 mt-4 text-sm">
              {currentImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
