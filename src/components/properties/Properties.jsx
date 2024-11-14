import React from "react"
import img from "../images/about.jpg"
import Back from "../common/Back"
import "../home/recent/recent.css"
import RecentCard from "../home/recent/RecentCard"

const Properties = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Properties' title='Properties -All Properties' cover={img} />
        <div className='featured container'>
          <RecentCard /> 
        </div>
      </section>
    </>
  )
}

export default Properties
