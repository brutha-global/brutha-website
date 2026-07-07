"use client";

import { motion } from "framer-motion";
import { values } from "@/data/brand";

const iconBgColors = [
  "bg-[#FF8C00]/10 text-[#FF8C00]",
  "bg-[#1A1E24]/10 text-[#1A1E24]",
  "bg-[#FF8C00]/10 text-[#FF8C00]",
  "bg-[#1A1E24]/10 text-[#1A1E24]",
  "bg-[#FF8C00]/10 text-[#FF8C00]",
  "bg-[#1A1E24]/10 text-[#1A1E24]",
];

const ValuesSection = () => {
  return (
    <section id="values" className="relative py-16 sm:py-20 lg:py-32 bg-[#EFEFE9]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-[#FF8C00]/10 text-[#FF8C00] border border-[#FF8C00]/20 mb-3 sm:mb-4">
            Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1E24] mb-3 sm:mb-4 px-2">
            What we{" "}
            <span className="text-[#FF8C00]">believe</span>
          </h2>
          <p className="text-[#808285] max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            Six principles that guide every decision, every line of code, and
            every relationship we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative h-full p-5 sm:p-6 rounded-2xl bg-white border border-[#1A1E24]/5 hover:border-[#FF8C00]/20 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md hover:shadow-[#FF8C00]/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/0 to-[#FF8C00]/0 group-hover:from-[#FF8C00]/[0.02] group-hover:to-[#FF8C00]/[0.02] transition-all duration-500" />

                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${iconBgColors[index]} flex items-center justify-center mb-3 sm:mb-4 shadow-sm`}
                  >
                    <value.icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#1A1E24] mb-1.5 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#808285] leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="absolute -bottom-6 -right-6 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#FF8C00]/5 group-hover:bg-[#FF8C00]/10 transition-opacity duration-500 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
