import React from 'react'
import Magzines from '../../../Assets/FeaturedCategory/Magzines.jpg'
import OpticsnSights from '../../../Assets/FeaturedCategory/Optics&Sights.jpg'
import GunsAccesories from '../../../Assets/FeaturedCategory/Gun_Accessories.jpg'
import SeeAll from './SeeAllButton'
import SeeAllVector from '../../../Assets/FeaturedCategory/SeeAllArrow.svg'
import CategoryBox from './CategoryBox'
import { useNavigate } from 'react-router-dom'


const FeaturedCategory = ({heading}) => {

    

    const categoryData = [
        {
          imgSrc : Magzines,
          title : "Magzines",
          description : "Stay Loaded, Stay Ready!",
        },
        {
            imgSrc : OpticsnSights,
            title : "Optics and Sights",
            description : "Sharp Vision, Precise Aim "
        },
        {
            imgSrc : GunsAccesories,
            title : "Gun Accesories",
            description : "Enhance, Customize, Dominate"
        }
      ]  
      let navigate = useNavigate();
  
 return (     
   <>
   <div className="FeaturedCat">
    <h1 oncli className='Heading'> {heading} </h1>
    <div className="CatList">
        {categoryData.map((slide, index)=>(
            
                <>
                <CategoryBox key={index} src={slide.imgSrc} title={slide.title} description={slide.description}/>
                </>
            
        ))}
        
        <SeeAll onClick={()=>navigate('/categories')} className="see-all-instance" vector={SeeAllVector}/>
    </div>
    

   </div>
   </>
  )
}

export default FeaturedCategory