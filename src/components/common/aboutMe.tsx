import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import profile from '@/assets/profile.jpg';

export function AboutMe() {
    return (
        <div className="max-w-7xl mx-auto lg:px-8 px-4">
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-2 '>
                <div className='cols-span-1 '>
                    <h1 className='font-bold text-3xl pb-3 pt-5'>About me</h1>
                    <motion.img
                        src={profile}
                        alt="profile yarn"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className='h-auto w-100 shadow-lg shadow-gray-700/100'
                    />
                </div>

                <div className='cols-span-1 text-gray-700 text-lg leading-loose '>
                    <motion.div initial={{ opacity: -15, y: 1 }} animate={{ opacity: 1, y: 20 }} className='bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-md'>
                        Hi, I’m Vincent Laroco - a passionate and curious individual with a growing interest in the
                        world of technology. I am currently a 3rd Year College at Cordova Public College
                        I’m driven by the desire to solve real-world problems through tech. I’m always excited to gain new knowledge and push
                        my skills further every day.
                    </motion.div>

                    <motion.div initial={{ opacity: 10, y: 1 }} animate={{ opacity: 1, y: -10 }} transition={{ duration: 0.2 }}>
                        <Button className="mt-15 w-full">Babag 1, LLC</Button>
                    </motion.div>
                </div>
            </div>
        </div>

    );
}