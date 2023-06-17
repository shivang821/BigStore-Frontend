import React, { useEffect, useState } from 'react'
import './updateUser.css'
import { useDispatch, useSelector } from 'react-redux';
import PublicIcon from '@mui/icons-material/Public';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import { updateUser } from '../../actions/userAction';
import { useAlert } from 'react-alert';
const UpdateUser = () => {
    const { user,loading } = useSelector(state => state.User)
    const [isChanged, setIsChanged] = useState(false)
    const dispatch = useDispatch()
    const alert=useAlert()
    const [shippingDetail, setShippingDetail] = useState({
        country: "",
        state: "",
        district: "",
        city: "",
        address: "",
        contact: ""
    })
    const handleChange = (e) => {
        setIsChanged(true)
        setShippingDetail((old) => {
            return { ...old, [e.target.name]: e.target.value }
        })
    }
    const saveUser = () => {
        dispatch(updateUser(shippingDetail))
        setIsChanged(!isChanged)
        alert.success('Shipping Details Updated')
    }
    useEffect(() => {
        if (user) {
            setShippingDetail(user.shippingDetails)
        }
    }, [user,loading])
    return (
        <div className="updateUser">
            <div className='updateUser1'>

                <div className="shippingDetails"><h2>Update Shipping Details</h2></div>
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
    )
}

export default UpdateUser