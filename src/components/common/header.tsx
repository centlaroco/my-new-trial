import { NavLink } from "react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [openMenu, setTheMenu] = useState(false); //

  const menu = () => {
    setTheMenu((o) => !o)
  }

  return (
    <header className="bg-white sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 lg:px-8 px-4 py-4">
        <div className="flex items-center gap-3">
          <motion.div initial={{ opacity: -5, x: -10 }} animate={{ opacity: 1, x: 1 }} transition={{ duration: 0.4 }}>
            <NavLink to="/" className="cursor-pointer flex items-center justify-center font-bold bg-green-700 text-white px-3 py-2 rounded-2xl shadow-md shadow-green-700/50 text-2xl">VL</NavLink>
          </motion.div>
          <div className="flex flex-col gap-1">
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="font-bold text-xl">Vincent Laroco</motion.h1>
            <motion.small initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="text-gray-500 text-sm font-semibold">BSIT 3D</motion.small>
          </div>
        </div>

        <motion.nav initial={{ opacity: 1, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="items-center hidden md:flex gap-8 text-gray-600 font-semibold text-md">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
        </motion.nav>

        <motion.div initial={{ opacity: 0, x: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="hidden md:block" >
          <Button><a href="/Resume.pdf" download> Download Resume</a></Button>
        </motion.div>

        {/* mobile menu button */}
        <button onClick={menu} className="md:hidden">
          {openMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#434343">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          ) :
            (<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#434343">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            )
          }
        </button>

      </div>
      {/* mobile menus */}
      {openMenu && (
        <div className="fixed px-4 py-4 top-20 right-0 w-full bg-white shadow-md">

          <motion.nav initial={{ opacity: 1, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-5 text-gray-600 font-semibold text-md ">
            <NavLink to="/" onClick={menu}>Home</NavLink>
            <NavLink to="/about" onClick={menu}>About</NavLink>
            <NavLink to="/skills" onClick={menu}>Skills</NavLink>
            <Button><a href="/Resume.pdf" download> Download Resume</a></Button>
          </motion.nav>

        </div>)}

    </header>
  );
}