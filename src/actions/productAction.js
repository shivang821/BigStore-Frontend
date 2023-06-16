import { NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../redusers/productReducer"
import axios from "axios";
export const getProducts = (query) => async(dispatch) => {
    try {
        if(query.category){
            query.category?query.category=query.category.toUpperCase():query.keyword=query.keyword.toUpperCase()
            dispatch(PRODUCT_REQUEST());
            if (query.category === "UNDEFINED") {
                query.category = 'all';
            }
            const url=`/api/product?category=${query.category}&lt=${query.lt}&gt=${query.gt}&sort=${query.sort  }`
            const { data } = await axios.get(url)
            if(data){
                setTimeout(()=>{
                    dispatch(PRODUCT_SUCCESS(data.products));
                },2500)
            }
        }
        else if(query.keyword){
            dispatch(PRODUCT_REQUEST());
            if (query.keyword === undefined) {
                query.keyword = 'all';
            }
            const {keyword,lt,gt,sort}=query;
            const url=`/api/search-result?keyword=${keyword}&gt=${gt}&lt=${lt}&sort=${sort}`
            const { data } = await axios.get(url)
            dispatch(PRODUCT_SUCCESS(data.products));
        }

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
export const submitReview=(id,body)=>async(dispatch)=>{
    try {
        dispatch(PRODUCT_DETAIL_REQUEST())
        const {data}=await axios.patch(`/api/submit-review/${id}`,body,{headers:{'Content-Type':'application/json'}})
        dispatch(PRODUCT_DETAIL_SUCCESS(data.product))
    } catch (error) {
        dispatch(PRODUCT_DETAIL_FAIL(error.response.data.error))
    }
}
export const updateProduct=(id,data)=>async(dispatch)=>{
    try {
        dispatch(UPDATE_PRODUCT_REQUEST())
        const {date}=await axios.patch(`/api/product/${id}`,data,{headers:{'Content-Type':'application/json'}})
        dispatch(UPDATE_PRODUCT_SUCCESS())
    } catch (error) {
        dispatch(UPDATE_PRODUCT_ERROR())
    }
}