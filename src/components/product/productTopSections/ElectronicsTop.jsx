import React from 'react'
import electronicsTopImage from '../images/electronicsPageimage2.svg'
import electronicsTopImage2 from '../images/electronicsPageimage3.avif'
import'./electronicsTop.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const ElectronicsTop = () => {
  return (
    <>
            <div className="productTop1"></div>
            <div className="productTop2"></div>
            <LazyLoadImage className='electronicsTopImage' src={electronicsTopImage} effect='blur' placeholderSrc={electronicsTopImage2}/>
            {/* <img className='electronicsTopImage' src={electronicsTopImage} alt="" /> */}
        </>
  )
}

export default ElectronicsTop