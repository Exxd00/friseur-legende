"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navigation, business } from "@/lib/data";
import { trackPhoneClick } from "@/lib/tracking";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick("header");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-border/40 shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Logo animate={!isScrolled} showTagline={!isScrolled} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 lg:px-4 py-2 text-sm font-medium rounded-lg",
                    "transition-all duration-200",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="btn-primary shimmer gap-2 rounded-full px-5"
            >
              <a
                href={`tel:${business.phone}`}
                onClick={handlePhoneClick}
                aria-label="Jetzt anrufen"
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="hidden lg:inline">{business.phone}</span>
                <span className="lg:hidden">Anrufen</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-1">
            {/* Theme Toggle - Mobile */}
            <ThemeToggle />

            <Button
              asChild
              size="icon"
              variant="ghost"
              className="rounded-full"
            >
              <a
                href={`tel:${business.phone}`}
                onClick={handlePhoneClick}
                aria-label="Jetzt anrufen"
              >
                <PhoneIcon className="w-5 h-5 text-primary" />
              </a>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="Menü öffnen"
                >
                  <MenuIcon className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background border-border">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <Logo animate={false} />
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col gap-1 py-6">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "px-4 py-3 text-base font-medium rounded-lg",
                            "transition-all duration-200",
                            isActive
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-auto pt-6 border-t border-border space-y-3">
                    <Button
                      asChild
                      className="w-full btn-primary shimmer gap-2 rounded-full"
                    >
                      <a
                        href={`tel:${business.phone}`}
                        onClick={() => {
                          handlePhoneClick();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <PhoneIcon className="w-4 h-4" />
                        {business.phone}
                      </a>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      {business.hours.weekdays}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
