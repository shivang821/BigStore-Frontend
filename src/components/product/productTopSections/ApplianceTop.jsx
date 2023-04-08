import React from 'react'
import appliancePageImage from '../images/appliancePageImage.svg'
import './appliance.css'

const ApplianceTop = () => {
    return (
        <>
            <div className="productTop1"></div>
            <div className="productTop2"></div>
            <img className='appliancePageImage' src={appliancePageImage} alt="" />
        </>
    )
}

export default ApplianceTop