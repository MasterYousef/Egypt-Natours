import Image from 'next/image'
import React from 'react'
import './Tour.css'
import im from '@/image/h2.jpg'
import Link from 'next/link'
function TourCard() {
  return (
    <div className='tour-card relative'>
    <div className='shadow-lg flex flex-col justify-center h-full items-center absolute bg-white rounded z-10 card-front w-full overflow-hidden '>
        <Image src={im.src} width={1000} height={1000} className=' w-full h-64 card-im'/>
        <div className='card-head font-bold text-3xl  rounded p-3 top-32'>
            Egypt Place
        </div>
        <div className=' w-3/4 p-3 text-center h-full pb-12'>
        <p className=' border-b text-gray-500 my-3 pb-3'>3 day tours</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>Up to 30 people</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>2 tour guides</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>Sleep in cozy hotels</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>Difficulty: easy</p>
        </div>

    </div>
    <div className='card-back absolute w-full h-full flex flex-col justify-center items-center rounded'>
    <p className=' font-medium text-2xl mb-10'>only</p>
    <p className='mb-20 text-4xl font'>$260</p>
    <Link href='#' className=' hov2 hover:scale-110 text-3xl p-3  font-bold'>Book Now!</Link>
    </div>
    </div>
  )
}

export default TourCard