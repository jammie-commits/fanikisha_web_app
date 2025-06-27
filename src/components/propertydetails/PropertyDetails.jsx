// PropertyDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Get property ID from URL
import { list } from "../data/Data";  // Assuming this is your data source
import Back from "../common/Back";
import "./propertydetails.css";

const PropertyDetails = () => {
  const { id } = useParams(); // Fetch the property ID from URL
  const [property, setProperty] = useState(null); // Store property data
  const [visitDate, setVisitDate] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Find the property using the ID from the URL
    const selectedProperty = list.find((item) => item.id === parseInt(id));
    setProperty(selectedProperty);
  }, [id]);

  const handleSubmit = () => {
    if (visitDate) {
      const message = `Hello, I would like to book a site visit for the property: ${property.name} on ${visitDate}. Please call me at 0712400300.`;
      const whatsappUrl = `https://wa.me/254712400300?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  if (!property) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading property details...</p>
      </div>
    );
  }

  // Mock property images for gallery
  const propertyImages = [
    property.cover,
    property.cover, // Replace with actual images
    property.cover,
    property.cover,
    property.cover
  ];

  const propertyFeatures = [
    "Prime Location",
    "Modern Design",
    "Security System",
    "Parking Space",
    "Garden Area",
    "24/7 Support"
  ];

  const nearbyAmenities = [
    "Shopping Mall - 2km",
    "Hospital - 3km",
    "School - 1.5km",
    "Airport - 15km",
    "Beach - 5km",
    "Restaurant - 0.5km"
  ];

  return (
    <>
      <Back 
        name={property.name}
        title={property.name}
        subtitle={`${property.location} • ${property.type}`}
        cover={property.cover}
      />
      
      <section className="property-details-section">
        <div className="container">
          <div className="property-details-grid">
            {/* Main Content */}
            <div className="property-main-content">
              {/* Image Gallery */}
              <div className="property-gallery">
                <div className="main-image">
                  <img src={propertyImages[selectedImage]} alt={property.name} />
                  <div className="image-overlay">
                    <button className="gallery-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
                      </svg>
                      View Gallery
                    </button>
                  </div>
                </div>
                <div className="thumbnail-images">
                  {propertyImages.map((img, index) => (
                    <div 
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt={`${property.name} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Info Tabs */}
              <div className="property-tabs">
                <div className="tab-buttons">
                  <button 
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'location' ? 'active' : ''}`}
                    onClick={() => setActiveTab('location')}
                  >
                    Location
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
                    onClick={() => setActiveTab('contact')}
                  >
                    Contact
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab === 'overview' && (
                    <div className="overview-content">
                      <h3>Property Overview</h3>
                      <p>{property.description || "This exceptional property offers the perfect blend of luxury, comfort, and investment potential. Located in a prime area with excellent connectivity and modern amenities."}</p>
                      
                      <div className="property-stats">
                        <div className="stat-item">
                          <span className="stat-label">Property Type</span>
                          <span className="stat-value">{property.type}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Category</span>
                          <span className="stat-value">{property.category}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Location</span>
                          <span className="stat-value">{property.location}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Price</span>
                          <span className="stat-value price">{property.price}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <div className="features-content">
                      <h3>Property Features</h3>
                      <div className="features-grid">
                        {propertyFeatures.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <div className="feature-icon">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                              </svg>
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'location' && (
                    <div className="location-content">
                      <h3>Location & Amenities</h3>
                      <div className="location-info">
                        <div className="map-placeholder">
                          <div className="map-content">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
                            </svg>
                            <p>Interactive Map</p>
                          </div>
                        </div>
                        <div className="nearby-amenities">
                          <h4>Nearby Amenities</h4>
                          <div className="amenities-list">
                            {nearbyAmenities.map((amenity, index) => (
                              <div key={index} className="amenity-item">
                                <span className="amenity-name">{amenity.split(' - ')[0]}</span>
                                <span className="amenity-distance">{amenity.split(' - ')[1]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'contact' && (
                    <div className="contact-content">
                      <h3>Contact & Booking</h3>
                      <div className="contact-info">
                        <div className="contact-item">
                          <div className="contact-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="contact-label">Email</span>
                            <span className="contact-value">info@fanikisha.com</span>
                          </div>
                        </div>
                        <div className="contact-item">
                          <div className="contact-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M6.62 10.79C8.06 12.21 9.77 13.92 11.19 15.35L13.41 13.13C13.68 12.86 14.08 12.74 14.43 12.82C15.55 13.12 16.76 13.28 18 13.28C18.55 13.28 19 13.73 19 14.28V18C19 18.55 18.55 19 18 19C9.61 19 3 12.39 3 4C3 3.45 3.45 3 4 3H7.72C8.27 3 8.72 3.45 8.72 4C8.72 5.24 8.88 6.45 9.18 7.57C9.26 7.92 9.14 8.32 8.87 8.59L6.62 10.79Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="contact-label">Phone</span>
                            <span className="contact-value">0712400300</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="property-sidebar">
              {/* Price Card */}
              <div className="price-card">
                <div className="price-header">
                  <h3>Property Price</h3>
                  <div className="price-badge">
                    <span className="price-amount">{property.price}</span>
                    <span className="price-label">Total Price</span>
                  </div>
                </div>
                <div className="price-details">
                  <div className="price-item">
                    <span>Booking Fee</span>
                    <span>KES 50,000</span>
                  </div>
                  <div className="price-item">
                    <span>Processing Fee</span>
                    <span>KES 25,000</span>
                  </div>
                  <div className="price-item total">
                    <span>Total Investment</span>
                    <span>{property.price}</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="booking-card">
                <h3>Book Site Visit</h3>
                <p>Schedule a visit to explore this property in person</p>
                
                <div className="booking-form">
                  <div className="form-group">
                    <label htmlFor="visit-date">Preferred Date</label>
                    <input 
                      type="date" 
                      id="visit-date" 
                      value={visitDate} 
                      onChange={(e) => setVisitDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <button 
                    className="book-visit-btn"
                    onClick={handleSubmit}
                    disabled={!visitDate}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4S20 7.59 20 12S16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                    Book Site Visit
                  </button>
                </div>

                <div className="booking-info">
                  <div className="info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4S20 7.59 20 12S16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                    <span>Free site visit</span>
                  </div>
                  <div className="info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4S20 7.59 20 12S16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                    <span>Expert guidance</span>
                  </div>
                </div>
              </div>

              {/* Agent Info */}
              <div className="agent-card">
                <div className="agent-header">
                  <div className="agent-avatar">
                    <img src="/public/images/customer/team-1.jpg" alt="Property Agent" />
                  </div>
                  <div className="agent-info">
                    <h4>John Doe</h4>
                    <span>Senior Property Consultant</span>
                  </div>
                </div>
                <div className="agent-stats">
                  <div className="agent-stat">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Properties Sold</span>
                  </div>
                  <div className="agent-stat">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
                <button className="contact-agent-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
