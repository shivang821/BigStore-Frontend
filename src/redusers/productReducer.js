import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
    name: 'product',
    initialState: { success: false, error: null, product: null, loading: false },
    reducers: {
        PRODUCT_REQUEST: (state) => {
            state.loading = true;
            state.success = false;
        },
        PRODUCT_SUCCESS: (state, action) => {
            state.loading = false;
            state.product = action.payload;
            state.success = true;
        },
        PRODUCT_FAIL: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        },
        PRODUCT_RESET: (state) => {
            state.error = null;
            state.loading = false;
            state.success = false;
        }
    }
})

export const newProduct = createSlice({
    name: 'NewProduct',
    initialState: {
        loading: false,
        error: null,
        newProduct: null,
        success: null
    },
    reducers: {
        NEW_PRODUCT_REQUEST: (state) => {
            state.loading = true;
            state.success = false;
        },
        NEW_PRODUCT_SUCCESS: (state, action) => {
            state.newProduct = action.payload.product
            state.loading = false
            state.success = action.payload.success
        },
        NEW_PRODUCT_FAIL: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        NEW_PRODUCT_RESET: (state, action) => {
            state.success = false
        },
        CLEAR_ERROR: (state) => {
            state.error = null
        }
    }
})
export const productDetails=createSlice({
    name:"productDetail",
    initialState:{
        error:null,
        loading:false,
        pDetails:null,
        success:false
    },
    reducers:{
        PRODUCT_DETAIL_REQUEST:(state)=>{
            state.loading=true;
        },
        PRODUCT_DETAIL_SUCCESS:(state,action)=>{
            state.loading=false;
            state.pDetails=action.payload;
            state.success=true;
        },
        PRODUCT_DETAIL_FAIL:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        PRODUCT_DETAIL_RESET:(state)=>{
            console.log('hi');
            state.error=null;
            state.success=false;
        }
    }
})
export const updateProductReducer=createSlice({
    name:"UpdateProduct",
    initialState:{
        success:false,
        error:null,
        loading:false
    },
    reducers:{
        UPDATE_PRODUCT_REQUEST:(state)=>{
            state.loading=true;
        },
        UPDATE_PRODUCT_SUCCESS:(state)=>{
            state.success=true;
        },
        UPDATE_PRODUCT_ERROR:(state,action)=>{
            state.error=action.payload
        },
        UPDATE_PRODUCT_RESET:(state)=>{
            state.error=null;
            state.success=false;
        }
    }
})
export const{UPDATE_PRODUCT_ERROR,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_RESET,UPDATE_PRODUCT_SUCCESS}=updateProductReducer.actions
export const { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_RESET, PRODUCT_SUCCESS } = productReducer.actions
export const { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_RESET, PRODUCT_DETAIL_SUCCESS } = productDetails.actions
export const { NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_RESET, CLEAR_ERROR } = newProduct.actions
export default productReducer.reducer