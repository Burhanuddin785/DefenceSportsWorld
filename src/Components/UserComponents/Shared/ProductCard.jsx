import React from 'react'
// import PropTypes from 'prop-types';
import '../../../Css/UserComponents/Shared/ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({image, title, rate, category, subCategory}) => {

  const navigate = useNavigate();
  return (
    <div className='ProductCard'>
        <div className="cardHeader">
            <div className="title">{title}</div>
        </div>
        <div className="cardBody">
            <div className="image"><img src={image}/></div>
        </div>
        <div className="cardFooter">
            <div className="rate">{rate}</div>
            <label onClick={category ? ()=>{navigate(`/categories/${category}/${subCategory}/${title}`)} : ""}>View Details</label>
        </div>
    </div>
  )
}

export default ProductCard