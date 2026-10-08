import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, ShieldCheck, Globe2 } from 'lucide-react';

export default function CTASection({ className = '' }) {
  return (
    <section className={`relative py-16 sm:py-24 overflow-hidden ${className}`}>
      {/* Background with maritime / logistics backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="International container logistics port"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A52]/95 via-[#0B2A52]/90 to-[#1267B1]/85" />
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(7,26,51,0.5)] text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Subtle Ambient Light Orb */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#2CA6E0]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#1267B1]/30 blur-3xl pointer-events-none" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#EAF6FF] bg-white/10 border border-white/20 mb-6 backdrop-blur-md"
          >
            <Globe2 className="w-3.5 h-3.5 text-[#2CA6E0]" />
            <span>GLOBAL IMPORT &amp; EXPORT PARTNERSHIP</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Looking for a Reliable Export Partner?
          </motion.h2>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss your product requirements and build a reliable supply partnership. Our dedicated desk handles end-to-end specifications, documentation, and international shipping.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/get-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-[#0B2A52] bg-white hover:bg-sky-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-102 active:scale-98"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 text-[#1267B1]" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-102 active:scale-98"
            >
              <span>Contact Us</span>
              <Mail className="w-4 h-4 text-sky-200" />
            </Link>
          </motion.div>

          {/* Quick Direct Contacts */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
            <a 
              href="tel:8447539812" 
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2CA6E0]" />
              <span>+91 84475 39812</span>
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a 
              href="tel:7428809509" 
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2CA6E0]" />
              <span>+91 74288 09509</span>
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a 
              href="mailto:overseasexporters.hy@gmail.com" 
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#2CA6E0]" />
              <span>overseasexporters.hy@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
