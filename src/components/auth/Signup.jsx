import React from 'react'
import './signup.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signup } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { USER_RESET } from '../../redusers/userReducer'
import { useEffect } from 'react'
const Signup = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {error,isAuthenticate}=useSelector(state=>state.User)
    const [userData,setUserData]=useState({
        email:'',
        password:'',
        name:''
    })
    const handleChange=(e)=>{
        setUserData((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    const signupUser=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.set('email',userData.email);
        formData.set('name',userData.name);
        formData.set('password',userData.password);
        dispatch(signup(formData))
        
    }
    useEffect(()=>{
        if(error){
            console.log(error);
            dispatch(USER_RESET());
        }
        if(isAuthenticate){
            navigate('/',{replace:true})
        }
    },[error,isAuthenticate])
    return (
        <>
            <div className="signup">
                <form className="signup1" onSubmit={(e)=>signupUser(e)}>
                    <div className="signupTop">
                        <h1>Big Store</h1>
                    </div>
                    <div className="signupMiddle">
                        <input required type="text" name="name" value={userData.name} onChange={(e) => handleChange(e)}placeholder='Name' id="" />
                        <input required value={userData.email} autoComplete='off' onChange={(e) => handleChange(e)} type="text" name="email" placeholder='Email' />
                        <input required value={userData.password} onChange={(e) => handleChange(e)} type="password" name="password" placeholder='Password' />
                        <button type='submit' >Signup</button>
                    </div>
                    <div className="signupBottom">
                        <div className="option">
                            <div></div>
                            <p>or</p>
                            <div></div>
                        </div>
                        <div className="singupOption">
                            <p>Already have an account?</p>
                            <NavLink to='/login' >Login</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup