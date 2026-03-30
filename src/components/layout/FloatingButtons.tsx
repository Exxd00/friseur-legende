"use client";

import { business } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export function FloatingButtons() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("floating");
  };

  const handlePhoneClick = () => {
    trackPhoneClick("floating");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${business.whatsapp}?text=Hallo, ich möchte einen Termin vereinbaren.`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="floating-btn floating-whatsapp w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bottom-20 sm:bottom-24 right-4 sm:right-6"
        aria-label="WhatsApp kontaktieren"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${business.phone}`}
        onClick={handlePhoneClick}
        className="floating-btn floating-phone w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bottom-4 sm:bottom-6 right-4 sm:right-6"
        aria-label="Jetzt anrufen"
      >
        <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </>
  );
}

export default FloatingButtons;
