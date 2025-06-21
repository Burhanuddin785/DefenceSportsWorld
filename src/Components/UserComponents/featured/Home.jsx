import React, { useEffect } from 'react'
import HeroSection from '../Shared/HeroSection'
import FeaturedCategory from '../Shared/FeaturedCategory'
import '../../../Css/UserComponents/Shared/FeaturedCategory.css'
import BestSellingPicks from '../Shared/BestSellingPicks'
import WhoWeAre from '../Shared/WhoWeAre'

const Home = () => {
  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'instant'})
  })


  return (
    <>
        <HeroSection/>
        <FeaturedCategory heading={"Top Category Picks"}/>
        <BestSellingPicks/>
        <WhoWeAre/>
        
    </>
  )
}

export default Home