import { Banner } from '@/components/common/banner';
import { AboutMe } from "@/components/common/aboutMe";
import { GitHubCalendar } from 'react-github-calendar';
import { Education } from '@/components/common/education';

export default function HomePage() {

  return (
    <>
      <Banner />
      <AboutMe />
      <Education />

      <section className='mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8'>
        <div className='relative px-1 pt-12 sm:px-3'>
          <div className='absolute inset-x-1 top-0 flex items-center justify-between gap-3 sm:inset-x-3'>
            <p className='font-medium'>GitHub</p>
            <a href='https://github.com/centlaroco' target='_blank' rel='noopener noreferrer' className='font-semibold text-green-700 underline-offset-4 transition-colors duration-200 hover:text-green-800 hover:underline'>
              Centlaroco &#8594;
            </a>
          </div>
          <div className='w-full overflow-x-auto pb-2'>
            <div className='mx-auto flex min-w-[280px] justify-center'>
              <GitHubCalendar
                username='centlaroco'
                className='w-full max-w-full rounded-xl border border-gray-300 bg-gray-50 px-2 py-3 shadow-sm sm:px-4'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


