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

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="" element={<UserComponents/>}>
            <Route path="" element={<Home/>} />
            <Route path="/categories" element={<Category/>} />
            <Route path="/categories/:categoryName" element={<AllProductList/>} />
            <Route path="/categories/:categoryName/:product" element={<ProductPage/>} />
            <Route path="/cart" element={<Cart/>} />
            </Route>

            <Route path="maalik" element={<AdminModules/>}>
                <Route path="" element={<AdminHome/>}/>
            </Route>
        </Routes>
    )
}

export default AllRoutes 