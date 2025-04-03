import { motion } from 'framer-motion';

const About_VideoSection = () => {
  return (
    <div className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pentagram.png')] bg-center opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-8">
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
        
        <motion.div 
          className="relative aspect-video max-w-4xl mx-auto shadow-2xl shadow-[#BB0000]/10 border border-[#BB0000]/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-[#BB0000]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none"></div>
          
          <iframe 
            className="w-full h-full z-0"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy YouTube URL
            title="Exodia Promotional Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default About_VideoSection; 