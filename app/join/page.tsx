"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function JoinPage() {
  const [isButtonSticky, setIsButtonSticky] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When button is not visible, make it sticky
        setIsButtonSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px"
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const RegisterButton = () => (
    <a 
      href="https://forms.gle/zkuoJqXhKes7hMLq7"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button 
        className="bg-[#BB0000] hover:bg-transparent hover:text-[#FF0000] text-white border border-[#BB0000] font-bold px-8 py-4 text-xl shadow-lg shadow-[#BB0000]/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
        data-cursor-hover
      >
        Register Now
      </button>
    </a>
  );

  return (
    <div className="min-h-screen bg-[#080808]">
      <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply pointer-events-none"></div>
      
      <div className="pt-32 px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero section */}
          <div className="text-center mb-10">
            <h1 className="text-white text-5xl mb-4 font-bold blood-drip">
              Join The Exodia Community
            </h1>
            <p className="text-white/80 text-xl">
              Enter the darkness from 18th to 20th April
            </p>
          </div>
          
          {/* Fee Structure Card */}
          <div className="bg-[#0A0A0A] border border-[#BB0000]/30 rounded-lg p-8 mb-8 shadow-xl shadow-[#BB0000]/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#BB0000] to-transparent"></div>
            
            <h2 className="text-white text-3xl mb-6 font-bold">Fee Structure</h2>
            <div className="space-y-6">
              {/* Registration Fee */}
              <div className="p-6 bg-[#151515] rounded-lg border border-[#BB0000]/20">
                <h3 className="text-white text-2xl mb-3">Registration Fee</h3>
                <p className="text-white/80 text-xl mb-2">₹2449 per participant</p>
                <p className="text-[#BB0000] text-lg">(Non-refundable)</p>
                <div className="mt-4">
                  <h4 className="text-white text-lg mb-2">Includes:</h4>
                  <ul className="text-white/80 grid md:grid-cols-2 gap-2">
                    <li>• ProNite passes</li>
                    <li>• Mess food</li>
                    <li>• Accommodation</li>
                    <li>• Campus bus transportation</li>
                    <li className="md:col-span-2">• Unlimited participation in all events</li>
                  </ul>
                </div>
              </div>

              {/* Security Deposit */}
              <div className="p-6 bg-[#151515] rounded-lg border border-[#BB0000]/20">
                <h3 className="text-white text-2xl mb-3">Security Deposit</h3>
                <p className="text-white/80 text-xl mb-2">₹1000 per participant</p>
                <p className="text-white/60">• Payable upon arrival at campus</p>
                <p className="text-white/60">• Fully refundable after fest conclusion</p>
              </div>

              {/* Accommodation Details */}
              <div className="p-6 bg-[#151515] rounded-lg border border-[#BB0000]/20">
                <h3 className="text-white text-2xl mb-3">Accommodation Period</h3>
                <p className="text-white/80">
                  From <span className="text-[#BB0000]">3:00 PM, 17th April</span> to <span className="text-[#BB0000]">7:00 AM, 21st April 2025</span>
                </p>
              </div>

              {/* Important Notes */}
              <div className="mt-4 text-white/60 text-sm">
                <p>* Registration fee is non-refundable under any circumstances</p>
                <p>* All facilities are subject to fest guidelines and regulations</p>
              </div>
            </div>
          </div>
          
          {/* Perks Section */}
          <div className="bg-[#0A0A0A] border border-[#BB0000]/30 rounded-lg p-8 mb-8 shadow-xl shadow-[#BB0000]/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#BB0000] to-transparent"></div>
            
            <h2 className="text-white text-3xl mb-6 font-bold">Perks & Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#151515] rounded-lg border border-[#BB0000]/20">
                <h3 className="text-white text-xl mb-2">Networking</h3>
                <p className="text-white/80">Connect with students from across India</p>
              </div>
              <div className="p-4 bg-[#151515] rounded-lg border border-[#BB0000]/20">
                <h3 className="text-white text-xl mb-2">Learning</h3>
                <p className="text-white/80">Participate in workshops and competitions</p>
              </div>
              <div className="p-4 bg-[#151515] rounded-lg border border-[#BB0000]/20">
                <h3 className="text-white text-xl mb-2">Entertainment</h3>
                <p className="text-white/80">Enjoy star performances and cultural shows</p>
              </div>
            </div>
          </div>
          
          {/* Original Button Position */}
          <div ref={buttonRef} className="text-center mt-12">
            <RegisterButton />
            <p className="text-white/60 mt-4">
              Join the cultural extravaganza in the haunted grounds of the Himalayas
            </p>
          </div>

          {/* Sticky Button */}
          {isButtonSticky && (
            <div className="fixed bottom-8 right-8 z-50 transition-all duration-300">
              <RegisterButton />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 