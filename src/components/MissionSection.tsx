"use client";

import { motion } from "framer-motion";
import { mission } from "@/data/brand";

const MissionSection = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden bg-[#1A1E24]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF8C00]/[0.03] to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full bg-gradient-to-br from-[#FF8C00]/5 via-[#FF6600]/5 to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-white/5 text-zinc-400 border border-white/10 mb-6 sm:mb-8">
            Our Mission
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8 px-2"
        >
          {mission.headline}{" "}
          <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFa030] to-[#FF6600] bg-clip-text text-transparent">
            {mission.highlight}
          </span>
          <span className="text-white">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4"
        >
          {mission.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-500"
        >
          <span className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-zinc-600" />
          <span className="px-1">Creator-first. Agent-powered. Planet-scale.</span>
          <span className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-zinc-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
