import React from 'react';
import Ola from "./assets/olaa.png";
import "./Product.css";
import { Link } from 'react-router-dom';

export const Product = () => {
  return (
    <div className='product-container'>
        <div className="product-left">
          <h2 className='sub-head' style={{fontSize:"1.75rem", margin:"1em", color:"Black"}}>Ola Motors</h2>
          <div className="left-top">

            <img src={Ola} className='prod-image' alt="" />
            
          </div>

        </div>
        <div className="product-right">
          <h1 className="heading">
            <span className='sub-head'>Electric Ola</span>
            <br />
          <p style={{marginTop:"-2%"}}>
            Effortless. Eco-Friendly. Electric
            
          </p>
          </h1>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio quae placeat voluptatum architecto tempora et iste deleniti quaerat commodi! Natus tempora eligendi, corrupti unde eos ipsam dicta impedit dolor voluptatibus mollitia.
          </p>

          <h2 className='text-3xl mt-4 px-12'>In Just <span className="text-5xl text-green-900 font-bold">$999</span></h2>

          <div className="button-container">
            <button className='btn-grad'>
              <Link to="/payment-options" style={{color: "black"}}>Buy Now</Link>
              </button>
              <button className='btn-grad' style={{backgroundColor:"aquamarine", color: "black"}}>
              Regret Later
              </button>
          </div>
        </div>
    </div>
  )
}
