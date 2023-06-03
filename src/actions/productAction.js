import { NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../redusers/productReducer"
import axios from "axios";
export const getProducts = (query) => async(dispatch) => {
    try {
        dispatch(PRODUCT_REQUEST());
        if (query.category === undefined) {
            query.category = 'all';
        }
        // const url=`/api/product?${query.category&&'category':query.category}`
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.get(`/api/product?category=${query.category}`)
        console.log(data.products);
        dispatch(PRODUCT_SUCCESS(data.products));

    } catch (error) {
        console.log(error);
        dispatch(PRODUCT_FAIL(error.response.data.message))
    }
}
export const createProduct = (productData) => async(dispatch) => {
    try {
        dispatch(NEW_PRODUCT_REQUEST())
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post('/api/create/product', productData, config)
        dispatch(NEW_PRODUCT_SUCCESS(data))
    } catch (error) {
        console.log(error);
        dispatch((NEW_PRODUCT_FAIL(error.response.data.error)))
    }
}

export const productDetail=(id)=>async(dispatch)=>{
    try {
        dispatch(PRODUCT_DETAIL_REQUEST());
        const {data}=await axios.get(`/api/product/${id}`)
        dispatch(PRODUCT_DETAIL_SUCCESS(data.product))
    } catch (error) {
        dispatch(PRODUCT_DETAIL_FAIL(error.response.data.error))
    }
}