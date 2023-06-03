import React from 'react'
import './productDetails.css'
import {useParams,useLocation} from 'react-router-dom'
import ProductSlider from './productSlider/ProductSlider'
import ProductInformation from './ProductInformation/ProductInformation.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productDetail } from '../../../actions/productAction'
const ProductDetails = () => {
    const {id} =useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
      window.scrollTo(0,0);
      dispatch(productDetail(id))
    },[id])
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