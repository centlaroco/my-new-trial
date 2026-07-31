import { NavLink } from "react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import profile from '@/assets/profile.jpg';

export function AboutMe() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
            <div className='grid grid-cols-2 border-b '>
                <div className=''>
                    <h1 className='font-bold text-3xl p-3'>ABout me</h1>
                    <motion.img
                        src={profile}
                        alt="profile yarn"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className='h-100 shadow-lg shadow-gray-700/100'
                    />
                </div>
                <div className='cols-span-2 ps-4 py-10 text-xl leading-loose '>
                    <motion.div initial={{ opacity: -15, y: 1 }} animate={{ opacity: 1, y: 20 }}  className='bg-gray-100 border border-gray-200 px-5 py-3 rounded-xl shadow-md'>
                        Hi, I’m Vincent Laroco - a passionate and curious individual with a growing interest in the
                        world of technology. I am currently a 3rd Year College at Cordova Public College
                        I’m driven by the desire to solve real-world problems through tech. Whether I’m exploring programming
                        or understanding how data flows across systems, I’m always excited to gain new knowledge and push
                        my skills further every day.
                    </motion.div>

                    <motion.div initial={{opacity:10, y:1}} animate={{opacity:1, y:-10}} transition={{duration:0.2}}>
                        <NavLink to="/about">
                        <Button className="mt-15 w-full">About Me</Button>
                    </NavLink>
                    </motion.div>
                    
                </div>
            </div>
        </div>

    );
}