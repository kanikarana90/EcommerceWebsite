import React from 'react';
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers via Email</h1>
      <p>Subscribe to our newsletter</p>
      <div className="input-container">
        <input type="email" placeholder='Enter Your Email' className="email-input" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
