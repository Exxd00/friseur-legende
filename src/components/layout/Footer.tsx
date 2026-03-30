"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { business, footerLinks, navigation } from "@/lib/data";
import {
  PhoneIcon,
  WhatsAppIcon,
  LocationIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon
} from "@/components/icons";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/50 border-t border-border/40">
      {/* Main Footer */}
      <div className="container mx-auto container-padding section-padding-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo & Info */}
          <div className="col-span-2 md:col-span-1">
            <Logo showTagline className="mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Der Premium Barbershop in Nürnberg. Professionelle Haarschnitte, Bartpflege und Styling in luxuriösem Ambiente.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={business.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={business.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={business.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Leistungen
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  onClick={() => trackPhoneClick("footer")}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-primary" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("footer")}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <LocationIcon className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  {business.address.city}, {business.address.country}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ClockIcon className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p>Mo-Sa: {business.hours.weekdays}</p>
                  <p>So: {business.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto container-padding py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {business.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-4">
              <Link href="/impressum" className="hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
