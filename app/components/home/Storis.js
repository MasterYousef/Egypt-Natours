import Image from 'next/image'
import React from 'react'
import im from '@/image/h3.jpg'
import Title from '../utils/Title'
import ReviewoCard from '../reviews/ReviewCard'
import Link from 'next/link'
function Storis() {
  return (
    <div className=' storis  w-full mt-20 overflow-hidden relative'>
        <Image src={im} width={1000} height={1000} className='w-full h-full absolute'/>
        <div className='w-full bg-white opacity-70 h-full absolute z-10'></div>
        <div className=' absolute z-20 h-full w-full flex flex-col justify-center items-center'>
        <div className='my-20'><Title text='WE MAKE PEOPLE GENUINELY HAPPY'/></div>
            <ReviewoCard/>
            <ReviewoCard/>
            <Link href='#' className='hov3 text-3xl relative my-10'>Read all stories <i class="fa-solid fa-arrow-right"></i></Link>
        </div>
    </div>
  )
}

export default Storis