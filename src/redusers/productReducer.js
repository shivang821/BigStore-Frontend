import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
    name: 'product',
    initialState: { success: false, error: null, product: null, loading: false },
    reducers: {
        PRODUCT_REQUEST: (state) => {
            state.loading = true
        },
        PRODUCT_SUCCESS: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        },
        PRODUCT_FAIL: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        PRODUCT_RESET: (state) => {
            state.error = null;
            state.loading = false;
        }
    }
})
export const { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_RESET, PRODUCT_SUCCESS } = productReducer.actions
export default productReducer.reducer