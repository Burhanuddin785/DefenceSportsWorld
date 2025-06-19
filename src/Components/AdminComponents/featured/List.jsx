import React, { useState } from 'react'
import CategoryList from '../../../Components/AdminComponents/featured/CategoryList'
import ProductList from '../../../Components/AdminComponents/featured/ProductList'
import SubCategoryList from '../../../Components/AdminComponents/featured/SubCategoryList'

const List = () => {
    const [list, setList] = useState("");
    const handlechange = (event)=>{
        setList(event.target.value);
    }

  return (

    <div className='list'>
        <select className='listBox' name="list" onChange={(event)=>{handlechange(event)}} >
            <option value="">Select Category</option>
              <option value="category">Category</option>
              <option value="sub-category">Sub-Category</option>
              <option value="product">Product</option>
          </select>
           {(() => {
        switch (list) {
          case 'category':
            return <CategoryList/>;
          case 'sub-category':
            return <SubCategoryList/>;
          case 'product':
            return <ProductList/>;
          default:
            return <p>List will be displayed here</p>;
        }
      })()}
    </div>
  )
}

export default List