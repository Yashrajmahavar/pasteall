import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSpreadsheet, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Globe2, 
  Package, 
  Clock, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function GetQuote() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phoneWhatsApp: '',
    productCategory: 'Healthcare & Chemicals',
    productRequirement: '',
    quantity: '',
    destinationCountry: '',
    additionalMessage: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Prepopulate category if passed via URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat) {
      setFormData(prev => ({ ...prev, productCategory: cat }));
    }
  }, [location.search]);

  const categories = [
    "Healthcare & Chemicals",
    "Aluminium & Plastic Scrap",
    "Copper & Steel",
    "Building Materials",
    "Agro Products",
    "Other Products & Custom Sourcing"
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phoneWhatsApp.trim()) errs.phoneWhatsApp = 'Phone / WhatsApp is required';
    if (!formData.productRequirement.trim()) errs.productRequirement = 'Please specify the product or grade requirement';
    if (!formData.destinationCountry.trim()) errs.destinationCountry = 'Destination country/port is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="bg-[#F7FBFF]">
      
      {/* ==================================================
          PAGE HERO
          ================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0B2A52] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=2000&q=80"
            alt="International trade shipping vessels"
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
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#2CA6E0]" />
            <span>COMMERCIAL INQUIRY DESK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Request a Quote
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Tell us what you are looking for and our team will get back to you.
          </motion.p>
        </div>
      </section>

      {/* ==================================================
          FORM & COMMERCIAL TERMS
          ================================================== */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard variant="default" hover={false} className="p-8 sm:p-12 md:p-16 border border-white/95">
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-10 rounded-3xl bg-emerald-50 border border-emerald-200 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B2A52] mb-3">
                  Thank you! Your quotation request has been received.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Our export commercial desk is analyzing your requested commodity, quantity, and destination port logistics. We will email your formal proforma breakdown shortly.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        companyName: '',
                        email: '',
                        phoneWhatsApp: '',
                        productCategory: 'Healthcare & Chemicals',
                        productRequirement: '',
                        quantity: '',
                        destinationCountry: '',
                        additionalMessage: ''
                      });
                    }}
                    className="btn-primary text-sm font-bold"
                  >
                    Submit Another Quote Request
                  </button>
                  <Link
                    to="/products"
                    className="btn-secondary text-sm font-bold"
                  >
                    Browse Other Products
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div>
                <div className="border-b border-slate-100 pb-8 mb-8">
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B2A52]">
                    Export Commodity Inquiry Form
                  </h2>
                  <p className="mt-2 text-sm text-[#64748B]">
                    Please share accurate volume, specifications, and destination parameters for prompt CIF/FOB pricing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.name ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name / Trading house"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#1267B1] focus:ring-2 focus:ring-sky-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone / WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        name="phoneWhatsApp"
                        value={formData.phoneWhatsApp}
                        onChange={handleChange}
                        placeholder="+CountryCode Number"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phoneWhatsApp ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                        }`}
                      />
                      {errors.phoneWhatsApp && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phoneWhatsApp}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Product Category & Requirement */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Product Category *
                      </label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#14243A] text-sm focus:outline-none focus:border-[#1267B1] focus:ring-2 focus:ring-sky-100 transition-all cursor-pointer font-medium"
                      >
                        {categories.map((cat, i) => (
                          <option key={i} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Product Requirement / Specific Grade *
                      </label>
                      <input
                        type="text"
                        name="productRequirement"
                        value={formData.productRequirement}
                        onChange={handleChange}
                        placeholder="e.g. Copper Cathodes 99.99%, Aluminium 6063, Basmati Rice"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.productRequirement ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                        }`}
                      />
                      {errors.productRequirement && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.productRequirement}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Quantity & Destination Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 50 Metric Tons, 2 x 40ft Containers"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#1267B1] focus:ring-2 focus:ring-sky-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Destination Country &amp; Port *
                      </label>
                      <input
                        type="text"
                        name="destinationCountry"
                        value={formData.destinationCountry}
                        onChange={handleChange}
                        placeholder="e.g. UAE (Jebel Ali), USA (Houston), Vietnam"
                        className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.destinationCountry ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                        }`}
                      />
                      {errors.destinationCountry && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.destinationCountry}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 5: Additional Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                      Additional Message &amp; Packaging Specs
                    </label>
                    <textarea
                      rows={4}
                      name="additionalMessage"
                      value={formData.additionalMessage}
                      onChange={handleChange}
                      placeholder="Mention any custom packaging requirements (e.g., FIBC bags, wooden pallets), Incoterms preferences (FOB/CIF), or target delivery time..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#1267B1] focus:ring-2 focus:ring-sky-100 transition-all"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full py-4 text-base font-bold shadow-xl inline-flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request Quote</span>
                          <Send className="w-4 h-4 text-[#2CA6E0]" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3">
                      Confidential commercial handling. No spam. Direct B2B quotation.
                    </p>
                  </div>

                </form>
              </div>
            )}
          </AnimatePresence>

        </GlassCard>
      </section>

    </div>
  );
}
