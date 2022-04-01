import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <section className="contact">
    <div className="container flex-container">
        <h2 className="title">contact us</h2>
        <form action="" className="contactForm">
            <div className="row">
                <label for="name"></label>
                <input className="contactInput" type="text" name="name" id="name" placeholder="Name" required/>
                <label for="mail"></label>
                <input className="contactInput" type="email" name="mail" id="mail" placeholder="Email" required/>
            </div>
            <label for="subject"></label>
            <input className="contactInput" type="text" name="subject" id="subject" placeholder="Subject" required/>
            <label for="message"></label>
            <textarea className="contactInput" name="message" id="message" rows="4"></textarea>
            <input className="btn" type="submit" value="SEND MESSAGE"/>
        </form>
    </div>
</section>
  )
}

export default Contact