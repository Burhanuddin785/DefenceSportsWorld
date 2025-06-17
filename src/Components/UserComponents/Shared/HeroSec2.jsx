import React from 'react'
import '../../../Css/UserComponents/Shared/HeroSec.css'
import DSW from '../../../Assets/HeroSection/DEFENCE SPORTS WORLD.png'
import HeadingLabel from '../../../Assets/HeroSection/Precision Gear for Every Shooter.png'

const HeroSec2 = () => {
  return (
    <>
    <main>
        <div className="container">
         <div className="content">
            <div className="DSW">
                <img  src={DSW} />
            </div>
            <div className="label">
                <img src={HeadingLabel}/> 
                <label> Explore high-quality firearm accessories, air rifles, and tactical gear – built for professionals and enthusiasts alike.</label>
            </div>

         </div>
        </div>
    </main>
    
    </>
  )
}

export default HeroSec2