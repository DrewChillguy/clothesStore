import React from "react";
import "./Offer.css";
import offer_img from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-details">
        <div className="offer-title">Exclusive {<br />} Offers For You</div>
        <p className="offer-sub-title">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="check-now">Check now</button>
      </div>
      <img src={offer_img} />
    </div>
  );
};

export default Offer;
