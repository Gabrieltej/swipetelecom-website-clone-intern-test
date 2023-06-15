// import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Minimenu({propy}){
// const[isOpen, setisopen]=useState(false)

  return (
    <>
      {propy && (
        <div className='md:hidden mt-[46.3px] fixed top-0 left-0 right-0 '>
          <hr className='text-black mt-[30px] mb-[-30px] bg-black md:mt-[20px] ' />
          <div className='w-[100vw] mt-8 h-[400px] pl-1 pt-4 flex gap-1 flex-col items-center bg-white  mt-[30px] mb-[12px]'>
            <h1 className='text-[#111827] text-center w-[97vw] p-2 cursor-pointer hover:bg-[#F3F4F6]'>
              Home
            </h1>

            <h1 className='text-[#111827] text-center w-[97vw] p-2 hover:bg-[#F3F4F6] cursor-pointer'>
              <a href="#features">Features</a>
            </h1>
            <h1 className='text-[#111827] text-center w-[97vw] p-2 hover:bg-[#F3F4F6] cursor-pointer'>
              <a href="#services">Services</a>
            </h1>
            <h1 className='text-[#111827] text-center w-[97vw] p-2  hover:bg-[#F3F4F6] cursor-pointer'>
              Faqs
            </h1>
            <h1 className='text-[#111827] text-center w-[97vw] p-2 hover:bg-[#F3F4F6] cursor-pointer'>
             <a href="#contact">Contact US</a>
            </h1>
            <Link to='/login'>
              <button className=' bg-[#E7E7EC] text-center w-[97vw] p-2 font-semibold mx-3 hover:bg-[#93C5FD]'>
                Login
              </button>
            </Link>
            <Link to='/signup'>
              <button className=' bg-[#5C66E5] text-center w-[97vw] p-2 hover:bg-[#1E40AF] font-semibold text-white'>
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
