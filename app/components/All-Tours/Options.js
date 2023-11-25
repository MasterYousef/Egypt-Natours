'use client';
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'easy',
  },
  {
    name: 'medium',
  },
  {
    name: 'difficult',
  },
]
function Options() {
  const [selected, setSelected] = useState(plans[0])
  return (
    <>
        <div className="w-full px-4 py-3">
       <p className='mb-2'>Difficulty:</p> 
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2 w-3/4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-200'
                      : ''
                  }
                  ${
                    checked ? 'bg-amber-500 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
        </div>
        <div className="w-full px-4 py-2">
          <p>ratings Average:</p>
          <div className='flex flex-col'>
            {RepeatIcon(4,1)}
            {RepeatIcon(3,2)}
            {RepeatIcon(2,3)}
            {RepeatIcon(1,4)}
          </div>
        </div>
        <div className="w-full px-4 mb-2">
        <p>start Dates:</p>
        <input type='date' className='p-1 rounded focus-visible:outline-yellow-500 my-2'/>
        </div>
        <div className="w-full px-4 mb-3">
        <p>Number of group members:</p>
        <div className='flex'>
        <div className=' relative w-1/2'>
        <label htmlFor='min-group' className=' absolute top-3 left-1'><i class="fa-solid fa-users"></i></label>
        <input type='number' name='min-group' min={0} placeholder='min' className='p-1 w-11/12 ps-7 rounded focus-visible:outline-yellow-500 my-2'/>
        </div>
        <div className=' relative w-1/2' >
        <label htmlFor='max-group' className=' absolute top-3 left-1'><i class="fa-solid fa-users"></i></label>
        <input type='number' name='max-group' min={0} placeholder='max' className='p-1 ps-7 w-11/12 rounded focus-visible:outline-yellow-500 my-2'/>
        </div>
        <button className=' p-1  my-auto h-full   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded'>Go</button>
        </div>
        </div>
        <div className="w-full px-4 mb-3">
        <p>price :</p>
        <div className='flex'>
        <div className=' relative w-1/2'>
        <label htmlFor='min-price' className=' absolute top-3 left-1'>$</label>
        <input type='number' name='min-price' placeholder='min' className='p-1 w-11/12 ps-4 rounded focus-visible:outline-yellow-500 my-2'/>
        </div>
        <div className=' relative w-1/2' >
        <label htmlFor='max-price' className=' absolute top-3 left-1'>$</label>
        <input type='number' name='max-price' placeholder='max' className='p-1 ps-4 w-11/12 rounded focus-visible:outline-yellow-500 my-2'/>
        </div>
        <button className=' p-1  my-auto h-full   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded'>Go</button>
        </div>

        </div>
        <div className="w-full px-4 mb-3">
        <p>Duration :</p>
        <div className='flex'>
        <div className=' relative w-1/2'>
        <label htmlFor='Duration-price' className=' absolute top-3 left-1'><i class="fa-solid fa-hourglass-end"></i></label>
        <input type='number' name='Duration-price' placeholder='min' className='p-1 w-11/12 ps-5 rounded focus-visible:outline-yellow-500 my-2'/>
        </div>
        <div className=' relative w-1/2' >
        <label htmlFor='Duration-price' className=' absolute top-3 left-1'><i class="fa-solid fa-hourglass-end"></i></label>
        <input type='number' name='Duration-price' placeholder='max' className='p-1 ps-5 w-11/12 rounded focus-visible:outline-yellow-500 my-2'/>
        </div>
        <button className=' p-1  my-auto h-full   bg-amber-300 ease-in-out duration-300 hover:bg-amber-500 hover:scale-105 rounded'>Go</button>
        </div>

        </div>
    </>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function RepeatIcon(times1,times2) {
    let icons1 =[];
    let icons2 =[]
    for (let i = 0; i < times1; i++) {
      icons1.push(<i className="fa-solid fa-star text-yellow-500" key={i}></i>);
    }
    for (let i = 0; i < times2; i++) {
        icons2.push(<i className="fa-regular fa-star text-yellow-500" key={i}></i>);
      }
    return <div className='my-1 rate cursor-pointer'>{icons1}{icons2} <span className='hs'>& up</span></div>;
  }
  
export default Options