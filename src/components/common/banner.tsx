import React from "react";
import { cn } from "@/lib/cn";
import  {motion}  from "motion/react";
import star from "@/assets/star ka hey.png"

export function Banner() {
    return (
        <div className="bg-green-100 border-t-2 border-b-2 border-green-700 ">                
            <div className="max-w-7xl mx-auto px-6 py-20 relative">

                <motion.img
                    src={star}
                    className="absolute left-1 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 md:h-10 md:w-10"
                    animate={{ x: [0, 12, -8, 0], y: [0, -10, 6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    src={star}
                    className="absolute left-1/1 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2  md:h-40 md:w-40"
                    animate={{ x: [0, 12, -8, 0], y: [0, -10, 6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    src={star}
                    className="absolute left-1/3 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 md:h-20 md:w-20"
                    animate={{ x: [0, 12, -8, 0], y: [0, -10, 6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center md:text-left">
                    <span className="block text-lg">Sup Yo!</span>
                    <motion.h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4"> I'm
                        <motion.span initial={{ opacity: 0, x: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className=" py-6">
                            Vincent
                        </motion.span>
                        <motion.span initial={{ opacity: 0, x: 0, scale:0.5 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.3}}>
                            Laroco
                        </motion.span>
                    </motion.h2>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 ">
            </div>
        </div>
    );
}