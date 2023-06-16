import React from 'react'
import { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './success.css'
const Success = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
    }, [])
    const navigateTo=()=>{
        navigate('/myorder')
    }
    return (
        <div className='success'>
            <CheckCircleIcon />
            <h3>Order Successful</h3>
                <button onClick={navigateTo} >My Orders</button>
        </div>
    )
}

export default Success