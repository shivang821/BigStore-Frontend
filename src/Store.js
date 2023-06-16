import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productDetails, updateProductReducer } from "./redusers/productReducer";
import userReducer from "./redusers/userReducer";
import { newProduct } from "./redusers/productReducer";
import cartReducer from "./redusers/cartReducer";
import itemsArrayReducer from "./redusers/itemsArrayReducer";
import orderReducer, { orderDetailReducer } from "./redusers/orderReducer";
import sellerReducer, { deleteProductreducer } from "./redusers/sellerReducer";

const Store = configureStore({
    reducer: {
        Product: productReducer,
        User: userReducer,
        NewProduct: newProduct.reducer,
        ProductDetails:productDetails.reducer,
        Cart:cartReducer,
        ItemsArray:itemsArrayReducer,
        Order:orderReducer,
        Seller:sellerReducer,
        DeleteProduct:deleteProductreducer.reducer,
        UpdateProduct:updateProductReducer.reducer,
        OrderDetail:orderDetailReducer.reducer
    }
})
export default Store