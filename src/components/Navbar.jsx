import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight,
  Globe,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Global Reach', path: '/global-reach' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar - Clean Corporate Info */}
      <div className="bg-[#0B2A52] text-slate-300 text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#2CA6E0]" />
              <span className="font-medium text-slate-200">HXRAO Overseas Exports Private Limited</span>
              <span className="text-slate-400">| Import &amp; Export Globally</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:8447539812" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2CA6E0]" />
              <span>+91 84475 39812</span>
            </a>
            <span className="text-white/20">/</span>
            <a 
              href="tel:7428809509" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>+91 74288 09509</span>
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="mailto:overseasexporters.hy@gmail.com" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#2CA6E0]" />
              <span>overseasexporters.hy@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Glass Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-white/90 backdrop-blur-xl border-b border-white/80 shadow-[0_10px_30px_rgba(11,42,82,0.08)]'
            : 'py-3.5 bg-white/75 backdrop-blur-lg border-b border-white/60 shadow-[0_4px_20px_rgba(11,42,82,0.03)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="dark" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#1267B1] bg-sky-50/80 shadow-xs'
                        : 'text-[#14243A] hover:text-[#1267B1] hover:bg-slate-50/60'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#1267B1] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action: Contact / Quote */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/get-quote"
                className="btn-primary text-xs sm:text-sm py-2.5 px-5 rounded-xl font-semibold inline-flex items-center gap-1.5"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4 text-[#2CA6E0]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/get-quote"
                className="text-xs font-bold text-white bg-[#0B2A52] px-3 py-1.5 rounded-lg sm:hidden"
              >
                Quote
              </Link>
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#0B2A52] hover:bg-sky-50 focus:outline-none transition-colors border border-slate-200/60 bg-white/80"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? 'text-[#1267B1] bg-sky-50 border border-sky-100'
                          : 'text-[#14243A] hover:bg-slate-50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>
                ))}

                {/* Mobile Direct Buttons */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                  <Link
                    to="/get-quote"
                    className="btn-primary w-full text-center py-3 rounded-xl text-sm"
                  >
                    Request a Quote
                  </Link>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex flex-col gap-2">
                    <div className="font-bold text-[#0B2A52] uppercase tracking-wider text-[11px]">
                      Quick Contact:
                    </div>
                    <a href="tel:8447539812" className="flex items-center gap-2 hover:text-[#1267B1]">
                      <Phone className="w-3.5 h-3.5 text-[#1267B1]" />
                      <span>+91 84475 39812 / 74288 09509</span>
                    </a>
                    <a href="mailto:overseasexporters.hy@gmail.com" className="flex items-center gap-2 hover:text-[#1267B1]">
                      <Mail className="w-3.5 h-3.5 text-[#1267B1]" />
                      <span>overseasexporters.hy@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
