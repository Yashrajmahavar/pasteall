import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Globe2, ShieldCheck, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2A52] text-white pt-16 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1267B1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#2CA6E0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <Logo variant="light" size="lg" />
            <p className="mt-5 text-slate-300 text-sm leading-relaxed max-w-sm">
              HXRAO Overseas Exports Private Limited is a trusted import and export company, primarily focused on delivering quality products to international markets with reliability, integrity, and operational excellence.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-sky-200">
                <Globe2 className="w-3.5 h-3.5 text-[#2CA6E0]" />
                <span>Global Import &amp; Export</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Quality Assured</span>
              </span>
            </div>

            {/* Official Social Media Links */}
            <div className="mt-7">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Official Social Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/hxrao-overseas-exports-pvt-ltd-2289aa441utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#0A66C2] text-white border border-white/15 transition-all duration-300 hover:scale-105 shadow-sm text-xs font-semibold"
                  aria-label="HXRAO Overseas Exports on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#38BDF8] group-hover/social:text-white transition-colors" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/hxrao.overseasexports?stkn=MXIwZGU0ajRoZTZidw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-white border border-white/15 transition-all duration-300 hover:scale-105 shadow-sm text-xs font-semibold"
                  aria-label="HXRAO Overseas Exports on Instagram"
                >
                  <Instagram className="w-4 h-4 text-[#F472B6] group-hover/social:text-white transition-colors" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase text-xs mb-5 border-l-2 border-[#2CA6E0] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-300 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/global-reach" className="text-slate-300 hover:text-white transition-colors">
                  Global Reach
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/get-quote" className="text-sky-300 hover:text-white font-medium transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Export Products (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase text-xs mb-5 border-l-2 border-[#2CA6E0] pl-2.5">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products#healthcare-chemicals" className="text-slate-300 hover:text-white transition-colors">
                  Healthcare &amp; Chemicals
                </Link>
              </li>
              <li>
                <Link to="/products#aluminium-plastic-scrap" className="text-slate-300 hover:text-white transition-colors">
                  Aluminium &amp; Plastic Scrap
                </Link>
              </li>
              <li>
                <Link to="/products#copper-steel" className="text-slate-300 hover:text-white transition-colors">
                  Copper &amp; Steel
                </Link>
              </li>
              <li>
                <Link to="/products#building-materials" className="text-slate-300 hover:text-white transition-colors">
                  Building Materials
                </Link>
              </li>
              <li>
                <Link to="/products#agro-products" className="text-slate-300 hover:text-white transition-colors">
                  Agro Products
                </Link>
              </li>
              <li>
                <Link to="/products#other-products" className="text-slate-300 hover:text-white transition-colors">
                  Other Products &amp; Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase text-xs mb-5 border-l-2 border-[#2CA6E0] pl-2.5">
              Head Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-[#2CA6E0] flex-shrink-0 mt-0.5" />
                <span>
                  Avantika Enclave, Rohini Sector-2,<br />
                  Delhi – 110085, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#2CA6E0] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:8447539812" className="hover:text-white transition-colors">
                    +91 84475 39812
                  </a>
                  <a href="tel:7428809509" className="hover:text-white transition-colors">
                    +91 74288 09509
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#2CA6E0] flex-shrink-0" />
                <a href="mailto:overseasexporters.hy@gmail.com" className="hover:text-white transition-colors break-all">
                  overseasexporters.hy@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} HXRAO Overseas Exports Private Limited. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/hxrao-overseas-exports-pvt-ltd-2289aa441utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/hxrao.overseasexports?stkn=MXIwZGU0ajRoZTZidw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E1306C] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <span className="hidden md:inline text-white/20">|</span>
            <span className="text-slate-400">Delhi, India &bull; Global Trade Operations</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1267B1] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
