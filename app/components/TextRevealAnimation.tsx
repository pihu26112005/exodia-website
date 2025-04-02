'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextRevealAnimation = () => {
    const textZoomToVideocontainer = useRef<HTMLDivElement>(null);
    const textZoomToVideostickyMask = useRef<HTMLDivElement>(null);
    const textZoomToVideoinitialMaskSize = 0.4;
    const textZoomToVideotargetMaskSize = 70;
    const textZoomToVideoeasing = 0.1;
    let textZoomToVideoeasedScrollProgress = 0;
    let animationFrameId: number;
    
    useEffect(() => {
      animationFrameId = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, []);
    
    const animate = () => {
      if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
  
      const maskSizeProgress = textZoomToVideotargetMaskSize * getScrollProgress();
      textZoomToVideostickyMask.current.style.webkitMaskSize = `${(textZoomToVideoinitialMaskSize + maskSizeProgress) * 100}%`;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const getScrollProgress = () => {
      if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) return 0;
  
      const scrollProgress =
        textZoomToVideostickyMask.current.offsetTop / (textZoomToVideocontainer.current.getBoundingClientRect().height - window.innerHeight);
  
      const delta = scrollProgress - textZoomToVideoeasedScrollProgress;
      textZoomToVideoeasedScrollProgress += delta * textZoomToVideoeasing;
  
      return textZoomToVideoeasedScrollProgress;
    };
  
  return (
      <div 
        ref={textZoomToVideocontainer} 
        className="relative h-[300vh] bg-black [clip-path:polygon(0_4%,100%_0%,100%_96%,0%_100%)] max-sm:[clip-path:polygon(0_1%,100%_0%,100%_96%,0%_100%)]"
        style={{ 
          position: 'relative', 
          zIndex: 1,
          contain: 'paint layout size', 
        }}
      >
          <div
            ref={textZoomToVideostickyMask}
            className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
            style={{
              WebkitMaskImage: "url('/assets/homefifth/EXODIA.svg')",
              WebkitMaskPosition: "46% center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "10%",
              pointerEvents: 'none',
              contain: 'paint layout size',
            }}
          >
            <video autoPlay muted loop className="h-screen w-full object-cover mix-blend-overlay">
              <source src="/drone/mdi.mp4" type="video/mp4" />
            </video>
          </div>
      </div> 
  );
};

export default TextRevealAnimation; 