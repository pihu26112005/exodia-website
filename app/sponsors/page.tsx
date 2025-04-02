"use client"
import React from 'react'
import Sponsors_Card from '../components/sponsor_Card';
import { motion } from "framer-motion";
const SponList = [
    {
        name: 'Sponsor 1',
        image: '/assets/sponsors/1.png'
    },
    {
        name: 'Sponsor 2',
        image: '/assets/sponsors/2.jpeg'
    },
    {
        name: 'Sponsor 3',
        image: '/assets/sponsors/3.jpeg'
    },
    {
        name: 'Sponsor 4',
        image: '/assets/sponsors/4.png'
    },
    {
        name: 'Sponsor 5',
        image: '/assets/sponsors/5.jpeg'
    },
    {
        name: 'Sponsor 6',
        image: '/assets/sponsors/6.png'
    },
    {
        name: 'Sponsor 7',
        image: '/assets/sponsors/7.jpeg'
    },
    {
        name: 'Sponsor 8',
        image: '/assets/sponsors/8.png'
    },
    {
        name: 'Sponsor 9',
        image: '/assets/sponsors/9.png'
    },
    {
        name: 'Sponsor 10',
        image: '/assets/sponsors/10.png'
    },
    {
        name: 'Sponsor 11',
        image: '/assets/sponsors/11.png'
    },
    {
        name: 'Sponsor 12',
        image: '/assets/sponsors/12.png'
    },
    {
        name: 'Sponsor 13',
        image: '/assets/sponsors/13.png'
    },
    {
        name: 'Sponsor 14',
        image: '/assets/sponsors/14.png'
    },
];


const page = () => {
    return (
        <div className="flex justify-center items-center flex-col py-36">
            {/* Animated Heading */}
            <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Meet Our <span className="text-[#BB0000]">Sponsors</span>
            </motion.h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl px-6 mb-6 text-center">
                We are proud to have the support of these amazing{" "}
                <span className="text-[#BB0000] font-semibold">Sponsors</span> who make this event possible!
            </p>

            {/* Sponsors Grid */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-10 max-sm:gap-2">
                {SponList.map(({ name, image }, index) => (
                    <Sponsors_Card key={index} name={name} image={image} />
                ))}
            </div>
        </div>
    )
}

export default page