import './App.css'
import React, { useEffect } from 'react'
import Header from './components/header/Header';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import { Suspense } from 'react';
import ProductDetails from './components/product/productDetails/ProductDetails.jsx';
import Login from './components/auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import Signup from './components/auth/Signup';
import { USER_RESET } from './redusers/userReducer';
const Product = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/product/Product')), 1000);
  })
})

function App() {
  const {error}=useSelector(state=>state.User)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
    if(error){
      dispatch(USER_RESET())
    }
  },[])
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div style={{zIndex:'200',position:'absolute',top:'7vh',left:'0', height: "10rem", width: '100%', backgroundColor: 'red' }}></div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
