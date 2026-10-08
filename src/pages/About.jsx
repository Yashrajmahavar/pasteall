import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Compass, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Users
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import CTASection from '../components/CTASection';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To connect businesses with reliable products and create seamless international trade opportunities.",
      color: "from-blue-600 to-sky-500"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To build a trusted global export network known for quality, reliability and long-term partnerships.",
      color: "from-[#0B2A52] to-[#1267B1]"
    },
    {
      icon: Compass,
      title: "Our Approach",
      description: "Understanding requirements, sourcing responsibly, maintaining quality and delivering professionally.",
      color: "from-[#1267B1] to-[#2CA6E0]"
    }
  ];

  const advantages = [
    {
      icon: ShieldCheck,
      title: "Verified Sourcing Channels",
      desc: "Direct access to evaluated manufacturers and material aggregators who meet stringent grade benchmarks."
    },
    {
      icon: FileCheck2,
      title: "Comprehensive Documentation",
      desc: "Accurate shipping manifests, certificates of analysis, bills of lading, and export compliance handling."
    },
    {
      icon: Globe2,
      title: "International Supply Agility",
      desc: "Flexible volume handling from consolidated LCL shipments to recurring bulk FCL container schedules."
    },
    {
      icon: Users,
      title: "Transparent Communication",
      desc: "Direct, prompt, and honest interaction with our export desk at every milestone of your order."
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
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
            alt="Global trade shipping cargo vessel"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A52] via-[#0B2A52]/90 to-[#1267B1]/80" />
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#EAF6FF] bg-white/10 border border-white/20 mb-6 backdrop-blur-md"
          >
            <Globe2 className="w-3.5 h-3.5 text-[#2CA6E0]" />
            <span>EXPORT EXCELLENCE &bull; DELHI, INDIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            About HXRAO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Connecting Global Markets with Reliable Products
          </motion.p>
        </div>
      </section>

      {/* ==================================================
          WHO WE ARE SECTION
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80"
                alt="Container crane and international logistics"
                className="w-full h-[440px] object-cover"
              />
            </div>
            
            {/* Registered details glass badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white shadow-xl max-w-xs flex items-center gap-3.5">
              <img
                src="/logo.png"
                alt="HXRAO Official Logo"
                className="w-14 h-14 object-contain flex-shrink-0"
              />
              <div>
                <div className="text-[10px] font-bold text-[#1267B1] uppercase tracking-wider">Registered Entity</div>
                <div className="font-heading font-extrabold text-[#0B2A52] text-xs sm:text-sm mt-0.5 leading-tight">
                  HXRAO Overseas Exports Private Limited
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Rohini Sector-2, Delhi – 110085
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-sky-50 text-[#1267B1] border border-sky-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2CA6E0]"></span>
              WHO WE ARE
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0B2A52] tracking-tight leading-tight">
              A Dedicated Import &amp; Export Organization
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed">
              HXRAO Overseas Exports Private Limited is an import and export company focused primarily on exporting quality products to global markets. We aim to build reliable business relationships through quality products, responsible sourcing and professional service.
            </p>

            <p className="mt-4 text-base text-[#64748B] leading-relaxed">
              Headquartered in Delhi, our operations center around connecting business buyers with dependable supply channels across multiple essential categories including Healthcare &amp; Chemicals, Aluminium &amp; Plastic Scrap, Copper &amp; Steel, Building Materials, and Agro Products.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="btn-primary inline-flex items-center gap-2 text-sm font-bold"
              >
                <span>View Product Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#2CA6E0]" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center gap-2 text-sm font-bold"
              >
                <span>Speak with Our Team</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================================================
          MISSION, VISION, APPROACH
          ================================================== */}
      <section className="py-20 bg-white/70 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GUIDING PRINCIPLES"
            title="Our Strategic Foundations"
            subtitle="Clear vision and responsible methodology driving consistent export operations."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <GlassCard
                  key={idx}
                  variant="default"
                  className="p-8 flex flex-col h-full border border-white/90 relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#1267B1] flex items-center justify-center mb-6 border border-sky-100">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-[#0B2A52] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
                    {pillar.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY BUSINESSES CHOOSE HXRAO (Glass Cards)
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VALUE PROPOSITION"
          title="Why Businesses Choose HXRAO"
          subtitle="We simplify international trade hurdles through dedicated service, dependable sourcing, and ethical practices."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={idx}
                variant="subtle"
                className="p-6 flex flex-col h-full border border-white"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center mb-4 border border-sky-100">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#0B2A52] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
