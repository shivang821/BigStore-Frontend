import './App.css'
// import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
// import { useEffect } from 'react';
import Header from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import Product from './components/product/Product.jsx'
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />

      </Routes>
    </div>
  )
}

export default App
