import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './dashboardLayout.css'
import { Dashboard } from './Dashboard.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSellerData } from '../../actions/sellerAction'
import { useAlert } from 'react-alert'
import { RESET_DELETE_PRODUCT } from '../../redusers/sellerReducer'
import { UPDATE_PRODUCT_RESET } from '../../redusers/productReducer'
const DashboardLayout = () => {
    const dispatch = useDispatch()
    const { success } = useSelector(state => state.DeleteProduct)
    const {success:updateSuccess}=useSelector(state=>state.UpdateProduct)
    const alert=useAlert()
    useEffect(() => {
        dispatch(loadSellerData())
        if (success) {
            alert.success('product deleted')
            dispatch(RESET_DELETE_PRODUCT())
        }
        if(updateSuccess){
            alert.success('product updated')
            dispatch(UPDATE_PRODUCT_RESET())
        }
    }, [success,updateSuccess])
    return (
        <>
            <div className="dashBoardLayout">
                <Sidebar />
                <Outlet />
                {/* <Dashboard/> */}
            </div>
        </>
    )
}

export default DashboardLayout