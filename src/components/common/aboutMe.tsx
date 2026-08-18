import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import profile from '@/assets/profile.jpg';

export function AboutMe() {
    return (
        <section className="max-w-7xl mx-auto lg:px-8 px-4">
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-5'>
                <div className='cols-span-1 '>
                    <h1 className='font-bold text-3xl md:pb-3 pt-5'>About me</h1>
                    <motion.img
                        src={profile}
                        alt="profile yarn"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className='h-auto w-100 shadow-lg shadow-gray-700/100 md:block hidden'
                    />
                </div>

                <div className='cols-span-1 text-gray-700 text-lg leading-loose '>
                    <motion.div initial={{ opacity: 0, y: 120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}className='bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-md'>
                        Hi, I’m Vincent Laroco - a passionate and curious individual with a growing interest in the
                        world of technology. I am currently a 3rd Year College at Cordova Public College
                        I’m driven by the desire to solve real-world problems through tech. I’m always excited to gain new knowledge and push
                        my skills further every day.
                    </motion.div>

                    <motion.div initial={{ opacity: -5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true, amount:0.3}} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <Button className="mt-15 w-full">Babag 1, LLC</Button>
                    </motion.div>
                </div>
            </div>
        </section>

    );
}