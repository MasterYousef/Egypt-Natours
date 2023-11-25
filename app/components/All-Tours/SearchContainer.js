import React from 'react'
import SearchTourCard from './SearchTourCard'
import axios from 'axios'
import SearchContainerLogic from '@/app/logic/All-Tour/SearchContainerLogic'
async function SearchContainer() {
    const res = await SearchContainerLogic()
  return (
    <div className=' w-full md:w-3/4 flex flex-col md:flex-row justify-between flex-wrap items-center md:items-start'>
        {
            res?.data?.data.data.length >=1 ? (res.data.data.data.map((e)=><SearchTourCard/>)):null
        }
    </div>
  )
}

export default SearchContainer