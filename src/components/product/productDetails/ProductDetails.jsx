import React from 'react'
import './productDetails.css'
import {useParams,useLocation} from 'react-router-dom'
import ProductSlider from './productSlider/ProductSlider'
import ProductInformation from './ProductInformation/ProductInformation.jsx'
import { useEffect } from 'react'
const ProductDetails = () => {
    const {id} =useParams()
    useEffect(()=>{
      window.scrollTo(0,0);
    })
  return (
    <>
    <div className="productDetails">
        <div className="productDetails1">
            <div className="productDetails1-1">
                <ProductSlider/>
            </div>
            <div className="productDetails1-2">
              <ProductInformation/>
            </div>
        </div>
        <div className="productDetails2"></div>
    </div>
    </>
  )
}

export default ProductDetails