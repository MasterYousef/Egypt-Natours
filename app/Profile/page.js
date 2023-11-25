import Image from 'next/image'
import React from 'react'
import im from '@/image/p1.jpg'
import sv from '@/image/profile.png'
function page() {
  return (
    <div className='main p-10'>
        <div className='w-full flex flex-col p-5 profile rounded justify-center items-center mb-10 '>
            <Image src={im} width={1000} height={1000} className='w-40 h-40 im '/>
            <div className='mt-5 flex flex-col items-center'>
                <p className='text-2xl font-bold mb-3'>Yousef Mostafa</p>
                <p className='mb-5'>Imayousefgo@gmail.com</p>
                <button className=' bg-gray-300 p-3 rounded hover:bg-gray-600 hover:text-white hover:scale-110 ease-in-out duration-300'>Edit Your Profile</button>
            </div>
        </div>
        <div className='w-full flex justify-center'>
        <Image src={sv} width={500} height={500} className='w-3/4 ' alt='profile-icon'/>
        </div>

    </div>
  )
}

export default page