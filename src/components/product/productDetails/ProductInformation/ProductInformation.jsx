import React from 'react'
import './productInformation.css'
import ReactStars from 'react-rating-stars-component'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';
const ProductInformation = () => {
    const [qty, setQty] = useState(1)
    const details = {
        name: 'Apple ipad pro',
        desc: '8mp primary camera,A14 Bionic chip,256gb space gray',
        price: '84990',
        id: '12hhkj23i',
        rating: 4.5,
        qty: 5
    }
    const options = {
        edit: false,
        color: "#989898",
        activeColor: "#f4a424",
        value: 4.5,
        backgroundColor: "whitesmoke",
        isHalf: true,
        size: window.innerWidth>1439?35:window.innerWidth>767?25:20
    }
    return (
        <div className='productInformation'>
            <div className="nameDiv">
                <h2 className='name' >{details.name}</h2>
                <p className='desc'>{details.desc}</p>
            </div>
            <div className='middleDetails'>
                <h3 className='price'>Price :₹{details.price}</h3>
                <span className='rating'> <p>Rating : </p> <ReactStars {...options} /></span>
            </div>
            <div className="qtyDiv1">
                <p>Quantity : </p>
                <div className="qtyInp">
                    <input type="text" value={qty} readOnly/>
                    <div className="qtyBtn">
                        <div onClick={() => { qty < details.qty && setQty(qty + 1) }}><KeyboardArrowUpIcon /></div>
                        <div onClick={() => { qty > 1 && setQty(qty - 1) }}><KeyboardArrowDownIcon /></div>
                    </div>
                </div>
            </div>
            <div className="charges">
                <p>{details.price>=449?'Free Delivery':"Delivery Charge : 99"}</p>
            </div>
            <div className="buyAndCartBtn">
                <NavLink ><button>Buy Now</button></NavLink>
                <NavLink><button>Add To Cart</button></NavLink>
            </div>
        </div>
    )
}

export default ProductInformation