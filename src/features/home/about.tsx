import { AboutMe } from "@/components/common/aboutMe";
import { Education } from '@/components/common/education';
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