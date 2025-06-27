import React, { useState } from "react"
import img from "../images/about.jpg"
import Back from "../common/Back"
import "../home/recent/recent.css"
import "./Properties.css"
import RecentCard from "../home/recent/RecentCard"

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterButtons = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'land', label: 'Land & Plots' },
    { id: 'luxury', label: 'Luxury' }
  ]

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
          
          {/* Filter Section */}
          <div className='properties-filter'>
            <div className='filter-buttons'>
              {filterButtons.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className='filter-stats'>
              <span className='property-count'>Showing 24 properties</span>
              <div className='sort-options'>
                <select className='sort-select'>
                  <option>Sort by: Latest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Size: Small to Large</option>
                </select>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className='properties-grid'>
            <RecentCard />
          </div>

          {/* Load More Button */}
          <div className='load-more-section'>
            <button className='load-more-btn'>
              <span>Load More Properties</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Properties
