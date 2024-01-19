"use client"
import * as React from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { useState } from 'react'
import Image from "next/image";

const Register = () => {

    const [open,setOpen] = useState(false)

    const toggle = () =>{
        setOpen(!open)
      }
      
    return (
        <div className="bg-gradient-to-r from-gray-400 to-orange-600 min-h-screen flex items-center justify-center" >
            <div className="bg-gray-100 dark:bg-slate-800 flex rounded-2xl shadow-lg max-w-5xl  " >
            <section className="md:w-1/2 px-16 py-8 " >
                <h2 className="font-bold text-2xl" >Register</h2>
                <p className="text-sm my-4" >Create your account easily</p>
                <form className="flex flex-col gap-4" >
                    <div className="flex w-full  md:space-x-8 space-x-4  " >
                       <input className="w-1/2  p-2 rounded-xl border" type="text" name="text" placeholder="FirstName" required />
                       <input className="w-1/2  p-2 rounded-xl border" type="text" name="text" placeholder="LastName" required />     
                    </div>
                    <div className="space-y-3" >
                   <input className="p-2 rounded-xl border w-full" type="email" name="email" placeholder="Email" required />

                   <input className="p-2 rounded-xl border w-full " type="password" name="password" placeholder="Password" required />
                   </div>
                   <div className="relative" >
                     <input className="p-2 rounded-xl border w-full pr-8 " type={open?"text":"password"} name="password" placeholder="Confirm Password" required />
                     <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-3 cursor-pointer " onClick={toggle} >
                     {open? <AiFillEye/>:<AiFillEyeInvisible/>}
                     </div>
                   </div>

                   <div className="mt-5 flex items-center space-x-3" >
                      <input type="checkbox" className="border border-gray-400" />
                      <span>
                       I accept the <a href="#" className="font-bold"  >Terms of Use</a> & <a href="#" className="font-bold" >Privacy Policy</a>
                      </span>
                   </div>

                <button className="mt-3 bg-[#436C5C] hover:scale-105 duration-300 rounded-xl text-white py-2 " >Register Now</button>
                </form>
    
            </section>
    
            <section className="md:block hidden md:w-1/2 p-5  " >      
                <Image 
                className="rounded-2xl h-full" 
                src="/register.jpg" 
                alt="place image" 
                width={500} 
                height={500}
                 />  
            </section>
            </div>
    
        </div>
      )
}

export default Register