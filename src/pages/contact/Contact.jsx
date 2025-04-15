import React, { useState } from 'react'
import { RiMap2Line, RiUser3Line, RiMailLine, RiBook2Line, RiPhoneLine, RiSendPlaneLine } from "react-icons/ri";
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.subject || !formData.message){
      setMessageColor('color-red')
      setFeedbackMessage('Write all the input fields')

      setTimeout(() => setFeedbackMessage(''), 3000)

      return;
    }

    emailjs
      .send('service_bne55eh', 'template_mufwsii', formData, '6cwXHGLRd9laTR1Hc')
      .then(
        () => {
          setMessageColor('color-first')
          setFeedbackMessage('Message sent ✔')

          setTimeout(() => setFeedbackMessage(''), 5000)

          setFormData({ name: '', email: '', subject: '', message: ''})
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error)
        },
      );
  }


  return (
    <section className="contact section">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
            <RiMap2Line />
            </span>

            <div>
            <h3 className="contact-title">Address</h3>
            <p className="contact-data">Visakhapatnam, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
            <RiUser3Line />
            </span>
            
            <div>
            <h3 className="contact-title">Student</h3>
            <p className="contact-data">Available right now</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
            <RiMailLine />
            </span>
            
            <div>
            <h3 className="contact-title">Email</h3>
            <p className="contact-data">bonimuralimanohar1999@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
            <RiPhoneLine />
            </span>
            
            <div>
            <h3 className="contact-title">Phone</h3>
            <p className="contact-data">+91 8309184986</p>
            </div>
          </div>
        </div>

        <form action="" className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Your full Name <b>*</b>
              </label>

              <input type="text" name='name' onChange={handleChange} value={formData.name} className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Your Email Address <b>*</b>
              </label>

              <input type="email" name='email' onChange={handleChange} value={formData.email} className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Your Subject <b>*</b>
              </label>

              <input type="text" name='subject' onChange={handleChange} value={formData.subject} className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Your Message <b>*</b>
              </label>

              <textarea name="message" onChange={handleChange} value={formData.message} className="contact-form-input contact-form-area"></textarea>
            </div>

            <div className="contact-button">
              <button className="button">
                Send Message
                <span className="button-icon">
                  <RiSendPlaneLine />
                </span>
              </button>
            </div>
          </div>

          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact