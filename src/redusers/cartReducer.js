import { createSlice } from '@reduxjs/toolkit';

const cartReducer = createSlice({
	name: 'Cart',
	initialState: {
		cartItems: [],
        error:null,
        loading:false
	},
	reducers: {
        ADD_TO_CART_REQUEST:(state)=>{
            state.loading=true
        },
		ADD_TO_CART: (state, action) => {
            state.loading=false;
			state.cartItems =action.payload;
		},
		REMOVE_FROM_CART: (state, action) => {
          state.cartItems=action.payload;
		  state.loading=false;
		  state.error=false;
		},
		LOAD_CART: (state, action) => {
            state.loading=false;
			state.cartItems = action.payload;
		},
		CART_ERROR: (state,action) => {
            state.loading=false;
            state.error=action.payload
        },
        RESET_CART_ERROR:(state)=>{
            state.error=null;
        }
	}
});
export const { ADD_TO_CART, REMOVE_FROM_CART,ADD_TO_CART_REQUEST,CART_ERROR,RESET_CART_ERROR ,LOAD_CART} = cartReducer.actions;
export default cartReducer.reducer;
