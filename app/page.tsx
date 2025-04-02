'use client';

import Link from 'next/link'
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from './components/Card';
import About_VideoSection from './components/About_VideoSection';
import TextRevealAnimation from './components/TextRevealAnimation';
import HorrorLogo from './components/HorrorLogo';
import Image from 'next/image';


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
      <HorrorLogo />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply"></div>

        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-white blood-drip"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              EXODIA <span className="text-[#BB0000]">&#39;25</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Enter the darkness. Experience the thrill. <br className="hidden sm:block" />
              IIT Mandi&#39;s annual technical and cultural fest.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/events"
                className="px-6 sm:px-8 py-3 rounded-2xl bg-[#BB0000] text-white border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-lg shadow-[#BB0000]/20"
              >
                Explore Events
              </Link>
              <Link
                href="/join"
                className="px-6 sm:px-8 py-3 rounded-2xl bg-transparent text-white border border-[#BB0000] hover:bg-[#BB0000]/10 transition-all duration-300"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* merch section  */}
      <div className="flex flex-col justify-center py-12 sm:py-16 bg-[#050505]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          Grab Your <span className="text-[#BB0000]">Merch</span>
        </motion.h2>

        <div className="grid grid-cols-4 gap-2 max-lg:gap-1 max-md:grid-cols-2 max-sm:grid-cols-2 mx-auto">
          {["/merch/m1.png", "/merch/m2.png", "/merch/m3.png", "/merch/m4.png"].map((src, index) => (
            <motion.div
              key={index}
              className="bg-[#0A0A0A] rounded-2xl border-2 border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[35rem] w-[28rem] max-[400px]:h-[14rem] max-[400px]:w-[10rem] max-md:h-[18rem] max-md:w-[16rem] max-lg:h-[20rem] max-lg:w-[15rem] max-2xl:h-[30rem] max-2xl:w-[2zrem] overflow-hidden rounded-2xl mx-auto group">
                {/* Image */}
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt={`Merch ${index + 1}`}
                  className="object-cover w-full h-full rounded-2xl transition-all duration-300"
                />

                {/* Red-Dark Overlay Effect */}
                <div className="absolute inset-0  bg-black/40 opacity-80 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>


      {/* Featured Events Section */}
      <section className="py-12 sm:py-16 bg-[#050505]">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-[#BB0000]">Events</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Event Card 1 */}
            <motion.div
              className="bg-[#0A0A0A] rounded-2xl border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10">
                  <Image
                    className="object-cover rounded-2xl"
                    src="/events/cosplay.png"
                    alt="Cosplay Event"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">cosplay</h3>
                <p className="text-gray-400 mb-4">Dress up as your favorite characters from movies, anime, or games.</p>
                <Link href="/events/hackathon" className="text-[#BB0000] hover:underline">Learn more →</Link>
              </div>
            </motion.div>

            {/* Event Card 2 */}
            <motion.div
              className="bg-[#0A0A0A] rounded-2xl border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10">
                  <Image
                    className="object-cover rounded-2xl"
                    src="/events/cosplay.png"
                    alt="Cosplay Event"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">Cultural Night</h3>
                <p className="text-gray-400 mb-4">A spectacular showcase of dance, music, and theatrical performances.</p>
                <Link href="/events/concert" className="text-[#BB0000] hover:underline">Learn more →</Link>
              </div>
            </motion.div>

            {/* Event Card 3 */}
            <motion.div
              className="bg-[#0A0A0A] rounded-2xl border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10">
                  <Image
                    className="object-cover rounded-2xl"
                    src="/events/cosplay.png"
                    alt="Cosplay Event"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">Fashion Inferno</h3>
                <p className="text-gray-400 mb-4">Where style meets darkness in a stunning display of fashion and creativity.</p>
                <Link href="/events/robotics" className="text-[#BB0000] hover:underline">Learn more →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* campus embasseder  */}
      <div className="flex flex-col items-center justify-center py-12 sm:py-16 bg-[#050505] text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Become a <span className="text-[#BB0000]">Campus Ambassador</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl px-6 mb-6">
          Represent <span className="text-[#BB0000] font-semibold">Exodia</span> at your campus and get a chance to become an official representative of Exodia!
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/campus-ambassador"
            className="px-6 sm:px-8 py-3 rounded-2xl bg-[#BB0000] text-white border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-lg shadow-[#BB0000]/20"
          >
            Become Ambassador
          </Link>
        </motion.div>
      </div>





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

      {/* Previous Artists Showcase */}
      {/* <section className="py-16 sm:py-24 bg-[#030303] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Previous <span className="text-[#BB0000]">Star Attractions</span>
          </motion.h2>

          <motion.div 
            className="artists-container relative h-[70vh] sm:h-[90vh] perspective-[1200px]"
            style={{ 
              transformStyle: "preserve-3d", 
              perspective: "1200px",
              willChange: "transform"
            }}
          >
            {[
              { image: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OzvaoCZAVZirtFvpze2T4jfB9k1RaSXCLubx", depth: 0.8 },
              { image: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM", depth: 0.4 },
              { image: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA", depth: 0.6 },
              { image: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XXqyIghWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ", depth: 0.2 },
              { image: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM", depth: 0.7 },
              { image: "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM", depth: 0.5 }
            ].map((artist, index) => {
              const sharedScrollYProgress = useScroll({
                target: targetRef,
                offset: ["start end", "end start"]
              }).scrollYProgress;
              
              const y = useTransform(
                sharedScrollYProgress, 
                [0, 1], 
                [20, -20]
              );
              
              return (
                <motion.div
                  key={index}
                  className="artist-card absolute w-40 sm:w-56 h-56 sm:h-72 bg-[#0A0A0A] rounded-lg overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    filter: "grayscale(0%)",
                    scale: 1,
                    transition: { duration: 0.4 }
                  }}
                  style={{
                    left: `calc(50% - ${window.innerWidth < 640 ? '5rem' : '7rem'} + ${((index % 3) - 1) * (window.innerWidth < 640 ? 10 : 15)}%)`,
                    top: `${Math.floor(index / 3) * (window.innerWidth < 640 ? 25 : 35) + 10}vh`,
                    y,
                    willChange: "transform, opacity",
                    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.7)",
                    border: "1px solid rgba(187, 0, 0, 0.3)",
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(187, 0, 0, 0.4)",
                    borderColor: "#BB0000",
                    filter: "brightness(1.2)",
                    transition: { duration: 0.15, type: "tween" }
                  }}
                >
                  <div className="relative w-full h-full">
          <Image
                      src={artist.image}
                      alt="Star Attraction"
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/blood-splatter.png";
                        target.style.objectFit = "cover";
                        target.style.filter = "brightness(0.5) hue-rotate(320deg)";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                    <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ 
              backgroundImage: "url('/blood-splatter.png')",
              backgroundSize: "cover",
              opacity: 0.05,
              y: useTransform(
                useScroll({
                  target: targetRef,
                  offset: ["start end", "end start"]
                }).scrollYProgress, 
                [0, 1], 
                [-20, 20]
              )
            }}
          />

          <motion.div 
            className="absolute top-1/4 left-1/4 w-20 h-20 opacity-20"
            style={{ 
              backgroundImage: "url('/pentagram.png')", 
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
            animate={{ 
              rotate: 360,
              y: [0, 30, 0],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-15"
            style={{ 
              backgroundImage: "url('/pentagram.png')", 
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
            animate={{ 
              rotate: -360,
              y: [0, -20, 0]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>
      </section> */}

      {/* Call to Action */}
      <div className="relative z-50 mt-[-10vh] sm:mt-[-20vh]">
        <section className="py-12 sm:py-20 bg-[#080808] relative z-10">
          <div className="absolute inset-0 bg-[url('/pentagram.png')] bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-8 text-center relative z-20">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to <span className="text-[#BB0000]">Join</span> the Horror?
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto"
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
              className="relative z-30"
            >
              <Link
                href="/join"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#BB0000] text-white text-base sm:text-lg border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-xl shadow-[#BB0000]/20"
                style={{ position: 'relative', zIndex: 999 }}
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
