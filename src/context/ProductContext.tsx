"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, type LucideIcon } from "lucide-react";

interface ProductInfo {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  url: string;
  tagline: string;
}

interface ProductContextType {
  openProduct: (product: ProductInfo) => void;
}

const ProductContext = createContext<ProductContextType>({
  openProduct: () => {},
});

export const useProductModal = () => useContext(ProductContext);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const redirecting = useRef(false);
  const router = useRouter();

  const openProduct = useCallback((p: ProductInfo) => {
    redirecting.current = false;
    setProduct(p);
    setVisible(true);
    setClosing(false);

    setTimeout(() => {
      if (!redirecting.current) {
        redirecting.current = true;
        setClosing(true);
        setTimeout(() => {
          setVisible(false);
          setProduct(null);
          router.push(p.url);
        }, 400);
      }
    }, 1800);
  }, [router]);

  return (
    <ProductContext.Provider value={{ openProduct }}>
      {children}
      <AnimatePresence>
        {visible && product && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => {}}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                closing
                  ? { opacity: 0, y: 20, scale: 0.97 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full sm:max-w-lg mx-auto bg-[#1A1E24] border border-white/10 sm:rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8C00] to-[#FF6600] origin-left" />

              <div className="p-5 sm:p-8">
                <button
                  onClick={() => {
                    setClosing(true);
                    setTimeout(() => {
                      setVisible(false);
                      setProduct(null);
                    }, 300);
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 pr-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FF8C00]/10 flex items-center justify-center shrink-0">
                    <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF8C00]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-widest text-[#FF8C00]/70 font-medium">
                      {product.category}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5 truncate">
                      {product.name}
                    </h2>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FF8C00]/5 border border-[#FF8C00]/10">
                    <span className="text-[11px] uppercase tracking-wider text-[#FF8C00]/80 font-medium">
                      {product.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF8C00] animate-pulse" />
                    <span className="text-xs text-zinc-500">
                      Redirecting...
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ProductContext.Provider>
  );
};
