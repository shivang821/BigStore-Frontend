import React from 'react'
import './productCard.css'
const ProductCard = () => {
    const url='https://res.cloudinary.com/dyntsjqrh/image/upload/v1682443372/products/ea20xpb7fyjzsev9hif4.jpg';
  return (
    <div className='cartCard' >
        <div className="itemCheck">
            <input type="checkbox"/>
        </div>
        <div className="itemImage">
            <img src={url} alt="" />
        </div>
        <div className="itemDetail"></div>
        <div className="itemRemove"></div>
    </div>
  )
}

export default ProductCard