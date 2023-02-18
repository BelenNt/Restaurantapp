import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import intro from "../intro.jpg";

const HomePages = () => {
  return (
    <>
    <Navbar/>
    <div>
                    <img src={intro} alt="Intro" className="card-img"/>
                </div>
    <Footer/>
    </>
  )
}

export default HomePages