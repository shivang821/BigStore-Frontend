import axios from "axios"
import { CREATE_NEW_ORDER, LOAD_ORDERS, ORDER_ERROR, ORDER_REQUEST } from "../redusers/orderReducer"

export const createNewOrder=(myForm)=>async(dispatch)=>{
    try {
        dispatch(ORDER_REQUEST())
        const config={headers:{'Content-Type':"application/json"}}
        const {data}=await axios.post('/api/new/order',myForm,config)
        dispatch(CREATE_NEW_ORDER(data.success))
    } catch (error) {
        dispatch(ORDER_ERROR(error.response.data.error))
    }
}
export const loadOrder=()=>async(dispatch)=>{
    try {
        dispatch(ORDER_REQUEST())
        const {data}=await axios.get('/api/order')
        dispatch(LOAD_ORDERS(data.orders))
    } catch (error) {
        dispatch(ORDER_ERROR(error.response.data.error))
    }
}