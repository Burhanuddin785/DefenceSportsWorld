import React from 'react'
import '../../Css/Shared/SubCategoryCard.css'

const SubCategoryCard = ({title, imgURL}) => {
  return (
    <div className='SubCategoryCard' style={{backgroundImage: `url(${imgURL})`, cursor:'pointer'}}>
        <div className="title">{title}</div> 
        <button>Check Out</button>
    </div>
  )
}

export default SubCategoryCard