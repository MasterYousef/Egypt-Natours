'use client';
import Image from 'next/image'
import React from 'react'
import im from '@/image/h2.jpg'
function AdminTourCard() {
  return (
    <div className='shadow-lg admin-card my-5  mx-3 flex flex-col justify-center h-full items-center  bg-white md:rounded card-front w-full overflow-hidden  '>
      <div className='bg w-full p-2 flex justify-between'>
      <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
      <i className="fa-solid fa-trash-can cursor-pointer"></i>
      </div>
        <Image src={im.src} width={1000} height={1000} className=' w-full  h-40 card-im'/>
        <div className='head font-bold md:text-md lg:text-2xl  rounded p-3 '>
            Egypt Place
        </div>
        <div className=' w-full lg:w-3/4 p-3 text-center card-details  md:pb-1'>
        <p className=' border-b text-gray-500 my-3 pb-3'>3 day tours</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>Up to 30 people</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>2 tour guides</p>
        <p className=' border-b text-gray-500 my-3 pb-3'>Sleep in cozy hotels</p>
        <p className='border-b text-gray-500 my-3 pb-3'>Difficulty: easy</p>
        <p className=' text-gray-500 my-3 pb-3 '>price: $260</p>
        </div>
    </div>
  )
}

export default AdminTourCard