import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Info from './components/Info'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' flex flex-col bg-backg'>
        <Navbar></Navbar>
        <Hero></Hero>
        <div>
        <Info></Info>
        </div>

        <Footer></Footer>
        
    </div>
  )
}

export default App
