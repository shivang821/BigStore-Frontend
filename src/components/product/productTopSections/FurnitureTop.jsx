import React from 'react'
import furnitureTopImage from '../images/furniturePageImage.svg'
import './furniturePage.css'
const FurnitureTop = () => {
    return (
        <>
            <div className="productTop1"></div>
            <div className="productTop2"></div>
            <img className='furnitureTopImage' src={furnitureTopImage} alt="" />
        </>
    )
}

export default FurnitureTop