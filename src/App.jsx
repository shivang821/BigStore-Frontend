import './App.css'
import React from 'react' 
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import { Suspense } from 'react';
// import Product from './components/product/Product';
const Product = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/product/Product')), 1000);
  })
})
function App() {
  return (
    <Suspense fallback={<div style={{height:"10rem",width:'100%',backgroundColor:'red'}}></div>}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/?' element={<Product />} />

        </Routes>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
