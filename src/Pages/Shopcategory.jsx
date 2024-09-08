import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Shopcategory.css'; // Create this CSS file to style the component
import banner1 from '../assets/Banner/banner1.jpg'
import banner2 from '../assets/Banner/banner2.jpg'
import banner3 from '../assets/Banner/banner3.jpg'
import banner4 from '../assets/Banner/banner4.jpg'
import banner5 from '../assets/Banner/banner5.jpg'
import banner6 from '../assets/Banner/banner6.jpg'
import banner7 from '../assets/Banner/banner7.jpg'
import banner8 from '../assets/Banner/banner8.jpg'
import banner9 from '../assets/Banner/banner9.jpg'
import banner10 from '../assets/Banner/banner10.jpg'
import banner11 from '../assets/Banner/banner11.jpg'
import banner12 from '../assets/Banner/banner12.jpg'

const Categories = () => {
  const categories = [
    { name: 'Skirt & Shorts ', path: '/skirts', banner: banner1 },
    { name: 'Dresses', path: '/makeup', banner: banner2 },
    { name: 'Knitwear', path: '/skincare', banner: banner3 },
    { name: 'Tops & Tshirts', path: '/clothing', banner: banner4 },
    { name: 'Blazers & Outerwear', path: '/clothing', banner: banner5 },
    { name: 'Denim', path: '/clothing', banner: banner12 },
    { name: 'Sportswear & Swimwear', path: '/clothing', banner: banner6 },
    { name: 'Blouses & Shirts', path: '/clothing', banner: banner7 },
    { name: 'Pants & jumpsuits', path: '/clothing', banner: banner8 },
    { name: 'Jewellery', path: '/clothing', banner: banner9 },
    { name: 'Makeup', path: '/clothing', banner: banner10 },
    { name: 'SKincare', path: '/clothing', banner: banner11 },
    

  ];

  return (
    <div className="categories">
      <h1>Select a Category</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="category-item">
            <img src={category.banner} alt={category.name} className="category-banner" />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
