import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Anchor, 
  Plane, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  FileCheck2,
  Boxes
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

export default function GlobalReach() {
  const tradePillars = [
    {
      title: "International Export",
      desc: "Delivering export-quality commodities, chemical compounds, and recycled materials tailored to cross-border specifications.",
      icon: Anchor
    },
    {
      title: "Global Sourcing",
      desc: "Direct integration with reputable mills, certified chemical producers, and aggregators to guarantee consistent supply volumes.",
      icon: Globe2
    },
    {
      title: "Reliable Supply",
      desc: "End-to-end supply chain oversight minimizing delays, ensuring scheduled dispatches, and maintaining intact cargo integrity.",
      icon: Clock
    },
    {
      title: "Long-Term Partnerships",
      desc: "Cultivating transparent, enduring B2B relationships founded on mutual commercial integrity and prompt execution.",
      icon: ShieldCheck
    }
  ];

  const shippingModes = [
    {
      mode: "Full Container Load (FCL)",
      desc: "Dedicated containerized dispatches for bulk commodity orders, scrap shipments, and heavy metals.",
      icon: Boxes
    },
    {
      mode: "Less than Container Load (LCL)",
      desc: "Consolidated freight options for specialized chemicals, smaller trial orders, and high-value items.",
      icon: Truck
    },
    {
      mode: "Air Freight Forwarding",
      desc: "Expedited transit solutions for urgent pharmaceutical ingredients and time-critical materials.",
      icon: Plane
    }
  ];

  return (
    <div className="bg-[#F7FBFF]">
      
      {/* ==================================================
          PAGE HERO
          ================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0B2A52] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80"
            alt="Global trade network and earth continents"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A52] via-[#0B2A52]/85 to-[#1267B1]/75" />
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#EAF6FF] bg-white/10 border border-white/20 mb-6 backdrop-blur-md"
          >
            <Globe2 className="w-3.5 h-3.5 text-[#2CA6E0]" />
            <span>CROSS-BORDER TRADE CORRIDORS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Global Trade. Reliable Connections.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            We work with businesses looking for reliable products and professional export support across international markets.
          </motion.p>
        </div>
      </section>

      {/* ==================================================
          INTERACTIVE WORLD MAP & TRADE ROUTES VISUAL
          ================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A52] rounded-3xl p-6 sm:p-12 text-white relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Subtle Ambient Orbs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#2CA6E0]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#1267B1]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300 block mb-2">
                CONNECTED FREIGHT OPERATIONS
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                Connecting Markets Across Continents
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base">
                Our export logistics originate from strategic hubs in India, orchestrating secure maritime routing and port-to-port dispatches tailored to your regional customs requirements.
              </p>
            </div>

            {/* Glowing Trade Route Map Graphics */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 p-4 sm:p-8">
              {/* World Map SVG with Trade Route Arcs */}
              <div className="relative aspect-[16/9] max-h-[460px] w-full flex items-center justify-center">
                <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle Grid Lines */}
                  <line x1="0" y1="125" x2="1000" y2="125" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(44,166,224,0.15)" strokeWidth="1.5" />
                  <line x1="0" y1="375" x2="1000" y2="375" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="750" y1="0" x2="750" y2="500" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                  {/* Stylized Continents silhouettes */}
                  <path d="M 180 140 Q 240 120 280 160 T 260 260 T 200 240 Z" fill="rgba(255,255,255,0.06)" />
                  <path d="M 230 270 Q 280 290 270 370 T 220 400 T 210 320 Z" fill="rgba(255,255,255,0.06)" />
                  <path d="M 460 110 Q 540 100 550 170 T 490 210 T 450 150 Z" fill="rgba(255,255,255,0.06)" />
                  <path d="M 470 210 Q 560 230 540 350 T 480 370 T 460 270 Z" fill="rgba(255,255,255,0.06)" />
                  <path d="M 580 120 Q 750 110 800 210 T 670 270 T 590 190 Z" fill="rgba(255,255,255,0.06)" />
                  <path d="M 760 320 Q 840 330 830 400 T 750 410 Z" fill="rgba(255,255,255,0.06)" />

                  {/* Origin Hub: India (Delhi / Ports around 640, 240) */}
                  <g className="origin-hub">
                    <circle cx="640" cy="240" r="14" fill="rgba(44,166,224,0.25)" className="animate-ping" />
                    <circle cx="640" cy="240" r="7" fill="#2CA6E0" />
                    <circle cx="640" cy="240" r="3" fill="#FFFFFF" />
                    <text x="640" y="270" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">HXRAO HQ / INDIA</text>
                  </g>

                  {/* Animated Trade Route Arcs */}
                  {/* Route 1: Middle East / Gulf */}
                  <path d="M 640 240 Q 590 210 560 230" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" />
                  <circle cx="560" cy="230" r="5" fill="#38BDF8" />
                  <text x="545" y="220" textAnchor="end" fill="#93C5FD" fontSize="11">Middle East</text>

                  {/* Route 2: Europe */}
                  <path d="M 640 240 Q 550 150 490 140" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" />
                  <circle cx="490" cy="140" r="5" fill="#38BDF8" />
                  <text x="480" y="130" textAnchor="end" fill="#93C5FD" fontSize="11">Europe</text>

                  {/* Route 3: Southeast Asia / Far East */}
                  <path d="M 640 240 Q 720 250 780 270" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" />
                  <circle cx="780" cy="270" r="5" fill="#38BDF8" />
                  <text x="795" y="280" textAnchor="start" fill="#93C5FD" fontSize="11">Asia Pacific</text>

                  {/* Route 4: Africa */}
                  <path d="M 640 240 Q 580 290 520 320" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" />
                  <circle cx="520" cy="320" r="5" fill="#38BDF8" />
                  <text x="505" y="335" textAnchor="end" fill="#93C5FD" fontSize="11">African Ports</text>

                  {/* Route 5: Americas / Atlantic */}
                  <path d="M 640 240 Q 450 80 260 170" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
                  <circle cx="260" cy="170" r="5" fill="#38BDF8" />
                  <text x="250" y="160" textAnchor="end" fill="#93C5FD" fontSize="11">Americas</text>
                </svg>
              </div>

              {/* Legend bar */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-4">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#2CA6E0]"></span>
                    <span>Origin / Sourcing Center (Delhi &amp; Key Indian Gateways)</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-0.5 border-t-2 border-dashed border-[#38BDF8]"></span>
                    <span>Active Export Corridors</span>
                  </span>
                </div>
                <span className="text-sky-300 font-medium">Full Container &amp; Consolidated Logistics</span>
              </div>
            </div>

            {/* 4 Core Pillars below map as specified */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradePillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          MULTIMODAL LOGISTICS MODES
          ================================================== */}
      <section className="py-16 sm:py-24 bg-white/70 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TRADE CAPABILITIES"
            title="Logistics Tailored to Commodity Requirements"
            subtitle="Flexible shipping frameworks ensuring your products arrive on time, within budget, and in flawless condition."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingModes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <GlassCard key={idx} variant="default" className="p-8 flex flex-col h-full border border-white">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center mb-5 border border-sky-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0B2A52] mb-3">
                    {item.mode}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
