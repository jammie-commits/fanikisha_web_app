import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='This is Us' subtitle='Check out our company story and work process' />

            <p>At FANIKISHA VENTURES LIMITED, we are more than just investors; we are partners in progress. Our success is measured not just by financial returns, but by the positive impact we make on the world around us. We are committed to delivering results that benefit our clients, communities, and the planet for generations to come</p>
            <p>Join us on our journey to shape the future of land investment, where innovation meets responsibility, and where every piece of land holds the promise of a better tomorrow.</p>
            <Heading title='Mission' />
            <p>Our mission is to secure and enhance the long-term value of land assets through strategic investment, thoughtful development, and responsible management. We are committed to building a legacy of stability, growth, and resilience that benefits our investors and future generations</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
