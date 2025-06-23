import React, { useState } from 'react'
import '../../../Css/UserComponents/Shared/HeroSec.css'
import DSW from '../../../Assets/HeroSection/DEFENCE SPORTS WORLD.png'
import HeadingLabel from '../../../Assets/HeroSection/Precision Gear for Every Shooter.png'
import Magzines from '../../../Assets/HeroSection/Magzines.png'
import Bullets from '../../../Assets/HeroSection/Bullets.png'
import Holsters from '../../../Assets/HeroSection/Holsters.png'
import Sights from '../../../Assets/HeroSection/Sights.png'
import Silencers from '../../../Assets/HeroSection/Silencers.png'
import Stands from '../../../Assets/HeroSection/Stands.png'
import { useNavigate } from 'react-router-dom'
import Right from '../../../Assets/HeroSection/RightVector.svg'
import Left from '../../../Assets/HeroSection/LeftVector.svg'

const HeroSec2 = () => {
  const allProducts = [
    { image: Magzines, title: 'Magzine', rate: 'XXXX', category: "magzines" },
    { image: Bullets, title: 'Bullets', rate: 'XXXX', category: "magzines" },
    { image: Holsters, title: 'Holsters', rate: 'XXXX', category: "magzines" },
    { image: Silencers, title: 'Silencers', rate: 'XXXX', category: "magzines" },
    { image: Stands, title: 'Stands', rate: 'XXXX', category: "magzines" },
    { image: Sights, title: 'Sights', rate: 'XXXX', category: "magzines" },
  ]

  const [slide, setSlide] = useState(1)
  const navigate = useNavigate()

  const handlePrev = () => {
    if (slide > 0) setSlide(prev => prev - 1)
  }

  const handleNext = () => {
    if (slide < allProducts.length - 1) setSlide(prev => prev + 1)
  }

  return (
    <main>
      <div className="container">
        <div className="content">
          <div className="DSW">
            <img src={DSW} alt="DSW logo" />
          </div>
          <div className="label">
            <img src={HeadingLabel} alt="label heading" />
            <label> Explore high-quality firearm accessories, air rifles, and tactical gear – built for professionals and enthusiasts alike.</label>
          </div>

          <div className="slider">
            <div className={`vector left ${slide==0 && "blocked"}`} onClick={handlePrev}>
              <img src={Left} alt="left arrow" />
            </div>

            <div className="sliderTrackWrapper">
              <div
                className="sliderTrack"
                style={{
                   transform: `translateX(calc(50% - ${(slide * 280) + 130}px)`,
                }}
              >
                {allProducts.map((product, index) => (
                  <div
                    key={index}
                    className={`sliderElement ${index === slide ? "selected" : ""}`}
                  >
                    <img src={product.image} alt={product.title} />
                  </div>
                ))}
              </div>
            </div>

            <div className={`vector right ${slide==allProducts.length-1 && "blocked"}`} onClick={handleNext}>
              <img src={Right} alt="right arrow" />
            </div>
          </div>
          <div className="bottom">
            <div className="sliderText">{allProducts[slide].title}</div>
                        <button onClick={() => navigate(`/categories/${allProducts[slide].category}/Magzine`)}>
                          Buy Now
                        </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSec2
