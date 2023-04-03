import './App.css'
// import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
// import { useEffect } from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
