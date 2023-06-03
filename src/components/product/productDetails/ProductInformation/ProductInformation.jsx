import React from 'react'
import './productInformation.css'
import ReactStars from 'react-rating-stars-component'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProductInformation = () => {
    const [qty, setQty] = useState(1)
    const {pDetails,error,loading}=useSelector(state=>state.ProductDetails)
    const options = {
        edit: false,
        color: "#989898",
        activeColor: "#f4a424",
        value: pDetails&&pDetails.rating,
        backgroundColor: "whitesmoke",
        isHalf: true,
        size: window.innerWidth>1439?35:window.innerWidth>767?25:20
    }
    return (
        <div className='productInformation'>
            <div className="nameDiv">
                <h2 className='name' >{pDetails&&pDetails.name}</h2>
                <p className='desc'>{pDetails&&pDetails.desc}</p>
            </div>
            <div className='middleDetails'>
                <h3 className='price'>Price :₹{pDetails&&pDetails.price}</h3>
                <span className='rating'> <p>Rating : </p> <ReactStars {...options} /></span>
            </div>
            <div className="qtyDiv1">
                <p>Quantity : </p>
                <div className="qtyInp">
                    <input type="text" value={qty} readOnly/>
                    <div className="qtyBtn">
                        <div onClick={() => { qty < pDetails&&pDetails.qty && setQty(qty + 1) }}><KeyboardArrowUpIcon /></div>
                        <div onClick={() => { qty > 1 && setQty(qty - 1) }}><KeyboardArrowDownIcon /></div>
                    </div>
                </div>
            </div>
            <div className="charges">
                <p>{pDetails&&pDetails.price>=449?'Free Delivery':"Delivery Charge : 99"}</p>
            </div>
            <div className="buyAndCartBtn">
                <NavLink ><button>Buy Now</button></NavLink>
                <NavLink><button>Add To Cart</button></NavLink>
            </div>
        </div>
    )
}

export default ProductInformation