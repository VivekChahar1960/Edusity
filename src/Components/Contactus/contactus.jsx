import React from 'react'
import './contactus.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const contactus = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "231dfc03-e231-4255-bf11-fa89ad4eed67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out thorught contact form Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vel expedita quasi asperiores veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis?</p>
            <ul>
                <li> <img src={mail_icon} alt="" />vivekchahar1960@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+91 8700348696</li>
                <li> <img src={location_icon} alt="" />425 SF , Omaxe City Homes , Bahadurgarh , Haryana 124507</li>
            </ul>
        </div>
        <div className="contact-col">

            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name="name" id="" placeholder='Enter Your Name' required/>
                <label >Phone Number</label>
                <input type="tel" name="phone" id="" placeholder='Phone Number' required/>
                <label >Write Your Message Here</label>
                <textarea name="mesaage" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark_btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default contactus