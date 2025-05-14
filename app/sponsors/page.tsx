"use client"

import React from 'react'

import { motion } from "framer-motion";

import SponCard from '../components/SponCard';

const SponList = [
    {
        name: 'Hydropure',
        image: '/hhhh.png',
        description: 'Title Sponsor',
        className: 'bg-yellow-300'
    },
    {
        name: 'SJVN',
        image: '/ssss.jpeg',
        description: 'Platinum Sponsor',
        className: 'bg-gray-300',
        link: 'https://sjvn.nic.in/'
    },
    {
        name: 'IMHERE',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg83GgKJCz72kmsCXMLPhjzWtoifAyncURqe9d8',
        description: 'Lifestyle and Apparel Partner',
        className: 'bg-pink-200'
    },
    // {
    //     name: 'hpscb (Scheduled Bank)',
    //     image: '/assets/sponsors/22.png',
    //     description: 'Banking Partner',
    //     className: 'bg-blue-200'
    // },
    {
        name: 'Vivo',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8SqEXAIGQzaUY8Fi6fOHD15m2MwZtqupgo3hN',
        description: 'Platinum Sponsor',
        className: 'bg-gray-300'
    },
    {
        name: 'Flyjone',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg86bByypmwX9hA86oIV0kMUetRYfrxvLGNiHJa',
        description: 'Platinum Sponsor',
        className: 'bg-gray-300'
    },
    {
        name: 'Makino',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8eOZjNV8xNtKWz9Q3g1HAlDucC8hSv7wLenxb',
        description: 'Bronze Partner',
        className: 'bg-yellow-100'
    },
    {
        name: 'Technosport',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg86EgaoHJmwX9hA86oIV0kMUetRYfrxvLGNiHJ',
        description: 'Sportswear Partner',
        className: 'bg-red-200'
    },
    {
        name: 'StockEdge',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8F6HWqHZ1sOhtfncomTS60MER1JXj9ueN28kI',
        description: 'Sponsor',
        className: 'bg-green-100'
    },
    {
        name: 'Learning While Travelling (LWT)',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8yutUV3bcnD1Z80MwGei4QNvUP6JjxgdSYHBA',
        description: 'Ecosystem Partner',
        className: 'bg-indigo-100'
    },
    // {
    //     name: 'Dublieu',
    //     image: '/assets/sponsors/13.png',
    //     description: 'Student Opportunities Partner',
    //     className: 'bg-purple-100'
    // },
    // {
    //     name: 'Desert Diva Cake Studio',
    //     image: '/assets/sponsors/12.png',
    //     description: 'Stall Partner',
    //     className: 'bg-amber-100'
    // },
    {
        name: 'AbhiBus',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hYIaDSgiPInSsWU8AM03Hk6OVjE5NlYFoqrg',
        description: 'Travel Partner',
        className: 'bg-blue-100'
    },
    {
        name: '2.Oh!',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg80u5qVd6nPm1We5dZyOsKhfk4grHcBuEtjiqb',
        description: 'Gifting Partner',
        className: 'bg-pink-100'
    },
    {
        name: 'Luxe Bushahar Closet',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg873mgP4VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA',
        description: 'Stall Sponsor',
        className: 'bg-rose-100'
    },
    {
        name: 'Paramount Chess',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8EgiBYWRXyL9MO1q2nHQca6xPvFe7YNiRswgV',
        description: 'Chess Partner',
        className: 'bg-orange-100'
    },
    {
        name: 'Plush',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg89hnaxCSkjJGLWsDmzwQdtIlERYHSO5hVUi2y',
        description: 'Hygiene Partner',
        className: 'bg-lime-100'
    },
    {
        name: 'Qoneqt',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg859bmvvUAUQ6YOXCtv3Fsqkif4u7ENMrxJenS',
        description: 'Community Partner',
        className: 'bg-sky-100'
    },
    {
        name: 'Primes & Zooms',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8OMWiYRZAVZirtFvpze2T4jfB9k1RaSXCLubx',
        description: 'Prize Sponsor',
        className: 'bg-teal-100'
    },
    {
        name: 'Utho',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XLxTLQhWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ',
        description: 'Cloud Partner',
        className: 'bg-cyan-100'
    },
    {
        name: 'Chess.com',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8KgyWrT3y0NMqAiv1scShIQEJfUmRlp8G745K',
        description: 'Sponsor',
        className: 'bg-green-100'
    },
    {
        name: 'PNC Foods and Caterers',
        image: 'https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8xDRrCuIygaqUKb1hXvzrWR4feD9nJAIom7ck',
        description: 'Sponsor',
        className: 'bg-green-100'
    }
];


const page = () => {
    return (
        <div className="bg-zinc-950 pt-24 px-4 md:px-12 mt-4 space-y-8">
            <div>
                <div className='pt-16 text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                    <motion.h1 
                      className="text-[3rem] max-2xl:text-[4rem] max-xl:text-[3rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[2rem] text-center mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Exodia <span className="text-[#BB0000]">Sponsors</span>
                    </motion.h1>
                </div>
                <div className='flex justify-center items-center mb-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                        {SponList.map((spon) => (
                            <SponCard key={spon.image} image={spon.image} name={spon.name} link={spon.link} description={spon.description} classN={spon.className} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page