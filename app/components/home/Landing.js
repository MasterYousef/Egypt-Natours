'use client';
import Image from 'next/image'
import './home.css'
import im from '@/image/h1.jpg'
import logo from '@/image/logo.png'
import Link from 'next/link'
import { Slide } from 'react-reveal';
function Landing() {
  return (
    <div className='relative h-screen md:mb-16'>
      <div className='w-full bg-yellow-300 overlay absolute z-10'></div>
      <Image src={logo.src} width={50} height={50} className='absolute z-20 w-28 h-20 p-5 '/>
        <Image src={im.src} width={1000} height={0} className='w-full absolute img-clip'/>
        <div className='flex absolute flex-col justify-center items-center z-20 left-1/2 -translate-x-1/2 top-32 w-full text-center'>
          <Slide right><h2 className='tracking-widest h2 text-5xl md:text-6xl lg:text-7xl font-medium head-space'>OUTDOORS</h2></Slide>
          <Slide left><h3 className='md:text-2xl lg:text-3xl font-normal my-6 tracking-widest text-xl'>IS WHERE LIFE HAPPENS</h3></Slide>
          <Link href={"#"} className='text-3xl mt-10 hov2 p-2'>DISCOVER OUR TOURS</Link>
        </div>
    </div>
  );
}

export default Landing