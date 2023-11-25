
import React from 'react'
import Title from '@/app/components/utils/Title'
import ReviewoCard from '@/app/components/reviews/ReviewCard'
function page() {
  return (
    <div className='w-full m-0 overflow-auto h-screen storis' >
        <div className=' h-full w-full flex flex-col justify-center items-center my-64'>
            <ReviewoCard/>
            <ReviewoCard/>
            <ReviewoCard/>
            <ReviewoCard/>
            <ReviewoCard/>
        </div>
    </div>
  )
}

export default page