import axios from "axios"
import { LOGOUT_FAIL, LOGOUT_SUCCESS, USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../redusers/userReducer"
export const login = (user) => async(dispatch) => {
    try {
        dispatch(USER_REQUEST());
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post('/api/login', user, config);
        dispatch(USER_SUCCESS(data.user));
    } catch (error) {
        console.log(error.response.data.error);
        dispatch(USER_FAIL(error.response.data.error))
    }
}
export const loadUser = () => async(dispatch) => {
    try {
        dispatch(USER_REQUEST());
        const { data } = await axios.get('/api/me')
        dispatch(USER_SUCCESS(data.user));
    } catch (error) {
        dispatch(USER_FAIL(error.response.data.error))
    }
}
export const logout = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/api/logout');
        dispatch(LOGOUT_SUCCESS())
    } catch (error) {
        dispatch(LOGOUT_FAIL(error.response.data.error))
    }
}

export const signup = (user) => async(dispatch) => {
    try {
        console.log(user.get('name'));
        dispatch(USER_REQUEST());
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post('/api/signup', user, config);
        dispatch(USER_SUCCESS(data.user))
    } catch (error) {
        dispatch(USER_FAIL(error.response.data.error))
    }
}