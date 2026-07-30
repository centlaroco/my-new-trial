import { Header } from '@/components/common/header';
import { Banner } from '@/components/common/banner';
import { Card } from '@/components/ui/card'
import { Footer } from '@/components/common/footer';
import { motion } from 'motion/react';
import { GitHubCalendar } from 'react-github-calendar';
import { AboutMe } from '@/components/common/aboutMe';

export default function HomePage() {

  return (
    <>
      <Header />
      <main className='flex-1'>
        <Banner />
        <AboutMe />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <Card title="Card Title 1" description="This is the card description 1" buttonLabel="Click Me" buttonVariant="primary" />
          </motion.div>
          <Card title="Card Title 2" description="This is the card description 2" buttonLabel="Click Me" buttonVariant="primary" />
          <Card title="Card Title 3" description="This is the card description 3" buttonLabel="Click Me" buttonVariant="primary" />
        </section>
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='rounded-xl relative p-4 flex justify-center'>
            <div className=' absolute left-4 top-0'>
              <p>GitHub </p>
            </div>
            <div className='absolute right-4 top-0'>
              <a href="https://github.com/centlaroco" target="_blank" className="font-semibold text-green-700 underline-offset-4 transition-colors duration-200 hover:text-green-800 hover:underline"
              >
                Centlaroco &#8594;
              </a>
            </div>
            <GitHubCalendar
              username="centlaroco"
              className="bg-gray-100 border border-gray-300 rounded-xl shadow-sm px-4 py-3"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}


