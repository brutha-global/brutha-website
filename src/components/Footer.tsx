"use client";

import { Cloud } from "lucide-react";
import { productCategories } from "@/data/brand";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#1A1E24] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF8C00]/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <a href="/home" className="flex items-center gap-2 mb-3 sm:mb-4">
              <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8C00]" />
              <span className="text-base sm:text-lg font-bold tracking-tight">
                <span className="text-white">BRUTHA</span>
                <span className="text-[#FF8C00]">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-xs leading-relaxed mb-5 sm:mb-6">
              The creative cloud infrastructure — purpose-built for AI-powered
              development, autonomous agents, and limitless creativity.
            </p>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {["GitHub", "Twitter", "Discord"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-[11px] sm:text-xs text-zinc-500 hover:text-zinc-300 transition-colors px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-zinc-200 mb-3 sm:mb-4">
              Products
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {productCategories.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-zinc-200 mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} BRUTHA. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[11px] sm:text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
