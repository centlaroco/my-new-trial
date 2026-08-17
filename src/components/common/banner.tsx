import { motion } from "motion/react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import star from "@/assets/star ka hey.png";

export function Banner() {
  return (
    <section className="bg-green-100 border-b-5 border-green-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative overflow-visible">
        <motion.img
          src={star}
          alt="decorative star"
          aria-hidden="true"
          className="pointer-events-none absolute left-8 top-1/4 h-32 w-32 md:h-16 md:w-16"
          animate={{ x: [0, 10, -8, 0], y: [0, -8, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={star}
          alt="decorative star"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 -translate-x-1/2 -translate-y-1/2"
          animate={{ x: [0, 12, -10, 0], y: [0, -10, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={star}
          alt="decorative star"
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-1/3 h-24 w-24 sm:h-28 sm:w-28 md:h-20 md:w-20"
          animate={{ x: [0, -8, 10, 0], y: [0, -6, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
            Sup Yo!
          </span>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-4xl font-bold tracking-tight text-slate-700 sm:text-5xl md:text-6xl">
            I&apos;m
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="block text-green-900">Vincent</span>
              <span className="block text-slate-700 ">Laroco</span>
            </div>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}className="mt-6 max-w-2xl text-base text-slate-700 sm:text-lg">
            I&apos;m a 3rd Year College student at Cordova Public COllege
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start"
          >
            <NavLink to="/about">
              <Button>About me</Button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}