import React from 'react'
import Navbar from '../src/Components/Navbar/navbar'
import Hero from '../src/Components/Hero/hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/title'
import About from './Components/About/About'
import Campus from './Components/Campus/campus'
import Testimonial from './Components/Testimonial/testimonial'
import Contactus from './Components/Contactus/contactus'
import Footer from './Components/Footer/footer'
// import videoplayer from './Components/VideoPlayer/videoplayer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Program/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photo'/>
        <Campus/>
        <Title subTitle='Testimonial' title='What Student Says'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contactus/>
        <Footer/>
      </div>
      {/* <VideoPlayer/> */}
    </div>
  )
}

export default App