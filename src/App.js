import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Crud from './components/Crud';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Crud/>
    <Footer/>
    </>
  )
}


export default App