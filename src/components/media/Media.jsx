import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import "./Media.css"
import img from "../images/about.jpg"

const Media = () => {
  return (
    <>
      <section className='media-page'>
        <Back 
          name='Media Gallery' 
          title='Discover Our Premium Properties' 
          subtitle='Explore our exclusive collection of prime real estate investments in the most sought-after locations.'
          cover={img} 
        />
        <div className='container recent'>
          <div className='media-intro'>
            <h2>Property Showcase</h2>
            <p>Browse through our carefully curated selection of premium properties, each offering exceptional investment potential and strategic locations.</p>
          </div>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Media
