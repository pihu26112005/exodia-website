'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function HorrorTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const targetDate = new Date('2025-04-18T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-red-900/30 py-4 z-50"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 relative">
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-400 transition-colors"
            >
              <IoClose size={24} />
            </button>
            
            <div className="flex justify-center items-center space-x-8">
              <TimeBlock value={timeLeft.days} label="DAYS" />
              <TimeBlock value={timeLeft.hours} label="HOURS" />
              <TimeBlock value={timeLeft.minutes} label="MINUTES" />
              <TimeBlock value={timeLeft.seconds} label="SECONDS" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <motion.div
        className="relative w-24 h-24 bg-black/80 border-2 border-red-900/50 rounded-lg overflow-hidden"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Blood drip effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, transparent 100%)',
            opacity: 0.3
          }}
          animate={{
            y: [0, 100],
            opacity: [0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-red-900/20 animate-pulse" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <span className="text-4xl font-bold text-red-500 font-mono tabular-nums">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </motion.div>
      <div className="mt-2 text-sm font-semibold text-red-900/70 tracking-wider">
        {label}
      </div>
    </div>
  );
}