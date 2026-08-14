import { AboutMe } from "@/components/features/aboutMe";
import { Education } from '@/components/features/education';
export default function About() {
    return (
        <>
            <main className='flex flex-1 flex-col gap-5 '>
                <AboutMe />
                <Education />
            </main>
        </>
    );
}