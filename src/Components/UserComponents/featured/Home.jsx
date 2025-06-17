import React from 'react'
import HeroSection from '../Shared/HeroSection'
import FeaturedCategory from '../Shared/FeaturedCategory'
import '../../../Css/UserComponents/Shared/FeaturedCategory.css'
import BestSellingPicks from '../Shared/BestSellingPicks'
import WhoWeAre from '../Shared/WhoWeAre'

const Home = () => {



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