'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function PreLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the video has been played before
    const hasPlayed = sessionStorage.getItem('preloaderPlayed');
    
    if (hasPlayed) {
      setIsLoading(false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsLoading(false);
      sessionStorage.setItem('preloaderPlayed', 'true');
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src="/assets/PreLoader.mp4" type="video/mp4" />
            </video>
            
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: videoLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-8 left-0 right-0 text-center"
            >
              <p className="text-white text-lg font-medium">Loading Exodia...</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 