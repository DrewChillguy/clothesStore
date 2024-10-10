import React from "react";
import "./popular.css";
import product_data from "../assets/data.js";
import Item from "./item.jsx";

const Popular = () => {
  return (
    <div className="popular-section">
      <p className="popular-header">POPULAR IN WOMEN</p>
      <hr className="hr-popular" />
      <div className="popular">
        {product_data.map((e, i) => {
          return (
            <Item
              key={i}
              id={e.id}
              img={e.image}
              name={e.name}
              new_price={e.new_price}
              old_price={e.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
