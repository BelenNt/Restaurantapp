import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import intro from "../intro.jpg";

const HomePages = () => {
  return (
    <>
    <Navbar/>
    <div className='d-flex'>
                    <img src={intro} alt="Intro" width={1300} height={1000} className="d-inline-block align-text-top" />
                </div>
    <Footer/>
    </>
  )
}

export default HomePages