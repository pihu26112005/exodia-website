'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface FlipEventCardProps {
  event: {
    title: string;
    description: string;
    image: string;
    category: string;
    rulebook: string;
    details: string;
  };
  onImageError?: () => void;
  imageError?: boolean;
}

export default function FlipEventCard({
  event,
  onImageError,
  imageError,
}: FlipEventCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[500px] w-[400px] perspective-[1000px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full bg-[#0A0A0A] rounded-lg overflow-hidden group">
            {/* Image and overlay */}
            <div className="relative h-full">
              {!imageError ? (
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                  onError={onImageError}
                />
              ) : (
                <div className="w-full h-full bg-[#1a0000] flex items-center justify-center">
                  <span className="text-white text-xl">Image not available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-300">
              <motion.div 
                animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <span className="px-3 py-1 bg-[#BB0000]/60 text-[#fff] text-sm rounded-full">
                  {event.category}
                </span>
              </motion.div>
              <motion.h3 
                animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-2xl font-bold text-white mb-2"
              >
                {event.title}
              </motion.h3>
              <motion.p 
                animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-gray-300 text-sm"
              >
                {event.description}
              </motion.p>
            </div>

            {/* Click indicator */}
            <motion.div 
              className="absolute top-4 right-4 text-white/50"
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

        {/* Back of card */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0A0A0A] rounded-lg p-6 flex flex-col"
        >
          <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
          <p className="text-gray-300 mb-4">{event.details}</p>
          <Link 
            href={event.rulebook}
            className="mt-auto self-center px-6 py-3 bg-[#BB0000] text-white rounded-lg hover:bg-[#BB0000]/80 transition-colors duration-300"
          >
            View Rulebook
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 