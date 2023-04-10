import React, { useEffect, useRef, useState } from 'react'
import './productSlider.css'
import img1 from '../../../../images/attire 1.webp'
import img2 from '../../../../images/mac.webp'
import img3 from '../../../../images/1phone.jfif'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const ProductSlider = () => {
    const images = [
        img2, img3, img1,img2,img2,img3
    ]
    const ref1=useRef()
    let [count,setCount]=useState({
        newCount:0,
        preCount:-1
    })
    let i=images.length
    let styles={
        transform:`translateX(-${(count.newCount%i)*100}%)`
    }
    useEffect(()=>{
        if(ref1.current){
            ref1.current.children[count.newCount].style.backgroundColor='var(--light)'
            if(count.preCount!==-1)ref1.current.children[count.preCount].style.backgroundColor='#dadada'
        }
           const interval= setInterval(() => {
                if(count.newCount===images.length-1){
                    setCount((prev)=>{
                        return {
                            preCount:prev.newCount,
                            newCount:0
                        }
                    })
                }
                else{
                    setCount((prev)=>{
                        return {
                            preCount:prev.newCount,
                            newCount:prev.newCount+1
                        }
                    })
                }
            }, 2500);
            return ()=>clearInterval(interval);
      
    },[count])
    const goToImg=(i)=>{
    }
    const back=()=>{
        if(count.newCount>0){
            setCount((prev)=>{
                return{
                    preCount:prev.newCount,
                    newCount:prev.newCount-1
                }
            })
        }
    }
    const forward=()=>{
        if(count.newCount<images.length-1){
            setCount((prev)=>{
                return{
                    preCount:prev.newCount,
                    newCount:prev.newCount+1
                }
            })
        }
    }
    return (
        <div className='productSlider'>
            <div className="imageContainer">

                {images.map((img, ind) => {
                    return <img style={styles} src={img} alt="" key={ind} />
                })}
            </div>
            <button className="left" onClick={back}><KeyboardArrowLeftIcon/></button>
            <button className="right" onClick={forward}><KeyboardArrowRightIcon/></button>
            <div className="imgIndex" ref={ref1}>
                {images.map((img,i)=>{
                    return <div className="balls" onClick={goToImg(i)} key={i}></div>
                })}
            </div>
        </div>
    )
}

export default React.memo(ProductSlider)