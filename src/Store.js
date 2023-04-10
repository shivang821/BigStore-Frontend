import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redusers/productReducer";

const Store = configureStore({
    reducer: {
        Product: productReducer
    }
})
export default Store