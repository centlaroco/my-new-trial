import { Header } from '@/components/common/header';
import { Banner } from '@/components/ui/banner';
// import { Footer } from '@/components/common/footer';

export default function HomePage(){

  return (
    <>
      <Header />
      <main className='max-w-7xl container'>
        <Banner/>
      </main>
    </>
  )
}


