import React, { useEffect, useState } from 'react'
import Slider from '../slider/Slider'
import tshirt from '../../images/tshirt 1.svg'
import './home.css'
import { NavLink, useSearchParams } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCT_RESET } from '../../redusers/productReducer'
import { getProducts } from '../../actions/productAction'
const Home = () => {
    const { product, loading, error, success } = useSelector(state => state.Product)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProducts({ category: undefined }))
        if (error) {
            dispatch(PRODUCT_RESET())
        }
    },[])
    const deals = [
        {
            url: '/product/?caterogy=[shirt,t-shirt]&price=lt:1299',
            image: tshirt,
            category: <p>Shirt <span>&</span> <br /> T-shirt</p>,
            desc: <p><NavLink to='/product/?caterogy=[shirt,t-shirt]&price=lt:1299'>Under ₹1299</NavLink></p>
        },
        {
            url: '/product/?caterogy=[jeans,trouser]&price=lt:1899',
            image: tshirt,
            category: <p>Jeans <span>&</span> <br /> Trouser</p>,
            desc: <p><NavLink to='/product/?caterogy=[jeans,trouser]&price=lt:1899'>Under ₹1899</NavLink></p>
        },
        {
            url: '/product/?caterogy=[shoes,sandals]&price=lt:2599',
            image: tshirt,
            category: <p>Shoes <span>&</span> <br /> Sandals</p>,
            desc: <p><NavLink to='/product/?caterogy=[shoes,sandals]&price=lt:2599'>Under ₹2599</NavLink></p>
        },
    ]
    return (
        <div className='home'>
            <Slider />
            <div className="topDeals">
                <div>
                    <h2>Top Deals</h2>
                </div>
                <div>
                    {deals.map((item) => {
                        return (
                            <div className="deals">
                                <NavLink to={item.url}>
                                    <img src={item.image} alt="" />
                                    <div className="overlay">
                                        {item.category}
                                    </div>
                                </NavLink>
                                {item.desc}
                            </div>
                        )
                    })}

                </div>
            </div>
            <section className='products' id='#product'>
                <div> <h2>Best Selling Products</h2></div>
                <div>
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                    {
                        product&&product.map((item,ind)=>{
                            return <ProductCard key={ind} details={item} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Home