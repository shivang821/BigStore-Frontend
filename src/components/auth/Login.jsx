import React, { useState } from 'react'
import './login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userAction'
import { useEffect } from 'react'
import { USER_RESET } from '../../redusers/userReducer'
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user,isAuthenticate,error}=useSelector(state=>state.User)
    const [userData,setUserData]=useState({
        email:"",
        password:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUserData((pre)=>{
            return{
                ...pre,
                [name]:value
            }
        })
    }
    const loginUser=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.set('email',userData.email)
        formData.set('password',userData.password);
        dispatch(login(formData))
    }
    useEffect(()=>{
        if(error){
            dispatch(USER_RESET())
        }
        if(isAuthenticate){
            navigate('/',{replace:true})
        }
    },[isAuthenticate,error])
  return (
    <>
    <div className="login">
        <form onSubmit={(e)=>{loginUser(e)}} className="login1">
            <div className="loginTop">
                <h1>Big Store</h1>
            </div>
            <div className="loginMiddle">
                <input required value={userData.email} autoComplete="off" onChange={(e)=>handleChange(e)} type="text" name="email"  placeholder='Email' />
                <input required value={userData.password} onChange={(e)=>handleChange(e)} type="password" name="password" placeholder='Password' />
                <button type='submit'>Login</button>
            </div>
            <div className="loginBottom">
                <div className="option">
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <div className="singupOption">
                    <p>Don't have an account?</p>
                    <NavLink to='/signup' >Signup</NavLink>
                </div>
            </div>
        </form >
    </div>
    </>
  )
}

export default Login