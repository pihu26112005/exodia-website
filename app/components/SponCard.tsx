'use client';

import { cn } from '@/lib/utils';

import { motion } from 'framer-motion';

import Image from 'next/image';

import { useState, useEffect } from 'react';

interface SponCardProps {
  name: string;
  image: string;
  description: string;
  classN: string;
}

export default function SponCard({
  name,
  image,
  description,
  classN
}: SponCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="relative h-[400px] w-full md:w-[320px] perspective-[1000px]"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 hover:border-2 rounded-lg border-[#BB0000]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full bg-[#0A0A0A] rounded-lg overflow-hidden group">
            {/* Image and overlay */}
            <div className="relative h-full">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              )}
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-300">
              <motion.div
                animate={isMobile || isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <span className={cn("px-3 py-1 text-black text-sm rounded-full", classN)}>
                  {description}
                </span>
              </motion.div>
              <motion.h3
                animate={isMobile || isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-2xl font-bold text-white mb-2"
              >
                {name}
              </motion.h3>
            </div>

            {/* Click indicator - only show on desktop */}
            <motion.div
              className="absolute top-4 right-4 text-white/50 hidden md:block"
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Border Effect - only on desktop */}
        <div className="absolute inset-0 border border-[#BB0000]/0 group-hover:border-[#BB0000] transition-colors duration-300 pointer-events-none rounded-lg hidden md:block"></div>
      </motion.div>
    </div>
  );
} 