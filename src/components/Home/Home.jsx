import React, { useEffect, useState } from 'react'
import Slider from '../slider/Slider'
import tshirt from '../../images/tshirt 1.svg'
import footwear from '../../images/footwear1.jpg'
import bottomwear from '../../images/bottomwear.jpg'
import './home.css'
import { NavLink, useSearchParams } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCT_RESET } from '../../redusers/productReducer'
import { getProducts } from '../../actions/productAction'
import { loadCart } from '../../actions/cartAction'
import Loader from '../loading/Loader'
const Home = () => {
    const { product, loading, error, success } = useSelector(state => state.Product)
    const { isAuthenticate } = useSelector(state => state.User)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!success) {
            dispatch(getProducts({ category: "undefined", lt: 200000, gt: 0, sort: 0 }))
        }
        if (error) {
            dispatch(PRODUCT_RESET())
        }
        if (success || error) {
            dispatch(PRODUCT_RESET())
        }
    }, [isAuthenticate, product])
    const deals = [
        {
            url: '/product?category=topwear&gt=0&lt=1299&sort=0',
            image: tshirt,
            category: <p>Shirt <span>&</span> <br /> T-shirt</p>,
            desc: <p><NavLink to='/product?category=topwear&gt=0&lt=1299&sort=0'>Under ₹1299</NavLink></p>
        },
        {
            url: '/product?category=bottomwear&gt=0&lt=1899&sort=0',
            image: bottomwear ,
            category: <p>Jeans <span>&</span> <br /> Trouser</p>,
            desc: <p><NavLink to='/product?category=bottomwear&gt=0&lt=1899&sort=0'>Under ₹1899</NavLink></p>
        },
        {
            url: '/product?category=footwear&gt=0&lt=2599&sort=0',
            image: footwear,
            category: <p>Shoes <span>&</span> <br /> Sandals</p>,
            desc: <p><NavLink to='/product?category=footwear&gt=0&lt=2599&sort=0'>Under ₹2599</NavLink></p>
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
                    {deals.map((item, i) => {
                        return (
                            <div className="deals" key={i}>
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
                {loading ? <Loader /> :
                    <>
                        <div> <h2>Best Selling Products</h2></div>
                        <div>
                            {
                                product && product.map((item, ind) => {
                                    return <ProductCard key={ind} details={item} />
                                })
                            }
                            {
                                product && product.map((item, ind) => {
                                    return <ProductCard key={ind} details={item} />
                                })
                            }
                        </div>
                    </>}
            </section>
        </div>
    )
}

export default Home