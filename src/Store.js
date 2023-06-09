import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productDetails } from "./redusers/productReducer";
import userReducer from "./redusers/userReducer";
import { newProduct } from "./redusers/productReducer";
import cartReducer from "./redusers/cartReducer";
import itemsArrayReducer from "./redusers/itemsArrayReducer";
import orderReducer from "./redusers/orderReducer";

const Store = configureStore({
    reducer: {
        Product: productReducer,
        User: userReducer,
        NewProduct: newProduct.reducer,
        ProductDetails:productDetails.reducer,
        Cart:cartReducer,
        ItemsArray:itemsArrayReducer,
        Order:orderReducer
    }
})
export default Store