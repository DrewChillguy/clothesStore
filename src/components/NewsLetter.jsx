import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <p className="letter-title">Get Exclusive Offers On Your Email</p>
      <p className="letter-sub">
        Subscribe to our newsletter and stay updated.
      </p>
      <div className="enter-email">
        <input type="email" placeholder="Enter your email"/>
        <button className="sub-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
