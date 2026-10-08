import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end ml-auto'
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col max-w-3xl ${alignClass} ${className} mb-12 sm:mb-16`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-sky-50 text-[#1267B1] border border-sky-100 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2CA6E0] animate-pulse"></span>
          {eyebrow}
        </div>
      )}

      {title && (
        <h2 className={`font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#0B2A52]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
          light ? 'text-slate-300' : 'text-[#64748B]'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
