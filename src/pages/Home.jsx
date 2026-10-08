import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Globe2, 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  Handshake, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Anchor, 
  Plane, 
  Container, 
  Sparkles,
  TrendingUp,
  Layers,
  Search
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { productsData } from '../data/products';

export default function Home() {
  const trustItems = [
    { icon: Handshake, title: "Trusted Partnerships", desc: "Long-term relationships built on integrity" },
    { icon: Globe2, title: "Global Trade Network", desc: "Extensive import & export reach" },
    { icon: ShieldCheck, title: "Premium Quality Products", desc: "Strict verification & grade adherence" },
    { icon: Clock, title: "On-Time Delivery", desc: "Streamlined maritime & air logistics" },
    { icon: BadgePercent, title: "Competitive Pricing", desc: "Optimized direct sourcing value" }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Every product consignment adheres to international export specifications and quality verification standards before dispatch."
    },
    {
      icon: Globe2,
      title: "Global Network",
      desc: "Broad international freight corridors and established forwarding channels ensuring reliable cross-border transactions."
    },
    {
      icon: Layers,
      title: "Reliable Sourcing",
      desc: "Dependable tie-ups with verified manufacturers, processing plants, and certified commodity aggregators."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      desc: "Proactive supply chain scheduling, expedited export documentation, and responsive tracking for on-time arrivals."
    },
    {
      icon: Handshake,
      title: "Customer Satisfaction",
      desc: "Dedicated account representatives focused on transparent communication, customized specifications, and seamless partnership."
    }
  ];

  return (
    <div className="bg-[#F7FBFF] overflow-hidden">
      
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
        {/* Background visual: High quality international shipping & container vessel */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=2200&q=85"
            alt="International maritime container ship at open sea"
            className="w-full h-full object-cover object-center scale-102"
          />
          {/* Subtle gradient overlays to ensure text contrast while retaining crisp photography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A52]/90 via-[#0B2A52]/75 to-[#1267B1]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52] via-transparent to-black/30" />
          <div className="absolute inset-0 bg-dot-pattern opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Glass Content Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-8"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_25px_60px_rgba(7,26,51,0.5)]">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/15 text-[#EAF6FF] border border-white/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#2CA6E0] animate-ping"></span>
                  <span>GLOBAL TRADE | IMPORT &amp; EXPORT</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
                  Connecting Global Markets <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-300 to-white">
                    with Quality Products
                  </span>
                </h1>

                {/* Supporting Text */}
                <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
                  HXRAO Overseas Exports Private Limited is a trusted import and export company, primarily focused on delivering quality products to international markets.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-[#0B2A52] bg-white hover:bg-sky-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-102 active:scale-98"
                  >
                    <span>Explore Our Products</span>
                    <ArrowRight className="w-5 h-5 text-[#1267B1]" />
                  </Link>

                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-102 active:scale-98"
                  >
                    <span>About Us</span>
                  </Link>
                </div>

                {/* Secondary Micro Stats inside Hero Panel */}
                <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-white">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-sky-200 font-semibold">Focus</div>
                    <div className="text-sm sm:text-base font-bold mt-0.5">International Export</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-sky-200 font-semibold">Integrity</div>
                    <div className="text-sm sm:text-base font-bold mt-0.5">Verified Sourcing</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-sky-200 font-semibold">Network</div>
                    <div className="text-sm sm:text-base font-bold mt-0.5">Global Trade</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Floating Glass Card as specified */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col gap-4"
            >
              <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 sm:p-8 text-white shadow-[0_20px_50px_rgba(7,26,51,0.4)] relative">
                <div className="flex items-center justify-between pb-5 border-b border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/95 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <img src="/logo.png" alt="HXRAO Official Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base leading-none">HXRAO Exports</h4>
                      <span className="text-[11px] text-slate-300">Global Trade Operations</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#2CA6E0]/25 text-sky-200 uppercase tracking-wider">
                    Export Desk
                  </span>
                </div>

                <div className="py-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2CA6E0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">Quality Products</h5>
                      <p className="text-xs text-slate-300 mt-0.5">Comprehensive grade verification and export packaging.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2CA6E0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">Reliable Supply</h5>
                      <p className="text-xs text-slate-300 mt-0.5">Streamlined sourcing pipeline across multiple product categories.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                  <span>Head Office: Delhi, India</span>
                  <Link to="/contact" className="text-sky-300 hover:text-white font-semibold flex items-center gap-1">
                    <span>Connect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Smaller quick badge card */}
              <div className="bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-400/20 flex items-center justify-center text-sky-300 flex-shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Maritime &amp; Air Logistics</div>
                  <div className="text-slate-300">Multi-modal trade connecting international hubs.</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================================================
          TRUST BAR (Immediately Below Hero)
          ================================================== */}
      <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/85 backdrop-blur-xl border border-white/90 rounded-2xl shadow-[0_20px_50px_rgba(11,42,82,0.08)] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''}`}>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 border border-sky-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0B2A52] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          PRODUCTS SECTION (5 categories)
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PRODUCT CATEGORIES"
          title="Premium Products for Global Markets"
          subtitle="We connect businesses with reliable products across diverse industries and international markets."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, idx) => (
            <div key={product.id}>
              <ProductCard product={product} index={idx} />
            </div>
          ))}
        </div>

        {/* View All Products button */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-[#0B2A52] hover:bg-[#1267B1] transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <span>View Full Product Specifications</span>
            <ArrowRight className="w-4 h-4 text-[#2CA6E0]" />
          </Link>
        </div>
      </section>

      {/* ==================================================
          ABOUT PREVIEW SECTION (Two Columns)
          ================================================== */}
      <section className="py-16 sm:py-24 bg-white/60 border-y border-sky-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Large Logistics / Globe Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Global trade cargo logistics port"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/80 via-transparent to-transparent" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src="/logo.png" alt="HXRAO Official Logo" className="w-12 h-12 object-contain flex-shrink-0" />
                      <div>
                        <div className="text-[10px] font-bold text-[#1267B1] uppercase tracking-wider">Trading Foundation</div>
                        <div className="font-heading font-extrabold text-[#0B2A52] text-sm sm:text-base">HXRAO Overseas Exports</div>
                      </div>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-sky-50 text-[#1267B1] flex items-center justify-center font-bold flex-shrink-0">
                      <Globe2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text & Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-sky-50 text-[#1267B1] border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2CA6E0]"></span>
                ABOUT HXRAO
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0B2A52] tracking-tight leading-tight">
                Your Trusted Global Export Partner
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#64748B] leading-relaxed">
                HXRAO Overseas Exports Private Limited is a dynamic and client-focused export company committed to delivering quality products to international markets. We focus on reliable sourcing, professional service and long-term business relationships.
              </p>

              {/* Small Glass Information Card as specified */}
              <div className="mt-8 w-full bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Focus</div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-[#1267B1] border border-sky-100">
                    Global Export &amp; Import &bull; Mainly Export
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#1267B1] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0B2A52] block">Head Office</span>
                      <span className="text-slate-600">Avantika Enclave, Rohini Sector-2, Delhi – 110085</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#1267B1] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0B2A52] block">Contact</span>
                      <span className="text-slate-600">8447539812 / 7428809509</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="btn-primary inline-flex items-center gap-2 text-sm font-bold"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#2CA6E0]" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================================================
          WHY CHOOSE US (5 Glass Cards)
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR COMMITMENT"
          title="Building Long-Term Partnerships"
          subtitle="We focus on dependable execution, clear communication, and uncompromised quality standards."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={idx}
                variant="default"
                className="p-6 flex flex-col h-full border border-white/80"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center mb-5 border border-sky-100">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0B2A52] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          GLOBAL REACH PREVIEW
          ================================================== */}
      <section className="py-20 sm:py-28 bg-[#0B2A52] text-white relative overflow-hidden">
        {/* Glow & map patterns */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1267B1]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="INTERNATIONAL PRESENCE"
            title="From Our Products to Your World"
            subtitle="Connecting reliable products with businesses across international markets."
            align="center"
            light={true}
          />

          {/* Interactive World Map / Trade Corridor Graphic */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
              {/* World outline visual */}
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
                alt="Global earth and international trade routes"
                className="w-full h-full object-cover rounded-2xl opacity-40 mix-blend-screen"
              />
              
              {/* Glowing trade route vectors */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-200 border border-white/20 mb-4 backdrop-blur-sm">
                    <Globe2 className="w-3.5 h-3.5 text-[#2CA6E0]" />
                    <span>Global Trade Network</span>
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    Seamless Freight &amp; Cross-Border Supply
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    Facilitating reliable containerized trade corridors for key commodities and industrial goods with professional customs handling.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/global-reach"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#2CA6E0] hover:bg-sky-400 text-white transition-all shadow-lg"
                    >
                      <span>Explore Global Operations</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics / Key Pillars as specified (no invented numbers) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-white">Global Markets</div>
                <div className="text-xs text-sky-200 mt-1 uppercase tracking-wider font-semibold">Broad Reach</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-white">Reliable Supply</div>
                <div className="text-xs text-sky-200 mt-1 uppercase tracking-wider font-semibold">Consistent Quality</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-white">Quality Focus</div>
                <div className="text-xs text-sky-200 mt-1 uppercase tracking-wider font-semibold">Strict Inspection</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-white">Long-Term Partnerships</div>
                <div className="text-xs text-sky-200 mt-1 uppercase tracking-wider font-semibold">Integrity First</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA SECTION
          ================================================== */}
      <CTASection />

    </div>
  );
}
