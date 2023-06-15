// import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FcMenu } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { IoIosExit } from 'react-icons/io'
import { AiFillContacts } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import Minimenu from './Minimenu'
import { useState } from 'react'

export default function Navbar() {
//  const[changelogo, setChagelogo]=useState(true)
 const[showmenu, setShowmenu]=useState(false)

//  const changeSomethig=()=>{

const toggleMenu=()=>{
  setShowmenu(!showmenu)
}

  return (
    <div id='homy'>
      <div className='mr-8 ml-8 mb-4 mt-4 bg-white'>
        <div className='flex justify-between p-3 bg-white fixed top-0 left-0 right-0'>
          <div className='flex  bg-white gap-3 items-center'>
            <img
              className='h-12 w-120'
              src='./images/swipelogo.png'
              alt='swipe-logo'
            />
            <button className='font-semibold text-xl mb-[10px]'>
              Swipe-Telecoms
            </button>
          </div>
          <ul className='hidden lg:flex  ml-[-25px] gap-10 mt-3'>
            <li className='text-[#1D2332] font-semibold hover:cursor-pointer'>
              Home
            </li>
            <li className='text-[#1D2332] font-semibold hover:cursor-pointer '>
              <a href='#features'>Features</a>
            </li>
            <li className='text-[#1D2332]  font-semibold hover:cursor-pointer'>
              <a href='#services'>Services</a>
            </li>
            <li className='text-[#1D2332] font-semibold hover:cursor-pointer'>
              Faqs
            </li>
            <li className='text-[#1D2332] font-semibold hover:cursor-pointer'>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
          <div
            onClick={toggleMenu}
            className='rounded cursor-pointer flex items-center justify-center h-15 w-[43px] bg-white shadow-lg shadow-outline-black md:hidden'
          >
            {!showmenu && <FcMenu className='h-[35px] w-[35px] text-black' />}
            {showmenu && <AiOutlineClose />}
          </div>
          <div className='hidden cursor-pointer mt-2 md:flex gap-3'>
            <Link to='login'>
              <div className='bg-[#93C5FD] gap-2 p-2 rounded-xl flex'>
                <IoIosExit className='text-2xl text-white' />
                <h1 className='text-md'>
                  <Link to='/login'>Login</Link>
                </h1>
              </div>
            </Link>
            <Link to='signup'>
              <div className='bg-[#1E40AF] flex text-white p-2 gap-2 rounded-xl'>
                <AiFillContacts className='text-2xl text-white' />
                <h1>
                  <Link to='/signup'>Signup</Link>
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Minimenu propy={showmenu} />
      <Outlet />
    </div>
  )
}
