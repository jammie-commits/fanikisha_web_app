import React from "react"
import img from "../images/about.jpg"
import Back from "../common/Back"
import "../home/recent/recent.css"
import "./Properties.css"
import RecentCard from "../home/recent/RecentCard"

const Properties = () => {
  return (
    <>
      <section className='properties-page'>
        <Back 
          name='All Properties' 
          title='Premium Real Estate Portfolio' 
          subtitle='Discover exceptional investment opportunities across our diverse portfolio of prime properties.'
          cover={img} 
        />
        <div className='featured container'>
          <div className='properties-intro'>
            <h2>Investment Opportunities</h2>
            <p>From residential plots to commercial developments, find your perfect investment in our comprehensive property portfolio.</p>
          </div>
          <RecentCard /> 
        </div>
      </section>
    </>
  )
}

export default Properties
