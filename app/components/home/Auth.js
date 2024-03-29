'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import im from '@/image/h4.jpg'
import Title from '../utils/Title'
import LogIn from '../auth/LogIn'
import SignUp from '../auth/SignUp';
function Auth() {
    const [isMember, setIsMember] = useState(true)
  return (
    <div className='auth justify-center flex items-center relative'>
        <Image src={im} width={1000} height={1000} className='auth-img rounded'/>
        <div className=' absolute auth-overlay flex justify-center flex-col items-center overflow-hidden'>
        <div className='ease-in-out duration-500 w-full auth-div'>
            {
                isMember && true ? (<LogIn/>):(<SignUp/>)
            }
            
        </div>
        {
            isMember && true ? (<p className="mt-1  text-center text-sm text-gray-500 md:-translate-x-20">
            Not a member ?{' '} <button  className="leading-6 title font-bold" onClick={()=>setIsMember(false)}>Sign up Now</button>
          </p>):(<p className="mt-1  text-center text-sm text-gray-500 md:-translate-x-20">
          You already have an account ?{' '} <button  className="leading-6 title font-bold" onClick={()=>setIsMember(true)}>Login Now</button>
          </p>)
        }
        </div>
    </div>
  )
}

export default Auth