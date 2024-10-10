import React from "react";
import "./hero.css";
import handEmoji from "../assets/hand_icon.png";
import heroImg from "../assets/hero_image.png";
import arrow from "../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-collection">
        <p className="new-arrive-header">NEW ARRIVALS ONLY</p>
        <h1 className="new-arrival">
          new
          <span>
            <img src={handEmoji} />
            {<br />}
          </span>
          collections{<br />}for everyone
        </h1>
        <div className="btn-section">
          <button className="collection-btn">Latest collection</button>
          <img src={arrow} className="arrow" />
        </div>
      </div>
      <div className="hero-banner">
        <img src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
