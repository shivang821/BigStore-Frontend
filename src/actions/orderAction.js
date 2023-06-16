import axios from 'axios';
import {
	CREATE_NEW_ORDER,
	LOAD_ORDERS,
	ORDER_DETAIL_ERROR,
	ORDER_DETAIL_REQUEST,
	ORDER_DETAIL_SUCCESS,
	ORDER_DETAIL_UPDATE_SUCCESS,
	ORDER_ERROR,
	ORDER_REQUEST,
	ORDER_RESET
} from '../redusers/orderReducer';

export const createNewOrder = (myForm) => async (dispatch) => {
	try {
		dispatch(ORDER_REQUEST());
		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.post('/api/new/order', myForm, config);
		dispatch(CREATE_NEW_ORDER(data.success));
	} catch (error) {
		dispatch(ORDER_ERROR(error.response.data.error));
	}
};
export const loadOrder = () => async (dispatch) => {
	try {
		dispatch(ORDER_REQUEST());
		const { data } = await axios.get('/api/order');
		dispatch(LOAD_ORDERS(data.orders));
	} catch (error) {
		dispatch(ORDER_ERROR(error.response.data.error));
	}
};
export const getOrderDetails = (id) => async (dispatch) => {
	try {
		dispatch(ORDER_DETAIL_REQUEST());
		const { data } = await axios.get(`/api/order/${id}`);
		dispatch(ORDER_DETAIL_SUCCESS(data.order));
	} catch (error) {
        dispatch(ORDER_DETAIL_ERROR(error.response.data.error))
    }
};
export const updateOrder=(id,body)=>async(dispatch)=>{
    try {
        dispatch(ORDER_DETAIL_REQUEST())
        const {data}=await axios.patch(`/api/order/${id}`,body,{headers:{'Content-Type':'application/json'}})
        dispatch(ORDER_DETAIL_UPDATE_SUCCESS(data.order))
    } catch (error) {
        dispatch(ORDER_DETAIL_ERROR(error.response.data.error))
    }
}
export const orderReset = () => (dispatch) => {
	dispatch(ORDER_RESET());
};
