import { createSlice } from "@reduxjs/toolkit";

const orderReducer=createSlice({
    name:'Order',
    initialState:{
        loading:false,
        error:null,
        success:false,
        orders:null
    },
    reducers:{
        ORDER_REQUEST:(state)=>{
            state.loading=true
        },
        CREATE_NEW_ORDER:(state,action)=>{
            state.loading=false;
            state.success=action.payload;
            state.error=null
        },
        LOAD_ORDERS:(state,action)=>{
            state.orders=action.payload;
            state.loading=false;
            state.error=null
        },
        ORDER_ERROR:(state,action)=>{
            state.error=action.payload
        },
        ORDER_RESET:(state)=>{
            state.error=null;
            state.success=false;
        }
    }
})
export const orderDetailReducer=createSlice({
    name:"OrderDetails",
    initialState:{
        order:null,
        loading:false,
        error:null,
        isUpdated:false
    },
    reducers:{
        ORDER_DETAIL_REQUEST:(state)=>{
            state.loading=true;
        },
        ORDER_DETAIL_SUCCESS:(state,action)=>{
            state.loading=false;
            state.order=action.payload;
        },
        ORDER_DETAIL_ERROR:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        ORDER_DETAIL_RESET:(state)=>{
            state.error=null;
            state.isUpdated=false;
        },
        ORDER_DETAIL_UPDATE_SUCCESS:(state,action)=>{
            state.loading=false;
            state.isUpdated=true;
            state.order=action.payload;
        }
    }
})
export const {ORDER_DETAIL_ERROR,ORDER_DETAIL_SUCCESS,ORDER_DETAIL_RESET,ORDER_DETAIL_REQUEST,ORDER_DETAIL_UPDATE_SUCCESS}=orderDetailReducer.actions
export const {ORDER_ERROR,ORDER_REQUEST,ORDER_RESET,CREATE_NEW_ORDER,LOAD_ORDERS}=orderReducer.actions
export default orderReducer.reducer