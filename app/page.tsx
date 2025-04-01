'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from './components/Card';
import About_VideoSection from './components/About_VideoSection';
import TextRevealAnimation from './components/TextRevealAnimation';


// Dummy image data for horizontal scroll
const horiscrollimage = [
  '/event1.jpg',
  '/event2.jpg',
  '/event3.jpg',
  '/event4.jpg',
  '/event5.jpg',
  '/event6.jpg',
  '/event7.jpg',
  '/event8.jpg',
];

export default function Home() {

  const textZoomToVideocontainer = useRef<HTMLDivElement>(null);
  const textZoomToVideostickyMask = useRef<HTMLDivElement>(null);
  const textZoomToVideoinitialMaskSize = 0.4;
  const textZoomToVideotargetMaskSize = 70;
  const textZoomToVideoeasing = 0.1;
  let textZoomToVideoeasedScrollProgress = 0;
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);
  const animate = () => {
    if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) return;

    const maskSizeProgress = textZoomToVideotargetMaskSize * getScrollProgress();
    textZoomToVideostickyMask.current.style.webkitMaskSize = `${(textZoomToVideoinitialMaskSize + maskSizeProgress) * 100}%`;
    requestAnimationFrame(animate);
  };
  const getScrollProgress = () => {
    if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) return 0;

    const scrollProgress =
      textZoomToVideostickyMask.current.offsetTop / (textZoomToVideocontainer.current.getBoundingClientRect().height - window.innerHeight);

    const delta = scrollProgress - textZoomToVideoeasedScrollProgress;
    textZoomToVideoeasedScrollProgress += delta * textZoomToVideoeasing;

    return textZoomToVideoeasedScrollProgress;
  };

  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });
  
  // Transform scroll progress into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  // Create dummy images in public folder if they don't exist
  useEffect(() => {
    // This is just a placeholder effect - in a real app, you'd have actual images
    console.log('Component mounted');
  }, []);

  return (
    <div className="min-h-screen" ref={targetRef}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold mb-6 text-white blood-drip"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              EXODIA <span className="text-[#BB0000]">'25</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Enter the darkness. Experience the thrill. <br />
              IIT Mandi's annual technical and cultural fest.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link 
                href="/events" 
                className="px-8 py-3 bg-[#BB0000] text-white border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-lg shadow-[#BB0000]/20"
              >
                Explore Events
              </Link>
              <Link 
                href="/register" 
                className="px-8 py-3 bg-transparent text-white border border-[#BB0000] hover:bg-[#BB0000]/10 transition-all duration-300"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-8">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-[#BB0000]">Events</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <motion.div 
              className="bg-[#0A0A0A] border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">Haunted Hackathon</h3>
                <p className="text-gray-400 mb-4">Code through the night with challenges inspired by your darkest nightmares.</p>
                <Link href="/events/hackathon" className="text-[#BB0000] hover:underline">Learn more →</Link>
              </div>
            </motion.div>
            
            {/* Event Card 2 */}
            <motion.div 
              className="bg-[#0A0A0A] border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">Blood Moon Concert</h3>
                <p className="text-gray-400 mb-4">Experience the most thrilling musical performances under the crimson night sky.</p>
                <Link href="/events/concert" className="text-[#BB0000] hover:underline">Learn more →</Link>
              </div>
            </motion.div>
            
            {/* Event Card 3 */}
            <motion.div 
              className="bg-[#0A0A0A] border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">Nightmare Robotics</h3>
                <p className="text-gray-400 mb-4">Build mechanical horrors in this spine-chilling robotics competition.</p>
                <Link href="/events/robotics" className="text-[#BB0000] hover:underline">Learn more →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Section */}
      <div className="mt-20 max-sm:mt-8 rotate-[3deg] max-sm:rotate-0">
        <div className="sticky top-0 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {horiscrollimage.map((imgsrc, i) => {
              return <Card key={i} imgsrc={imgsrc} i={i} />;
            })}
          </motion.div>
        </div>
      </div>

      <About_VideoSection />

      <div className="max-sm:mb-2" style={{ rotate: "-3deg" }}>
        <div className="sticky top-0 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {horiscrollimage.map((imgsrc, i) => {
              return <Card key={i} imgsrc={imgsrc} i={i} />;
            })}
          </motion.div>
        </div>
      </div>

        <TextRevealAnimation />

      {/* Call to Action */}
      <section className="py-20 bg-[#080808] relative">
        <div className="absolute inset-0 bg-[url('/pentagram.png')] bg-center opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-[#BB0000]">Join</span> the Horror?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience a technical and cultural fest like never before. Register now and be part of the nightmare.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/register" 
              className="px-10 py-4 bg-[#BB0000] text-white text-lg border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-xl shadow-[#BB0000]/20"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
