import React, { useState } from 'react'
import './createProduct.css'
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../../actions/productAction';
import { useEffect } from 'react';
import { CLEAR_ERROR } from '../../../redusers/productReducer';
const CreateProduct = () => {
    const dispatch=useDispatch()
    const {newProduct,error,success,loading}=useSelector(state=>state.NewProduct)
    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [stock, setStock] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])
    const [imagesPreview, setImagesPreview] = useState([])
    const addCategory = () => {
        setCategories((pre) => [...pre, category])
        setCategory('')
    }
    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files)
        files.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImages((old) => [...old, reader.result])
                    setImagesPreview((old) => [...old, reader.result])
                }
            }
            reader.readAsDataURL(file)
        })
    }
    function removeCategory(i){
        const arr=categories.filter((item)=>{
            return item!==categories[i];
        })
        setCategories(arr)
    }
    function removeImage(i){
        const arr=images.filter((item,j)=>{
            return j!==i&&item;
        })
        setImages(arr)
    }
    const submit=(e)=>{
        e.preventDefault();
        let myForm=new FormData()
        myForm.set('desc',desc)
        myForm.set('name',name)
        myForm.set('stock',stock)
        myForm.set('price',price)
        categories.forEach((item)=>{
            myForm.append('category',item)
        })
        images.forEach((item)=>{
            myForm.append('images',item)
        })
        dispatch(createProduct(myForm))
    }
    let createDisable=images.length>0&&categories.length>0&&price&&stock&&name&&desc;
    useEffect(()=>{
        if(success){
            console.log('created');
        }
        if(error){
            console.log("error");
        }
        dispatch(CLEAR_ERROR())
    },[error,success])
    return (
        <div className='newProduct' >
            <form className="newProduct1" onSubmit={submit} encType='multipart/form-data'>
                <div className="newProduct11">
                    <div className="newProduct111" >
                        <div className="createProductHeading">
                            <h2>Crete a Product</h2>
                        </div>
                        <div>
                            <SpellcheckIcon />
                            <input type="text" placeholder='Product Name' required value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div>
                            <DescriptionIcon />
                            <input type="text" placeholder='Product Description' required
                                value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                        </div>
                        <div>
                            <StorageIcon />
                            <input type="number" placeholder='Stock' required value={stock} onChange={(e) => { setStock(e.target.value) }} />
                        </div>
                        <div>
                            < AttachMoneyOutlinedIcon />
                            <input type="number" placeholder='Price' required value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                        <div>
                            < CategoryIcon />
                            <input type="text" placeholder='Category' required value={category} onChange={(e) => { setCategory(e.target.value) }} />
                            <button type='button' disabled={category ? false : true} className="addCategory" onClick={addCategory} >Add</button>
                        </div>
                        <div id='createProductFormFile'>
                            <CloudUploadIcon />
                            <label htmlFor="productImage">Upload Product Images</label>
                            <input type="file" style={{ visibility: "hidden" }} id='productImage' placeholder='Select Images' required accept='images/*' multiple
                                onChange={(e) => { createProductImagesChange(e); }} />
                        </div>

                    </div>
                </div>
                <div className="newProduct12"></div>
                <div className="newProduct13">
                    <div className="categoryDiv">
                        <h2>Categories :</h2>
                        <div className="categories">
                            {(categories.length === 0) &&
                                <div className="noCategories">
                                    <p>Product categories appear hear</p>
                                </div>
                            }
                            {
                                categories.map((item,i) => {
                                    return (
                                        <div className="categoryItem" key={i}>
                                            <div className="categoryItem1">{<p>{item}</p>}</div>
                                            <div  className="categoryItem2"><CancelIcon onClick={()=>removeCategory(i)}/></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="imageDiv">
                        <h2>Images :</h2>
                        <div className="images">
                            {images.length === 0 &&
                                <div className="noImages">
                                    <p>product images appear hear</p>
                                </div>
                            }
                            {
                                images.map((item,i) => {
                                    return (
                                        <div className="imageItem" key={i}>
                                           <img src={item}/>
                                            <CancelIcon onClick={()=>removeImage(i)}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="createButton">
                        <button type='submit' disabled={!createDisable}>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct