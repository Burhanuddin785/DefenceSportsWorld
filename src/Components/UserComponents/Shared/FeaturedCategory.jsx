import React, { useEffect, useState } from 'react'
import SeeAll from './SeeAllButton'
import SeeAllVector from '../../../Assets/FeaturedCategory/SeeAllArrow.svg'
import CategoryBox from './CategoryBox'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const FeaturedCategory = ({heading , shouldFetch}) => {
  const [category, setCategory] = useState([])
    useEffect(()=>{
      if(!shouldFetch) return;
      axios.get('http://api.defencesportsworld.com/api/categories/featured').then((res)=> { setCategory(res.data); console.log("featured category useEffect got fired") }).catch(error=> console.log(error));
    },[shouldFetch])
 
      let navigate = useNavigate();
  
 return (     
   <>
   <div className="FeaturedCat">
    <h1 className='Heading'> {heading} </h1>
    <div className="CatList">
        {category.map((slide, index)=>(
            
                <>
                <CategoryBox key={index} onClick={()=>{navigate(`/categories/${slide.name}?cid=${slide._id}`); shouldFetch=false }}
                src={`http://api.defencesportsworld.com/adminUploads/categories/${slide.templateImage}`} title={slide.name} description={slide.tagLine}/>
                </>
            
        ))}
        
        <SeeAll onClick={()=>{navigate('/categories'); shouldFetch= false}} className="see-all-instance" vector={SeeAllVector}/>
    </div>
    

   </div>
   </>
  )
}

export default FeaturedCategory