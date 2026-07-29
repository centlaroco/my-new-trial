import { Header } from '@/components/common/header';
import { Banner } from '@/components/common/banner';
import { Footer } from '@/components/common/footer';

export default function HomePage(){

  return (
    <>
      <Header />
      <main className='flex-1'>
        <Banner/>
      </main>
      <Footer/>
    </>
  )
}


