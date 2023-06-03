import React,{useEffect, useState} from 'react'
import './seller.css'
import { useDispatch, useSelector } from 'react-redux'
import { makeMeSeller } from '../../actions/userAction'
import { useNavigate } from 'react-router-dom'
const Seller = () => {
    const dispatch=useDispatch()
    const {isUpdated}=useSelector(state=>state.User)
    const navigate=useNavigate()
    const [pan,setPan]=useState('')
    const submit=()=>{
        if(isValidPan(pan)){
            const myForm=new FormData()
            myForm.set('pan',pan)
            dispatch(makeMeSeller(myForm));
        }else{
            console.log('no');
        }
    }
    useEffect(()=>{
        if(isUpdated){
            navigate('/',{replace:true})
        }
    },[isUpdated,navigate])
    return (
        <>
            <div className="sellerPage">
                <div className="sellerCenter">
                    <div className='sellerTop'>
                        <h2 id='sellerHading'>Become A Seller</h2>
                    </div>
                    <div className='sellerMiddle'>
                        <label htmlFor="pan">Enter Pan Number</label>
                        <input type="text" name='pan' value={pan} onChange={(e)=>{setPan(e.target.value)}} placeholder='VWXYZ0987A' />
                        <button type='button' onClick={submit} disabled={!pan} >Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function isValidPan(pan){
    let regex=new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    if(!pan){
        return false
    }
    if(regex.test(pan)===true){
        return true
    }
    else{
        return false
    }
}
export default Seller