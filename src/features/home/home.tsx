import { Banner } from '@/components/common/banner';
import { AboutMe } from "@/components/common/aboutMe";
import { GitHubCalendar } from 'react-github-calendar';
import { Education } from '@/components/common/education';

export default function HomePage() {

  return (
    <>
      <main className='flex-1'>
        <Banner />
        <AboutMe />
        <Education/>

        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='rounded-xl relative p-4 pt-12'> 
            <div className='absolute inset-x-4 top-0 flex justify-between items-center'>
              <p className='font-medium'>GitHub</p> <a href='https://github.com/centlaroco' target='_blank' rel='noopener noreferrer' className='font-semibold text-green-700 underline-offset-4 transition-colors duration-200 hover:text-green-800 hover:underline' >
                Centlaroco &#8594;
              </a>
            </div>
            <div className='flex justify-center'>
              <GitHubCalendar
                username='centlaroco'
                className='bg-gray-50 border border-gray-300 rounded-xl shadow-sm px-4 py-3'
              />
            </div>
          </div>
        </section>

      </main>
    </>
  )
}


