// import Dashboard from '../components/Dashboard'
"use client"
import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { useTheme } from "next-themes";

export default function Home() {

  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className={`md:p-10 p-2 ${isDark ? 'bg-slate-800' : 'bg-gray-100' }`} >
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}
