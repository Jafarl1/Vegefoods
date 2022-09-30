import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../../../assets/images/slider/slider_1.jpg'
import '../Contact/contact.css'
import ContactSection1 from './ContactSection1'


function Contact({ loggedUser }) {
  return (
    <div className='contact-page'>
        <div className="bg" style=
        {{backgroundImage:`url(${(bg)})`
      }}>
        <div className="container text-center">
          <span className="pages-link title">
            <Link className="link" to="/">
              Home
            </Link>
            /
            <Link className="link" >
              Contact us
            </Link>
          </span>
          <Link to="/" className="title1 title ">
             <span>CONTACT US</span> 
          </Link>
        </div>
     </div>
     <ContactSection1 loggedUser={loggedUser}/>

    </div>
  )
}

export default Contact