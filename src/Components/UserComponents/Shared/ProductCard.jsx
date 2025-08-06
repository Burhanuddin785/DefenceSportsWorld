import React, { useEffect, useState } from 'react'
import '../../../Css/UserComponents/Shared/ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({image, title, rate, category, subCategory, productID}) => {

  const navigate = useNavigate();
  return (
    <div className='ProductCard'>
        <div className="cardHeader">
            <div className="PCtitle">{title}</div>
        </div>
        <div className="cardBody">
            <div className="image"><img src={`https://api.defencesportsworld.com/adminUploads/products/${subCategory?._id}/${image}`}/></div>
        </div>
        <div className="cardFooter">
            <div className="rate">₹ {rate.toLocaleString('en-IN')}</div>
            <label onClick={category ? ()=>{navigate(`/categories/${category?.name}/${subCategory?.name}/${title}?pid=${productID}`)} : ""}>View Details</label>
        </div>
    </div>
  )
}

export default ProductCard