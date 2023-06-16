import React, { useState } from 'react'
import './updateOrder.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOrderDetails, updateOrder } from '../../../actions/orderAction'
import { ORDER_DETAIL_RESET } from '../../../redusers/orderReducer'
import { useAlert } from 'react-alert'

const UpdateOrder = () => {
  const { id } = useParams()
  const { order, loading, isUpdated, error } = useSelector(state => state.OrderDetail)
  const dispatch = useDispatch()
  const [shippingDetail, setShippingdetail] = useState()
  const [product, setProduct] = useState()
  const [paymentDetail, setPaymentDetail] = useState()
  const [status, setStatus] = useState()
  const alert = useAlert()
  useEffect(() => {
    dispatch(getOrderDetails(id))
  }, [id])
  useEffect(() => {
    if (order) {
      setShippingdetail(order.shippingDetail)
      setProduct(order.product)
      setPaymentDetail(order.paymentDetails)
      setStatus(order.status)
    }
    if (isUpdated) {
      alert.success('status updated')
      dispatch(getOrderDetails(id))
      dispatch(ORDER_DETAIL_RESET())
    }
  }, [order, isUpdated, id])
  const updateStatus = () => {
    const myForm = new FormData()
    myForm.set('status', status)
    dispatch(updateOrder(id, myForm))
  }
  return (
    <div className='dashboardOrder' >
      <div className='dashboardOrder1'>
        <div className="dashboardOrder11">
          <div className='headingdiv' ><h3 className='shippingDetailsHeading' >Shipping Details</h3></div>

          <div className='orderDetailRow' >
            <div><p>Address</p></div>
            <div><p>:</p></div>
            <div><p>{shippingDetail ? shippingDetail.address : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>City</p></div>
            <div><p>:</p></div>
            <div><p>{shippingDetail ? shippingDetail.city : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>District</p></div>
            <div><p>:</p></div>
            <div><p>{shippingDetail ? shippingDetail.district : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>State</p></div>
            <div><p>:</p></div>
            <div><p>{shippingDetail ? shippingDetail.state : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>Country</p></div>
            <div><p>:</p></div>
            <div><p>{shippingDetail ? shippingDetail.country : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>Contact No.</p></div>
            <div><p>:</p></div>
            <div><p>{shippingDetail ? shippingDetail.contact : ''}</p></div>
          </div>
        </div>
        <div className="dashboardOrder11">
          <div className='headingdiv' ><h3 className='shippingDetailsHeading' >Order Details</h3></div>

          <div className='orderDetailRow' >
            <div><p>Product</p></div>
            <div><p>:</p></div>
            <div><p>{product ? product.name : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>Amount</p></div>
            <div><p>:</p></div>
            <div><p>{order ? order.totalPrice : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>Quantity</p></div>
            <div><p>:</p></div>
            <div><p>{order ? order.qty : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>Status</p></div>
            <div><p>:</p></div>
            <div><p>{order ? order.status : ''}</p></div>
          </div>
        </div>
        <div className="dashboardOrder11">
          <div className='headingdiv' ><h3 className='shippingDetailsHeading' >Payment Details</h3></div>

          
          <div className='orderDetailRow' >
            <div><p>Payment Id</p></div>
            <div><p>:</p></div>
            <div><p>{paymentDetail ? paymentDetail.razorpay_payment_id : ''}</p></div>
          </div>
          <div className='orderDetailRow' >
            <div><p>Order Id</p></div>
            <div><p>:</p></div>
            <div><p>{paymentDetail ? paymentDetail.razorpay_order_id : ''}</p></div>
          </div>
        </div>
      </div>
      <div className='dashboardOrder2'>
        <div className="dashboardOrder21">
          <select name="statuss" value={status} onChange={(e) => { setStatus(e.target.value) }}>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
          </select>
          <button onClick={updateStatus} disabled={order && status === order.status}>Update Status</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateOrder