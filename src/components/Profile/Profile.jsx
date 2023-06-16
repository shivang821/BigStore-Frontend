import React, { useState } from 'react'
import './profile.css'
import { useSelector } from 'react-redux'
const Profile = () => {
    const {user}=useSelector(state=>state.User)
  return (
    <div className='profile'>
        <div className="profile1">
            <div className='profile11'><h3>Personal Details</h3></div>
            <div className='personalDetailDiv'>
                <div>Name</div>
                <div>:</div>
                <div>{user&&user.name}</div>
            </div>
            <div className='personalDetailDiv'>
                <div>Email</div>
                <div>:</div>
                <div>{user&&user.email}</div>
            </div>
            <div className='personalDetailDiv'>
                <div>Account Type</div>
                <div>:</div>
                <div>{user&&user.role}</div>
            </div>
        </div>
        <div className="profile2">
            <div className='profile21'><h3>Shipping Details</h3></div>
            <div className="shippingDetailDiv">
                <div>Address</div>
                <div>:</div>
                <div>{user&&user.shippingDetails.address}</div>
            </div>
            <div className="shippingDetailDiv">
                <div>City</div>
                <div>:</div>
                <div>{user&&user.shippingDetails.city}</div>
            </div>
            <div className="shippingDetailDiv">
                <div>District</div>
                <div>:</div>
                <div>{user&&user.shippingDetails.district}</div>
            </div>
            <div className="shippingDetailDiv">
                <div>State</div>
                <div>:</div>
                <div>{user&&user.shippingDetails.state}</div>
            </div>
            <div className="shippingDetailDiv">
                <div>Country</div>
                <div>:</div>
                <div>{user&&user.shippingDetails.country}</div>
            </div>
            <div className="shippingDetailDiv">
                <div>Contact No.</div>
                <div>:</div>
                <div>{user&&user.shippingDetails.contact}</div>
            </div>
        </div>
    </div>
  )
}

export default Profile