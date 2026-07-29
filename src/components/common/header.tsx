import { NavLink } from "react-router";
import { motion } from "motion/react";
// import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-md shadow-gray-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <motion.div initial={{opacity: -5, x: -10} } animate={{opacity:1, x:1}} transition={{duration:0.4}}>
            <NavLink to="/" className="cursor-pointer flex items-center justify-center font-bold bg-green-700 text-white px-3 py-2 rounded-2xl shadow-md shadow-green-700/50 text-2xl">VL</NavLink>
          </motion.div>
          <div className="flex flex-col gap-1">
            <motion.h1 initial={{opacity: 0, x:0, scale:0.5}} animate={{opacity:1, scale:1}} className="font-bold text-xl">Vincent Laroco</motion.h1>
            <motion.small initial={{opacity:0, x:0,scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.2 }}  className="text-gray-500 text-sm font-semibold">BSIT 3D</motion.small>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-7 text-gray-600 font-semibold text-md">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Projects</NavLink>
        </nav>

        <NavLink to="/">
          <button id="darkmode" className="cursor-pointer bg-green-700 hover:bg-gray-600 px-5 py-2 rounded-full shadow-md shadow-green-700/40 text-white text-md font-semibold">Services</button>
        </NavLink>
      </div>
    </header>
  );
}