import React, { useState } from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import { list } from "../../data/Data"

const getUniqueLocations = (properties) => {
  const locations = properties.map((item) => item.location)
  return ["All", ...Array.from(new Set(locations))]
}

const Featured = () => {
  const [selectedLocation, setSelectedLocation] = useState("All")
  const locations = getUniqueLocations(list)

  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <div className="center-content">
            <Heading title='Featured Properties' subtitle='Invest in your future.' />
            <div className="featured-filters">
              {locations.map((loc) => (
                <button
                  key={loc}
                  className={`filter-btn${selectedLocation === loc ? " active" : ""}`}
                  onClick={() => setSelectedLocation(loc)}
                >
                  {loc}
                </button>
              ))}
            </div>
            <FeaturedCard selectedLocation={selectedLocation} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
