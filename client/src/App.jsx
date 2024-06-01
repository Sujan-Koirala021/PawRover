import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TourButton from './components/TourButton'
import AboutUs from './pages/AboutUs'
function App() {

  return (
    <>
      <NavBar/>   
      <hr />
    {/* <Hero/> */}

    <AboutUs/>
    <TourButton/>
      <Footer/>    

    </>
  )
}

export default App
