import React from 'react'
import { contact } from '../../../store/contact'
import ContactSection2 from './ContactSection2'

function ContactSection1({ loggedUser }) {
  return (
    <div className='con-sec1'>
      <div className="container">
        <div className="row mb-5 d-flex">
          {contact.map((contact, i) => (
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 info-group" key={i}>
              <div className="info p-4">
                <p>
                  <span>{contact.title}</span>
                  <a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.desc}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <ContactSection2 loggedUser={loggedUser} />
      </div>
    </div>
  )
}

export default ContactSection1