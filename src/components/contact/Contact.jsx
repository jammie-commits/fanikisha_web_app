import React, { useState } from "react"
import img from "../images/about.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      setTimeout(() => setShowSuccess(false), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
        </svg>
      ),
      title: "Our Location",
      details: "Nairobi, Kenya",
      description: "Visit our office for a personal consultation"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
        </svg>
      ),
      title: "WhatsApp Us",
      details: "0712400300",
      description: "Tap to chat with us on WhatsApp"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.62 10.79C8.06 12.21 9.77 13.92 11.19 15.35L13.41 13.13C13.68 12.86 14.08 12.74 14.43 12.82C15.55 13.12 16.76 13.28 18 13.28C18.55 13.28 19 13.73 19 14.28V18C19 18.55 18.55 19 18 19C9.61 19 3 12.39 3 4C3 3.45 3.45 3 4 3H7.72C8.27 3 8.72 3.45 8.72 4C8.72 5.24 8.88 6.45 9.18 7.57C9.26 7.92 9.14 8.32 8.87 8.59L6.62 10.79Z" fill="currentColor"/>
        </svg>
      ),
      title: "Call Us",
      details: "0712400300",
      description: "Mon-Fri from 8am to 6pm"
    }
  ]

  return (
    <>
      <section className='contact'>
        <Back 
          name='Contact Us' 
          title='Get Help & Friendly Support' 
          subtitle="We're here to help you find your perfect investment opportunity. Get in touch with our expert team."
          cover={img} 
        />
        
        <div className='contact-section'>
          <div className='container'>
            {showSuccess && (
              <div className='success-message'>
                <div className='success-content'>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            
            <div className='contact-grid'>
              {/* Contact Information */}
              <div className='contact-info-section'>
                <div className='contact-header'>
                  <h2>Get In Touch</h2>
                  <p>Ready to start your investment journey? Our team is here to guide you every step of the way.</p>
                </div>
                
                <div className='contact-cards'>
                  {contactInfo.map((info, index) => (
                    <div key={index} className='contact-card'>
                      <div className='contact-icon'>
                        {info.icon}
                      </div>
                      <div className='contact-details'>
                        <h4>{info.title}</h4>
                        <p className='contact-main'>{info.details}</p>
                        <p className='contact-sub'>{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='contact-map'>
                  <div className='map-placeholder'>
                    <div className='map-content'>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
                      </svg>
                      <h4>Interactive Map</h4>
                      <p>View our location and get directions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className='contact-form-section'>
                <div className='form-container'>
                  <div className='form-header'>
                    <h3>Send Us a Message</h3>
                    <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>
                  
                  <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-row'>
                      <div className='form-group'>
                        <label htmlFor='name'>Full Name *</label>
                        <input 
                          type='text' 
                          id='name'
                          name='name'
                          placeholder='Enter your full name' 
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>Email Address *</label>
                        <input 
                          type='email' 
                          id='email'
                          name='email'
                          placeholder='Enter your email address' 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className='form-row'>
                      <div className='form-group'>
                        <label htmlFor='phone'>Phone Number</label>
                        <input 
                          type='tel' 
                          id='phone'
                          name='phone'
                          placeholder='Enter your phone number' 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='subject'>Subject *</label>
                        <input 
                          type='text' 
                          id='subject'
                          name='subject'
                          placeholder='What is this about?' 
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className='form-group'>
                      <label htmlFor='message'>Message *</label>
                      <textarea 
                        id='message'
                        name='message'
                        placeholder='Tell us more about your inquiry...'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                      ></textarea>
                    </div>
                    
                    <button 
                      type='submit' 
                      className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className='spinner'></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
