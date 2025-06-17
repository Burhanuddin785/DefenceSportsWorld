import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Components/UserComponents/Shared/Header'
import Footer from '../Components/UserComponents/Shared/Footer'

const UserModules = () => {
  return (  
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserModules