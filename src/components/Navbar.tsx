"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Cloud, ArrowRight } from "lucide-react";
import { values, productCategories, bruthaProducts, getProductsByCategory } from "@/data/brand";
import { useProductModal } from "@/context/ProductContext";

const NavLogo = () => (
  <a href="/home" className="flex items-center gap-2 group shrink-0">
    <Cloud className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF8C00] group-hover:text-[#FFa030] transition-colors" />
    <span className="text-lg sm:text-xl font-bold tracking-tight">
      <span className="text-white">BRUTHA</span>
      <span className="text-[#FF8C00]">.</span>
    </span>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeProductCat, setActiveProductCat] = useState(productCategories[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { openProduct } = useProductModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (setter: (v: boolean) => void) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(true);
  };

  const handleMouseLeave = (setter: (v: boolean) => void) => {
    timeoutRef.current = setTimeout(() => setter(false), 150);
  };

  const handleProductClick = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    const product = bruthaProducts.find((p) => p.id === productId);
    if (product) openProduct(product);
    setShowProducts(false);
    setMobileProductOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1E24]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <NavLogo />

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="/home" className="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(setShowProducts)}
              onMouseLeave={() => handleMouseLeave(setShowProducts)}
              ref={productsRef}
            >
              <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showProducts ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px]"
                    onMouseEnter={() => handleMouseEnter(setShowProducts)}
                    onMouseLeave={() => handleMouseLeave(setShowProducts)}
                  >
                    <div className="bg-[#1A1E24]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="grid grid-cols-3 gap-px bg-white/5">
                        {productCategories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setActiveProductCat(cat.id)}
                            className={`flex flex-col items-center gap-1.5 px-3 py-4 text-center transition-colors ${
                              activeProductCat === cat.id
                                ? "bg-[#1A1E24] text-[#FF8C00]"
                                : "bg-[#1A1E24]/50 text-zinc-400 hover:text-zinc-200"
                            }`}
                          >
                            <cat.icon className="w-5 h-5" />
                            <span className="text-[11px] font-semibold leading-tight">{cat.label}</span>
                          </button>
                        ))}
                      </div>
                      <div className="p-4 max-h-[340px] overflow-y-auto">
                        <div className="text-[11px] uppercase tracking-widest text-zinc-500 mb-3 font-medium">
                          {productCategories.find((c) => c.id === activeProductCat)?.name}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {getProductsByCategory(activeProductCat).map((product) => (
                            <a
                              key={product.id}
                              href={product.url}
                              onClick={(e) => handleProductClick(e, product.id)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center shrink-0 mt-0.5">
                                <product.icon className="w-4 h-4 text-[#FF8C00]" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-zinc-200 group-hover/item:text-white transition-colors truncate">
                                  {product.name}
                                </div>
                                <div className="text-xs text-zinc-500 leading-tight mt-0.5">
                                  {product.tagline}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(setShowAbout)}
              onMouseLeave={() => handleMouseLeave(setShowAbout)}
              ref={aboutRef}
            >
              <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
                About BRUTHA
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${showAbout ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {showAbout && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[580px] max-w-[90vw]"
                    onMouseEnter={() => handleMouseEnter(setShowAbout)}
                    onMouseLeave={() => handleMouseLeave(setShowAbout)}
                  >
                    <div className="bg-[#1A1E24]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="px-4 pt-4 pb-1">
                        <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
                          Our Values
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {values.map((v) => (
                            <a
                              key={v.id}
                              href={`/home#${v.id}`}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center shrink-0">
                                <v.icon className="w-4 h-4 text-[#FF8C00]" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-zinc-200 group-hover/item:text-white transition-colors">
                                  {v.title}
                                </div>
                                <div className="text-xs text-zinc-500 line-clamp-1">
                                  {v.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/home#values" className="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
              Values
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
              Sign In
            </a>
            <a href="#" className="text-sm px-4 py-2 rounded-xl bg-[#FF8C00] text-white font-medium hover:bg-[#FFa030] transition-all shadow-lg shadow-[#FF8C00]/20 whitespace-nowrap">
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-zinc-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-[#1A1E24]/98 backdrop-blur-xl overflow-hidden max-h-[calc(100dvh-3.5rem)] overflow-y-auto"
          >
            <div className="px-3 sm:px-4 py-4 space-y-1">
              <a href="/home" className="block px-3 py-3 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </a>

              <button
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-[#FF8C00]">Products</span>
                <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileProductOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-1 py-1">
                      {productCategories.map((cat) => (
                        <div key={cat.id}>
                          <button
                            onClick={() => setActiveProductCat(activeProductCat === cat.id ? "" : cat.id)}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <cat.icon className="w-4 h-4 text-[#FF8C00]" />
                              <span className="font-medium">{cat.label}</span>
                            </div>
                            <ChevronDown className={`w-3 h-3 text-zinc-500 transition-transform ${activeProductCat === cat.id ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {activeProductCat === cat.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-8 pl-3 border-l border-white/5 space-y-0.5 py-1">
                                  {getProductsByCategory(cat.id).map((product) => (
                                    <a
                                      key={product.id}
                                      href={product.url}
                                      onClick={(e) => { handleProductClick(e, product.id); setIsOpen(false); }}
                                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors"
                                    >
                                      <product.icon className="w-3.5 h-3.5 shrink-0 text-[#FF8C00]" />
                                      <span className="truncate">{product.name}</span>
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-2 px-3 py-2 text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                Our Values
              </div>
              {values.map((v) => (
                <a
                  key={v.id}
                  href={`/home#${v.id}`}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-5 h-5 rounded bg-[#FF8C00]/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-3 h-3 text-[#FF8C00]" />
                  </div>
                  {v.title}
                </a>
              ))}

              <div className="h-px bg-white/5 my-3" />

              <a href="#" className="block text-center px-4 py-3 rounded-xl text-sm text-zinc-300 border border-white/10 hover:bg-white/5 transition-colors">
                Sign In
              </a>
              <a href="#" className="block text-center px-4 py-3 rounded-xl text-sm font-medium bg-[#FF8C00] text-white shadow-lg shadow-[#FF8C00]/20">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
