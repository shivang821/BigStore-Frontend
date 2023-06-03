import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productDetails } from "./redusers/productReducer";
import userReducer from "./redusers/userReducer";
import { newProduct } from "./redusers/productReducer";

const Store = configureStore({
    reducer: {
        Product: productReducer,
        User: userReducer,
        NewProduct: newProduct.reducer,
        ProductDetails:productDetails.reducer
    }
})
export default Store