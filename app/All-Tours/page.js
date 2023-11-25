import React from 'react'
import SortDropDown from '../components/All-Tours/SortDropDown'
import Options from '../components/All-Tours/Options'
import SearchTourCard from '../components/All-Tours/SearchTourCard'
import SearchContainer from '../components/All-Tours/SearchContainer';
function page() {
  return (
    <div className='py-5 pt-20 md:px-5  bg-gray-200'>
      <div className='flex justify-between w-full flex-col-reverse md:flex-row md:items-center '>
          <SortDropDown/>
        <form action="#" method="GET" className='flex justify-end items-center w-full flex-col mt-2 md:flex-row md:w-1/2'>
              <div className="mt-2 w-full md:w-1/2  mb-5">
                <input
                  id="tour-name"
                  name="tour-name"
                  type="text"
                  autoComplete="text"
                  placeholder='Tour Name'
                  required
                  className="px-2 se-in block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:out  focus-within:outline-amber-400 sm:text-sm sm:leading-6"
                />
            </div>
            <button className='mb-5 w-full md:w-1/4 p-1 mt-2 text-xl  bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded'>search</button>
        </form>
      </div>
      <div className='flex w-full justify-between my-5 flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/3 '>
          <Options/>
        </div>
        <SearchContainer/>
      </div>
    </div>
  )
}

export default page