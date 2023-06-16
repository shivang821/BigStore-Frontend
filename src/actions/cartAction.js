import axios from "axios";
import { ADD_TO_CART, ADD_TO_CART_REQUEST, CART_ERROR, LOAD_CART, REMOVE_FROM_CART, RESET_CART_ERROR } from "../redusers/cartReducer";


export const addItemsToCart = (id, quantity) => async(dispatch, getState) => {
    try {
        dispatch(ADD_TO_CART_REQUEST())
        const config = { headers: { "Content-Type": "application/json" } };
        const {data}=await axios.post('/api/addToCart',{item:id,itemQty:quantity},config)
        dispatch(ADD_TO_CART(data.cartItems))
    } catch (error) {
        dispatch(CART_ERROR(error.response.data.error))
    }
}

export const removeFromCart = (id) => async(dispatch) => {
    try {
        dispatch(ADD_TO_CART_REQUEST())
        const {data}=await axios.delete(`/api/removeFromCart/${id}`)
        dispatch(REMOVE_FROM_CART(data.cartItems))
    } catch (error) {
        dispatch(CART_ERROR(error.response.data.error))
    }
}
export const loadCart=()=>async(dispatch)=>{
    try {
        dispatch(ADD_TO_CART_REQUEST());
        const {data}=await axios.get('/api/addToCart')
        dispatch(LOAD_CART(data.cartItems));
    } catch (error) {
        console.log(error);
        dispatch(CART_ERROR(error.response.data.error))
    }
}
export const clearError=()=>(dispatch)=>{
    dispatch(RESET_CART_ERROR())
}