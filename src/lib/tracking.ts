// ═══════════════════════════════════════════════════════════════
// Tracking Events for Google Analytics / Tag Manager
// ═══════════════════════════════════════════════════════════════

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Event Types
export type TrackingEvent =
  | "form_submit"
  | "thank_you_page"
  | "whatsapp_click"
  | "phone_click"
  | "cta_click"
  | "service_view"
  | "city_view"
  | "gallery_view";

// Track Event Function
export function trackEvent(
  eventName: TrackingEvent,
  params?: Record<string, string | number | boolean>
) {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }

  // DataLayer for GTM
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params
    });
  }

  // Console log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Tracking] ${eventName}`, params);
  }
}

// Specific Tracking Functions
export function trackFormSubmit(formType: string = "contact") {
  trackEvent("form_submit", {
    form_type: formType,
    timestamp: new Date().toISOString()
  });
}

export function trackThankYouPage() {
  trackEvent("thank_you_page", {
    timestamp: new Date().toISOString()
  });
}

export function trackWhatsAppClick(source: string = "floating") {
  trackEvent("whatsapp_click", {
    source,
    timestamp: new Date().toISOString()
  });
}

export function trackPhoneClick(source: string = "floating") {
  trackEvent("phone_click", {
    source,
    timestamp: new Date().toISOString()
  });
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    location,
    timestamp: new Date().toISOString()
  });
}

export function trackServiceView(serviceName: string, serviceSlug: string) {
  trackEvent("service_view", {
    service_name: serviceName,
    service_slug: serviceSlug,
    timestamp: new Date().toISOString()
  });
}

export function trackCityView(cityName: string, citySlug: string) {
  trackEvent("city_view", {
    city_name: cityName,
    city_slug: citySlug,
    timestamp: new Date().toISOString()
  });
}

export function trackGalleryView(imageId: string) {
  trackEvent("gallery_view", {
    image_id: imageId,
    timestamp: new Date().toISOString()
  });
}
