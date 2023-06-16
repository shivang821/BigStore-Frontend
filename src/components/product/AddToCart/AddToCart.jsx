import React from 'react'
import './addToCart.css'
import ProductCard from './ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { ADD_ITEMS } from '../../../redusers/itemsArrayReducer'
const AddToCart = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [itemsArray, setItemsArray] = useState([]);
  const { cartItems } = useSelector((state) => state.Cart)
  const addItem = (item) => {
    setItemsArray((old) => {
      return [...old, item]
    })
  }
  const removeItem = (id) => {
    setItemsArray((old) => {
      const data = old.filter((item) => {
        return item._id !== id
      })
      return data;
    })
  }
  const totalItems = itemsArray.length;
  let totalPrice = 0;
  itemsArray.map((item) => {
    totalPrice +=item.qty*item.price;
  })
  const checkOut=()=>{
    
    dispatch(ADD_ITEMS(itemsArray));
    localStorage.setItem("itemsArray",JSON.stringify([...itemsArray]))
    navigate('/checkout')
  }
  return (
    <div className='addTocart'>
      <div className="cartLeft">
        {cartItems && cartItems.map((item,i) => {
          return <ProductCard item={item} key={i} addItem={addItem} removeItem={removeItem} />
        })}
      </div>
      <div className="cartRight">
        <div className='cartRight1' >
          <div className="cartRight11">
            <div className="cartRight112 itemsArrayDiv">
              <div>Total Price</div>
              <div>:</div>
              <div>{totalPrice}</div>
            </div>
          </div>
          <div className="cartRight12">
              <button onClick={checkOut} disabled={itemsArray.length===0?true:false}>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCart