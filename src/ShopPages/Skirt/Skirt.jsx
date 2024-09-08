import React from 'react';
import "./Skirt.css";
import skirtData from "../../assets/ShopPagesJS/skirt"; // Adjust the import path based on your project structure

const Skirt = () => {
  return (
    <div className='skirt-container'>
      {skirtData.map((skirt) => (
        <div key={skirt.id} className='skirt-card'>
          <img className='skirt-image' src={skirt.image} alt={skirt.name} />
          <div className='skirt-details'>
            <h3 className='skirt-name'>{skirt.name}</h3>
            <div className='price-details'>
              <p className='new-price'>${skirt.new_price}</p>
              {skirt.old_price && <p className='old-price'>${skirt.old_price}</p>}
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skirt;
