import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_logo.png";
import { FaUndo, FaTruck, FaShippingFast } from "react-icons/fa";
import newNav from "../../assets/backGround/newNavbar.jpg";
import saleNav from "../../assets/backGround/saleNavbar.jpg";
import denimNav from "../../assets/backGround/denimnav.jpg";
import sportyNav from "../../assets/backGround/sportyNav.jpg";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowProductDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navCont">
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`navbar__links ${showMenu ? "active" : ""}`}>
          <li onClick={() => setShowProductDropdown(false)}>
            <Link to="/">Home</Link>
          </li>
          <li ref={dropdownRef} onClick={toggleProductDropdown}>
            <span>Categories</span>
            {showProductDropdown && (
              <div className="product-dropdown">
                <ul>
                  <li>
                    <Link to="/category">View All</Link>
                  </li>
                  <li>
                    <Link to="/skirts">Skirts & Shorts</Link>
                  </li>
                  <li>
                    <Link to="/dresses">Dresses</Link>
                  </li>
                  <li>
                    <Link to="/knit">Knitwear</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="navbar__signup">
          <button className="signup__button">
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign Up
            </Link>
          </button>
        </div>
        <div className="navbar__cart">
          <Link to="/cart">
            <img src={cart} alt="Cart" />
            <div className="nav-cart-count">0</div>
          </Link>
        </div>
        <FaBars className="navbar__toggle" onClick={toggleMenu} />
      </nav>
      <div className="navbar__options">
        <div className="option">
          <FaUndo className="option-icon" />
          <span>Easy Returns</span>
        </div>
        <div className="option">
          <FaTruck className="option-icon" />
          <span>Fast Delivery</span>
        </div>
        <div className="option">
          <FaShippingFast className="option-icon" />
          <span>Free Shipping</span>
        </div>
      </div>
      <div className="navbar__category-container">
        <button className="category new">
          <img src={newNav} alt="New Category" className="category-image" />
        </button>
        <button className="category sale">
          <img src={saleNav} alt="Sale Category" className="category-image" />
        </button>
        <button className="category sporty">
          <img
            src={sportyNav}
            alt="Sporty Category"
            className="category-image"
          />
        </button>
        <button className="category denims">
          <img src={denimNav} alt="Denim Category" className="category-image" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
