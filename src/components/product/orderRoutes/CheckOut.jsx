import React, { useEffect, useState } from 'react'
import './checkout.css'
import { updateUser } from '../../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import PublicIcon from '@mui/icons-material/Public';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../../../../src/images/sqlogo.jpg'
import { createNewOrder, orderReset } from '../../../actions/orderAction';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { user } = useSelector(state => state.User)
    const [isChanged, setIsChanged] = useState(false)
    const {success}=useSelector(state=>state.Order);
    const [shippingDetail, setShippingDetail] = useState({
        country: "",
        state: "",
        district: "",
        city: "",
        address: "",
        contact: ""
    })
    const itemsArray = JSON.parse(localStorage.getItem("itemsArray") || '[]')
    let totalPrice = 0;
    itemsArray.forEach((item) => {
        totalPrice +=item.qty*item.price
    })
    const shippingCharge = totalPrice > 999 ? 0 : 99;
    totalPrice += shippingCharge
    const handleChange = (e) => {
        setIsChanged(true)
        setShippingDetail((old) => {
            return { ...old, [e.target.name]: e.target.value }
        })
    }
    useEffect(() => {
        if (user) {
            setShippingDetail(user.shippingDetails)
        }
    }, [user])
    const saveUser = () => {
        dispatch(updateUser(shippingDetail))
        setIsChanged(!isChanged)
    }
    let disabledPay = false;
    if (user) {
        disabledPay = user.shippingDetails.city && user.shippingDetails.state && user.shippingDetails.country && user.shippingDetails.district && user.shippingDetails.contact && user.shippingDetails.address
    }
    const createOrder = async () => {
        const body = { amount: totalPrice }
        const config = { headers: { "Content-Type": "application/json" } }
        const { data: { order } } = await axios.post('/api/checkout', body, config)
        const { data: { key } } = await axios.get('/api/key')
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "BigStore",
            description: "BigStore Payment",
            image: {logo},
            order_id: order.id,
            callback_url: "/api/payment-verification",
            handler: function (response) {
                const data = { itemsArray, totalPrice,paymentDetails:response,shippingDetail }
                dispatch(createNewOrder(data))
                localStorage.removeItem('itemsArray')
                navigate('/success')
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: shippingDetail.contact
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                color: "#f4a424"
            }
        };
        const razor = window.Razorpay(options)
        razor.open()
    }
    return (
        <div className='checkOut1' >
            <div className="checkOut11">
                <div className="checkOut111">
                    <div className="shippingDetails"><h2>Shipping Details</h2></div>
                    <div className="checkOut1111">
                        <div className="checkOut11111">
                            <div> <PublicIcon /> <input required={true} onChange={(e) => handleChange(e)} type="text" value={shippingDetail.country} name='country' placeholder='Country' /></div>
                            <div> <DomainAddIcon /> <input required={true} onChange={(e) => handleChange(e)} type="text" value={shippingDetail.state} name='state' placeholder='State' /></div>
                            <div> <LocationCityIcon /> <input required={true} onChange={(e) => handleChange(e)} type="text" value={shippingDetail.district} name='district' placeholder='District' /></div>
                        </div>
                        <div className="checkOut11112">
                            <div> <HomeWorkIcon /> <input required={true} onChange={(e) => handleChange(e)} type="text" value={shippingDetail.city} name='city' placeholder='City' /></div>
                            <div> <HomeIcon /> <input required={true} onChange={(e) => handleChange(e)} type="text" value={shippingDetail.address} name='address' placeholder='Address' /></div>
                            <div> <PhoneIcon /> <input required={true} onChange={(e) => handleChange(e)} type="number" value={shippingDetail.contact} name='contact' placeholder='Contact No.' /></div>
                        </div>
                    </div>
                    <div className="checkOut1112">
                        <button disabled={!isChanged} onClick={saveUser} >Save</button>
                    </div>
                </div>
            </div>
            <div className="checkOut12">
                <div className="checkOut121">
                    <div>
                        <div>
                            <h3>Total Items </h3>
                        </div>
                        <div>
                            <h3>:</h3>
                        </div>
                        <div>
                            <h3>{itemsArray.length}</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Shipping Charge </h3>
                        </div>
                        <div>
                            <h3>:</h3>
                        </div>
                        <div>
                            <h3>{shippingCharge}</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Total Amount </h3>
                        </div>
                        <div>
                            <h3>:</h3>
                        </div>
                        <div>
                            <h3>₹ {totalPrice}  /- </h3>
                        </div>
                    </div>
                </div>
                <div className="checkOut122">
                    <button disabled={!disabledPay} onClick={createOrder}>Proceed To Pay</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout