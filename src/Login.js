import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className=' h-[40rem] flex items-center justify-center md:h-[110vh]'>
        <div className=' h-[90%]  w-[60%] pb-[50px] flex border-[0.5px] border-[#E5E7EB] items-center flex-col rounded-xl md:bg-white h-[90%] outline-1 w-[600px] pt-10 pb-10 flex items-center flex-col rounded-xl '>
          {/* first area */}
          <div className='flex items-center gap-3 pl-4 pr-4 justify-center'>
            <img src='images/swipelogo.png' className='h-10' alt='' />
            <h1 className='text-2xl'>
              <span className='text-[#EC4899] font-semibold text-2xl'>
                Swipe{' '}
              </span>
              Telecommunications
            </h1>
            <hr className='h-[0.2px]' />
          </div>
          <div className='w-[90%] mx-auto h-[0.5px] mt-6 bg-white'></div>
          <h1 className='mt-6'>Login your credentials to enjoy our services</h1>

          <div className='flex mt-4 mb-4  flex-col w-[90%]'>
            <h1>Email</h1>
            <input
            required
              placeholder='please provide a valid email address'
              type='text'
              className='p-3 border-[0.5px] border-[#E5E7EB] rounded bg-[#F9FAFB]'
            />
          </div>
          <div className='flex mt-4 mb-4  flex-col w-[90%]'>
            <h1>Password</h1>
            <input
            required
              type='text'
              className='p-3 border-[0.5px] border-[#E5E7EB] rounded bg-[#F9FAFB]'
            />
            <p className='text-sm text-[#CBCDD2] mb-2'>
              Password must be at least 6 characters
            </p>
            <p className='text-[#3B82F6] font-semibold'>Forget password?</p>
          </div>
          <button className='bg-[#8E9FD7] font-sans w-[90%] mt-6 pt-2 pb-2 text-white rounded hover: bg-[#1E40AF]'>
            Submit
          </button>
          <div className='flex gap-40 mt-6'>
            <p>
              Don't have an account? Signup
              <span className='text-[#1E40AF] font-bold'>
                <Link to='/signup'> here</Link>
              </span>{' '}
            </p>
            <p>
              Go to{' '}
              <Link to='/'>
                <span className='text-[#1E40AF] font-bold'>Homepage</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
