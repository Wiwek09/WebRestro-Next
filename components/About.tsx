import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mt-16 text-center  ' >
      <div className='font-serif z-50 ' >
        <p className='sm:text-6xl text-4xl font-bold text-[#7dd049] tracking-widest ' >One App</p>
        <p className='sm:text-3xl text-xl tracking-widest  mt-3 z-50 ' >is enought for a <span className='sm:text-6xl text-4xl font-bold text-[#7dd049] tracking-widest ' > Resturant</span></p>
      </div>
        <div className=' w-full md:mt-36 mt-28  bg-gray-100 relative' >
           <div className='z-10 absolute flex flex-col items-center justify-center gap-8' > 
            <h1 className='end-1 text-4xl sm:text-6xl font-bold text-[#59bb02f6]' >We are better</h1>
            <p className=' w-10/12 text-center sm:text-2xl tracking-wide' >WebRestro is not just a POS system. It is an ultimate restaurant operating system gathered with high-end features compacted all in one app. It is enclosed with all the multifaceted requirements from orders, billings, sales, inventory, staff, social media, and accounting management in a single system.</p>
            <Image 
            src='/baseimg.jpg' 
            alt='bg-img'
            height={500} 
            width={500} 
            className='w-[80vw] h-[60vh] bg-cover border-none opacity-40 rounded-3xl absolute left-30 top-[-0.5]  z-[-1]' />
            </div>
        </div>
    </div>
  )
}

export default About