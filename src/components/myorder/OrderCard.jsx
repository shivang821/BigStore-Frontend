import React from 'react'
import { NavLink } from 'react-router-dom';
import './orderCard.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { useEffect } from 'react';
const OrderCard = ({ item }) => {
  const { product, shippingDetail, paymentDetails, qty, totalPrice, status } = item
  const [open, setOpen] = useState(false)
  const year = Number(item.createdAt.substring(0, 4))
  const month = Number(item.createdAt.substring(5, 7))
  const date = Number(item.createdAt.substring(8, 10))
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let orderDate = new Date(`${months[month - 1]} ${date},${year}`)

  const deliveryDate = new Date(`${months[month - 1]} ${date + 7},${year}`)
  const todayDate = new Date()
  let orderStatus;
  if (orderDate.getFullYear() < todayDate.getFullYear()) {
    orderStatus = `Ordered on ${orderDate.getDate()},${months[orderDate.getMonth()]},${orderdate.getFullYear()}`
  } else {
    orderStatus = `Ordered on ${orderDate.getDate()},${months[orderDate.getMonth()]}`
  }
  useEffect(() => {

  }, [])
  let address;
  if (shippingDetail) {
    address = `${shippingDetail.address},${shippingDetail.city},${shippingDetail.district},${shippingDetail.state},${shippingDetail.country}`
  }
  return (
    <div className='orderCard' >
      <div className='orderCardTop' >
        <div className="orderCard1">
          <img src={product.images[0].url} alt="" />
        </div>
        <div className="orderCard2">
          <div className='orderCard21'> <NavLink to={`/product/${product._id}`} > <p>{product.name}</p></NavLink></div>
          <div className='orderCard22'>
            <div><p style={{textTransform:'capitalize', color: `${status === 'pending' ? '#388e3c' : '#ff6161'}` }} >{status}</p></div>
            <div><p style={{ color: '#ff6161',textTransform:'capitalize', }} >{orderStatus}</p></div>
          </div>
          <div className='orderCard23'>
            <p>Quantity : {qty}</p>
          </div>
          <div className='orderCard24'>
            <p>Price : {totalPrice}</p>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="showMore">
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      {<div className={`${open ? 'orderCardBottomOpen' : 'orderCardBottomClose'}`} >
        {
          open && <>
            <div className='orderCardBottomOpen1' >
              <div className='orderCardBottomOpen11'><p>Shipping Address</p></div>
              <div className='orderCardBottomOpen12'>{address}</div>
            </div>
            <div className='orderCardBottomOpen2' >
              <div><p>Contact No.</p></div>
              <div>{shippingDetail.contact}</div>
            </div>
            <div className='orderCardBottomOpen3' >
              <div><p>Payment id</p></div>
              <div><p>{paymentDetails.razorpay_payment_id}</p></div>
            </div>
          </>
        }

      </div>}
    </div>
  )
}

export default OrderCard