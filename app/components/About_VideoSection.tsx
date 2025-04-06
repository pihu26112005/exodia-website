import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const About_VideoSection = () => {
  // Timeline data with YouTube video IDs and images
  const timelineData = {
    2017: ["xQDj8OrE0bo?si=KW575XIEyKTzBuMS", "/assets/pyqs/2017.jpg"],
    2018: ["WU_8wcNML3M?si=JwusbaJ7TvDwrYFS", "/assets/pyqs/2018.jpg"],
    2019: ["GlRHHi22mQg?si=XHcqcWHIqIM2z7wo", "/assets/pyqs/2019.jpg"],
    2023: ["GtArDHgOt5A?si=WfkmoRAPhQ5t5qYY", "/assets/pyqs/2023.jpg"],
    2024: ["WvwU3scKoAI?si=gB2kQWbVTzNk4kc7", "/assets/pyqs/2024.jpg"]
  };

  // State to track selected year
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  return (
    <div className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pentagram.png')] bg-center opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            About <span className="text-[#BB0000]">Exodia</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Exodia is IIT Mandi's annual cultural fest. With a blend of artistic expression and cultural extravaganza, Exodia promises an unforgettable experience in the heart of the Himalayas.
          </p>
        </motion.div>
        
        {/* Flashback timeline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            <span className="text-[#BB0000]">Flashback</span> Through The Years
          </h3>
          
          {/* Year selector timeline */}
          <div className="relative flex justify-center items-center mb-12">
            {/* Blood drip line */}
            <div className="absolute h-1 w-3/4 md:w-1/2 bg-gradient-to-r from-transparent via-[#BB0000]/70 to-transparent"></div>
            
            {/* Year nodes */}
            <div className="relative flex justify-between w-3/4 md:w-1/2">
              {Object.keys(timelineData).map((year) => (
                <motion.button
                  key={year}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                             transition-all duration-300 z-10 border-2
                             ${parseInt(year) === selectedYear 
                               ? 'bg-[#BB0000] text-white border-[#BB0000]' 
                               : 'bg-black/50 text-gray-400 border-[#BB0000]/30 hover:border-[#BB0000]/70'}`}
                  onClick={() => setSelectedYear(parseInt(year))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs md:text-sm font-bold">{year}</span>
                  {/* Dripping effect for selected year */}
                  {parseInt(year) === selectedYear && (
                    <motion.div 
                      className="absolute -bottom-4 w-0.5 h-16 bg-[#BB0000]"
                      initial={{ height: 0 }}
                      animate={{ height: [0, 16, 12] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Flashback card - Simplified to only show video */}
          <motion.div
            className="max-w-4xl mx-auto"
            key={selectedYear} // Force re-animation when year changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#0A0A0A] rounded-xl border border-[#BB0000]/40 overflow-hidden shadow-2xl shadow-[#BB0000]/10">
              <div className="aspect-video relative">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${timelineData[selectedYear as keyof typeof timelineData][0]}`}
                  title={`Exodia ${selectedYear} Highlights`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay effects */}
                <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay bg-gradient-to-br from-[#BB0000]/5 to-transparent"></div>
                
                {/* Year label */}
                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded text-white font-bold border border-[#BB0000]/40">
                  <span className="text-[#BB0000]">Exodia</span> {selectedYear}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About_VideoSection; 