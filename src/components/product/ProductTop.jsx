import React from 'react'
import { useSearchParams } from 'react-router-dom'
import rightImage from './images/rightImage.svg'
import leftImage from './images/leftImage.svg'
import middleImage from './images/middleImage.svg'
import middleShadow from './images/middleShadow.svg'
import FashionTop from './productTopSections/FashionTop'
const ProductTop = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('category'));
    const category=searchParams.get('category')
    const func=()=>{
        switch(category){
            case 'fashion':return <FashionTop/>;
            case 'mobiles':return <div style={{height:'100%',width:'100%',backgroundColor:'green'}}></div>;
        }
    }
    return (
        <>
            {func()}
            
        </>
    )
}

export default ProductTop