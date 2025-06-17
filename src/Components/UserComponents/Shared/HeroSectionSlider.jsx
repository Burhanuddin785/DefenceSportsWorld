import React, { useEffect, useRef }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Stands from '../../../Assets/HeroSection/Stands.png'
import Sights from '../../../Assets/HeroSection/Sights.png'
import Silencers from '../../../Assets/HeroSection/Silencers.png'
import Magzines from '../../../Assets/HeroSection/Magzines.png'
import Holsters from '../../../Assets/HeroSection/Holsters.png'
import Bullets from '../../../Assets/HeroSection/Bullets.png'
import '../../../Css/UserComponents/Shared/HeroSection.css'






const SlideData = [
  {
    imgSrc:Stands
  },
  {
    imgSrc: Sights
  },
  {
    imgSrc: Silencers
  },
  {
    imgSrc: Magzines
  },
  {
    imgSrc: Holsters
  },
  {
    imgSrc: Bullets
  }
]

const HeroSectionSlider = () => {
  const swiperWrappedRef = useRef(null);
  const adjustMargin = ()=>{
  const screenWidth = window.innerWidth;
    
  
    if(swiperWrappedRef.current){
      swiperWrappedRef.current.style.marginLeft = 
      screenWidth <= 520
      ? "0px"
      : screenWidth <= 650
      ? "-50px"
      : screenWidth <= 800
      ? "-200px"
      : "-150px"; 
    }
  }

  useEffect(()=>{
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return ()=> window.removeEventListener("resize", adjustMargin)
  },[]);

  
  return (
 <main>
  <div className="container">
  <Swiper modules={[Pagination]}
  grabCursor
  initialSlide={2}
  centeredSlides
  slidesPerView={3}
  speed={800}
  slideToClickedSlide
  pagination={{clickable: true}}
  breakpoints={{
    320: {spaceBetween: 40},
    650: {spaceBetween: 30},
    1000: {spaceBetween: 20}
  }}
  onSwiper= {(swiper)=>{
    swiperWrappedRef.current = swiper.wrapperEl;
  }}
  >
  {SlideData.map((slide, index) => (
    <SwiperSlide key={index} className="custom-slide">
      <img src={slide.imgSrc} alt={`Slide${index}`} />
    </SwiperSlide>
  ))}
</Swiper>
  </div>
 </main>

  )
}

export default HeroSectionSlider