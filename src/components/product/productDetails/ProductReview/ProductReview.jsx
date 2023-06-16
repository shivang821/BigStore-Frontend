import React, { useEffect, useState } from 'react'
import './productReview.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReactStars from 'react-rating-stars-component'
import { useSelector } from 'react-redux';
const ProductReview = ({review}) => {
    const options = {
        edit: false,
        color: "#989898",
        activeColor: "#f4a424",
        value:review.rating?review.rating:'',
        backgroundColor: "whitesmoke",
        isHalf: true,
        size:25
    }
    useEffect(()=>{
      // window.location.reload()
    },[review.rating])
  return (
    <div className='productReview' >
        <div className='reviewerName'><AccountCircleIcon/> <h2>{review.user.name}</h2></div>
        <div className='reviewRating'><ReactStars {...options} /></div>
        <div className='reviewMessage'><p>{review.review}</p></div>
    </div>
  )
}

export default React.memo(ProductReview)