import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { list as allProperties } from "../../data/Data";

const RecentCard = ({ properties }) => {
  const displayList = properties || allProperties;
  return (
    <div className="content grid3 mtop">
      {displayList.map((property) => {
        const { id, cover, category, location, name, price, type } = property;
        return (
          <div className="box shadow" key={id}>
            <Link to={`/property/${id}`} className="property-link"> {/* Link to property details page */}
              <div className="img">
                <img src={cover} alt={name} />
              </div>
              <div className="text">
                <div className="category flex">
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>
                </div>
                <span>{type}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
