'use client';
import Image from 'next/image'
import './home.css'
import im from '@/image/h1.jpg'
import logo from '@/image/logo.png'
import Link from 'next/link'
function Landing() {
  return (
    <div className='relative h-screen mb-20'>
      <div className='w-full bg-yellow-300 overlay absolute z-10'></div>
      <Image src={logo.src} width={50} height={50} className='absolute z-20 w-28 h-20 p-5 '/>

        <Image src={im.src} width={1000} height={0} className='w-full absolute img-clip'/>
        <div className='flex absolute flex-col justify-center items-center z-20 left-1/2 -translate-x-1/2 top-32'>
          <h2 className='text-7xl font-medium'>OUTDOORS</h2>
          <h3 className='text-3xl font-normal my-6'>IS WHERE LIFE HAPPENS</h3>
          <Link href={"#"} className='text-3xl mt-10 hov2 p-2'>DISCOVER OUR TOURS</Link>
        </div>
    </div>
  );
}

export default Landing