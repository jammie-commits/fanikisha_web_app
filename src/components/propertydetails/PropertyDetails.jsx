// PropertyDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Get property ID from URL
import { list } from "../data/Data";  // Assuming this is your data source

const PropertyDetails = () => {
  const { id } = useParams(); // Fetch the property ID from URL
  const [property, setProperty] = useState(null); // Store property data
  const [visitDate, setVisitDate] = useState("");

  useEffect(() => {
    // Find the property using the ID from the URL
    const selectedProperty = list.find((item) => item.id === parseInt(id));
    setProperty(selectedProperty);
  }, [id]);

  const handleSubmit = () => {
    if (visitDate) {
      const message = `Hello, I would like to book a site visit for the property: ${property.name} on ${visitDate}.`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details">
      <h2>{property.name}</h2>
      <img src={property.cover} alt={property.name} />
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> {property.price}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Category:</strong> {property.category}</p>

      {/* Booking Form */}
      <div className="booking-form">
        <label htmlFor="visit-date">Select a date for site visit:</label>
        <input 
          type="date" 
          id="visit-date" 
          value={visitDate} 
          onChange={(e) => setVisitDate(e.target.value)} 
        />
        <button onClick={handleSubmit}>Book Site Visit</button>
      </div>
    </div>
  );
};

export default PropertyDetails;
