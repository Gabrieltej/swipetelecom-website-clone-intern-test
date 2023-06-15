import React from 'react'

export default function Services() {
  return (
    <>
      <section>
        <div className='flex flex-col mt-[310px] space-y-40 md:flex-row space-x-6 justify-items-center items-center mx-4 mt-[-10px]'>
          <div className=' w-60 md:w-60 mb-[-190px] ml-4 h-[70px]'>
            <img src='images/mtnwallpaper.jpg' alt='' />
          </div>
          <div className='h-10 w-60 md:w-50 '>
            <img
              src='images/glowallpaper.jpg'
              className='mt-[120px] md:mt-[-5px]'
              alt=''
            />
          </div>
          <div className='h-8 w-60'>
            <img src='images/airtelplain.png' alt='' />
          </div>
          <div className='h-8 w-20'>
            <img src='images/9mobile.png' alt='' />
          </div>
          <div className='w-60 h-8 '>
            <img src='images/dstvstarsat.png' alt='' />
          </div>
          <div className='w-60 h-8'>
            <img src='images/ekedc.png' alt='' />
          </div>
          <div className='w-60 h-8'>
            <img src='images/ibedcpng.png' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}
