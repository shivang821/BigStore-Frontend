import React from 'react'
import './productCard.css'
import productImage from '../../images/ipad 1.jpg'
import ReactStars from 'react-rating-stars-component'
import { NavLink } from 'react-router-dom'
// hi
const ProductCard = ({details}) => {
  const options = {
    edit: false,
    color: "#989898",
    activeColor: "white",
    value: details.rating,
    backgroundColor: "whitesmoke",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 27
  }
  return (
    <div className='card'>
      <NavLink to={`/product/${details._id}`} >
        <div className="productImg">
          <img src={details.images[0].url} alt="" />
          <div className="productOverlay"> <ReactStars {...options} /> </div>
        </div>
        <div className="productDetail">
          <h3>{details.name}</h3>
          <h3>₹{details.price}</h3>
        </div>
      </NavLink>
    </div>
  )
}

export default ProductCard