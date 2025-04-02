"use client";
import React from 'react'

import { motion } from "framer-motion";
import Image from 'next/image';

const contacts = [
    {
        name: "John Doe",
        photo: "/john-doe.jpg",
        number: "+91 98765 43210",
        email: "johndoe@example.com",
    },
    {
        name: "Jane Smith",
        photo: "/jane-smith.jpg",
        number: "+91 87654 32109",
        email: "janesmith@example.com",
    },
    {
        name: "Alice Johnson",
        photo: "/alice-johnson.jpg",
        number: "+91 76543 21098",
        email: "alicejohnson@example.com",
    },
    {
        name: "Bob Williams",
        photo: "/bob-williams.jpg",
        number: "+91 65432 10987",
        email: "bobwilliams@example.com",
    },
];

const page = () => {
    return (
        <div className="min-h-screen bg-[#080808] py-30 px-4">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="text-white text-5xl font-bold blood-drip">Contact Us</h1>
                    <p className="text-white/80 text-xl mt-2">Reach out to our team</p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 gap-8">
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
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-[#BB0000]/50 mb-4">
                                <Image
                                    src={contact.photo}
                                    alt={contact.name}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>

                            {/* Contact Details */}
                            <h2 className="text-white text-2xl text-center font-bold">{contact.name}</h2>
                            <p className="text-white/80 text-lg text-center mt-1">{contact.number}</p>
                            <p className="text-[#BB0000] text-lg text-center">{contact.email}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default page