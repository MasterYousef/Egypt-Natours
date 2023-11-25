import Image from 'next/image'
import React from 'react'
import im from '@/image/h2.jpg'
import Link from 'next/link'
function SearchTourCard() {
  return (
    <div className='tour-card relative my-10 mb-48 md:mb-0'>
    <div className='shadow-lg flex flex-col justify-center h-full items-center absolute bg-white md:rounded z-10 card-front w-full overflow-hidden pb-10 '>
        <Image src={im.src} width={1000} height={1000} className=' w-full h-64 card-im'/>
        <div className='card-head font-bold md:text-md lg:text-2xl  rounded p-3 top-32'>
            Egypt Place
        </div>
        <div className=' w-full lg:w-3/4 p-3 text-center h-3/4 card-details pb-12 md:pb-1'>
        <p className=' border-b text-gray-500 my-1 py-1'>3 day tours</p>
        <p className=' border-b text-gray-500 my-1 py-1'>Up to 30 people</p>
        <p className=' border-b text-gray-500 my-1 py-1'>2 tour guides</p>
        <p className=' border-b text-gray-500 my-1 py-1 '>Sleep in cozy hotels</p>
        <p className=' text-gray-500 mt-1 mb-3 py-1'>Difficulty: easy</p>
        </div>
    </div>
    <div className='card-back absolute  h-56 w-full md:h-full -bottom-1/3 md:-bottom-0 flex flex-col justify-center items-center rounded  md:z-0 z-20'>
    <p className=' font-medium md:text-2xl mt-14  md:mb-5 uppercase'>only</p>
    <p className='md:mb-10 my-5 text-4xl font'>$260</p>
    <Link href='#' className=' hov2 hover:scale-110 md:text-md p-3 mb-3 font-bold'>Book Now!</Link>
    </div>
    </div>
  )
}

export default SearchTourCard