"use client";
import React, { useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plane, Train, Bus, MapPin, Navigation } from 'lucide-react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../components/animated-modal";
import { TabsDemo } from '../components/HowtoReach_DisplayTabs';
import { CoolMode } from '../components/cool-mode';
import FAQ from '../components/faq';
import { p } from 'framer-motion/client';


const contacts = [
  {
    name: "Vishal Kumar",
    photo: "/john-doe.jpg",
    posn: "Convenor",
    email: "convenor@exodia-iitmandi.org",
  },
  {
    name: "Aryan Singh",
    photo: "/jane-smith.jpg",
    posn: "Convenor",
    email: "convenor@exodia-iitmandi.org",
  },
  {
    name: "Divyanshu Raj",
    photo: "/alice-johnson.jpg",
    number: "+91 9811197429",
    posn: "Head",
    email: "publicrelations@exodia-iitmandi.org",
  },
  {
    name: "Gourav Chaudhary",
    photo: "/bob-williams.jpg",
    number: "+91 8278741047 ",
    posn: "Head",
    email: "publicrelations@exodia-iitmandi.org",
  },
  {
    name: "Vivek Aggarwal",
    photo: "/jane-smith.jpg",
    posn: "Cultural Secretary",
    email: "cultural_secretary@students.iitmandi.ac.in",
  },
];


const HTRimages = [
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8AKpGbcacbtfYk82or9UsZ1RQNXmW0Deh7wqS",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8k8vPjhdmeRU37CuzDvwZLP5FgiTOWcaX0JNy",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg88SZ2Lsf4vby2KhTFrt1qAxpg70QM59SaBCRI",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8yw4zY9vbcnD1Z80MwGei4QNvUP6JjxgdSYHB",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wuDUuOkN93fDJcmlrWoxYu8LRnVCHUMXgaki",
];

const page = () => {


  const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".route-container")) {
        setSelectedRoute(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };


  return (
    <>

      <div className="min-h-screen flex justify-center items-center bg-[#080808] py-36 px-4 ">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-10 mt-6">
            <h1 className="text-white text-5xl font-bold blood-drip">Contact Us</h1>
            <p className="text-white/80 text-xl mt-2">Reach out to our team</p>
          </div>

          {/* Contact Cards - Centered layout */}
          <div className="flex flex-wrap justify-center gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-[#0A0A0A] border border-[#BB0000]/20 rounded-lg shadow-lg shadow-[#BB0000]/5 overflow-hidden relative hover:scale-[1.02] transition-all"
              >
                {/* Red Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#BB0000] to-transparent"></div>

                {/* Profile Photo */}
                {/* <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-[#BB0000]/50 mb-4">
                                <Image
                                    src={contact.photo}
                                    alt={contact.name}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div> */}

                {/* Contact Details */}
                <h2 className="text-white text-2xl text-center font-bold">{contact.name}</h2>
                <h2 className="text-white text-lg text-center">
                  {contact.posn}
                </h2>
                {contact.number && <p className="text-white/80 text-lg text-center mt-1">{contact.number}</p>}
                <p className="text-[#BB0000] text-lg text-center">{contact.email}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>


      {/* // how to reach  */}
      <div className={`min-h-screen  text-white  mt-10 max-sm:mt-6`}>
        {/* Hero Section with 3D Train */}
        <div className="relative overflow-hidden">
          <div className="relative container mx-auto px-4  h-full flex  text-gold text-left items-center justify-center max-sm:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[4rem] max-sm:text-[1.8rem] max-lg:text-[3rem] max-xl:text-[4rem] font-bold text-white mb-4 max-sm:mb-2 ">
                How to Reach IIT Mandi
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Travel Routes */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Air Route */}
            <div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="route-container glass p-6 rounded-lg border border-white/[0.2] hover:border-white/[0.7] transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'air' ? null : 'air')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Plane className="text-white w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">By Air</h2>
                </div>
                <AnimatePresence>
                  {selectedRoute === 'air' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden text-left"
                    >
                      <p className="text-white/90">Nearest airports:</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Bhuntar Airport, Kullu (60 km)</li>
                        <li>Gaggal Airport, Dharamshala (150 km)</li>
                        <li>Chandigarh International Airport (200 km)</li>
                      </ul>
                      <p className="text-sm text-white/70">From these airports, you can take a taxi or bus to IIT Mandi.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Rail Route */}
            <div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="route-container glass p-6 rounded-lg border border-white/[0.2] hover:border-white/[0.7] transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'rail' ? null : 'rail')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Train className="text-white w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">By Train</h2>
                </div>
                <AnimatePresence>
                  {selectedRoute === 'rail' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden text-left"
                    >
                      <p className="text-white/90">Nearest railway stations:</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Una Railway Station (110 km)</li>
                        <li>Kiratpur Railway Station (160 km)</li>
                        <li>Chandigarh Railway Station (200 km)</li>
                      </ul>
                      <p className="text-sm text-white/70">Regular buses and taxis are available from these stations to Mandi.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Road Route */}
            <div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="route-container glass p-6 rounded-lg border border-white/[0.2] hover:border-white/[0.7] transition-all duration-300 cursor-pointer h-auto"
                onClick={() => setSelectedRoute(selectedRoute === 'road' ? null : 'road')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bus className="text-white w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">By Road</h2>
                </div>
                <AnimatePresence>
                  {selectedRoute === 'road' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden text-left"
                    >
                      <p className="text-white/90">Major bus routes:</p>
                      <ul className="list-disc list-inside space-y-2 text-white/80">
                        <li>Delhi → Mandi (500 km, ~12 hrs)</li>
                        <li>Chandigarh → Mandi (200 km, ~6 hrs)</li>
                        <li>Shimla → Mandi (150 km, ~4 hrs)</li>
                      </ul>
                      <p className="text-sm text-white/70">Regular HRTC and private buses available.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Detailed Instructions */}
          <motion.div
            variants={item}
            className="mt-16 p-8 rounded-lg border border-white/[0.2] h-auto"
          >
            <h2 className="mb-12 text-2xl font-bold text-white flex items-center gap-3">
              <Navigation className="w-6 h-6" />
              Guide to IIT Mandi from Mandi City
            </h2>
            <TabsDemo />
          </motion.div>

          {/* Map Location */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center flex justify-center"
          >
            <Modal>
              <ModalTrigger className="harry-text-vsmall border border-white flex justify-center group/modal-btn mt-10">
                <span className="group-hover/modal-btn:translate-x-40 text-white text-center transition duration-500  text-[1.5rem]">
                  Hover here!
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 harry-text text-[1.3rem]">
                  📍
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    Check out {" "}
                    <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                      IIT Mandi
                    </span>{" "}
                    on Google Map! 🌄
                  </h4>
                  <div className="flex justify-center items-center">
                    {HTRimages.map((image, idx) => (
                      <motion.div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 - 10,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        whileTap={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt="bali images"
                          width="500"
                          height="500"
                          className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                      </motion.div>
                    ))}
                  </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                  <CoolMode>
                    <a href='https://maps.app.goo.gl/am2VXhLdSqJ1sDLt9' target="_blank">
                      <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                        🗺️
                      </button>
                    </a>
                  </CoolMode>
                </ModalFooter>
              </ModalBody>
            </Modal>
          </motion.div>
        </motion.div>
        <FAQ />

      </div>
    </>
  )
}

export default page