import React from 'react'
import './review.css'
import Image from 'next/image'
import im from '@/image/h2.jpg'
function ReviewoCard() {
  return (
    <div className='card w-3/4 px-7 py-14 flex rounded my-10 flex-col md:flex-row'>
      <div className='relative un-Skew image-handler flex justify-center items-center'>
        <Image src={im.src} width={1000} height={1000} className=' w-32 h-32 card-img md:mx-10'/>
        <div className='absolute im-hov font-bold text-1xl text-white'>Yousef</div>
      </div>
      <div className='un-Skew w-full md:w-3/4'>
        <p className='my-5 text-yellow-500'><i className="fa-solid fa-star"></i>5</p>
        <p className='text-sm'>amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent rhoncus dolor purus non enim praesent elementum facilisis leo elementum facilisis leo vel fringilla est</p>
      </div>
    </div>
  )
}

export default ReviewoCard