import React from 'react'
import Title from '../utils/Title'
import Image from 'next/image'
import p1 from '@/image/p1.jpg'
import p2 from '@/image/p2.jpg'
import p3 from '@/image/p3.jpg'
import Link from 'next/link'
function AboutTours() {
  return (
    <div className='mb-20'>
        <Title text="EXCITING TOURS FOR ADVENTUROUS PEOPLE"/>
        <div className=' mt-16 flex'>
            <div className='flex w-1/2 flex-col'>
                <div className='p-5'>
                <p className='my-p mb-5'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</p>
                <p className='mb-5'>amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent rhoncus dolor purus non enim praesent elementum facilisis leo elementum facilisis leo vel fringilla est</p>
                <p className='my-p mb-5'>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</p>
                <p className=' mb-10'>Lorem ipsum dolor iente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</p>
                <Link href='#' className='hov3 text-3xl relative'>learn more <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className='w-1/2 relative'>
            <Image src={p1.src} width={350} height={300} className='absolute z-20 left-60 top-8 p' />
            <Image src={p2.src} width={350} height={300} className='absolute z-30 top-28 left-28 p'/>
            <Image src={p3.src} width={350} height={400} className='absolute z-10 p'/>
            </div>
        </div>
    </div>
  )
}

export default AboutTours