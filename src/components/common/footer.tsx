import { NavLink } from "react-router";
import { motion } from "motion/react";
import facebook from "@/assets/icons_img/facebook.png";
import insta from "@/assets/icons_img/instagram.png";
import github from "@/assets/icons_img/github.png";
import gmail from "@/assets/icons_img/gmail.png";
import viber from "@/assets/icons_img/viber.png";
export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto  px-4 lg:px-8 py-12  grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <motion.div initial={{ opacity: -5, x: -10 }} animate={{ opacity: 1, x: 1 }} transition={{ duration: 0.4 }}>
              <NavLink to="/" className="cursor-pointer flex items-center justify-center font-bold bg-green-700 text-white px-3 py-2 rounded-2xl shadow-md shadow-green-700/50 text-2xl">VL</NavLink>
            </motion.div>
            <div className="flex flex-col gap-1">
              <motion.h1 initial={{ opacity: 0, x: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="font-bold text-xl">Vincent Laroco</motion.h1>
              <motion.small initial={{ opacity: 0, x: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="text-gray-500 text-sm font-semibold">BSIT 3D</motion.small>
            </div>
          </div>

          <div className="flex gap-3">
            <motion.a initial={{ opacity: -5, y: 10 }} animate={{ opacity: 1, y: 1 }} transition={{ duration: 0.7 }} href="https://www.facebook.com/vincentlaroco" target="_blank"><img src={facebook} alt="Facebook" className="w-10 h-10 rounded-full border border-gray-400 bg-gray-100 p-2 hover:bg-gray-200 hover:scale-110 transition" /></motion.a>
            <motion.a initial={{ opacity: -5, y: 10 }} animate={{ opacity: 1, y: 1 }} transition={{ duration: 0.8 }} href="https://www.instagram.com/vinceelaroco/" target="_blank"><img src={insta} alt="insta" className="w-10 h-10 rounded-full border border-gray-400 bg-gray-100 p-2 hover:bg-gray-200 hover:scale-110 transition" /></motion.a>
            <motion.a initial={{ opacity: -5, y: 10 }} animate={{ opacity: 1, y: 1 }} transition={{ duration: 0.9 }} href="https://github.com/centlaroco" target="_blank"><img src={github} alt="Facebook" className="w-10 h-10 rounded-full border border-gray-400 bg-gray-100 p-2 hover:bg-gray-200 hover:scale-110 transition" /></motion.a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Navigation</h3>
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }} >
            <NavLink to="/" className="text-gray-600 hover:text-green-700">Home</NavLink>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} >
            <NavLink to="/about" className="text-gray-600 hover:text-green-700">About</NavLink>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} >
            <NavLink to="/skills" className= "text-gray-600 hover:text-green-700">SKills</NavLink>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Contact</h3>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-4 border border-gray-300 bg-gray-50 rounded-xl shadow-md p-4">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center ">
              <img src={gmail} alt="" className="p-3" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold">vinentlaroco@gmail.com</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-4 border border-gray-300  bg-gray-50 rounded-xl shadow-md xl p-4">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
              <img src={viber} alt="" className="p-3 " />

            </div>
            <div>
              <p className="text-md  text-gray-500">Phone</p>
              <p className="font-semibold">+63 960 422 8010</p>
            </div>
          </motion.div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-t border-gray-300 ">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            Copyright &reg; {new Date().getFullYear()} Vincent Laroco. All rights reserved.
          </p>


          <p className="text-sm text-gray-600">Application Development</p>
        </div>
      </div>
    </footer>
  );
}