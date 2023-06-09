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
            state.success=true;
            state.loading=false;
            state.error=null
        },
        ORDER_ERROR:(state,action)=>{
            state.error=action.payload
        },
        ORDER_RESET_ERROR:(state)=>{
            state.error=null;
        }
    }
})

export const {ORDER_ERROR,ORDER_REQUEST,ORDER_RESET_ERROR,CREATE_NEW_ORDER,LOAD_ORDERS}=orderReducer.actions
export default orderReducer.reducer