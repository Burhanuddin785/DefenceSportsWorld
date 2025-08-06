import React, { useEffect, useState } from 'react'
import CategoryBox from './CategoryBox'
import '../../../Css/UserComponents/Shared/AllCategoryList.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AllCategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    axios.get('http://api.defencesportsworld.com/api/categories').then(res=> setCategories(res.data)).catch(err=>console.log(err))
  },[])

  const chunkSize = 3;
  const chunks = [];
  const navigate = useNavigate();

  for (let i = 0; i < categories.length; i += chunkSize) {
    chunks.push(categories.slice(i, i + chunkSize));
  }
  return (
    <div className='UserCategoryList'>
        <div className="conatiner">
        <div className="CatTitle">All Categories</div>
        {chunks.map((group, groupIndex) => (
          <div className='CatList' key={groupIndex}>
            {group.map((slide, index) => (
              <CategoryBox
                onClick={()=> navigate(`/categories/${slide.name}?cid=${slide._id}`)}
                key={index}
                src={`http://api.defencesportsworld.com/adminUploads/categories/${slide.templateImage}`}
                title={slide.name}
                description={slide.tagLine}
              />
            ))}
          </div>
        ))}
        </div>

    </div>
  )
}

export default AllCategoryList
