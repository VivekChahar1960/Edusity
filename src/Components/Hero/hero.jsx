import React from 'react'
import './hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our Cutting-edge curriculum is designed  to empower students with the knowledge , skills , and experience needed to excel in the dynamic field of educaiton  </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default hero