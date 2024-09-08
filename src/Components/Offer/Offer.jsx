import React from 'react';
import "./Offer.css";
import specialOfferImage from "../../assets/backGround/wall8.jpg";

const Offer = () => {
  return (
    <div className="offer-background">
      <div className="offer-container">
        <div className="offer-details">
          <div className="offer-text">
            <h2>Special Offer</h2>
            <p>Get 70% off on selected items</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
