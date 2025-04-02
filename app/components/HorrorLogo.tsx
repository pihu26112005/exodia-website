'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HorrorLogo() {
  const [isFlickering, setIsFlickering] = useState(false);

  // Random flickering effect
  useEffect(() => {
    const startFlicker = () => {
      setIsFlickering(true);
      setTimeout(() => {
        setIsFlickering(false);
      }, 100 + Math.random() * 100);
    };

    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        startFlicker();
      }
    }, 2000);

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div className="relative w-full max-w-[700px] mt-56 mb-20 mx-auto px-4">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
      >
        {/* Flickering glow effect */}
        <motion.div
          className={`absolute inset-0 blur-2xl transition-opacity duration-50 ${
            isFlickering ? 'opacity-100' : 'opacity-40'
          }`}
          style={{
            background: 'radial-gradient(circle at center, rgba(255,0,0,0.4) 0%, rgba(255,0,0,0.1) 50%, transparent 70%)',
          }}
        />
        
        {/* Static glow */}
        <div className="absolute inset-0 blur-xl bg-red-900/30 rounded-full animate-pulse" />
        
        {/* Logo container with custom aspect ratio */}
        <div className="relative aspect-[2.5/1] w-full mb-32">
          <Image
            src="/assets/exodialogo.png"
            alt="Exodia 2025"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            className={`relative z-10 mb-20 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-50 ${
              isFlickering ? 'brightness-100 contrast-120' : 'brightness-80 contrast-80'
            }`}
          />
        </div>

        {/* Blood drips */}
        <motion.div
          className="absolute -bottom-12 left-0 right-0 h-24 mt-20"
          style={{
            background: 'linear-gradient(180deg, rgba(255,0,0,0.2) 0%, transparent 100%)',
            clipPath: 'polygon(0% 0%, 15% 100%, 25% 40%, 35% 100%, 45% 60%, 55% 100%, 65% 40%, 75% 100%, 85% 60%, 95% 100%, 100% 0%)'
          }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-50 ${
              isFlickering ? 'bg-red-500/50' : 'bg-red-500/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>
    </div>
  );
} 