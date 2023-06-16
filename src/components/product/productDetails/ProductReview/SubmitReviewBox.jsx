import React, { useEffect } from 'react'
import './submitReviewBox.css'
import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { submitReview } from '../../../../actions/productAction'
import { PRODUCT_DETAIL_RESET } from '../../../../redusers/productReducer'
const SubmitReviewBox = ({ id,closeBox }) => {
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")
    const alert=useAlert()
    const {success,pDetails}=useSelector(state=>state.ProductDetails)
    const dispatch=useDispatch()
    const options = {
        edit: false,
        color: "#989898",
        activeColor: "#f4a424",
        value: rating,
        backgroundColor: "whitesmoke",
        isHalf: true,
        size: 30,
        edit: true
    }
    const submitNewReview=(e)=>{
        e.preventDefault()
        if(review.length<80){
            return alert.error('Review must be 80 characters long')
        }
        else{
            const myForm=new FormData()
            myForm.set('rating',rating)
            myForm.set('review',review)
            dispatch(submitReview(id,myForm))
        }
    }
    useEffect(()=>{
        if(success){
            alert.success('Review Submitted')
            dispatch(PRODUCT_DETAIL_RESET())
        }
    },[pDetails&&pDetails.rating,pDetails])
    return (
        <div className='submitReviewBox'>
            <div className="submitReviewBoxCenterDiv">
                <form action=""  onSubmit={(e)=>submitNewReview(e)}>
                    <div className='submitReviewBoxCenterDiv1'><h2>Submit Review</h2></div>
                    <div className='submitReviewBoxCenterDiv2'>
                        <div className='submitReviewBoxCenterDiv21'>
                            <h3>Rating :</h3> <ReactStars onChange={(e) => { setRating(e) }} {...options} />
                        </div>
                        <div className='submitReviewBoxCenterDiv22'>
                            <p>Review :</p>
                            <textarea required name="review" value={review} onChange={(e) => setReview(e.target.value)} cols="auto" rows="auto"></textarea>
                            <div className='reviewLength' ><p>{review.length}</p></div>
                        </div>
                    </div>
                    <div className='submitReviewBoxCenterDiv3'> <button type='submit' disabled={!rating||!review}> Submit</button> <button  onClick={closeBox} >Close</button></div>
                </form>
            </div>
        </div>
    )
}

export default SubmitReviewBox