import { motion } from 'motion/react';
import { SchoolCard } from '@/components/ui/SchoolCard';
import JHS from '@/assets/school_logo/jhsBabag_logo.png';
import CPC from '@/assets/school_logo/cpc_logo.png';
import SHS from '@/assets/school_logo/shsBNHS_logo.png';
import LLCCES from '@/assets/school_logo/LLCCES_logo.png';


export function Education() {
    const educationData: {
        title: string,
        schoolDescription: string,
        description?: string,
        buttonLabel: string,
        buttonVariant?: "primary" | "secondary" | "tertiary",
    }[] = [
            {
                title: "Bachelor of Information Technology",
                schoolDescription: "Cordova Public College",
                description: "Pursuing a degree in Information Technology.",
                buttonLabel: "Currently",
                buttonVariant: "primary"
            },
            {
                title: "Senior High School",
                schoolDescription: "Babag National High School",
                description: "Completed senior high school with a focus on ICT subjects.",
                buttonLabel: "Graduated",
                buttonVariant: "secondary"
            },
            {
                title: "Junior High School",
                schoolDescription: "Babag National High School",
                description:"Completed junior high school with a strong foundation in core subjects.",
                buttonLabel: "Graduated",
                buttonVariant: "secondary"
            },
            {
                title: "Elementary School",
                schoolDescription: "Lapu-Lapu City Elementary School",
                description: "Completed elementary education.",
                buttonLabel: "Graduated",
                buttonVariant: "secondary"
            }
        ];
    return (
        <section className="max-w-7xl mx-auto lg:px-8 p-4">
            <h2 className="font-bold text-3xl py-5">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {educationData.map((education, index) => (
                    <motion.div key={education.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 + index * 0.15 }}>
                        <SchoolCard
                            title={education.title}
                            schoolDescription={education.schoolDescription}
                            buttonLabel={education.buttonLabel}
                            description={education.description}
                            buttonVariant={education.buttonVariant}
                            logo={education.title === "Bachelor of Information Technology" ? CPC : education.title === "Senior High School" ? SHS : education.title === "Junior High School" ? JHS : LLCCES}
                            logoAlt={education.title === "Bachelor of Information Technology" ? "Cordova Public College logo" : education.title === "Senior High School" ? "Babag National High School logo" : education.title === "Junior High School" ? "Babag National High School logo" : "Lapu-Lapu City Elementary School logo"}
                        />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}