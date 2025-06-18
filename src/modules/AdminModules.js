import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Components/AdminComponents/shared/header'
import Footer from '../Components/AdminComponents/shared/footer'
import '../Css/AdminComponents/adminCSS.css'

const AdminModules = () => {
  return (  
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminModules