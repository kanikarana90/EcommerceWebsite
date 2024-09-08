import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';  // Corrected import path and component name
import Offer from '../Components/Offer/Offer';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsletter from '../Components/NewsLetter/Newsletter';


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular /> 
      <Newsletter/>
      <Offer/> 
      
      <NewCollection/>
      
      
    </div>
  );
};

export default Shop;
