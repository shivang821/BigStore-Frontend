import React from 'react'
import './footer.css'
import gmail from '../../images/gmail.png'
import linkedin from '../../images/linkedin.png'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='contactMeDiv'>
          <div>
            <h4>Contact Me</h4>
            <a href="https://www.linkedin.com/in/shivang-sharma029/" target='_blank'>
              <div className='contactMeLinkedinLinks'><img src={linkedin} alt="" /> <h4>Shivang Sharma</h4></div>
            </a>
            <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=khandalshivang2002@gmail.com&body=my-text">
              <div className='contactMeGmailLinks'><img src={gmail} alt="" /> <h4>khandalshivang2002</h4></div>
              </a>
          </div>
        </div>
        <div className='middleFooter'>
          <div>
            <h4>Links</h4>
            <NavLink to='/product?category=shirts'>Shirts</NavLink>
            <NavLink to='/product?category=denims'>Denims</NavLink>
            <NavLink to='/product?category=mobiles'>Mobiles</NavLink>
            <NavLink to='/product?category=laptops'>Laptops</NavLink>
          </div>
        </div>
        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.8388167282856!2d73.29213207547497!3d28.059945709851863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6adbe0a7c29%3A0xc45e43813e5ac1e0!2sEngineering%20College%20Bikaner!5e0!3m2!1sen!2sin!4v1686940560445!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Footer