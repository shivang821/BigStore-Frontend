import React from 'react'
import './orderCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ReactStars from 'react-rating-stars-component'
import { NavLink } from 'react-router-dom';
const OrderCard = ({item}) => {
    const options = {
        edit: false,
        color: "#989898",
        activeColor: "#f4a424",
        value: item.product.rating,
        backgroundColor: "whitesmoke",
        isHalf: true,
        // size: 20
        size: window.innerWidth>1439?20:window.innerWidth>767?17:14
    }
  return (
    <div className='cartCard' >
        <div className="itemCheck">
            <input type="checkbox" onClick={(e)=>{checkItem(e)}}/>
        </div>
        <div className="itemImage">
            <img src={item.image} alt="" />
        </div>
        <div className="itemDetail">
          <div className="itemDetail1"> <NavLink to={`/product/${item._id}`} ><h2>{item.name} - (<span style={{fontSize:'1.2rem'}} >{item.desc} </span>)</h2></NavLink></div>
          <div className="itemDetail2">{ <span className='rating'> <p>Rating : </p> <ReactStars {...options} /> <p style={{marginLeft:'3rem'}} >Qty : {item.qty}</p></span>}</div>
          {item.stock>0?<div className="itemStatus green "><p>In Stock</p></div>:<div className=" red itemStatus"><p>Out of stock</p></div>}
          <div className="itemDetail3">
            <h2>Price : {item.price}</h2>
          </div>
        </div>
        <div className="itemRemove">
            <DeleteIcon onClick={removeItemFromCart}/>
        </div>
    </div>
  )
}

export default OrderCard