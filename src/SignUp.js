import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <div className=' h-[210vh] flex items-center justify-center md:h-[200vh]'>
        <div className=' h-[90%]  w-[60%] pb-[50px] flex border-[0.5px] border-[#E5E7EB] items-center flex-col rounded-xl  md:bg-white h-[90%] outline-1 w-[600px] pt-10 pb-10 flex items-center flex-col rounded-xl '>
          {/* first area */}
          <div className='flex items-center gap-3 pl-4 pr-4 justify-center'>
            <img src='images/swipelogo.png' className='h-10' alt='' />
            <h1 className='text-2xl'>
              <span className='text-[#EC4899] font-semibold text-2xl'>Swipe </span>
              Telecommunications
            </h1>
            <hr className='h-[0.2px]' />
          </div>
          <div className='w-[90%] mx-auto h-[0.5px] mt-6 bg-white'></div>
          <h1 className='mt-6'>
            Create an account with us to enjoy our services
          </h1>

          <div className='flex mt-4 mb-4 flex-col w-[90%]'>
            <h1>Fullname</h1>
            <input
            required
              type='text'
              className='p-3 rounded border-[0.5px] border-[#E5E7EB]  bg-[#F9FAFB]'
            />
          </div>
          <div className='flex mt-4 mb-4 flex-col w-[90%]'>
            <h1>Username</h1>
            <input
              type='text'
              className='p-3 rounded placeholder:text-[#9CA3AF] bg-[#F9FAFB] text-sm border-[0.5px] border-[#E5E7EB]'
              placeholder='Provide a unique username'
            />
          </div>
          <div className='flex mt-4 mb-4  flex-col w-[90%]'>
            <h1>Phone</h1>
            <input
            required
              type='number'
              className='p-3 border-[0.5px] border-[#E5E7EB] bg-[#F9FAFB] rounded'
            />
          </div>
          <div className='flex mt-4 mb-4   flex-col w-[90%]'>
            <h1>Email</h1>
            <input
            required
              type='mail'
              placeholder='please provide a valid email address'
              className='p-3 rounded placeholder:text-[#9CA3AF] border-[0.5px] border-[#E5E7EB] bg-[#F9FAFB] text-sm'
            />
          </div>
          <div className='flex mt-4 mb-4  flex-col w-[90%]'>
            <h1>Password</h1>
            <input
            required
              type='text'
              className='p-3 rounded border-[0.5px] border-[#E5E7EB] bg-[#F9FAFB]'
            />
            <p className='text-[#9CA3AF] text-sm'>
              Password must be at least 6 characters
            </p>
          </div>
          <div className='flex mt-4 mb-4  flex-col w-[90%]'>
            <h1>Confirm password</h1>
            <input
            required
              type='text'
              className='p-3 border-[0.5px] border-[#E5E7EB] rounded bg-[#F9FAFB]'
            />
            <p className='text-[#9CA3AF]  text-sm'>
              Value must correlate with your password.
            </p>
          </div>
          <div className='flex mt-4 mb-4  flex-col w-[90%]'>
            <h1>Referral ID</h1>
            <input
            required
              type='text'
              className='p-3 border-[0.5px] border-[#E5E7EB] rounded bg-[#F9FAFB]'
            />
          </div>
          <button className='bg-[#1E40AF] font-sans w-[90%] mt-6 pt-2 pb-2 text-white rounded'>
            Submit
          </button>
          <div className='flex gap-40 mt-6'>
            <p>
              Already have account? Login
              <span className='text-[#1E40AF] font-bold'>
                <Link to='/login'> here</Link>
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
    </div>
  )
}
