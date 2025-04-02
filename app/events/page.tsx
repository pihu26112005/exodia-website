'use client';
import { motion } from 'framer-motion';
import ParallaxEventCard from '../components/ParallaxEventCard';
import FlipEventCard from '../components/FlipEventCard';
import { getCloudinaryImageUrl } from '@/lib/cloudinary';

const mainEvents = [
  {
    id: 'cosplay',
    title: 'Cosplay',
    description: 'Dress up as your favorite characters from movies, anime, or games. Special categories for horror and fantasy characters.',
    image: getCloudinaryImageUrl('cosplay_duww3q'),
    rulebook: '/rulebooks/cosplay.pdf'
  },
  {
    id: 'mr-ms-exodia',
    title: 'Mr & Ms Exodia',
    image: getCloudinaryImageUrl('IMG_20250328_021755_238_1_pspsxa'),
  },
  {
    id: 'fashion-show',
    title: 'Fashion Inferno',
    description: 'Where style meets darkness in a stunning display of fashion and creativity.',
    image: getCloudinaryImageUrl('fashion_duww3q'),
    date: 'March 17',
    prize: '₹50,000',
    rulebook: '/rulebooks/fashion.pdf'
  }
];

// Regular events data
const events = [
  {
    id: 'battle-of-bands',
    title: 'Battle of Bands',
    category: 'Music',
    description: 'Showcase your musical talent in this epic battle of bands.',
    image: getCloudinaryImageUrl('battle-of-bands_duww3q'),
    rulebook: '/rulebooks/battle-of-bands.pdf',
    details: 'Compete in various categories including rock, metal, and fusion. Solo and group performances welcome. Winners get a chance to perform at the Pro Nite.'
  },
  {
    id: 'solo-dance',
    title: 'Solo Dance',
    category: 'Dance',
    description: 'Let your moves tell a story in this solo dance competition.',
    image: getCloudinaryImageUrl('solo-dance_duww3q'),
    rulebook: '/rulebooks/solo-dance.pdf',
    details: 'Showcase your individual dance style in various categories including contemporary, hip-hop, and classical. Special horror theme category with exciting prizes.'
  },
  {
    id: 'nukkad-natak',
    title: 'Nukkad Natak',
    category: 'Theatre',
    description: 'Street plays that speak to the soul.',
    image: getCloudinaryImageUrl('nukkad-natak_duww3q'),
    rulebook: '/rulebooks/nukkad-natak.pdf',
    details: 'Stage powerful street plays that address social issues and entertain the audience. Special emphasis on horror and thriller themes.'
  },
  {
    id: 'face-painting',
    title: 'Face Painting',
    category: 'Fine Arts',
    description: 'Transform faces into works of art.',
    image: getCloudinaryImageUrl('face-painting_duww3q'),
    rulebook: '/rulebooks/face-painting.pdf',
    details: 'Showcase your artistic skills in face painting with special categories for horror and fantasy themes. All materials will be provided.'
  },
  {
    id: 'mushaira',
    title: 'Mushaira',
    category: 'Literary',
    description: 'An evening of poetic expressions.',
    image: getCloudinaryImageUrl('mushaira_duww3q'),
    rulebook: '/rulebooks/mushaira.pdf',
    details: 'Compete in Urdu and Hindi poetry competitions. Special midnight poetry session under the stars with horror and thriller themes.'
  },
  {
    id: 'shutter-stories',
    title: 'Shutter Stories',
    category: 'Photography',
    description: 'Capture moments that tell a thousand stories.',
    image: getCloudinaryImageUrl('shutter-stories_duww3q'),
    rulebook: '/rulebooks/shutter-stories.pdf',
    details: 'Photography competition with themes of horror, night life, and abstract. Special workshops on night photography and editing.'
  },
  {
    id: 'stand-up',
    title: 'Stand Up Comedy',
    category: 'Comedy',
    description: 'Laugh your way through the night.',
    image: getCloudinaryImageUrl('stand-up_duww3q'),
    rulebook: '/rulebooks/stand-up.pdf',
    details: 'Showcase your comedic talent in this stand-up comedy competition. Special categories for dark humor and horror comedy.'
  },
  {
    id: 'cosplay',
    title: 'Cosplay',
    category: 'Fashion',
    description: 'Bring your favorite characters to life.',
    image: getCloudinaryImageUrl('cosplay_duww3q'),
    rulebook: '/rulebooks/cosplay.pdf',
    details: 'Dress up as your favorite characters from movies, anime, or games. Special categories for horror and fantasy characters.'
  },
  {
    id: 'ambassador',
    title: 'Ambassador',
    category: 'Personality',
    description: 'Be the face of Exodia.',
    image: getCloudinaryImageUrl('ambassador_duww3q'),
    rulebook: '/rulebooks/ambassador.pdf',
    details: 'Showcase your personality, communication skills, and leadership qualities. Winners will represent Exodia in various events.'
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#080808] pt-24">
      {/* Main Events Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Main <span className="text-[#BB0000]">Events</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainEvents.map((event, index) => (
              <ParallaxEventCard
                key={event.id}
                {...event}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cultural <span className="text-[#BB0000]">Events</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <FlipEventCard
                key={event.id}
                {...event}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 