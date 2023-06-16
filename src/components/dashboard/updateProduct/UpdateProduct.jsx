import React, { useEffect, useState } from 'react'
import './updateProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import StorageIcon from '@mui/icons-material/Storage';
import { productDetail } from '../../../actions/productAction';
import { updateProduct } from '../../../actions/productAction';
import { PRODUCT_DETAIL_RESET } from '../../../redusers/productReducer';
const UpdateProduct = () => {
    const { id } = useParams()
    const { pDetails, error, loading } = useSelector(state => state.ProductDetails)
    const dispatch = useDispatch()
    const [stock, setStock] = useState()
    const [price, setPrice] = useState()
    const [newPrice,setNewPrice]=useState("")
    const [newStock,setNewStock]=useState("")
    const {success}=useSelector(state=>state.UpdateProduct)
    const navigate=useNavigate()
    useEffect(() => {
        if (!pDetails) {
            dispatch(productDetail(id))
        } else {
            setPrice(pDetails.price)
            setStock(pDetails.stock)
        }
        if(success){
            navigate('/dashboard/products')
            dispatch(PRODUCT_DETAIL_RESET())
        }
    },[pDetails,success,id])
    const update=()=>{
        let updatePrice=newPrice===""?price:newPrice
        let updateStock=newStock===""?stock:newStock
        const myForm=new FormData()
        myForm.set('price',updatePrice)
        myForm.set('stock',updateStock)
        dispatch(updateProduct(id,myForm))
    }
    return (
        <div className='updateProduct' >
            <div className="updateProductCenter">
                    <div className='updateProductHeading' >
                        <h2>Update Product</h2>
                    </div>
                    <div>
                        <StorageIcon />
                        <label htmlFor="stock">Stock</label>
                        <input type="number" name='stock' placeholder={stock} required value={newStock} onChange={(e) => { setNewStock(e.target.value) }} />
                    </div>
                    <div>
                        < AttachMoneyOutlinedIcon />
                        <label htmlFor="price">Price</label>
                        <input type="number" name='price' placeholder={price} required value={newPrice} onChange={(e) => { setNewPrice(e.target.value) }} />
                    </div>
                    <div className='updateButton' onClick={update} >
                        <button>Update</button>
                    </div>
            </div>
        </div>
    )
}

export default UpdateProduct