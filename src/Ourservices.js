import React from 'react'



export default function Ourservices(){

  return (
    <section id='services'>
      <div className='bg-[#DBEAFE] pb-20 '>
        <div className='bg-[#DBEAFE] pt-12 flex my-10 flex-col items-center justify-items-center'>
          <h1 className='text-4xl mb-3 font-bold mb-[-4px]'>Our services</h1>
          <div className='bg-[#2563EA] space-y-4 w-[80px] my-[5px] h-[7px]'></div>
          <div className='w-[#30px] h-[#10px] mb-4  bg-[#2563EB]'></div>
          <p className='mt-[40px] text-xl text-[#6B7280]'>
            We are here to provide the best service available to suit your needs{' '}
          </p>
        </div>
        <div className='flex flex-col items-center mb-[10px] justify-items-center md:flex-row justify-center gap-10'>
          <div className='w-[250px] rounded-md h-[550px] bg-white'>
            <div className='bg-[#93C5FD] rounded-md'>
              <img src='images/datasub.png' className='h-40' alt='' />
            </div>
            <div className='flex flex-col p-4 mt-1'>
              <h1 className='text-xl mb-3 h-[40px] font-bold'>
                Data Subscription
              </h1>
              <p>
                You can make data subcription to any number on our platform at
                an affordable price. You get to enjoy data subscription at low
                rates{' '}
              </p>
              <button className='bg-[#1E40AF] rounded-lg text-white text-sm w-[50%] p-1 mt-3'>
                Subscribe Now
              </button>
            </div>
          </div>
          <div className='w-[250px] rounded-sm h-[550px] bg-white'>
            <div className='bg-[#93C5FD] rounded-md'>
              <img
                src='images/airtimerecharge.jpg'
                className='h-[180px] rounded'
                alt=''
              />
            </div>
            <div className='flex flex-col p-4 mt-1'>
              <h1 className='text-xl mb-3 font-bold'>Airtime Recharge</h1>
              <p>
                You can make data subcription to any number on our platform at
                an affordable price. You get to enjoy data subscription at low
                rates{' '}
              </p>
              <button className='bg-[#1E40AF] rounded-lg text-white text-sm w-[50%] p-1 mt-4'>
                Recharge Now
              </button>
            </div>
          </div>
          <div className='w-[250px] h-[550px] rounded-8xl bg-white'>
            <div className='bg-[#93C5FD] rounded-4xl'>
              <img src='images/tvcable.jpg' className='h-40' alt='' />
            </div>
            <div className='flex flex-col p-4 mt-1'>
              <h1 className='text-xl mb-3 font-bold'>
                TV & Cable Subscription
              </h1>
              <p>
                You can make data subcription to any number on our platform at
                an affordable price. You get to enjoy data subscription at low
                rates{' '}
              </p>
              <button className='bg-[#1E40AF] rounded-lg text-white mt-4 text-sm w-[50%] p-1 mt-4'>
                Pay now
              </button>
            </div>
          </div>
          <div className='w-[250px] h-[550px] rounded-lg bg-white'>
            <div className='bg-[#93C5FD] rounded-4xl'>
              <img src='images/bill.jpg' className='h-45' alt='' />
            </div>
            <div className='flex flex-col p-4 mt-1'>
              <h1 className='text-xl mb-3 font-bold'>Bills Payment</h1>
              <p>
                You can make data subcription to any number on our platform at
                an affordable price. You get to enjoy data subscription at low
                rates{' '}
              </p>
              <button className='bg-[#1E40AF] rounded-lg  text-white text-sm w-[50%] p-1 mt-4'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
