import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Globe2,
  Linkedin,
  Instagram
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please provide your enquiry message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate professional response submission without backend dependency
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
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
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
            alt="International maritime container port"
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
            <Mail className="w-3.5 h-3.5 text-[#2CA6E0]" />
            <span>EXPORT DESK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Have a product requirement or export enquiry? Get in touch with our team.
          </motion.p>
        </div>
      </section>

      {/* ==================================================
          CONTACT SECTION (2 COLUMNS)
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold text-[#1267B1] uppercase tracking-wider block mb-2">
                COMMUNICATION CHANNELS
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B2A52] tracking-tight">
                Corporate Office &amp; Export Inquiries
              </h2>
              <p className="mt-4 text-[#64748B] text-base leading-relaxed">
                Reach out directly via phone or email for immediate quotes, product availability checks, or partnership consultations.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              
              <GlassCard variant="default" className="p-6 flex items-start gap-4 border border-white">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 border border-sky-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B2A52]">Phone Support</h4>
                  <div className="mt-1 space-y-1 text-sm text-slate-600">
                    <a href="tel:8447539812" className="block hover:text-[#1267B1] font-medium transition-colors">
                      +91 84475 39812
                    </a>
                    <a href="tel:7428809509" className="block hover:text-[#1267B1] font-medium transition-colors">
                      +91 74288 09509
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard variant="default" className="p-6 flex items-start gap-4 border border-white">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 border border-sky-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B2A52]">Official Email</h4>
                  <a 
                    href="mailto:overseasexporters.hy@gmail.com" 
                    className="mt-1 block text-sm font-medium text-slate-600 hover:text-[#1267B1] break-all transition-colors"
                  >
                    overseasexporters.hy@gmail.com
                  </a>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    Replies typically within 24 business hours
                  </span>
                </div>
              </GlassCard>

              <GlassCard variant="default" className="p-6 flex items-start gap-4 border border-white">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 border border-sky-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B2A52]">Registered Address</h4>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Avantika Enclave, Rohini Sector-2,<br />
                    Delhi – 110085, India
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="default" className="p-6 flex items-start gap-4 border border-white">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1267B1] flex items-center justify-center flex-shrink-0 border border-sky-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B2A52]">Business Hours</h4>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Monday to Saturday: 09:30 AM – 06:30 PM (IST)<br />
                    International client queries handled 24/7 via email.
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="default" className="p-6 flex flex-col gap-3 border border-white">
                <h4 className="font-heading font-bold text-sm text-[#0B2A52]">Official Social Profiles</h4>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://www.linkedin.com/in/hxrao-overseas-exports-pvt-ltd-2289aa441utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] text-white hover:bg-[#084e96] transition-all text-xs font-semibold shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/hxrao.overseasexports?stkn=MXIwZGU0ajRoZTZidw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-95 transition-all text-xs font-semibold shadow-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </GlassCard>

            </div>
          </div>

          {/* Right Side: Glass Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard variant="default" hover={false} className="p-8 sm:p-12 border border-white/95">
              <h3 className="font-heading font-extrabold text-2xl text-[#0B2A52] mb-2">
                Send an Export Enquiry
              </h3>
              <p className="text-sm text-[#64748B] mb-8">
                Please provide your contact info and commodity specifications below.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-extrabold text-2xl text-[#0B2A52] mb-2">
                      Thank you! Your enquiry has been received.
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Our commercial export desk has received your details and will get back to you shortly with specifications and quotation insights.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-xl text-sm font-bold bg-[#0B2A52] text-white hover:bg-[#1267B1] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Global Trade LLC"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#1267B1] focus:ring-2 focus:ring-sky-100 transition-all"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
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

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 555-0199 / +91 ..."
                          className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Export enquiry regarding Healthcare, Metals, Scrap, etc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#1267B1] focus:ring-2 focus:ring-sky-100 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A52] mb-2">
                        Message / Requirement Details *
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe product specifications, volume, delivery timeline, or questions..."
                        className={`w-full px-4 py-3 rounded-xl border bg-white/70 text-[#14243A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.message ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-[#1267B1] focus:ring-sky-100'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full py-4 text-base font-bold shadow-xl inline-flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Transmitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4 text-[#2CA6E0]" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>
      </section>

    </div>
  );
}
