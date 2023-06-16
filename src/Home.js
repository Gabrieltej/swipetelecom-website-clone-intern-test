import React from 'react'
import { IoIosExit } from 'react-icons/io'
import { AiFillContacts } from 'react-icons/ai'
import Services from './Services'
import Features from './Features'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <section>
      <div className='bg-gradient-to-b mb-[-90px] pt-12 from-[#321073] to-[#0599CF] '>
        <div className='my-3 mx-6 flex flex-col items-center justify-around h-100vh pt-20 pb-20 mb-[-110px] md:flex-row mb-[-400px]'>
          <div>
            <h1 className='text-5xl text-center font-bold  text-[#F9A8D4] md:text-left'>
              Swipe
            </h1>
            <h1 className='text-2xl text-center font-bold text-white md:text-5xl md:text-left'>
              Telecommunication
            </h1>
            <h1 className='text-2xl text-center font-bold text-white md:text-6xl md:text-left'>
              services
            </h1>
            <div className='mt-16 font-semibold max-w-lg '>
              <p className='text-white text-lg text-center md:text-left'>
                Enjoy best rates in the market and quick customer support.
              </p>
              <p className='text-white text-center text-lg md:text-left'>
                Pay for cable, TV and other utility bills with ease right on
                your palm
              </p>
              <p className='text-white text-center text-lg md:text-left'>
                Purchase cheap airtime and data plan subscription at an
                affordable rate
              </p>
              <div className='flex gap-4 mt-8  justify-center items-center md:justify-start mb-10'>
                <Link to='/login'>
                  <button className='bg-white rounded-xl p-3 flex gap-2 hover:bg-[#93C5FD]'>
                    <IoIosExit className='text-3xl bg-transparent' />
                    <h1 className='font-semibold'>Login</h1>
                  </button>
                </Link>

                <Link to='signup'>
                  <button className='bg-[#4200C9] rounded p-3 flex gap-2 hover:bg-[#1E40AF]'>
                    <AiFillContacts className='text-3xl text-white' />
                    <h1 className='text-white font-semibold'>Signup</h1>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img
              src='images/manphone.png'
              className='h-[500px] md: h-[400px]'
              alt=''
            />
          </div>
        </div>
        <img
          src='images/wavy.png'
          className='mt-[260px] mb-[-250px] md:mb-[-500px]'
          alt=''
        />
      </div>
      <br />
      <Services />
      <Features />
    </section>
  )
 }