import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../../Css/UserComponents/featured/AllProductList.css'
import HeroIMG from '../../../Assets/AllProducts/heroMagzine.png'
import WhoWeAre from '../Shared/WhoWeAre'
import Magzines from '../../../Assets/HeroSection/Magzines.png'
import ProductCard from '../Shared/ProductCard'
import FeaturedCategory from '../Shared/FeaturedCategory'

const AllProductList = () => {
  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'instant'})
  })


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
  
  const proChunkSize = 4;
  const proChunks = [];
  for(let i=0; i< allProducts.length; i += proChunkSize){
    proChunks.push(allProducts.slice(i, i+ proChunkSize));
  }
  

  const {categoryName, subCategoryName} = useParams();
  return (
    <>
    <div className='AllProductList'>
        <div className="title">{categoryName.charAt(0).toUpperCase()+ categoryName.slice(1) + "/" +subCategoryName.charAt(0).toUpperCase()+ subCategoryName.slice(1) }</div>
        <div className="heroimg"><img src={HeroIMG} alt="HeroImage" /></div>
        <div className="center">

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