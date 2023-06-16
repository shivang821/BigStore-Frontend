import axios from "axios";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, SELLER_ERROR, SELLER_REQUEST, SELLER_SUCCESS } from "../redusers/sellerReducer"

export const loadSellerData=()=>async(dispatch)=>{
    try {
        dispatch(SELLER_REQUEST());
        const {data}=await axios.get('/api/adminItems');
        dispatch(SELLER_SUCCESS(data));
    } catch (error) {
        dispatch(SELLER_ERROR(error.response.data.error))
    }
}

export const deleteProductAction=(id)=>async(dispatch)=>{
    try {
        dispatch(DELETE_PRODUCT_REQUEST());
        const {data}=await axios.delete(`/api/product/${id}`)
        dispatch(DELETE_PRODUCT_SUCCESS(data.success))
    } catch (error) {
        dispatch(DELETE_PRODUCT_ERROR(error.response.data.error))
    }
}