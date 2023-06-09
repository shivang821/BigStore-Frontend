import React from 'react'
import './myorder.css'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadOrder } from '../../actions/orderAction'
const Myorder = () => {
    const dispatch=useDispatch()
    const {orders}=useSelector(state=>state.Order)
    useEffect(()=>{
        dispatch(loadOrder())
    },[])
  return (
    <div className='myorder' >
        {/* <OrderCard/> */}
    </div>
  )
}

export default Myorder