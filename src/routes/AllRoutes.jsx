import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Components/UserComponents/featured/Home'
import Category from '../Components/UserComponents/featured/Category'
import AllProductList from '../Components/UserComponents/featured/AllProductList'
import ProductPage from '../Components/UserComponents/featured/ProductPage'
import Cart from '../Components/UserComponents/featured/Cart'
import UserComponents from '../modules/UserModules'
import AdminModules from '../modules/AdminModules'
import AdminHome from '../Components/AdminComponents/featured/Home'
import CategoryUpload from '../Components/AdminComponents/featured/CategoryUpload'
import ProductUpload from '../Components/AdminComponents/featured/ProductUpload'
import SubCategoryUpload from '../Components/AdminComponents/featured/SubCategoryUpload'
import List from '../Components/AdminComponents/featured/List'
import SubCategory from '../Components/UserComponents/featured/SubCategory'
import AboutUs from '../Components/UserComponents/featured/AboutUs'

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="" element={<UserComponents/>}>
                <Route path="" element={<Home/>} />
                <Route path="/categories" element={<Category/>} />
                <Route path="/categories/:categoryName" element={<AllProductList/>} />
                <Route path="/categories/:categoryName/:subCategoryName" element={<SubCategory/>} />
                <Route path="/categories/:categoryName/:subCategoryName/:product" element={<ProductPage/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path='/aboutUs' element={<AboutUs/>}/>
            </Route>

            <Route path="maalik" element={<AdminModules/>}>
                <Route path="" element={<AdminHome/>}/>
                <Route path="categoryUpload" element={<CategoryUpload/>}/>
                <Route path="subCategoryUpload" element={<SubCategoryUpload/>}/>
                <Route path="productUpload" element={<ProductUpload/>}/>
                <Route path="list" element={<List/>}/>
            </Route>
        </Routes>
    )
}

export default AllRoutes 