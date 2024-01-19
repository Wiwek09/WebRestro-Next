import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='md:p-10 p-2' >
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home