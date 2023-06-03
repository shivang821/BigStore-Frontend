import React from 'react'
import './addToCart.css'
import ProductCard from './ProductCard/ProductCard'
const AddToCart = () => {
  return (
    <div className='addTocart'>
        <div className="cartLeft">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <div className="cartRight">
            <div className='cartRight1' ></div>
        </div>
    </div>
  )
}

export default AddToCart