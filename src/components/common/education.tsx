import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import JHS from '@/assets/jhsBabag_logo.png';
import CPC from '@/assets/cpc_logo.png';
import SHS from '@/assets/shsBNHS_logo.png';
import LLCCES from '@/assets/LLCCES_logo.png';


export function Education() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
                <h2 className="font-bold text-3xl p-3">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-3">
                    <motion.div className="h-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                        <Card title="Bachelor of Information Technology" schoolDescription="Cordova Public College" buttonLabel="Currently" description="Pursuing a degree in Information Technology." buttonVariant="secondary" logo={CPC} logoAlt="Cordova Public College logo" />
                    </motion.div>
                    <motion.div className="h-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                        <Card title="Senior High School" schoolDescription="Babag National High School" buttonLabel="Graduated" description="Completed senior high school with a focus on ICT subjects." buttonVariant="primary" logo={SHS} logoAlt="Babag National High School logo" />
                    </motion.div>
                    <motion.div className="h-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                        <Card title="Junior High School" schoolDescription="Babag National High School" buttonLabel="Graduated" description="Completed junior high school with a strong foundation in core subjects." buttonVariant="primary" logo={JHS} logoAlt="Babag National High School logo" />
                    </motion.div>
                    <motion.div className="h-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9 }}>
                        <Card title="Elementary School" schoolDescription="Lapu-Lapu City Elementary School " buttonLabel="Graduated" description="Completed elementary education with a focus on building a strong academic foundation." buttonVariant="primary" logo={LLCCES} logoAlt="Lapu-Lapu City Elementary School logo" />
                    </motion.div>
                </div>
            </section>
        </>
    );
}