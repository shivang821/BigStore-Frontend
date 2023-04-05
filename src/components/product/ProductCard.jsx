import React from 'react'
import './productCard.css'
import productImage from '../../images/ipad 1.jpg'
import ReactStars from 'react-rating-stars-component'
import { NavLink } from 'react-router-dom'
const ProductCard = () => {
  const options = {
    edit: false,
    color: "#989898",
    activeColor: "white",
    value: 3.5,
    backgroundColor: "whitesmoke",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 27
  }
  const details = {
    name: 'Apple ipad pro',
    desc: '8mp primary camera,A14 Bionic chip,256gb space gray',
    price: '84990',
    id: '12hhkj23i'
  }
  return (
    <div className='card'>
      <NavLink to={`/product/${details.id}`} >
        <div className="productImg">
          <img src={productImage} alt="" />
          <div className="productOverlay"> <ReactStars {...options} /> </div>
        </div>
        <div className="productDetail">
          <h3>{details.name}</h3>
          <h3>{details.desc}</h3>
          <h3>₹{details.price}</h3>
        </div>
      </NavLink>
    </div>
  )
}

export default ProductCard