'use client';
import Link from 'next/link';
import { useState } from 'react';
function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`menu-color fixed p-5  ease-in-out duration-300 right-14 top-14 my-1 z-40
     ${isOpen === true ? ' scale-150 rounded-none full-scale':' rounded-full' }`}></div>
    <div className= 'bg-white fixed rounded-full cursor-pointer right-12 top-14 hover:scale-125 ease-in-out duration-300 z-50'
      onClick={toggle}>
      {
        isOpen === true ? (<i class="fa-solid fa-xmark p-4 text-2xl"></i>):(<i class="fa-solid fa-bars p-4 text-2xl"></i>)
      }

    </div>
    <div className={`flex flex-col justify-center items-center z-50 text-4xl 
    fixed top-1/2  -translate-x-1/2 -translate-y-1/2 ease-in-out duration-500 ${isOpen && true ? 'left-1/2':'-left-1/2'}`}>
        <Link href="#" className='mb-3 py-2 px-3 hov1'>sans</Link>
        <Link href="#" className='mb-3 py-2 px-3 hov1'>sans2</Link>
        <Link href="#" className='mb-3 py-2 px-3 hov1'>sans3</Link>
        <Link href="#" className='mb-3 py-2 px-3 hov1'>sans4</Link>
        <Link href="#" className='mb-3 py-2 px-3 hov1'>sans5</Link>
      </div>
    </>
  );
}
export default MenuButton



















