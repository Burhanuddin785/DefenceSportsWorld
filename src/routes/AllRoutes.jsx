import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Components/featured/Home'
import Category from '../Components/featured/Category'
import AllProductList from '../Components/featured/AllProductList'
import ProductPage from '../Components/featured/ProductPage'
import Cart from '../Components/featured/Cart'

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/categories" element={<Category/>} />
            <Route path="/categories/:categoryName" element={<AllProductList/>} />
            <Route path="/categories/:categoryName/:product" element={<ProductPage/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    )
}

export default AllRoutes 