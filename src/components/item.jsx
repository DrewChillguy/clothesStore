import React from 'react'
import './item.css'
import new_collection from '../assets/new_collections.js'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.img}  />
        <div className="product-detail">
            <p>{props.name}</p>
        </div>
        <div className="prices">
            <p className='new-price'>${props.new_price}</p>
            <p className="old-price">${props.old_price}</p>
        </div>
    </div>
  )
}

export default Item