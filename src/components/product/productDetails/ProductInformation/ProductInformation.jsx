import React from 'react'
import './productInformation.css'
import ReactStars from 'react-rating-stars-component'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../../../actions/cartAction';
import { useAlert } from 'react-alert'
import { useEffect } from 'react';
const ProductInformation = ({detail:pDetails}) => {
    const [qty, setQty] = useState(1)
    const alert=useAlert()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    // const {pDetails,error,loading,success}=useSelector(state=>state.ProductDetails)
    const [rating,setRating]=useState(0)
    const options = {
        edit: false,
        color: "#989898",
        activeColor: "#f4a424",
        value:rating,
        backgroundColor: "whitesmoke",
        isHalf: true,
        size: window.innerWidth>1439?35:window.innerWidth>767?25:20
    }
   const addToCart=()=>{    
        dispatch(addItemsToCart(pDetails._id,qty));
        alert.success('Item added to cart')
   }
   const addQty=()=>{
    if(qty<pDetails.stock){
        setQty(qty+1)
    }else{
        alert.error('stock is unavailable')
    }
   }
   const removeQty=()=>{
    if(qty>1){
        setQty(qty-1)
    }
   }
   
   useEffect(()=>{
    if(pDetails){
        setRating(pDetails.rating)
    }
   },[])
//    pDetails&&pDetails.rating,pDetails
   const buyNow=()=>{
    console.log('click');
    let item={desc:pDetails.desc,image:pDetails.images[0].url,name:pDetails.name,qty,rating:pDetails.rating,seller:pDetails.seller,stock:pDetails.stock,_id:pDetails._id,price:pDetails.price,status:pDetails.stock}
    localStorage.setItem("itemsArray",JSON.stringify([item]))
    navigate('/checkout')
   }
    return (
        <div className='productInformation'>
            <div className="nameDiv">
                <h2 className='name' >{pDetails&&pDetails.name}</h2>
            </div>
            <div className='middleDetails'>
                <h3 className='price'>Price :₹{pDetails&&pDetails.price}</h3>
                <span className='rating'> <p>Rating : </p> {rating&&<ReactStars {...options} />}</span>
            </div>
            {pDetails&&pDetails.stock>0&&<div className="qtyDiv1">
                <p style={{color:'#f4a424'}}>Quantity : </p>
                <div className="qtyInp">
                    <input type="text" value={qty} readOnly/>
                    <div className="qtyBtn">
                        <div onClick={addQty}><KeyboardArrowUpIcon /></div>
                        <div onClick={removeQty}><KeyboardArrowDownIcon /></div>
                    </div>
                </div>
            </div>}
            {
                pDetails&&pDetails.stock===0&&
                <div className='outOfStockDiv'>
                    <p className='red'>Out of stock</p>
                </div>
            }
            <div className="charges">
                <p>{pDetails&&pDetails.price>=449?'Free Delivery':"Delivery Charge : 99"}</p>
            </div>
            <div className="buyAndCartBtn">
                <button onClick={buyNow}>Buy Now</button>
                <button onClick={()=>{addToCart()}}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductInformation