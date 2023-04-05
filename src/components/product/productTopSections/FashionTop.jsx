import React from 'react'
import rightImage from '../images/rightImage.svg'
import leftImage from '../images/leftImage.svg'
import middleImage from '../images/middleImage.svg'
import middleShadow from '../images/middleShadow.svg'
const FashionTop = () => {
    return (
        <>
            <div className="productTop1"></div>
            <div className="productTop2"></div>
            <img className='rightImage' src={rightImage} alt="" />
            <img className='leftImage' src={leftImage} alt="" />
            <img className='middleImage' src={middleImage} alt="" />
            <img className='middleShadow' src={middleShadow} alt="" />
        </>
    )
}

export default FashionTop