import React from 'react'
import Title from '../utils/Title'
import TourCard from '../All-Tours/TourCard'
import Link from 'next/link'
import ToursLogic from '@/app/logic/home/ToursLogic'

async function Tours() {
  const res = await ToursLogic()
  return (
    <div className={`flex flex-col justify-center items-center ${res?.data  ? 'flex' : "hidden"}`}>
        <Title text='MOST POPULAR TOURS'/>
        <div className='flex flex-col md:flex-row justify-evenly items-center per mt-20 w-full'>
        {
          res?.data ? (res.data?.map((e,index)=><TourCard/>).slice(0,3)):null
        }
        </div>
        <Link href='All-Tours' className='my-16 btn text-xl'>Discover all tours</Link>
    </div>
  )
}

export default Tours