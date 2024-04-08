import React from 'react'
import './ContactCard.css'


export default function ContactCard() {
  return (
    <div className='contact-card'>
      <form target='_blank' action="https://formsubmit.co/farhanhere8789@gmail.com" method="POST">
        <h2 className="contact-card-heading">Your satisfaction is our number one focus</h2>
        <p className="contact-card-sub-heading">Please fill in your details below and one of our friendly team members will be in touch shortly.</p>
        <div className="contact-us-form">
            <div className="left-form-container">
                <input placeholder='First Name' type="text" name="Name" id="" />
                <input placeholder='Last Name' type="text" name="Last Name" id="" />
                <input placeholder='Mobile No.' type="text" name="Mobile no" id="" />
                <input placeholder='Email' type="text" name="email" id="" />
                <textarea placeholder='What do you want to tell us?' name="message"  id="" cols="" rows="6"></textarea>
            </div>
            <div className="right-form-container">
                <img className='contact-us-image' src='./man.gif' alt="" />
            </div>
        </div>
        <button type='submit' className='submit-the-contact-us-details'>Submit</button>
        </form>
    </div>
  )
}