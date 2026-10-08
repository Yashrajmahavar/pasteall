import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  Truck, 
  CheckCircle2, 
  Boxes 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import CTASection from '../components/CTASection';
import { industriesData } from '../data/industries';
import { Link } from 'react-router-dom';

export default function Industries() {
  return (
    <div className="bg-[#F7FBFF]">
      
      {/* ==================================================
          PAGE HERO
          ================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0B2A52] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="International industrial logistics hub"
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
            <Building2 className="w-3.5 h-3.5 text-[#2CA6E0]" />
            <span>GLOBAL SECTORS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Industries We Serve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Our products support businesses across multiple sectors.
          </motion.p>
        </div>
      </section>

      {/* ==================================================
          6 INDUSTRY CARDS GRID
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CROSS-SECTOR CAPABILITIES"
          title="Essential Supplies for World-Class Operations"
          subtitle="From precision healthcare chemicals to primary structural commodities, our export corridors fulfill demanding manufacturing and commercial requirements."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind, idx) => (
            <IndustryCard key={ind.id} industry={ind} index={idx} />
          ))}
        </div>
      </section>

      {/* ==================================================
          SUPPORTING GLOBAL SUPPLY CHAINS SECTION
          ================================================== */}
      <section className="py-20 bg-white/80 border-y border-sky-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Logistics Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white relative group">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                  alt="Global supply chain maritime container vessel"
                  className="w-full h-[450px] object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/80 via-[#0B2A52]/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center font-bold">
                        <Globe2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#0B2A52]">Reliable Freight Corridors</h4>
                        <p className="text-xs text-slate-500">Connecting sourcing origins to destination ports</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Section Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-sky-50 text-[#1267B1] border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2CA6E0]"></span>
                INTEGRATED OPERATIONS
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0B2A52] tracking-tight leading-tight">
                Supporting Global Supply Chains
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed">
                Modern international trade demands agility, meticulous attention to product specifications, and uncompromising logistical coordination. At HXRAO Overseas Exports Private Limited, we partner with enterprises across continents to ensure an uninterrupted flow of essential raw materials and finished products.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B2A52]">Standardized Quality Inspection</h5>
                    <p className="text-xs sm:text-sm text-slate-600">Verification of material grades, chemical composition, and physical tolerances prior to dispatch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B2A52]">Export-Grade Seaworthy Packaging</h5>
                    <p className="text-xs sm:text-sm text-slate-600">Protecting sensitive shipments against humidity, maritime stress, and transit degradation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B2A52]">Comprehensive Trade Documentation</h5>
                    <p className="text-xs sm:text-sm text-slate-600">Complete compliance handling with prompt delivery of export manifests and bills of lading.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/get-quote"
                  className="btn-primary inline-flex items-center gap-2 text-sm font-bold"
                >
                  <span>Request an Industry Supply Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#2CA6E0]" />
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
