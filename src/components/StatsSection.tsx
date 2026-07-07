"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "300+", label: "Edge Locations" },
  { value: "50ms", label: "Avg. Latency" },
  { value: "10M+", label: "Agent Hours Run" },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 bg-[#EFEFE9]">
      <motion.div
        style={{ scale }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6"
      >
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FF8C00]/10 via-[#FF6600]/5 to-transparent border border-[#FF8C00]/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.06),transparent_70%)]" />

          <div className="relative z-10 px-5 sm:px-8 py-10 sm:py-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-10"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#808285] font-medium">
                Built for scale
              </span>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1E24] mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#808285]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
