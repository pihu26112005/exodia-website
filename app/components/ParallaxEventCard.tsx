'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

interface ParallaxEventCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  prize: string;
  rulebook: string;
  index: number;
}

export default function ParallaxEventCard({
  title,
  image,
  index,
}: ParallaxEventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Create different parallax effects based on index
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -50]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index === 1 ? 0 : index === 0 ? 5 : -5, index === 1 ? 0 : index === 0 ? -5 : 5]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, rotate, scale }}
      className="relative group"
    >
      <div className="relative h-[500px] w-[400px] bg-[#0A0A0A] rounded-lg overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t h-[500px] w-[400px] from-black via-black/50 to-transparent opacity-80"></div>
        </div>

        {/* Glowing Border Effect */}
        <div className="absolute inset-0 border border-[#BB0000]/0 group-hover:border-[#BB0000]/50 transition-colors duration-500"></div>
        
        {/* Content */}
        <motion.div 
          className="absolute inset-0 p-8 flex flex-col justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          { <h3 className="text-3xl font-bold text-white mb-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
            {title}
          </h3> }
          { <Link 
            href={"https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link"}
            className="inline-block w-full text-center px-6 py-3 bg-[#BB0000] text-white rounded-lg hover:bg-[#BB0000]/80 transform group-hover:translate-y-[-10px] transition all duration-500 delay-150"
          >
            View Rulebook
          </Link> }
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 