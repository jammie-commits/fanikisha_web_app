import React, { useState } from "react"
import img from "../images/about.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setShowSuccess(false), 5000)
    }, 2000)
  }

  return (
    <>
      <section className='contact'>
        <Back name='Contact Us' title='Get Help & Friendly Support' cover={img} />
        <div className='container'>
          {showSuccess && (
            <div className='success-message'>
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Get In Touch</h4>
            
            <div>
              <input 
                type='text' 
                name='name'
                placeholder='Your Name' 
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input 
                type='email' 
                name='email'
                placeholder='Your Email' 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <input 
              type='text' 
              name='subject'
              placeholder='Subject' 
              value={formData.subject}
              onChange={handleChange}
              required
            />
            
            <textarea 
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <button 
              type='submit' 
              className={isSubmitting ? 'loading' : ''}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
