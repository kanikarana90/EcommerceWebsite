import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/Shopcategory";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from './Components/Footer/Footer';
import SkirtPage from "./ShopPages/Skirt/Skirt";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop />} /> {/* Home page */}
          <Route path='/home' element={<Shop />} /> {/* Home page (alternative path) */}
          <Route path='/shop' element={<Shop />} /> {/* Shop page */}
          <Route path='/category' element={<ShopCategory />} /> 
          <Route path='/skirts' element={<SkirtPage/>}/> 
          <Route path='/dresses'  /> 
          <Route path='/knit'/> 
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
