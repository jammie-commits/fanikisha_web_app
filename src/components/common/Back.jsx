import React from "react"
import "./Back.css"

const Back = ({ name, title, cover, subtitle }) => {
  return (
    <>
      <div className='back'>
        <div className='back-image'>
          <img src={cover} alt={title} />
          <div className='back-overlay'></div>
        </div>
        <div className='back-content'>
          <div className='container'>
            <div className='back-text'>
              <div className='back-badge'>
                <span>{name}</span>
              </div>
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
              <div className='back-actions'>
                <button className='btn-primary'>
                  <i className='fa fa-search'></i>
                  Explore Properties
                </button>
                <button className='btn-outline'>
                  <i className='fa fa-phone'></i>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='back-scroll-indicator'>
          <div className='scroll-arrow'></div>
        </div>
      </div>
    </>
  )
}

export default Back
