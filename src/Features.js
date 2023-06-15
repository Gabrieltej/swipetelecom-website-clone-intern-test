import React from 'react'
import Ourservices from './Ourservices'
import { FaWallet } from 'react-icons/fa'
import { IoIosFlash } from 'react-icons/io'
import { BsShieldShaded } from 'react-icons/bs'
import { TbHeadset } from 'react-icons/tb'
import Contact from './Contactus'
import Minimenu from './Minimenu'




export default function Features() {
  return (
    <>
      <section id='features'>
        <div className='mt-40'>
          <div className='flex flex-col items-center px-[10px] justify-around justify-items-center'>
            <h1 className='text-4xl font-bold'>Features</h1>
            <div className='bg-[#DA2777] w-[80px] my-[6px] h-[7px]'></div>
            <p className='text-[#6B7280] font-semibold'>
              Some cool features you get to benefit on our platform
            </p>
          </div>
          <div className='bg-white p-6 gap-4  flex flex-col items-center justify-items-center  md:flex-row items-center gap-4 justify-center'>
            <div className='bg-white rounded-md p-6 flex shadow-xl hover:shadow-2xl hover:cursor-auto flex-col items-center md:items-start p-5'>
              <FaWallet className='text-[#BE185D] text-6xl' />
              <h1 className='text-2xl py-4 font-bold'>E-wallet</h1>
              <p className='text-center text-[#6B7280] md:text-left'>
                Get the benefit of our secured and safe e-wallet system. You get
                to top-up your wallet to enjoy the different services we provide
                on our platform. Be rest assured, your funds are safe with us{' '}
              </p>
            </div>
            <div className='bg-white shadow-xl hover:shadow-2xl rounded-md p-6 flex flex-col items-center md:items-start p-5'>
              <IoIosFlash className='text-[#BE185D] text-6xl' />
              <h1 className='text-2xl font-bold'>Fast and easy Transaction</h1>
              <p className='text-center text-[#6B7280] md:text-left'>
                Get the benefit of our secured and safe e-wallet system. You get
                to top-up your wallet to enjoy the different services we provide
                on our platform. Be rest assured, your funds are safe with us{' '}
              </p>
            </div>
            <div className='bg-white py-10 shadow-xl hover:shadow-2xl rounded-md p-6 flex flex-col items-center md:items-start p-5'>
              <BsShieldShaded className='text-[#BE185D] text-6xl' />
              <h1 className='text-2xl font-bold'>Security</h1>  
              <p className='text-center text-[#6B7280] md:text-left'>
                Get the benefit of our secured and safe e-wallet system. You get
                to top-up your wallet to enjoy the different services we provide
                on our platform. Be rest assured, your funds are safe with us{' '}
              </p>
            </div>
            <div className='bg-white py-10 shadow-xl hover:shadow-2xl rounded-md  p-6 flex flex-col items-center md:items-start p-5'>
              <TbHeadset className='text-[#BE185D] text-6xl' />
              <h1 className='text-2xl font-bold'>Customer Support</h1>
              <p className='text-center text-[#6B7280] md:text-left'>
                Get the benefit of our secured and safe e-wallet system. You get
                to top-up your wallet to enjoy the different services we provide
                on our platform. Be rest assured, your funds are safe with us{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
     <Ourservices/>
     <Contact/>
    <Minimenu/> 
    </>
  )
}
