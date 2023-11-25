import React from 'react'
import AdminTourCard from '../components/Admin-Tours/AdminTourCard'
function page() {
  return (
    <div className='main flex flex-col md:flex-row justify-start flex-wrap p-10'>
        <AdminTourCard/>
        <AdminTourCard/>
        <AdminTourCard/>
    </div>
  )
}

export default page