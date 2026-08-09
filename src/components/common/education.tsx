import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function Education() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <h2 className="font-bold text-3xl p-3">Education</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                        <Card title="Bachelor of Information Technology" schoolDescription="Cordova Public College" buttonLabel="Currently" buttonVariant="primary" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                        <Card title="Senior High School" schoolDescription="Babag National High School" buttonLabel="Graduated" buttonVariant="primary" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                        <Card title="Junior High School" schoolDescription="Babag National High School" buttonLabel="Graduated" buttonVariant="primary" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9 }}>
                        <Card title="Elementary School" schoolDescription="Lapu-Lapu City Elementary School " buttonLabel="Graduated" buttonVariant="primary" />
                    </motion.div>
                </div>
            </section>
        </>
    );
}