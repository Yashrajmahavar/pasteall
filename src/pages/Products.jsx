import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Package, 
  Layers, 
  ShieldCheck, 
  Send, 
  X, 
  ChevronRight,
  Filter,
  FileSpreadsheet,
  Globe2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import CTASection from '../components/CTASection';
import { productsData } from '../data/products';

export default function Products() {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  // Check if URL has hash to auto-open product or highlight
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const found = productsData.find(p => p.id === id);
      if (found) {
        setSelectedProduct(found);
      }
    }
  }, [location.hash]);

  const filteredProducts = activeCategoryFilter === 'all'
    ? productsData
    : productsData.filter(p => p.id === activeCategoryFilter);

  return (
    <div className="bg-[#F7FBFF]">
      
      {/* ==================================================
          PRODUCTS HERO
          ================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0B2A52] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
            alt="Container logistics vessel and export materials"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A52] via-[#0B2A52]/90 to-[#1267B1]/80" />
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#EAF6FF] bg-white/10 border border-white/20 mb-6 backdrop-blur-md"
          >
            <Package className="w-3.5 h-3.5 text-[#2CA6E0]" />
            <span>EXPORT PORTFOLIO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Products We Export
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Quality products for diverse industries and global markets.
          </motion.p>
        </div>
      </section>

      {/* ==================================================
          CATEGORY FILTER BAR
          ================================================== */}
      <section className="py-8 border-b border-slate-200/60 bg-white/80 sticky top-[69px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#0B2A52] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories ({productsData.length})
            </button>
            {productsData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveCategoryFilter(item.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategoryFilter === item.id
                    ? 'bg-[#1267B1] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          DETAILED 5-CATEGORY GRID
          ================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {filteredProducts.map((product, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={product.id}
                id={product.id}
                className="scroll-mt-32"
              >
                <GlassCard
                  variant="default"
                  hover={false}
                  className="p-6 sm:p-10 border border-white/95 overflow-hidden"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}>
                    
                    {/* Visual Column */}
                    <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-72 sm:h-84 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#0B2A52]/90 text-white backdrop-blur-md">
                            Category 0{productsData.findIndex(p => p.id === product.id) + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className={`lg:col-span-7 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1267B1] mb-2">
                        {product.tagline}
                      </div>

                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B2A52] tracking-tight">
                        {product.title}
                      </h2>

                      <p className="mt-4 text-[#14243A] text-base leading-relaxed">
                        {product.description}
                      </p>

                      <p className="mt-2 text-[#64748B] text-sm leading-relaxed">
                        {product.fullDescription}
                      </p>

                      {/* Items / Specification Portfolio */}
                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Available Material Grades &amp; Items:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {product.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#1267B1] flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Packaging specification */}
                      <div className="mt-5 p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-600 flex items-start gap-2.5">
                        <Package className="w-4 h-4 text-[#1267B1] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#0B2A52]">Export Packaging: </strong>
                          {product.packaging}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        <Link
                          to={`/get-quote?category=${encodeURIComponent(product.title)}`}
                          className="btn-primary text-sm font-bold inline-flex items-center gap-2"
                        >
                          <span>Enquire Now</span>
                          <ArrowRight className="w-4 h-4 text-[#2CA6E0]" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => setSelectedProduct(product)}
                          className="btn-secondary text-sm font-semibold inline-flex items-center gap-2"
                        >
                          <span>Full Specifications</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          PRODUCT MODAL FOR DEEP SPECIFICATIONS
          ================================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#1267B1] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#2CA6E0]" />
                <span>Verified Export Grade</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[#0B2A52]">
                {selectedProduct.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {selectedProduct.fullDescription}
              </p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Standard Export Items Included
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {selectedProduct.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Quality Benchmarks &amp; Features
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {selectedProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1267B1]"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 text-xs text-slate-700">
                  <strong className="text-[#0B2A52] block mb-1">Standard Packaging Details:</strong>
                  {selectedProduct.packaging}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <Link
                  to={`/get-quote?category=${encodeURIComponent(selectedProduct.title)}`}
                  onClick={() => setSelectedProduct(null)}
                  className="btn-primary text-sm font-bold inline-flex items-center gap-2"
                >
                  <span>Request Product Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#2CA6E0]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
