import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'


const App = () => {
  return (
    <>
      <Header/> 
      <AllRoutes/>
      <Footer/>
    </>

  )
}

export default App