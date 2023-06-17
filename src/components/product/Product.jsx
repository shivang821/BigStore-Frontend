import React, { useMemo, useEffect, useState, useRef } from 'react'
import './productPage.css'
import { useSearchParams, useLocation, useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProductTop from './ProductTop'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productAction';
import { PRODUCT_RESET } from '../../redusers/productReducer';
import { useAlert } from 'react-alert';
import Loader from '../loading/Loader';
const Product = () => {
  const dispatch = useDispatch()
  const { success: ordersuccess } = useSelector(state => state.Order)
  const [sort, setSort] = useState(0)
  const [gt, setGt] = useState(0)
  const [lt, setLt] = useState(200000)
  const [apply, setApply] = useState(false)
  const [isChanged, setIsChanged] = useState(false)
  const alert = useAlert()
  const { product, loading, error, success } = useSelector(state => state.Product)
  const [searchParams] = useSearchParams()
  const [pageName, setPageName] = useState()
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const [pageChange, setPageChange] = useState(false)
  // let isInViewport1 = useIsInViewport(ref1);
  let isInViewport1 = true;
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
    setSort(0);
    setGt(0)
    setLt(200000)
    setPageChange(true)
  }, [searchParams.get('category'), searchParams.get('keyword'), ordersuccess])
  useEffect(() => {
    searchParams.get('category') && setPageName(searchParams.get('category').toUpperCase())
    if (!success && pageChange) {
      let lte, gte;
      if (!gt || gt < 0) {
        setGt(0)
        gte = 0;
      } else {
        gte = gt;
      }
      if (!lt || lt > 200000) {
        setLt(200000)
        lte = 200000
      }
      else {
        lte = lt;
      }
      const query = searchParams.get('category') ? { category: searchParams.get('category'), lt: lte, gt: gte, sort } : { keyword: searchParams.get('keyword'), lt, gt, sort };
      dispatch(getProducts(query))
      setPageChange(false)
    }
    if (error || success) {
      dispatch(PRODUCT_RESET())
    }

    document.addEventListener('click', handleClickOutside, true)
    document.addEventListener('scroll', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
      document.removeEventListener('scroll', handleClickOutside, true)
    }
  }, [searchParams.get('category'), product, searchParams.get('keyword'), apply, pageChange, ordersuccess])

  if (flag && ref2?.current && !isInViewport1 && ref3?.current) {
    ref2.current.classList.add("fixedMiddleProductDiv");
    ref2.current.classList.remove("middleProductDiv");
    ref3.current.style.marginTop = '4rem'
    ref2.current.style.color = 'white'
    ref2.current.style.backgroundColor = 'var(--light)'
    // ref2.current.style.fontSize='14px'
    ref2.current.style.fontSize = window.innerWidth < 1400 ? '14px' : '1.1rem'

  }
  else if (flag && ref2?.current && isInViewport1 && ref3?.current) {
    ref2.current.style.color = 'var(--light)'
    ref2.current.style.backgroundColor = 'white'
    ref3.current.style.marginTop = '0'
    ref2.current.classList.add("middleProductDiv");
    ref2.current.classList.remove("fixedMiddleProductDiv");
  }
  function handleClickOutside(e) {
    if (ref4.current && !ref4.current.contains(e.target)) {
      setOpen(false);
    }
  }
  return (
    <div className='productMain'>

      <>
        <div className="productTop" ref={ref1}>
          <ProductTop />
        </div>
        <div className="middleProductDiv" ref={ref2}>
          {searchParams.get('keyword') ? <h2>Search Results</h2> : <h2>{pageName} DEALS</h2>}
        </div>
        <div className="productBottom" ref={ref3}>
          <div className="productBottom1" ref={ref4}>
            {(window.innerWidth < 1400) && <div onClick={() => { setOpen(!open) }} className='arrowIcon'>
              {open ? <KeyboardArrowRightIcon ref={ref5} /> : <KeyboardArrowLeftIcon ref={ref5} />}</div>}
            <div className='productBottom11' >
              <p className='filterHeading'>Filters :-</p>
              <p onClick={() => { setSort(1); setIsChanged(true) }}>Price low to high</p>
              <p onClick={() => { setSort(-1); setIsChanged(true) }}>Price high to low </p>
              <p className='priceRangeHeading'>Price Range :-</p>
              <div className='priceRangeDiv'><p >from :</p><input value={gt} onChange={(e) => { setGt(e.target.value); setIsChanged(true) }} type="number" /></div>
              <div className='priceRangeDiv'><p >to :</p><input max={200000} value={lt} onChange={(e) => { setLt(e.target.value); setIsChanged(true) }} type="number" /></div>
              <div className='filterButtonDiv'>
                <button className='filterButton' disabled={!isChanged} onClick={() => { setApply(!apply); setOpen(!open); setIsChanged(false); setPageChange(true) }}>Apply</button>
              </div>
            </div>
          </div>
          <div className="productBottom2" >
            {loading ? <Loader />
              :product&&product.length>0?<>
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
              </>: <div>
                <p style={{fontSize:'1.2rem',color:'#f4a424',fontWeight:'bold'}}>No products found</p>
              </div>
            }
          </div>
        </div>
      </>

    </div>
  )
}
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() =>
    new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting), { threshold: window.innerWidth <= 465 ? 0.2 : 0.11 }
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