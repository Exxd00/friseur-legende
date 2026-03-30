"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════════
// Animated Scissors Component - Opens and closes like cutting
// ═══════════════════════════════════════════════════════════════
function AnimatedScissors({
  className,
  style,
  delay = 0
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("absolute pointer-events-none", className)}
      style={{
        ...style,
        animationDelay: `${delay}s`
      }}
    >
      {/* Left Blade */}
      <g className="origin-center" style={{ transformOrigin: "32px 32px" }}>
        <path
          d="M32 32 L10 8 C8 6 6 8 8 10 L28 30 C28 30 30 32 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="scissors-blade-left"
        />
        {/* Left Handle */}
        <ellipse
          cx="8"
          cy="8"
          rx="6"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(-45 8 8)"
          className="scissors-handle"
        />
      </g>

      {/* Right Blade */}
      <g className="origin-center" style={{ transformOrigin: "32px 32px" }}>
        <path
          d="M32 32 L54 8 C56 6 58 8 56 10 L36 30 C36 30 34 32 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="scissors-blade-right"
        />
        {/* Right Handle */}
        <ellipse
          cx="56"
          cy="8"
          rx="6"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(45 56 8)"
          className="scissors-handle"
        />
      </g>

      {/* Center Pivot */}
      <circle
        cx="32"
        cy="32"
        r="3"
        fill="currentColor"
        className="scissors-pivot"
      />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// Animated Comb Component - Moves like combing hair
// ═══════════════════════════════════════════════════════════════
function AnimatedComb({
  className,
  style,
  delay = 0
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 24"
      className={cn("absolute pointer-events-none", className)}
      style={{
        ...style,
        animationDelay: `${delay}s`
      }}
    >
      {/* Comb Body */}
      <rect
        x="2"
        y="2"
        width="44"
        height="8"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Comb Teeth */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={6 + i * 3.5}
          y1="10"
          x2={6 + i * 3.5}
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            animationDelay: `${delay + i * 0.05}s`
          }}
          className="comb-tooth"
        />
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// Animated Razor Component - Elegant straight razor
// ═══════════════════════════════════════════════════════════════
function AnimatedRazor({
  className,
  style,
  delay = 0
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 24"
      className={cn("absolute pointer-events-none", className)}
      style={{
        ...style,
        animationDelay: `${delay}s`
      }}
    >
      {/* Blade */}
      <path
        d="M4 12 L40 4 C42 3 44 5 44 8 L44 16 C44 19 42 21 40 20 L4 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="razor-blade"
      />

      {/* Handle */}
      <rect
        x="44"
        y="6"
        width="16"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Handle Detail */}
      <line
        x1="48"
        y1="9"
        x2="48"
        y2="15"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="52"
        y1="9"
        x2="52"
        y2="15"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="56"
        y1="9"
        x2="56"
        y2="15"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Shine Effect */}
      <line
        x1="10"
        y1="8"
        x2="30"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        className="razor-shine"
      />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// Shaving Brush Component - Rotating brush
// ═══════════════════════════════════════════════════════════════
function AnimatedBrush({
  className,
  style,
  delay = 0
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 48"
      className={cn("absolute pointer-events-none", className)}
      style={{
        ...style,
        animationDelay: `${delay}s`
      }}
    >
      {/* Brush Handle */}
      <path
        d="M12 28 L12 44 C12 46 14 48 16 48 C18 48 20 46 20 44 L20 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Handle Ring */}
      <ellipse
        cx="16"
        cy="30"
        rx="5"
        ry="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Brush Bristles */}
      <ellipse
        cx="16"
        cy="14"
        rx="12"
        ry="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="brush-bristles"
      />

      {/* Foam Bubbles */}
      <circle cx="10" cy="8" r="2" fill="currentColor" opacity="0.3" className="foam-bubble" />
      <circle cx="18" cy="5" r="1.5" fill="currentColor" opacity="0.3" className="foam-bubble" style={{ animationDelay: "0.3s" }} />
      <circle cx="22" cy="12" r="1" fill="currentColor" opacity="0.3" className="foam-bubble" style={{ animationDelay: "0.6s" }} />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" opacity="0.3" className="foam-bubble" style={{ animationDelay: "0.9s" }} />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// Hair Particles - Floating hair particles
// ═══════════════════════════════════════════════════════════════
function HairParticle({
  style,
  delay = 0
}: {
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <div
      className="absolute w-1 h-3 rounded-full bg-primary/20 hair-particle"
      style={{
        ...style,
        animationDelay: `${delay}s`
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════
// Neon Line - Animated glowing line
// ═══════════════════════════════════════════════════════════════
function NeonLine({
  className,
  style,
  delay = 0,
  vertical = false
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  vertical?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none neon-line",
        vertical ? "w-px h-32" : "w-32 h-px",
        className
      )}
      style={{
        background: vertical
          ? "linear-gradient(to bottom, transparent, hsl(var(--primary)), transparent)"
          : "linear-gradient(to right, transparent, hsl(var(--primary)), transparent)",
        ...style,
        animationDelay: `${delay}s`
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════
// Main Floating Elements Component
// ═══════════════════════════════════════════════════════════════
export function FloatingElements() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  // Parallax factor
  const parallax = (factor: number) => scrollY * factor;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* ═══════════════════════════════════════════════════════════════
          Scissors - Multiple instances at different positions
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatedScissors
        className="w-16 h-16 text-primary/10 floating-scissors"
        style={{
          top: "15%",
          left: "5%",
          transform: `translateY(${parallax(-0.1)}px) rotate(${15 + scrollY * 0.02}deg)`
        }}
        delay={0}
      />
      <AnimatedScissors
        className="w-12 h-12 text-primary/8 floating-scissors"
        style={{
          top: "45%",
          right: "8%",
          transform: `translateY(${parallax(-0.15)}px) rotate(${-30 + scrollY * 0.03}deg)`
        }}
        delay={1.5}
      />
      <AnimatedScissors
        className="w-20 h-20 text-primary/5 floating-scissors"
        style={{
          bottom: "25%",
          left: "10%",
          transform: `translateY(${parallax(-0.08)}px) rotate(${45 + scrollY * 0.01}deg)`
        }}
        delay={3}
      />

      {/* ═══════════════════════════════════════════════════════════════
          Combs - Flowing comb animations
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatedComb
        className="w-20 h-10 text-primary/8 floating-comb"
        style={{
          top: "30%",
          right: "15%",
          transform: `translateY(${parallax(-0.12)}px) rotate(${-15 + scrollY * 0.01}deg)`
        }}
        delay={0.5}
      />
      <AnimatedComb
        className="w-16 h-8 text-primary/6 floating-comb"
        style={{
          top: "60%",
          left: "20%",
          transform: `translateY(${parallax(-0.1)}px) rotate(${20 + scrollY * 0.02}deg)`
        }}
        delay={2}
      />

      {/* ═══════════════════════════════════════════════════════════════
          Razors - Elegant razor movements
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatedRazor
        className="w-24 h-10 text-primary/7 floating-razor"
        style={{
          top: "20%",
          right: "25%",
          transform: `translateY(${parallax(-0.08)}px) rotate(${10 + scrollY * 0.015}deg)`
        }}
        delay={1}
      />
      <AnimatedRazor
        className="w-20 h-8 text-primary/5 floating-razor"
        style={{
          bottom: "35%",
          right: "5%",
          transform: `translateY(${parallax(-0.1)}px) rotate(${-25 + scrollY * 0.02}deg)`
        }}
        delay={2.5}
      />

      {/* ═══════════════════════════════════════════════════════════════
          Brushes - Rotating shaving brushes
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatedBrush
        className="w-12 h-16 text-primary/8 floating-brush"
        style={{
          top: "50%",
          left: "8%",
          transform: `translateY(${parallax(-0.05)}px) rotate(${scrollY * 0.01}deg)`
        }}
        delay={0.8}
      />
      <AnimatedBrush
        className="w-10 h-14 text-primary/5 floating-brush"
        style={{
          bottom: "20%",
          right: "20%",
          transform: `translateY(${parallax(-0.08)}px) rotate(${-scrollY * 0.01}deg)`
        }}
        delay={2.3}
      />

      {/* ═══════════════════════════════════════════════════════════════
          Hair Particles - Scattered floating particles
          ═══════════════════════════════════════════════════════════════ */}
      {Array.from({ length: 15 }).map((_, i) => (
        <HairParticle
          key={`particle-${i}`}
          style={{
            left: `${10 + (i * 6) % 80}%`,
            top: `${15 + (i * 7) % 70}%`,
            transform: `translateY(${parallax(-0.05 - i * 0.01)}px) rotate(${(i * 30) % 360}deg)`
          }}
          delay={i * 0.3}
        />
      ))}

      {/* ═══════════════════════════════════════════════════════════════
          Neon Lines - Accent lighting effects
          ═══════════════════════════════════════════════════════════════ */}
      <NeonLine
        className="opacity-20"
        style={{
          top: "25%",
          left: "0%",
          transform: `translateY(${parallax(-0.05)}px)`
        }}
        delay={0}
      />
      <NeonLine
        className="opacity-15"
        vertical
        style={{
          top: "40%",
          right: "2%",
          transform: `translateY(${parallax(-0.08)}px)`
        }}
        delay={1}
      />
      <NeonLine
        className="opacity-10"
        style={{
          bottom: "30%",
          right: "10%",
          transform: `translateY(${parallax(-0.03)}px)`
        }}
        delay={2}
      />
      <NeonLine
        className="opacity-15"
        vertical
        style={{
          top: "15%",
          left: "3%",
          transform: `translateY(${parallax(-0.06)}px)`
        }}
        delay={1.5}
      />
    </div>
  );
}

export default FloatingElements;
