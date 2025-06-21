import React, { useEffect } from 'react'
import CategoryHero from '../Shared/CategoryHero'
import '../../../Css/UserComponents/featured/Category.css'
import AllCategoryList from '../Shared/AllCategoryList'
import BestSellingPicks from '../Shared/BestSellingPicks'

const Category = () => {
  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'instant'})
  })
  return (
    <div className='category'>
    <CategoryHero/>
    <AllCategoryList/>
    <BestSellingPicks/>
    </div>
  )
}

export default Category