import React from 'react'

const CategoryBox = ({onClick, src, title, description} ) => {
  return (
    <div className="box" onClick={onClick} style={{backgroundImage: `url(${src})`, cursor: 'pointer'}}>
                <p className='CatTitle'>{title}</p>
                <p className="CatDescription">{description}</p>
            </div>
  )
}

export default CategoryBox