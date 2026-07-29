import React from "react";
import { cn } from "@/lib/cn";
import { motion } from "motion/react";

export function Banner() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 border-b">
                
                <motion.div initial={{ opacity: 0, x: 0,  scale: 0.8 }} animate={{ opacity: 1, x: 0, scale:1 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
                    <span className="block text-lg">Sup Yo!</span>
                    <h2 className="text-4xl md:text-5xl font-bold"> I'm{" "}
                        <motion.span initial={{ opacity: 0, x: 30, y: 30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.6 }}>Vincent</motion.span>{" "}
                        <motion.span initial={{ opacity: 0, x: 30, y: 30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>Laroco</motion.span>
                    </h2>
                </motion.div>

                <motion.img
                    src="https://i.pinimg.com/736x/4a/19/ac/4a19ace2c10e8dda74cb256d77eb7dd3.jpg"
                    alt="Vincent ni yo"
                    className="w-56 md:w-72 h-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
            </div>
        </div>
    );
}