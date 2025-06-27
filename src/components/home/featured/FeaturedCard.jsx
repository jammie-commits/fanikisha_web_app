import React from 'react'
import './FeaturedCard.css'; // Import the CSS file
import { list } from "../../data/Data"

const FeaturedCard = ({ selectedLocation }) => {
  const filtered = selectedLocation === "All"
    ? list
    : list.filter((item) => item.location === selectedLocation)

  return (
    <div className="featured-card">
      <div className='content grid5 mtop'>
        {filtered.map((item, index) => (
          <div className='box' key={index}>
            <img src={item.cover} alt={item.name} />
            <h4>{item.name}</h4>
            <label>{item.price} <span className="type">{item.type}</span></label>
            <div className={`status-badge ${item.status === 'Available' ? 'available' : 'sold'}`}>{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCard