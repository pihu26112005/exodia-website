'use client';

import Link from 'next/link'
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from './components/Card';
import About_VideoSection from './components/About_VideoSection';
import HorrorLogo from './components/HorrorLogo';
import Image from 'next/image';
import { getCloudinaryImageUrl } from '@/lib/cloudinary';
import TextRevealAnimation from './components/TextRevealAnimation';


const horiscrollimage = [
  '/trail/1.png',
  '/trail/2.png',
  '/trail/3.png',
  '/trail/4.png',
  '/trail/5.png',
  '/trail/6.png',
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
  const x = useTransform(scrollYProgress, [0, 1], ['40%', '-25%']);

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
              About <span className="text-[#BB0000]">EXODIA&#39;25</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Exodia 2025 is the biggest cultural fest in the Himalayas organized by the cultural Council of IIT Mandi. It is a three-day-long event held every year.
              The fest also tries to promote the Himalayan region and showcase its culture and beauty by orchestrating some of its events for the same.
              the fest is a blend of cultural events, workshops, competitions, and performances by renowned artists.
               <br className="hidden sm:block" />
               <br className="hidden sm:block" />
              Let the Magic begins with IIT Mandi's annual cultural fest.
            </motion.p>
            <motion.div
              className="flex max-sm:flex-col flex-row justify-center gap-4 sm:gap-6"
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
          Exodia 2025's <span className="text-[#BB0000]">Merch</span>
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
              <div className="relative h-[35rem] w-full max-[400px]:h-[14rem] max-md:h-[18rem] max-lg:h-[20rem] max-2xl:h-[30rem] overflow-hidden rounded-2xl mx-auto group">
                {/* Image */}
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt={`Merch ${index + 1}`}
                  className="object-cover w-full h-full rounded-2xl transition-all duration-300"
                />
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
                    src={getCloudinaryImageUrl('cosplay_duww3q')}
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
                <Link href="/events" className="text-[#BB0000] hover:underline">Explore more →</Link>
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
                    src={getCloudinaryImageUrl('IMG_20250328_021755_238_1_pspsxa')}
                    alt="Cosplay Event"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">Mr. and Ms. Exodia</h3>
                <p className="text-gray-400 mb-4">Compete and show off your talent.</p>
                <Link href="/events" className="text-[#BB0000] hover:underline">Explore more →</Link>
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
                    src={getCloudinaryImageUrl('MUNSC_phzxmr')}
                    alt="MUNSC Event"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#BB0000] transition-all duration-300">MUNSC</h3>
                <p className="text-gray-400 mb-4">A thrilling simulation of the United Nations Security Council.</p>
                <Link href="/events" className="text-[#BB0000] hover:underline">Explore more →</Link>
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
            // href="https://unstop.com/o/J9STo7t?utm_medium=Share&utm_source=shortUrl"
            href="https://www.instagram.com/exodia.iitmandi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            className="px-6 sm:px-8 py-3 rounded-2xl bg-[#BB0000] text-white border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-lg shadow-[#BB0000]/20"
          >
            Become Ambassador
          </Link>
        </motion.div>
      </div>





      {/* Horizontal Scrolling Section */}
      <div className="mt-20 mb-10 max-sm:mt-8 rotate-[3deg] max-sm:rotate-0">
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
      <div className="relative z-50 mt-10 sm:mt-16">
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
              Experience a cultural fest like never before. Register now and be part of the nightmare.
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
                className="inline-block rounded-xl px-8 sm:px-10 py-3 sm:py-4 bg-[#BB0000] text-white text-base sm:text-lg border border-[#BB0000] hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 shadow-xl shadow-[#BB0000]/20"
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
