import React, { useState, useEffect } from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { featured } from "../../data/Data"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === featured.length - 1 ? 0 : prevSlide + 1
      )
    }, 5000) // Changes slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section className='hero'>
        <div className='slider-container'>
          {featured.map((slide, index) => (
            <div 
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.cover})`,
              }}
            >
              <div className='container'>
                <div className="hero-heading-wrapper">
                  <Heading 
                    title='Welcome To FANIKISHA VENTURES ltd ' 
                    subtitle='Bringing you an Executive, Credible, Trustworthy, Secure and reliable Land Investment deals.' 
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="slider-dots">
            {featured.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero