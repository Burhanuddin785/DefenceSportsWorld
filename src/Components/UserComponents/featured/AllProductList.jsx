import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../../Css/UserComponents/featured/AllProductList.css'
import HeroIMG from '../../../Assets/AllProducts/heroMagzine.png'
import Riffle from '../../../Assets/AllProducts/rifflesScopes.png'
import RedDotSight from '../../../Assets/AllProducts/redDotSight.png'
import NightVisionThermal from '../../../Assets/AllProducts/nightVisionThermal.png'
import SubCategoryCard from '../Shared/SubCategoryCard'
import WhoWeAre from '../Shared/WhoWeAre'
import Magzines from '../../../Assets/HeroSection/Magzines.png'
import ProductCard from '../Shared/ProductCard'
import FeaturedCategory from '../Shared/FeaturedCategory'

const AllProductList = () => {
  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'instant'})
  })

  let subcategories = [
    {
      subcategory : "Riffles Scopes",
      imgURL: Riffle
    },
    {
      subcategory : "Red Dot Sight",
      imgURL: RedDotSight
    },
    {
      subcategory : "Night Vision and Thermal",
      imgURL: NightVisionThermal
    },
    {
      subcategory : "Night Vision and Thermal",
      imgURL: NightVisionThermal
    }
  ]
  let allProducts = [
    {
      image : Magzines,
      title :'Magzine',
      rate : 'XXXX'
    },
    {
      image : Magzines,
      title :'Magzine',
      rate : 'XXXX'
    },
    {
      image : Magzines,
      title :'Magzine',
      rate : 'XXXX'
    },
    {
      image : Magzines,
      title :'Magzine',
      rate : 'XXXX'
    }
   
  ]
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < subcategories.length; i += chunkSize) {
    chunks.push(subcategories.slice(i, i + chunkSize));}
  const proChunkSize = 4;
  const proChunks = [];
  for(let i=0; i< allProducts.length; i += proChunkSize){
    proChunks.push(allProducts.slice(i, i+ proChunkSize));
  }
  

  const {categoryName} = useParams();
  return (
    <>
    <div className='AllProductList'>
        <div className="title">{categoryName.charAt(0).toUpperCase()+ categoryName.slice(1)}</div>
        <div className="heroimg"><img src={HeroIMG} alt="HeroImage" /></div>
        <div className="center">

        <div className="subcategoryList">
            {chunks[0].map((slide, index)=>(
              <SubCategoryCard 
              key={index}
              imgURL={slide.imgURL}
              title={slide.subcategory}
              />
            ))}
            </div>
        </div>
        <div className="CatTitle">Shop All</div>
        <div className="shopAll"></div>
        {proChunks.map((group, index)=>(
          <div className="allProducts">   
            {group.map((slide, sindex)=>(
              <ProductCard category={categoryName} image={slide.image} title={slide.title} rate={slide.rate} />
            ))}
          </div>

        ))}
    </div>
        <WhoWeAre/>
        <FeaturedCategory heading={"Browse More Categories"}/>
</>  )
}

export default AllProductList