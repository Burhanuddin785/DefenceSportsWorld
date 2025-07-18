import React from 'react'
import '../../../Css/UserComponents/Shared/SubCategoryCard.css'

const SubCategoryCard = ({title, imgURL, onClick}) => {
  return (
    <div className='SubCategoryCard' onClick={onClick} style={{backgroundImage: `url(${imgURL})`, cursor:'pointer'}}>
        <div className="title">{title}</div> 
        <button>Check Out</button>
    </div>
  )
}

export default SubCategoryCard