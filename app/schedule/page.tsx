"use client"
import React from 'react'
import { motion } from "framer-motion";



const page = () => {
    return (
        <div className="flex justify-center items-center flex-col py-36">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Coming <span className="text-[#BB0000]">Soon...</span>
            </motion.h2>
        </div>
    )
}

export default page