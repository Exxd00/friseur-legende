"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services, business, allCities } from "@/lib/data";
import { compressMultipleImages, formatFileSize, revokePreviewUrls, type CompressedImage } from "@/lib/image-compress";
import { trackFormSubmit } from "@/lib/tracking";
import { UploadIcon, CloseIcon, CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FormData {
  service: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

const initialFormData: FormData = {
  service: "",
  name: "",
  email: "",
  phone: "",
  city: "",
  message: ""
};

export function ContactFormSection() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Limit to 3 images
    const remainingSlots = 3 - images.length;
    if (remainingSlots <= 0) {
      alert("Maximal 3 Bilder erlaubt");
      return;
    }

    const filesToProcess = Array.from(files).slice(0, remainingSlots);

    setIsCompressing(true);
    try {
      const compressed = await compressMultipleImages(filesToProcess, {
        maxSizeKB: 200,
        maxWidth: 800,
        maxHeight: 800,
        quality: 0.7
      });
      setImages((prev) => [...prev, ...compressed]);
    } catch (error) {
      console.error("Error compressing images:", error);
    } finally {
      setIsCompressing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [images.length]);

  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefonnummer ist erforderlich";
    }

    if (!formData.service) {
      newErrors.service = "Bitte wählen Sie eine Leistung";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      // In production, you would send data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Track form submission
      trackFormSubmit("contact");

      // Clean up image previews
      revokePreviewUrls(images);

      // Redirect to thank you page
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  // Popular cities for quick selection
  const popularCities = allCities.slice(0, 8);

  return (
    <section id="kontakt" className="section-padding gradient-section">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-4">
              <span className="text-foreground">Termin</span>{" "}
              <span className="text-gradient">vereinbaren</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Füllen Sie das Formular aus oder rufen Sie uns direkt an.
              Wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div className="space-y-2">
              <Label htmlFor="service" className="form-label">
                Gewünschte Leistung *
              </Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={cn(
                  "form-input w-full h-12 px-4 rounded-lg bg-white border shadow-sm",
                  errors.service ? "border-destructive" : "border-border/50"
                )}
              >
                <option value="">Bitte wählen...</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - {service.price}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="form-error">{errors.service}</p>
              )}
            </div>

            {/* Name & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="form-label">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={cn(
                    "form-input h-12",
                    errors.name ? "border-destructive" : ""
                  )}
                />
                {errors.name && (
                  <p className="form-error">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="form-label">
                  Telefonnummer *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+49..."
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={cn(
                    "form-input h-12",
                    errors.phone ? "border-destructive" : ""
                  )}
                />
                {errors.phone && (
                  <p className="form-error">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email & City Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="form-label">
                  E-Mail (optional)
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="form-label">
                  Stadt
                </Label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-input w-full h-12 px-4 rounded-lg bg-white border border-border/40 shadow-sm"
                >
                  <option value="">Bitte wählen...</option>
                  {popularCities.map((city) => (
                    <option key={city.slug} value={city.slug}>
                      {city.name}
                    </option>
                  ))}
                  <option value="other">Andere...</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="form-label">
                Ihre Wünsche / Gewünschter Termin
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Beschreiben Sie Ihre Wünsche oder nennen Sie uns Ihren gewünschten Termin..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="form-input resize-none"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-3">
              <Label className="form-label">
                Referenzbilder (max. 3, je max. 200KB nach Kompression)
              </Label>

              {/* Upload Area */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors",
                  images.length >= 3
                    ? "border-muted opacity-50 cursor-not-allowed"
                    : "border-border/50 hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  disabled={images.length >= 3 || isCompressing}
                  className="hidden"
                />
                <UploadIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {isCompressing
                    ? "Bilder werden komprimiert..."
                    : images.length >= 3
                    ? "Maximum erreicht"
                    : "Klicken oder Dateien hierher ziehen"}
                </p>
              </div>

              {/* Image Previews */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {images.map((img, index) => (
                    <div key={index} className="relative group rounded-lg overflow-hidden bg-secondary/50">
                      <img
                        src={img.preview}
                        alt={`Vorschau ${index + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 w-6 h-6 bg-destructive rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <CloseIcon className="w-4 h-4 text-white" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-white">
                        {formatFileSize(img.compressedSize)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || isCompressing}
              className="w-full btn-primary btn-pulse shimmer rounded-full text-base h-14"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Wird gesendet...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5" />
                  Anfrage senden
                </span>
              )}
            </Button>

            {/* Alternative Contact */}
            <p className="text-center text-sm text-muted-foreground">
              Oder rufen Sie uns direkt an:{" "}
              <a
                href={`tel:${business.phone}`}
                className="text-primary hover:underline font-medium"
              >
                {business.phone}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
