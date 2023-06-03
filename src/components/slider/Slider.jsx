import React from 'react'
import back2 from '../../images/products/back2.jpg'
import back3 from '../../images/grp2.svg'
import './slider.css'
import MouseIcon from '@mui/icons-material/Mouse';
const Slider = () => {
    
    return (
        <>
            <div className="sliderMain">
                <img src={back2} alt="" />
                <img src={back3} alt="" />
            </div>
            <div className="leftHome">
                <h1><span>Find</span> Amazing Products <br /> Below</h1>
                <a className="scrollBtn" href="##product" > <h2>scroll</h2>  <MouseIcon/> </a>
            </div>
        </>
    )
}

export default Slider