import React, { useState, useRef } from 'react'
import './sidebar.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const ref1 = useRef()
    const ref2 = useRef()
    if (ref1.current && open) {
        ref1.current.classList.add('slide')
        ref1.current.classList.remove('closeSlide')
    } else if (ref1.current && !open) {
        ref1.current.classList.add('closeSlide')
        ref1.current.classList.remove('slide')
    }
    // if (window.innerWidth < 767&&open) {
        
    //     if(open===true){
    //         console.log(open);
    //         // console.log(ref2.current);
    //         // ref2.current.classList.remove('sidebar1');
    //         // ref2.current.classList.add('addOpacity')
    //     }
    //     else if(!open){
    //         console.log('else');
    //         ref2.current.classList.remove('addOpacity');
    //         console.log(ref2.current);
    //         // ref2.current.classList.add('sidebar1')
    //     }
    // }
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setOpen(true)
        }

    }, [])
    // if (ref1.current) {
    //     if (ref1.current.offsetWidth === 0) {
    //         console.log(ref1.current);
    //         console.log(ref1.current.offsetWidth);
    //         ref1.current.style.borderRight = '2px solid var(--light)'
    //         // ref1.current.style.boxShadow='none;'
    //     }else{
    //         ref1.current.style.borderRight = 'none'
    //         // ref1.current.style.boxShadow='0 2px 20px 2px rgba(204, 204, 204, 0.4);'
    //     }
    // }
    return (
        <div ref={ref1} className='sidebar'>
            {window.innerWidth <= 767 &&
                <div onClick={() => { setOpen(!open) }} className='slideIcon' >{open ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}</div>
            }
            {open && <div className="sidebar1">
                <NavLink exact activeClassName='active' to='/dashboard/home' >Dashboard</NavLink>
                <NavLink exact activeClassName='active' to='/dashboard/products' >All Products</NavLink>
                <NavLink exact activeClassName='active' to='/dashboard/create/new/product' >Create Product</NavLink>
                <NavLink exact activeClassName='active' to='/dashboard/orders' >Orders</NavLink>

            </div>}
        </div>
    )
}

export default Sidebar