"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  return (
        <nav className='bg-[#e9e9e7] h-20 box-border p-4 flex justify-between items-center w-full shadow-lg rounded-3xl md:sticky top-4 z-40 ' >
                <div className='text-center flex items-center justify-center space-x-2 ' >
                   <Image 
                   src='/logo.jpg' 
                   alt="logo"
                   width={60}
                   height={100}
                   className='h-16 rounded-full content-center '  />
                    <span className='block text-[#7dd049] font-serif text-xl font-bold' >
                     WebRestro
                    </span>
                </div>
                <ul className='sm:flex items-center hidden sm:display justify-center space-x-4 md:space-x-10 text-lg ' >
                   <li className='cursor-pointer ' >
                    Home 
                   </li>
                   <li className='cursor-pointer' >
                    Services
                   </li>
                   <li className='cursor-pointer' >
                   About Us
                   </li>

                </ul>
                <div className='sm:flex md:space-x-10 space-x-2 items-center justify-center hidden sm:display' >
                    <button className=' border border-[#7dd049] text-sm  md:px-4 py-2 md:text-base px-2 rounded-xl hover:text-white hover:bg-[#7dd049] duration-300  ' ><Link href={"/login"} >  Login</Link></button>
                    <button className='bg-[#7dd049] text-sm md:px-4 py-2 md:text-base px-2 rounded-xl border border-[#7dd049] text-white hover:bg-[#e9e9e7] hover:text-black duration-300'> <Link href={"./register"} > Register</Link></button>
                </div>
        
        </nav>
  )
}

export default Navbar