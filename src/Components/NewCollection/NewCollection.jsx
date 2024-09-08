import React from 'react';
import "./NewCollection.css";
import newCollections from "../../assets/newCollections"; 
import Item from '../Item/Item'; 

const NewCollection = () => {
  return (
    <div className='collection-container'>
      {newCollections.map((item) => (
        <div key={item.id} className='product-card'>
          <img className='product-image' src={item.image} alt={item.name} />
          <div className='product-details'>
            <h3 className='product-name'>{item.name}</h3>
            <div className='price-details'>
              <p className='new-price'>${item.new_price}</p>
              {item.old_price && <p className='old-price'>${item.old_price}</p>}
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      ))}

      
    </div>
  );
}

export default NewCollection;
