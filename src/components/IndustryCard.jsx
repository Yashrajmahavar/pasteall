import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  FlaskConical, 
  Recycle, 
  Cpu, 
  Building2, 
  Wheat, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  HeartPulse,
  FlaskConical,
  Recycle,
  Cpu,
  Building2,
  Wheat
};

export default function IndustryCard({ industry, index = 0 }) {
  const IconComponent = iconMap[industry.icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/80 backdrop-blur-md rounded-[20px] overflow-hidden border border-white/90 shadow-[0_15px_35px_rgba(11,42,82,0.06)] hover:shadow-[0_25px_50px_rgba(11,42,82,0.12)] transition-all duration-300 flex flex-col"
    >
      {/* Top Visual Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={industry.image}
          alt={industry.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/85 via-[#0B2A52]/20 to-transparent" />
        
        {/* Floating Industry Icon Glass Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-center text-[#1267B1] group-hover:bg-[#1267B1] group-hover:text-white transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Industry Title on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading font-bold text-lg text-white drop-shadow-sm">
            {industry.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-[#64748B] text-sm leading-relaxed flex-grow">
          {industry.description}
        </p>

        {/* Key Materials */}
        {industry.keyMaterials && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Primary Trade Streams:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {industry.keyMaterials.map((mat, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-slate-700 bg-sky-50/70 border border-sky-100 px-2.5 py-1 rounded-md"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom link to quote */}
        <div className="mt-6 pt-3 flex items-center justify-between">
          <span className="text-xs text-slate-400">Sector Solutions</span>
          <Link
            to={`/get-quote?sector=${encodeURIComponent(industry.title)}`}
            className="text-xs font-semibold text-[#1267B1] group-hover:text-[#0B2A52] inline-flex items-center gap-1 group/btn"
          >
            <span>Supply Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
