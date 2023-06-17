
import './App.css'
import React, { useEffect } from 'react'
// import dotenv from  'dotenv'
// dotenv.config({path:'../.env'})
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
import DashboardLayout from './components/dashboard/DashboardLayout';
import { Dashboard } from './components/dashboard/Dashboard';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import CreateProduct from './components/dashboard/NewProduct/CreateProduct.jsx'
import Seller from './components/BecomeASeller/Seller';
import AddToCart from './components/product/AddToCart/AddToCart';
import { loadCart } from './actions/cartAction';
import Checkout from './components/product/orderRoutes/CheckOut';
import Success from './components/product/orderRoutes/Success';
import Myorder from './components/myorder/Myorder';
import Myproducts from './components/dashboard/Myproducts/Myproducts';
import UpdateProduct from './components/dashboard/updateProduct/UpdateProduct';
import Orders from './components/dashboard/orders/Orders';
import UpdateOrder from './components/dashboard/orders/UpdateOrder';
import Product from './components/product/Product'
import Profile from './components/Profile/Profile';
import UpdateUser from './components/Profile/UpdateUser';

function App() {
  const { error } = useSelector(state => state.User)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    if (error) {
      dispatch(USER_RESET())
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div style={{ zIndex: '200', position: 'absolute', top: '7vh', left: '0', height: "10rem", width: '100%', backgroundColor: 'red' }}></div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/becomeaseller' element={<Seller />} />
          <Route path='/cart' element={<AddToCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success' element={<Success/>} />
          <Route path='/myorder' element={<Myorder/>} />
          <Route path='/account/me' element={<Profile/>} />
          <Route path='/update/me' element={<UpdateUser/>} />
          <Route path={'/dashboard/'} element={<ErrorPage />} />
          <Route exact path='/dashboard/' element={<DashboardLayout />} >
            <Route path='home' element={<Dashboard />} />
            <Route path='products' element={<Myproducts />} />
            <Route path='create/new/product' element={<CreateProduct />} />
            <Route path='update-product/:id' element={<UpdateProduct />} />
            <Route path='order/:id' element={<UpdateOrder />} />
            <Route path='orders' element={<Orders/>} />
          </Route>
          <Route path={'/*'} element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
