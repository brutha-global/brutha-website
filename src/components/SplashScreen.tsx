"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Cloud } from "lucide-react";

function shouldGlitch(): boolean {
  if (typeof window === "undefined") return false;
  const count = parseInt(localStorage.getItem("brutha_visit") || "0");
  const next = count + 1;
  localStorage.setItem("brutha_visit", String(next));
  return next % 5 === 1;
}

const SplashScreen = () => {
  const router = useRouter();
  const [showGlitch] = useState(shouldGlitch);
  const [countdown, setCountdown] = useState(4);
  const [fadeOut, setFadeOut] = useState(false);
  const navigated = useRef(false);

  useEffect(() => {
    if (showGlitch) return;
    router.replace("/home");
  }, [showGlitch, router]);

  useEffect(() => {
    if (!showGlitch) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setFadeOut(true);
          setTimeout(() => {
            if (!navigated.current) {
              navigated.current = true;
              router.replace("/home");
            }
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showGlitch, router]);

  if (!showGlitch) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1A1E24] overflow-hidden transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #FF8C00 2px, #FF8C00 4px)",
            animation: "glitch-scanlines 0.1s linear infinite",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            opacity: 0.04,
            animation: "glitch-noise 2s steps(5) infinite",
          }}
        />
      </div>

      <div className="relative animate-glitch-flicker px-4 sm:px-0">
        <div className="animate-glitch-skew">
          <div className="animate-glitch-rgb">
            <div className="relative mb-3 sm:mb-4 flex items-center justify-center">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  clipPath: "inset(20% 0 50% 0)",
                  transform: "translate(4px, 0)",
                }}
              >
                <Cloud className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#FF4500] opacity-70" />
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  clipPath: "inset(50% 0 10% 0)",
                  transform: "translate(-4px, 0)",
                }}
              >
                <Cloud className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#0066FF] opacity-70" />
              </div>
              <Cloud className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#FF8C00] relative z-10" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tight text-center relative">
              <span
                className="absolute inset-0 text-[#FF4500] opacity-70"
                style={{
                  clipPath: "inset(30% 0 40% 0)",
                  transform: "translate(3px, 0)",
                }}
              >
                BRUTHA
              </span>
              <span
                className="absolute inset-0 text-[#0066FF] opacity-70"
                style={{
                  clipPath: "inset(50% 0 15% 0)",
                  transform: "translate(-3px, 0)",
                }}
              >
                BRUTHA
              </span>
              <span className="relative z-10 text-white">BRUTHA</span>
            </h1>

            <p className="text-center text-[10px] sm:text-sm md:text-base text-zinc-500 mt-3 sm:mt-4 tracking-[0.2em] sm:tracking-[0.3em] uppercase relative z-10 px-4">
              The Creative Cloud Infrastructure
            </p>

            <div className="mt-6 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-2 relative z-10">
              <div className="w-16 sm:w-20 md:w-32 h-px bg-zinc-800" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF8C00]" />
              <div className="w-16 sm:w-20 md:w-32 h-px bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-10">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              i < countdown ? "bg-[#FF8C00]" : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
