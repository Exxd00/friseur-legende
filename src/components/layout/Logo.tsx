"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  animate?: boolean;
  showTagline?: boolean;
}

export function Logo({ className, animate = true, showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2", className)}>
      {/* Logo Icon */}
      <div className={cn(
        "relative flex items-center justify-center",
        animate && "logo-animate"
      )}>
        {/* Outer Ring */}
        <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />

        {/* Inner Logo */}
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
          {/* Scissors SVG */}
          <svg
            viewBox="0 0 40 40"
            className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Scissor handles */}
            <circle cx="12" cy="12" r="4" className="stroke-primary" />
            <circle cx="12" cy="28" r="4" className="stroke-primary" />

            {/* Scissor blades */}
            <path
              d="M16 12 L30 24"
              className="stroke-primary group-hover:stroke-[hsl(var(--gold))] transition-colors duration-300"
            />
            <path
              d="M16 28 L30 16"
              className="stroke-primary group-hover:stroke-[hsl(var(--gold))] transition-colors duration-300"
            />

            {/* Center pivot */}
            <circle cx="22" cy="20" r="2" className="fill-primary" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className={cn(
          "font-bold tracking-wider uppercase",
          "text-lg sm:text-xl",
          "text-foreground group-hover:text-primary transition-colors duration-300"
        )}>
          <span className="text-primary">Friseur</span>{" "}
          <span className="text-gradient-gold">Legende</span>
        </span>
        {showTagline && (
          <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">
            Premium Barbershop
          </span>
        )}
      </div>
    </Link>
  );
}

export default Logo;
