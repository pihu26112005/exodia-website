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
    rulebook: '/rulebooks/cosplay.pdf',
    date: 'TBA',
    prize: '₹10,000'
  },
  {
    id: 'mr-ms-exodia',
    title: 'Mr & Ms Exodia',
    description: 'The ultimate personality contest to crown Mr. and Ms. Exodia.',
    image: getCloudinaryImageUrl('IMG_20250328_021755_238_1_pspsxa'),
    rulebook: '/rulebooks/mr-ms-exodia.pdf',
    date: 'TBA',
    prize: '₹15,000'
  },
  {
    id: 'munsc',
    title: 'MUNSC',
    description: 'Model United Nations Simulation Competition - Debate global issues.',
    image: getCloudinaryImageUrl('MUNSC_phzxmr'),
    rulebook: '/rulebooks/munsc.pdf',
    date: 'TBA',
    prize: '₹20,000'
  }
];

// Regular events data
const events = [
  // Dance Events
  {
    id: 'the-sorcerers-solo',
    title: 'THE SORCERER\'S SOLO',
    category: 'Dance',
    description: 'A solo dance competition with magical themes.',
    image: getCloudinaryImageUrl('solo_dance_mchdqn'),
    // rulebook: '/rulebooks/sorcerers-solo.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Showcase your solo dance skills with magical and mystical themes.'
  },
  {
    id: 'backstreet-brawl',
    title: 'BACKSTREET BRAWL',
    category: 'Dance',
    description: 'Street dance battle competition.',
    image: getCloudinaryImageUrl('BackStreet_Brawl_y30kqr'),
    // rulebook: '/rulebooks/backstreet-brawl.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Compete in street dance battles with various styles.'
  },
  {
    id: 'dual-mirage',
    title: 'DUAL MIRAGE',
    category: 'Dance',
    description: 'Duet dance competition.',
    image: getCloudinaryImageUrl('dualMirage_au2n5x'),
    // rulebook: '/rulebooks/dual-mirage.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Partner dance competition showcasing coordination and creativity.'
  },
  {
    id: 'sonic-sync',
    title: 'SONIC SYNC',
    category: 'Dance',
    description: 'Group dance synchronization competition.',
    image: getCloudinaryImageUrl('SONIC_SYNC_tmkjnt'),
    // rulebook: '/rulebooks/sonic-sync.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Group dance competition focusing on synchronization and teamwork.'
  },
  {
    id: 'tarangini',
    title: 'Tarangini',
    category: 'Dance',
    description: 'Classical dance competition.',
    image: getCloudinaryImageUrl('Tarangini_umjahb'),
    // rulebook: '/rulebooks/tarangini.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Showcase your classical dance skills in various traditional styles.'
  },

  // Theatre Events
  {
    id: 'nukkad-natak',
    title: 'NUKKAD NATAK',
    category: 'Theatre',
    description: 'Street plays that speak to the soul.',
    image: getCloudinaryImageUrl('nukkadnatak_nwkwbq'),
    // rulebook: '/rulebooks/nukkad-natak.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Stage powerful street plays that address social issues.'
  },
  {
    id: 'laughter-lab',
    title: 'LAUGHTER LAB',
    category: 'Theatre',
    description: 'Comedy theatre competition.',
    image: getCloudinaryImageUrl('stand_up_iwkapi'),
    // rulebook: '/rulebooks/laughter-lab.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Present humorous theatrical performances.'
  },
  {
    id: 'theatre-of-dreams',
    title: 'THEATRE OF DREAMS',
    category: 'Theatre',
    description: 'Dramatic theatre competition.',
    image: getCloudinaryImageUrl('Theatre_of_dreams_vdwzum'),
    // rulebook: '/rulebooks/theatre-of-dreams.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Stage dramatic performances with compelling narratives.'
  },
  {
    id: 'a-tale-alone',
    title: 'A TALE ALONE',
    category: 'Theatre',
    description: 'Solo theatrical performance.',
    image: getCloudinaryImageUrl('aTaleAlone_ktduhj'),
    // rulebook: '/rulebooks/a-tale-alone.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'One-person theatrical performance competition.'
  },

  // Literary Events
  {
    id: 'giggle-goblet',
    title: 'GIGGLE GOBLET',
    category: 'Literary',
    description: 'Comedy writing competition.',
    image: getCloudinaryImageUrl('Screenshot_2025-04-13_at_2.50.11_AM_ts4idq'),
    // rulebook: '/rulebooks/giggle-goblet.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Showcase your humorous writing skills.'
  },
  {
    id: 'tales-of-triumph',
    title: 'TALES OF TRIUMPH',
    category: 'Literary',
    description: 'Story writing competition.',
    image: getCloudinaryImageUrl('Tales_of_Triumph_zep2zr'),
    // rulebook: '/rulebooks/tales-of-triumph.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create compelling stories and narratives.'
  },
  {
    id: 'cite-and-recite',
    title: 'CITE AND RECITE',
    category: 'Literary',
    description: 'Poetry recitation competition.',
    image: getCloudinaryImageUrl('Screenshot_2025-04-13_at_2.48.40_AM_oaodny'),
    // rulebook: '/rulebooks/cite-and-recite.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Recite poetry with emotion and expression.'
  },
  {
    id: 'verse-of-the-vigil',
    title: 'VERSE OF THE VIGIL',
    category: 'Literary',
    description: 'Poetry writing competition.',
    image: getCloudinaryImageUrl('VerseOfTheVigil_axidl5'),
    // rulebook: '/rulebooks/verse-of-the-vigil.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create original poetry pieces.'
  },
  {
    id: 'spin-a-yarn',
    title: 'SPIN-A-YARN',
    category: 'Literary',
    description: 'Storytelling competition.',
    image: getCloudinaryImageUrl('Screenshot_2025-04-13_at_2.59.22_AM_phxfdd'),
    // rulebook: '/rulebooks/spin-a-yarn.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Tell engaging stories with your unique style.'
  },
  {
    id: 'mushaira',
    title: 'Mushaira',
    category: 'Literary',
    description: 'An evening of poetic expressions.',
    image: getCloudinaryImageUrl('Mushaira_znwdwm'),
    // rulebook: '/rulebooks/mushaira.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Compete in Urdu and Hindi poetry competitions.'
  },

  // Business Events
  {
    id: 'make-your-maverick',
    title: 'MAKE YOUR MAVERICK',
    category: 'Business',
    description: 'Entrepreneurship competition.',
    image: getCloudinaryImageUrl('u9265455913_httpss.mj.run5y7ESYAvIUA_High-contrast_anime-styl_317da7cd-d142-4726-bfa0-0d5d4fa281687_1_1_m8eyxq'),
    // rulebook: '/rulebooks/make-your-maverick.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Present your innovative business ideas.'
  },
  {
    id: 'brand-forge',
    title: 'BRAND FORGE',
    category: 'Business',
    description: 'Branding competition.',
    image: getCloudinaryImageUrl('brandForge_anud7x'),
    // rulebook: '/rulebooks/brand-forge.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create and present brand strategies.'
  },
  {
    id: 'advertise-it-right',
    title: 'ADVERTISE IT RIGHT',
    category: 'Business',
    description: 'Advertising competition.',
    image: getCloudinaryImageUrl('Screenshot_2025-04-13_at_2.53.50_AM_q95epp'),
    // rulebook: '/rulebooks/advertise-it-right.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create compelling advertisements.'
  },

  // Quiz Events
  {
    id: 'got-quiz',
    title: 'GOT AND HOTD Quiz',
    category: 'Quiz',
    description: 'Game of Thrones and House of the Dragon quiz.',
    image: getCloudinaryImageUrl('GOT_z9cqmx'),
    // rulebook: '/rulebooks/got-quiz.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Test your knowledge of the Game of Thrones universe.'
  },
  {
    id: 'harry-potter-quiz',
    title: 'HARRY POTTER Quiz',
    category: 'Quiz',
    description: 'Harry Potter universe quiz.',
    image: getCloudinaryImageUrl('Quidditch_vnskx5'),
    // rulebook: '/rulebooks/harry-potter-quiz.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Test your knowledge of the Wizarding World.'
  },
  {
    id: 'jigyasa',
    title: 'JIGYASA',
    category: 'Quiz',
    description: 'General knowledge quiz.',
    image: getCloudinaryImageUrl('jigyasa_czcpbu'),
    // rulebook: '/rulebooks/jigyasa.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Test your general knowledge across various topics.'
  },

  // Photography Events
  {
    id: 'snap-a-tale',
    title: 'SNAP A TALE',
    category: 'Photography',
    description: 'Photography storytelling competition.',
    image: getCloudinaryImageUrl('Snap_A_Tale_fh0nkw'),
    // rulebook: '/rulebooks/snap-a-tale.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Tell stories through your photographs.'
  },
  {
    id: 'exoreel',
    title: 'EXOREEL',
    category: 'Photography',
    description: 'Short film competition.',
    image: getCloudinaryImageUrl('Exoreels_etolvz'),
    // rulebook: '/rulebooks/exoreel.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create and present short films.'
  },
  {
    id: 'shutter-stories',
    title: 'SHUTTER STORIES',
    category: 'Photography',
    description: 'Photography competition.',
    image: getCloudinaryImageUrl('Shutter_Stories_fafhzg'),
    // rulebook: '/rulebooks/shutter-stories.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Showcase your photography skills.'
  },

  // Fine Arts Events
  {
    id: 'waterpaint',
    title: 'WAND AND WATER',
    category: 'Fine Arts',
    description: 'Watercolor painting competition.',
    image: getCloudinaryImageUrl('waterpaint_p0aapo'),
    // rulebook: '/rulebooks/waterpaint.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create beautiful watercolor artworks.'
  },
  {
    id: 'sculpture',
    title: 'MOLD AND MAGIC',
    category: 'Fine Arts',
    description: 'Sculpture competition.',
    image: getCloudinaryImageUrl('Sculpture_making_qjreti'),
    // rulebook: '/rulebooks/sculpture.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create magical sculptures.'
  },
  {
    id: 'one-to-vecna',
    title: 'ONE TO VECNA',
    category: 'Fine Arts',
    description: 'Digital art competition.',
    image: getCloudinaryImageUrl('Face_Painting_joqg2n'),
    // rulebook: '/rulebooks/one-to-vecna.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Create digital artworks.'
  },

  // Music Events
  {
    id: 'battle-of-bands',
    title: 'Battle of Bands',
    category: 'Music',
    description: 'Band performance competition.',
    image: getCloudinaryImageUrl('BattleOfBands_dkfouz'),
    // rulebook: '/rulebooks/battle-of-bands.pdf',
    rulebook: 'https://drive.google.com/drive/u/0/mobile/folders/1HDTET2hSR5IvnvghrGC3aAaegtsq3pGS?usp=drive_link',
    details: 'Showcase your band\'s musical talent.'
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
            Flagship <span className="text-[#BB0000]">Events</span>
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

      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <span className="text-[#BB0000]">Events</span>
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