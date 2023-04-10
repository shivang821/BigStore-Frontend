import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../redusers/productReducer"
import axios from "axios";
export const getProducts = (query) => async(dispatch) => {
    try {
        console.log(query);
        console.log(query);
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