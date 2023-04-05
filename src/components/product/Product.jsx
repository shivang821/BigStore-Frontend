import React,{useMemo,useEffect,useState,useRef} from 'react'
import './productPage.css'
import rightImage from './images/rightImage.svg'
import leftImage from './images/leftImage.svg'
import middleImage from './images/middleImage.svg'
import middleShadow from './images/middleShadow.svg'
import { useSearchParams,useLocation } from 'react-router-dom'
import ProductCard from './ProductCard'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProductTop from './ProductTop'
const Product = () => {
  const location=useLocation()
  console.log(location.pathname);
  const [searchParams] = useSearchParams()
  const [pageName, setPageName] = useState()
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5=useRef()
  const [open, setOpen] = useState(false);
  const isInViewport1 = useIsInViewport(ref1);
  const [flag, setFlag] = useState(false);
  if (window.innerWidth < 1400) {
    if (open && ref4?.current) {
      ref4.current.style.transform = 'translateX(0)'
      ref4.current.classList.add('boxShadow')
      ref4.current.children[0].classList.add('boxShadow')
    } else if (!open && ref4?.current) {
      ref4.current.style.transform = 'translateX(100%)'
      ref4.current.classList.remove('boxShadow')
      ref4.current.children[0].classList.remove('boxShadow')
    }
  }
  setTimeout(() => {
    setFlag(true)
  }, 1000);
  useEffect(() => {
    setPageName(searchParams.get('category'))
    document.addEventListener('click',handleClickOutside,true)
    document.addEventListener('scroll',handleClickOutside,true)
    return()=>{
      document.removeEventListener('click',handleClickOutside,true)
      document.removeEventListener('scroll',handleClickOutside,true)
    }
  },[])
  // handling middleDiv
  if (flag && ref2?.current && !isInViewport1 && ref3?.current) {
    ref2.current.classList.add("fixedMiddleProductDiv");
    ref2.current.classList.remove("middleProductDiv");
    ref3.current.style.marginTop = '4rem'
    ref2.current.style.color = 'white'
    ref2.current.style.backgroundColor = 'var(--light)'
    // ref2.current.style.fontSize='14px'
    ref2.current.style.fontSize=window.innerWidth<1400?'14px':'1.1rem'

  }
  else if (flag && ref2?.current && isInViewport1 && ref3?.current) {
    ref2.current.style.color = 'var(--light)'
    ref2.current.style.backgroundColor = 'white'
    ref3.current.style.marginTop = '0'
    ref2.current.classList.add("middleProductDiv");
    ref2.current.classList.remove("fixedMiddleProductDiv");
  }
  // handling click outside the filterBar
  function handleClickOutside(e){
    if(ref4.current&&!ref4.current.contains(e.target)){
      setOpen(false);
    }
  }
  return (
    <div className='productMain'>
      <div className="productTop" ref={ref1}>
        {/* <div className="productTop1"></div>
        <div className="productTop2"></div>
        <img className='rightImage' src={rightImage} alt="" />
        <img className='leftImage' src={leftImage} alt="" />
        <img className='middleImage' src={middleImage} alt="" />
        <img className='middleShadow' src={middleShadow} alt="" /> */}
        <ProductTop/>
      </div>
      <div className="middleProductDiv" ref={ref2}>
        <h2>{pageName} DEALS</h2>
      </div>
      <div className="productBottom" ref={ref3}>
        <div className="productBottom1" ref={ref4}>
          {(window.innerWidth<1400)&&<div  onClick={() => { setOpen(!open) }} className='arrowIcon'>
            {open ? <KeyboardArrowRightIcon ref={ref5}/> : <KeyboardArrowLeftIcon ref={ref5}/>}</div>}
          
        </div>
        <div className="productBottom2" >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() =>
    new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting), { threshold: window.innerWidth<=465?0.2: 0.11 }
    ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
export default Product