"use client"
import * as React from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

const Login = () => {

    const [open,setOpen] = useState(false)

    const toggle = () =>{
        setOpen(!open)
      }

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-900 min-h-screen flex items-center justify-center" >
        <div className="bg-gray-100 dark:bg-slate-800 flex rounded-2xl shadow-lg max-w-4xl  " >
        <section className="md:w-1/2 px-16 py-8 " >
            <h2 className="font-bold text-2xl" >Login</h2>
            <p className="text-sm my-4" >If you are already a member, easily log in</p>
            <form className="flex flex-col gap-4"  >
               <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email" required />
               <div className="relative" >
                 <input className="p-2 rounded-xl border w-full pr-8 " type={open?"text":"password"} name="password" placeholder="Password" required />
                 <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-3 cursor-pointer " onClick={toggle} >
                 {open? <AiFillEye/>:<AiFillEyeInvisible/>}
                 </div>
               </div>
               <button className="mt-3 bg-[#436C5C] hover:scale-105 duration-300 rounded-xl text-white py-2 " >Login</button>
            </form>

            <div className="mt-8 grid grid-cols-3 items-center text-gray-400" >
                <hr className="border-gray-400" />
                <p className="text-center" >OR</p>
                <hr className="border-gray-400" />
            </div>

            <button className="bg-white dark:bg-[#436C5C] border py-2 w-full rounded-xl mt-5 flex items-center justify-center gap-4ctext-sm hover:scale-105 duration-300 " >
                <Image 
                className="h-6 mr-3" 
                alt="google"
                height={20}
                width={30}
                src="google.svg" />
               <p className="" >Login with Google</p>
            </button>

            <p className="mt-5 text-sm border-b border-gray-400 py-4 cursor-pointer " >
             Forgot your password ?
            </p>

            <div className="mt-3 text-sm flex justify-between items-center" >
                <p>Don&apos;t have an account ? </p>
                <button className="p-2 border bg-white dark:bg-[#436C5C] rounded-xl hover:scale-105 duration-300 " ><Link href={"./register"} >Register</Link></button>
            </div>

        </section>

        <section className="md:block hidden w-1/2 p-5 " >      
            <Image
             className="rounded-2xl" 
              width={500} 
              height={500}
              src="/hotel.jpg"
              alt="place image" 
                />  
        </section>
        </div>

    </div>
  )
}

export default Login