'use client';
import Image from 'next/image'
import React from 'react'
import im from '@/image/h2.jpg'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
function AdminAddTourCard() {
  const people = [
    { name: 'Difficulty:' },
    { name: 'Easy' },
    { name: 'Medium' },
    { name: 'Difficult' }
  ]
  const [selected, setSelected] = useState(people[0])
  return (
    <div className='shadow-lg md:w-1/3 relative flex flex-col justify-center h-auto items-center  bg-white rounded  w-full '>
        <Image src={im.src} width={1000} height={1000} className=' w-full h-44 card-im'/>
        <div className='font-bold text-center md:text-md lg:text-2xl rounded p-3 '>
        <input placeholder='Name' type='text' min={1} className=' w-full text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500'/>
        </div>
        <form className=' w-full pb-3 text-center mx-5 text-2xl card-details border-t' action="#" method="POST" >
        <div className=' border-b  my-1 py-3'><input  placeholder='Day tours' type='number' min={1} className=' w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl'/></div>
        <div className=' border-b  my-1 py-3'><input  placeholder='People Count' type='number' min={1} className=' w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500  text-xl'/></div>
        <div className=' border-b  my-1 py-3'><input  placeholder='Summary' type='text' min={1} className=' w-3/4 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl'/></div>
        <div className='border-b flex justify-center my-1 py-3'>
        <div className="w-1/3 flex justify-center">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left focus-within:outline-4 focus-visible:outline-yellow-500  sm:text-sm">
            <span className={`block truncate text-xl text-center ${selected.name === 'Difficulty:' ? 'text-gray-400':'text-black'}`}>{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <i className="fa-solid fa-angle-down mt-1"></i>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 left-1/2 -translate-x-1/2 text-center max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2   ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate mx-auto ${
                          selected ? 'font-medium' : 'font-normal'
                        } `}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>
        </div>
        <div className='border-b my-1 py-3 '><input placeholder='Price' type='number' min={1} className=' w-1/2 text-center rounded focus-within:outline-4 focus-visible:outline-yellow-500 text-xl'/></div>
        <button className=' w-1/3 p-1 my-2   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded text-xl'>Add Tour</button>
        </form>
    </div>
  )
}

export default AdminAddTourCard