import React from 'react'
import { useSearchParams } from 'react-router-dom'
import rightImage from './images/rightImage.svg'
import leftImage from './images/leftImage.svg'
import middleImage from './images/middleImage.svg'
import middleShadow from './images/middleShadow.svg'
import FashionTop from './productTopSections/FashionTop'
import MobilesTop from './productTopSections/MobilesTop'
import ElectronicsTop from './productTopSections/ElectronicsTop'
import FurnitureTop from './productTopSections/FurnitureTop'
import ApplianceTop from './productTopSections/ApplianceTop'
import GroceryTop from './productTopSections/GroceryTop'
import SearchResultTop from './productTopSections/SearchResultTop'
const ProductTop = () => {
    const [searchParams] = useSearchParams()
    const category=searchParams.get('category')
    const func=()=>{
        switch(category){
            case 'fashion':return <FashionTop/>;
            case 'mobiles':return <MobilesTop/>;
            case 'electronics':return <ElectronicsTop/>;
            case 'furniture':return <FurnitureTop/>;
            case 'appliances':return <ApplianceTop/>;
            case 'grocery':return <GroceryTop/>;
            default: return <SearchResultTop/>
        }
    }
    return (
        <>
            {category?func():<SearchResultTop/>}
            
        </>
    )
}

export default ProductTop