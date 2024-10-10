import React from "react";
import new_collections from "../assets/new_collections";
import "./NewCollection.css";
import Item from "./item.jsx";

const NewCollection = () => {
  return (
    <div className="collection-section">
      <p className="collection-header">NEW COLLECTIONS</p>
      <hr className="hr-collection" />
      <div className="collections">
        {new_collections.map((e, i) => {
          return (
            <Item
              key={i}
              id={e.id}
              name={e.name}
              img={e.image}
              new_price={e.new_price}
              old_price={e.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
