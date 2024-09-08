import React from 'react';
import { Link } from 'react-router-dom';
import data_product from '../../assets/data';
import "./Popular.css";

const CategoriesPage = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">What do you want to buy?</h1>
      <div className="categories-container">
        {data_product.map((product, index) => (
          <div key={product.id} className="card">
            <div className="image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="overlay">
              <div className="overlay-content">
                <h3>{product.name}</h3>
                <Link to={`/category/${product.id}`} className="explore-btn">
                  Explore {product.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
