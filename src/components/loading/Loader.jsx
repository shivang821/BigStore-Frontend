import React from 'react'
import './loader.css'
import { HashLoader } from 'react-spinners'
const Loader = () => {
  return (
    <div className='loader'>
            <HashLoader color="#f4a424" />
    </div>
  )
}

export default Loader