import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { MdAddIcCall } from 'react-icons/md'
import { MdOutlineEmail } from 'react-icons/md'


export default function Contact() {
  return (
    <section id='contact'>
      <div className='bg-[#1E40AF] pt-6 pb-6 '>
        <div className='flex flex-col items-center justify-items-center '>
          <h1 className='text-3xl font-bold text-white'>Contact Us</h1>
          <div className='bg-[#FACEE7] w-10 mt-4 h-1'></div>
          <h3 className='text-white text-lg mt-4'>
            Have any enquiry? <span className='ml-4'>please contact us.</span>
          </h3>
        </div>
        <div className='flex flex-col items-center gap-5 justify-items-center md:flex-row gap-40 items-center justify-center mt-8'>
          <div className='text-center mt-8'>
            <CiLocationOn className='mx-auto text-4xl text-white mb-3' />
            <h1 className='text-2xl font-bold text-white'>ADDRESS</h1>
            <p className='text-white'>
              Office address: No 4, Mercyland Estate{' '}
            </p>
            <p className='text-white'>Ayobo-ipaja, Lagos</p>
          </div>
          <div className='text-center'>
            <MdAddIcCall className='mx-auto text-4xl text-white mb-3' />

            <h1
              className='text-white text-2xl 
          font-bold'
            >
              PHONE NUMBER
            </h1>
            <p className='text-white'>+234 -815 042 3800</p>
          </div>
          <div className='text-center'>
            <MdOutlineEmail className='mx-auto text-4xl text-white mb-3' />
            <h1 className='text-white text-2xl font-bold'>EMAIL</h1>
            <p className='text-white'>swipetelecomsnigeria@gmail.com</p>
          </div>
        </div>
        <hr className='mt-10 w-[80%] mx-auto' />
        <p className=' text-white text-center mt-4 mb-3     md:text-white text-center  '>
          &copy;{' '} Copyright 
            <span className=' ml-2 text-white font-bold text-xl'>
            SWIPE Telecommunication Services
          </span>{' '}
          <span>2022</span>
          <span> || </span>
          <span>All rights reserved</span>
        </p>
      </div>
    </section>
  )
}
