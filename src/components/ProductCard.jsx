import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductCard({ product, index = 0, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/85 backdrop-blur-md rounded-[20px] overflow-hidden border border-white/90 shadow-[0_15px_35px_rgba(11,42,82,0.06)] hover:shadow-[0_25px_50px_rgba(11,42,82,0.13)] transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container with Zoom effect */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Category Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#0B2A52] border border-white/60 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1267B1]"></span>
              {product.badge}
            </span>
          </div>
        )}

        {/* Circular Arrow floating on image bottom-right */}
        <Link
          to={`/products#${product.id}`}
          className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-[#0B2A52] shadow-md flex items-center justify-center transition-all duration-300 group-hover:bg-[#1267B1] group-hover:text-white group-hover:scale-110"
          aria-label={`View ${product.title}`}
        >
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="font-heading font-bold text-xl text-[#0B2A52] group-hover:text-[#1267B1] transition-colors duration-200">
          {product.title}
        </h3>

        <p className="mt-3 text-[#64748B] text-sm leading-relaxed line-clamp-3 flex-grow">
          {product.description}
        </p>

        {/* Highlights summary */}
        {product.items && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
            {product.items.slice(0, 3).map((item, i) => (
              <span
                key={i}
                className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 pt-2 flex items-center justify-between gap-3">
          <Link
            to={`/products#${product.id}`}
            className="text-sm font-semibold text-[#1267B1] hover:text-[#0B2A52] inline-flex items-center gap-1.5 group/link"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>

          <Link
            to={`/get-quote?category=${encodeURIComponent(product.title)}`}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-sky-50 text-[#1267B1] hover:bg-[#1267B1] hover:text-white transition-all duration-200 border border-sky-100"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
