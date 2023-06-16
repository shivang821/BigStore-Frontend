import React from 'react'
import './myorder.css'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadOrder } from '../../actions/orderAction'
const Myorder = () => {
    const dispatch=useDispatch()
    const {orders,success}=useSelector(state=>state.Order)
    useEffect(()=>{
        dispatch(loadOrder())
    },[success])
  return (
    <div className='myorder' >
        {
            orders&&orders.map((item,i)=>{
                return <OrderCard item={item} key={i} />
            })
        }
        
    </div>
  )
}

export default Myorder