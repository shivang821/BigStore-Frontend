import React, { useState } from 'react'
import './productDetails.css'
import { useParams, useLocation } from 'react-router-dom'
import ProductSlider from './productSlider/ProductSlider'
import ProductInformation from './ProductInformation/ProductInformation.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetail } from '../../../actions/productAction'
import ProductReview from './ProductReview/ProductReview'
import SubmitReviewBox from './ProductReview/SubmitReviewBox'
import { PRODUCT_DETAIL_RESET } from '../../../redusers/productReducer'
import { ORDER_RESET } from '../../../redusers/orderReducer'
const ProductDetails = () => {
  const { id } = useParams()
  const {success:ordersuccess}=useSelector(state=>state.Order)
  const dispatch = useDispatch()
  const { pDetails,success } = useSelector(state => state.ProductDetails)
  const [openReviewBox, setOpenReviewBox] = useState(false)
  let reviews;
  if (pDetails) {
    reviews = pDetails.reviews
  }
  const closeBox=()=>{
    setOpenReviewBox(!openReviewBox)
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    if(!pDetails||pDetails._id!==id||ordersuccess){
      dispatch(productDetail(id))
    }
    if(success){
      dispatch(PRODUCT_DETAIL_RESET())
    }
    if(ordersuccess){
      dispatch(ORDER_RESET())
    }
  },[])
  // id,success,ordersuccess
  return (
    <>
      <div className="productDetails">
        <div className="productDetails1">
          <div className="productDetails1-1">
            <ProductSlider />
          </div>
          <div className="productDetails1-2">
            <ProductInformation detail={pDetails} />
          </div>
        </div>
        <div className="productDetails2">
          <div className='reviewHeading'><h2>Reviews</h2></div>
          {reviews && reviews.map((item, i) => {
            return <ProductReview review={item} key={i} />
          })}
          <div className="submitReview">
            <button onClick={() => setOpenReviewBox(!openReviewBox)}>Submit Review</button>
          </div>
        </div>
        {openReviewBox && <SubmitReviewBox id={id} closeBox={closeBox}/>}
      </div>
    </>
  )
}

export default ProductDetails