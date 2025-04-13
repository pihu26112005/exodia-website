import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
  imgsrc: string;
  i: number;
}

const Card = ({ imgsrc, i }: CardProps) => {
  const titles = [
    "IIT Mandi Mountains",
    "Campus Transformation", 
    "Exodia Festival",
    "Night Performance",
    "Cultural Celebration",
    "Himalayan Experience"
  ];

  return (
    <motion.div 
      className="min-w-[300px] h-[200px] md:min-w-[400px] md:h-[250px] relative rounded-lg overflow-hidden border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
      <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
      
      <Image 
        src={imgsrc} 
        alt={titles[i] || `Exodia image ${i}`}
        fill
        sizes="(max-width: 768px) 300px, 400px"
        style={{ objectFit: 'cover' }}
        className="z-0"
        priority={i < 2} 
      />
      
      <div className="absolute bottom-0 left-0 p-4 z-30 w-full">
        <h3 className="text-white font-bold text-lg group-hover:text-[#BB0000] transition-all duration-300">
          {titles[i] || `Exodia ${i + 1}`}
        </h3>
      </div>
    </motion.div>
  );
};

export default Card; 