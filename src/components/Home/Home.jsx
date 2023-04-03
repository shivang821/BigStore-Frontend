import React from 'react'
import Slider from '../slider/Slider'
import tshirt from '../../images/tshirt 1.svg'
import './home.css'
import { NavLink } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
const Home = () => {
    const deals = [
        {
            url: '/product/?caterogy=[shirt,t-shirt]&price=lt:1299',
            image: tshirt,
            category: <p>Shirt <span>&</span> <br /> T-shirt</p> ,
            desc: <p><NavLink to='/product/?caterogy=[shirt,t-shirt]&price=lt:1299'>Under ₹1299</NavLink></p>
        },
        {
            url: '/product/?caterogy=[jeans,trouser]&price=lt:1899',
            image: tshirt,
            category: <p>Jeans <span>&</span> <br /> Trouser</p>,
            desc:<p><NavLink to='/product/?caterogy=[jeans,trouser]&price=lt:1899'>Under ₹1899</NavLink></p>
        },
        {
            url: '/product/?caterogy=[shoes,sandals]&price=lt:2599',
            image: tshirt,
            category: <p>Shoes <span>&</span> <br /> Sandals</p>,
            desc:<p><NavLink to='/product/?caterogy=[shoes,sandals]&price=lt:2599'>Under ₹2599</NavLink></p>
        },
    ]
    return (
        <>
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
            <section id="products">
                <div> <h2>Best Selling Products</h2></div>
                <div>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </section>
        </>
    )
}

export default Home