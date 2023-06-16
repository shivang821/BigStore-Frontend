import React from 'react'
import './productCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ReactStars from 'react-rating-stars-component'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../actions/cartAction';
const ProductCard = ({ item, addItem, removeItem }) => {
  const dispatch = useDispatch()
  const checkItem = (e) => {
    if (e.target.checked) {
      addItem(item)
    }
    else {
      removeItem(item._id)
    }
  }
  const removeItemFromCart = () => {
    dispatch(removeFromCart(item._id))
  }
  const options = {
    edit: false,
    color: "#989898",
    activeColor: "#f4a424",
    value: item.rating,
    backgroundColor: "whitesmoke",
    isHalf: true,
    // size: 20
    size: window.innerWidth > 1439 ? 20 : window.innerWidth > 767 ? 17 : 14
  }
  return (
    <div className='cartCard' >
      <div className="itemCheck">
        <input type="checkbox" onClick={(e) => { checkItem(e) }} />
      </div>
      <div className="itemImage">
        <img src={item.image} alt="" />
      </div>
      <div className="itemDetail">
        <div className="itemDetail1"> <NavLink to={`/product/${item._id}`} ><h2>{item.name}</h2></NavLink></div>
        <div className="itemDetail2">{<span className='rating'> <p>Rating : </p> <ReactStars {...options} /> <p style={{ marginLeft: '3rem' }} >Qty : {item.qty}</p></span>}</div>
        {item.stock > 0 ? <div className="itemStatus green "><p>In Stock</p></div> : <div className=" red itemStatus"><p>Out of stock</p></div>}
        <div className="itemDetail3">
          <h2>Price : {item.price}</h2>
        </div>
      </div>
      <div className="itemRemove">
        <DeleteIcon onClick={removeItemFromCart} />
      </div>
      {
        item.status === 'deleted' && <div className='deletedProductOverlay red' >
          <p>product not found</p>

          <DeleteIcon onClick={removeItemFromCart} />
        </div>
      }
    </div>
  )
}

export default ProductCard