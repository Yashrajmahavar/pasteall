import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  variant = 'default', // 'default', 'subtle', 'dark', 'glow'
  hover = true,
  onClick,
  ...props
}) {
  const variantStyles = {
    default: 'bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_rgba(11,42,82,0.07)]',
    subtle: 'bg-white/55 backdrop-blur-md border border-white/70 shadow-[0_16px_40px_rgba(11,42,82,0.05)]',
    dark: 'bg-[#0B2A52]/85 backdrop-blur-lg border border-white/10 text-white shadow-[0_25px_50px_rgba(7,26,51,0.35)]',
    glow: 'bg-white/90 backdrop-blur-lg border border-sky-100 shadow-[0_0_35px_rgba(44,166,224,0.18)]'
  };

  const hoverMotion = hover ? {
    whileHover: { y: -5, transition: { duration: 0.25 } }
  } : {};

  return (
    <motion.div
      className={`rounded-2xl transition-all duration-300 ${variantStyles[variant] || variantStyles.default} ${className}`}
      onClick={onClick}
      {...hoverMotion}
      {...props}
    >
      {children}
    </motion.div>
  );
}
