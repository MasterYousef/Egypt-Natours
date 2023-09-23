'use client';
import React from 'react'
import Zoom from 'react-reveal/Zoom';
function Title({text}) {
  return (
    <Zoom>
    <p className='title text-3xl lg:text-4xl font-medium text-center '>{text}</p>
    </Zoom>
  )
}

export default Title