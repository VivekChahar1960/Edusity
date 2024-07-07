import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const about = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>Embark on a tranformative educaitonal journey  with our  university comprehnsive education program . Our cutting -edge curriculum is designed to empower students  with the knowledge , skills , and experineces needed to excel in the dynamic field of the education</p>
            <p>with a focus on innovation , hands on learnign and personalized mentorship , our programs , prepare aspiring educators to make a meaningful impact in classroom , school , and cummunities
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia distinctio iure harum qui alias quam modi fugiat, voluptates dolorum laudantium maiores voluptatum velit rerum at? Vitae voluptas laudantium libero adipisci dolore quas, doloremque culpa non officia, nihil cupiditate iste quod quis praesentium eius soluta blanditiis sit, quos consequatur repellendus.
            </p> 
        </div>
    </div>
  )
}

export default about