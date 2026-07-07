"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Cloud, ChevronDown } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#EFEFE9] pt-14 sm:pt-16 lg:pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,140,0,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(255,140,0,0.04),transparent_50%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="grid-light" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1A1E24" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vmin] h-[80vmin] bg-[#FF8C00]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vmin] h-[50vmin] bg-[#FF8C00]/5 rounded-full blur-[100px] hidden sm:block" />
      </div>

      <FloatingParticles />

      <motion.div
        style={{ y: yBg, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-[#FF8C00]/10 text-[#FF8C00] border border-[#FF8C00]/20">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            The Creative Cloud Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 px-2"
        >
          <span className="text-[#1A1E24]">Build with </span>
          <br className="hidden xs:block sm:hidden" />
          <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFa030] to-[#FF6600] bg-clip-text text-transparent">
            BRUTHA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-[#808285] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
        >
          Purpose-built cloud infrastructure for creative development —
          <br className="hidden sm:block" />
          AI-powered tools, autonomous agents, and limitless compute.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <a
            href="/home#values"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3 rounded-xl bg-[#FF8C00] text-white font-medium text-sm hover:bg-[#FFa030] transition-all shadow-xl shadow-[#FF8C00]/25 hover:shadow-[#FF8C00]/40 min-h-[44px]"
          >
            Explore the Platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>
          <a
            href="#"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3 rounded-xl text-sm text-[#1A1E24] border border-[#1A1E24]/10 hover:bg-[#1A1E24]/5 transition-all min-h-[44px]"
          >
            <Cloud className="w-4 h-4 shrink-0" />
            View Documentation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 sm:mt-16 flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 px-4"
        >
          {[
            { value: "99.99%", label: "Uptime SLA" },
            { value: "300+", label: "Edge Locations" },
            { value: "50ms", label: "Avg. Latency" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1E24]">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[#808285] mt-0.5 sm:mt-1 whitespace-nowrap">
                {stat.label}
              </div>
              {i < 2 && (
                <div className="hidden sm:block absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-px h-8 sm:h-10 bg-[#1A1E24]/10" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#808285] animate-bounce" />
      </motion.div>
    </section>
  );
};

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: ((i * 17 + 3) * 7.3) % 100,
  y: ((i * 31 + 11) * 3.7) % 100,
  size: (((i * 7 + 5) % 10) / 10) * 3 + 1,
  duration: (((i * 13 + 7) % 10) / 10) * 10 + 10,
  delay: (((i * 19 + 2) % 10) / 10) * 5,
}));

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#FF8C00]/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: Math.max(p.size, 1.5),
            height: Math.max(p.size, 1.5),
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Hero;
