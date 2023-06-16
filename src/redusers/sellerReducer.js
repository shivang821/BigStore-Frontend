import { createSlice } from "@reduxjs/toolkit";

const sellerReducer=createSlice({
    name:'Seller',
    initialState:{
        orders:null,
        products:null,
        loading:false,
        error:null
    },
    reducers:{
        SELLER_REQUEST:(state)=>{
            state.loading=true;
        },
        SELLER_SUCCESS:(state,action)=>{
            state.loading=false;
            state.orders=action.payload.orders;
            state.products=action.payload.products
            state.error=null
        },
        SELLER_ERROR:(state,action)=>{
            state.error=action.payload
        },
        SELLER_RESET:(state)=>{
            state.error=null
        }
    }
})
export const deleteProductreducer=createSlice({
    name:'DeleteProduct',
    initialState:{
        loading:false,
        error:null,
        success:false
    },
    reducers:{
        DELETE_PRODUCT_REQUEST:(state)=>{
            state.loading=true;
        },
        DELETE_PRODUCT_SUCCESS:(state,action)=>{
            state.loading=false;
            state.success=action.payload;
            state.error=null;
        },
        DELETE_PRODUCT_ERROR:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        RESET_DELETE_PRODUCT:(state)=>{
            state.error=null;
            state.success=false;
        }
    }

})
export const {SELLER_ERROR,SELLER_REQUEST,SELLER_RESET,SELLER_SUCCESS}=sellerReducer.actions;
export const {DELETE_PRODUCT_ERROR,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,RESET_DELETE_PRODUCT}=deleteProductreducer.actions;
export default sellerReducer.reducer