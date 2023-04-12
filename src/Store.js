import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redusers/productReducer";
import userReducer from "./redusers/userReducer";

const Store = configureStore({
    reducer: {
        Product: productReducer,
        User: userReducer
    }
})
export default Store