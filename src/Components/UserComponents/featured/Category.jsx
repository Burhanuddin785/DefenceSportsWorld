import React from 'react'
import CategoryHero from '../Shared/CategoryHero'
import '../../../Css/UserComponents/featured/Category.css'
import AllCategoryList from '../Shared/AllCategoryList'
import BestSellingPicks from '../Shared/BestSellingPicks'

const Category = () => {
  return (
    <div className='category'>
    <CategoryHero/>
    <AllCategoryList/>
    <BestSellingPicks/>
    </div>
  )
}

export default Category