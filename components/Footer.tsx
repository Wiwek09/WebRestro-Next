import Image from 'next/image'
import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='' >
    <div className='flex justify-between sm:pt-96 pt-80 self-center' >
        <div className='sm:flex items-center hidden sm:display'>
            <Image 
            src='/logo.jpg'
            alt='logo' 
            className='h-16 rounded-full content-center '
            height={60}
            width={60}
             />
            <span>WebRestro</span>
        </div>

        <div className='grid gap-2 items-center ' >
            <p className='my-4 text-lg font-bold' >Company</p>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Features</span>
        </div>

        <div className='grid gap-1 items-center ' >
            <p className='my-4 text-lg font-bold' >Discover</p>
            <span>Plans & Pricing</span>
            <span>Support</span>
        </div>

        <div className='grid gap-2 items-center ' >
            <p className='my-4 text-lg font-bold' >Legal</p>
            <span>Terms of Use</span>
            <span>Privacy policy</span>
            <span>All FAQs</span>
        </div>
    </div>
    <div className='mt-8' >
        <p className='flex items-center justify-center gap-1' >WebRestro <span> <AiOutlineCopyrightCircle className='' /></span> Copyright 2023</p>
    </div>
    </div>
  )
}

export default Footer