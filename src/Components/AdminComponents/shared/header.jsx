import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  let navigate = useNavigate();

  return (
    <div className='Adminheader'>
      <label>Home</label>
      <label onClick={()=>{navigate('categoryUpload')}}>Category Upload</label>
      <label onClick={()=>{navigate('categoryList')}}>Category List</label>
      <label onClick={()=>{navigate('subCategoryUpload')}}>Subcategory Upload</label>
      <label>Product List</label>
      <label>Order List</label>
    </div>
  )
}

export default Header