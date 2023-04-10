import React from 'react'
import groceryImage from '../images/groceryPageImage.svg'
import './grocery.css'
const GroceryTop = () => {
    return (
        <>
            <div className="productTop1"></div>
            <div className="productTop2"></div>
            <img className='groceryImage' src={groceryImage} alt="" />
        </>
    )
}

export default GroceryTop