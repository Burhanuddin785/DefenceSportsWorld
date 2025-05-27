import React from 'react'
// import PropTypes from 'prop-types';
import '../../Css/Shared/ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({image, title, rate, category}) => {

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
            <label onClick={category ? ()=>{navigate(`/categories/${category}/${title}`)} : ""}>View Details</label>
        </div>
    </div>
  )
}

export default ProductCard