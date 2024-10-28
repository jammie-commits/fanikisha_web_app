import React from "react"
import img from "../images/about.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Properties = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Properties' title='Properties -All Properties' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Properties
