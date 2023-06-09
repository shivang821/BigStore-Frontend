import React from 'react'
import { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './success.css'
const Success = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (!location.state) {
            navigate('/', { replace: true });
        }
    }, [])
    return (
        <div className='success'>
            <CheckCircleIcon />
            <h3>Order Successful</h3>
            <Link to='/myorder' replace >
                <button>My Orders</button>
            </Link>
        </div>
    )
}

export default Success