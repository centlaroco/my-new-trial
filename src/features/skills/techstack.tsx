import typescript from '@/assets/icons_img/typescript.png';
import react from '@/assets/icons_img/react.png';
import tailwind from '@/assets/icons_img/tailwind.png';
import javascript from '@/assets/icons_img/javascript.jpg';
import nodejs from '@/assets/icons_img/nodejs.svg';
import express from '@/assets/icons_img/express-js.png';
import bootstrap from '@/assets/icons_img/bootstrap.svg';
import { motion } from 'motion/react';

type TechStackItem = {
    name: string;
    icon: string;
    color: string;
    description?: string;
};

type SkillsProps = {
    title?: string;
    items?: TechStackItem[];
};

const techstack: TechStackItem[] = [
    {
        name: 'React',
        icon: react,
        color: 'bg-white ',
    },
    {
        name: 'TypeScript',
        icon:  typescript,
        color: 'bg-blue-100',
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
        color: 'bg-white',
    },
    {
        name: 'JavaScript',
        icon: javascript,
        color: 'bg-purple-100',
    },
    {
        name: 'Node.js',
        icon: nodejs,
        color: 'bg-white ',
    },
    {
        name: 'Express',
        icon: express,
        color: 'bg-white ',
    },
    {
        name: 'BootStrap',
        icon: bootstrap,
        color: 'bg-white',
    }
];

export function Skills({ title = 'Tech Stack', items = techstack }: SkillsProps) {
    return (
        <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
            <div className='pb-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-green-700'>Tools</p>
                <h2 className='pt-2 text-3xl font-bold text-gray-900'>{title}</h2>
            </div>

            <div className='grid gap-4 grid-cols-2 lg:grid-cols-5 items-center'>
                {items.map((item) => (
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} key={item.name} className='rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md'>
                        <div className='flex items-center gap-4'>
                            <div className={`h-12 w-12  ${item.color}`}>
                                <img src={item.icon}></img>
                            </div>

                            <h3 className='text-lg font-semibold text-gray-900'>{item.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
