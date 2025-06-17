import React from 'react'
import Magzines from '../../../Assets/FeaturedCategory/Magzines.jpg'
import CategoryBox from './CategoryBox'
import '../../../Css/UserComponents/Shared/AllCategoryList.css'
import { useNavigate } from 'react-router-dom'

const AllCategoryList = () => {
    let categoryData = [
        {
          imgSrc : Magzines,
          title : "Magzines",
          description : "Stay Loaded, Stay Ready!",
          slug : 'magazines'
        },
        {
          imgSrc : Magzines,
          title : "Magzines",
          description : "Stay Loaded, Stay Ready!",
          slug : 'magazines'
        },
        {
          imgSrc : Magzines,
          title : "Magzines",
          description : "Stay Loaded, Stay Ready!",
          slug : 'magazines'
        },
        {
          imgSrc : Magzines,
          title : "Magzines",
          description : "Stay Loaded, Stay Ready!",
          slug : 'magazines'
        },
        {
          imgSrc : Magzines,
          title : "Magzines",
          description : "Stay Loaded, Stay Ready!",
          slug : 'magazines'
        },
        {
          imgSrc : Magzines,
          title : "Magzines",
          description : "Stay Loaded, Stay Ready!",
          slug : 'magazines'
        }
    ]
  const chunkSize = 3;
  const chunks = [];
  const navigate = useNavigate();

  for (let i = 0; i < categoryData.length; i += chunkSize) {
    chunks.push(categoryData.slice(i, i + chunkSize));
  }
  return (
    <div className='CategoryList'>
        <div className="conatiner">
        <div className="CatTitle">All Categories</div>
        {chunks.map((group, groupIndex) => (
          <div className='CatList' key={groupIndex}>
            {group.map((slide, index) => (
              <CategoryBox
                onClick={()=> navigate(`/categories/${slide.slug}`)}
                key={index}
                src={slide.imgSrc}
                title={slide.title}
                description={slide.description}
              />
            ))}
          </div>
        ))}
        </div>

    </div>
  )
}

export default AllCategoryList
