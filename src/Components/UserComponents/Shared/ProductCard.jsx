import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
import '../../../Css/UserComponents/Shared/ProductCard.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductCard = ({image, title, rate, category, subCategoryID}) => {
const [subCategory, setSubCategory] = useState('');
useEffect(()=>{
  if(!subCategoryID) return;
  axios.get(`http://localhost:8080/api/subcategories/${subCategoryID}?spec=subcategory`).then(res => setSubCategory(res.data[0]?.name)).catch(err=>console.log(err))
},[subCategoryID])

  const navigate = useNavigate();
  return (
    <div className='ProductCard'>
        <div className="cardHeader">
            <div className="title">{title}</div>
        </div>
        <div className="cardBody">
            <div className="image"><img src={`http://localhost:8080/adminUploads/products/${subCategoryID}/${image}`}/></div>
        </div>
        <div className="cardFooter">
            <div className="rate">{rate}</div>
            <label onClick={category ? ()=>{navigate(`/categories/${category}/${subCategory}/${title}`)} : ""}>View Details</label>
        </div>
    </div>
  )
}

export default ProductCard