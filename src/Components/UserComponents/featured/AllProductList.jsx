import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import '../../../Css/UserComponents/featured/AllProductList.css'
import HeroIMG from '../../../Assets/AllProducts/heroMagzine.png'
import SubCategoryCard from '../Shared/SubCategoryCard'
import WhoWeAre from '../Shared/WhoWeAre'
import Magzines from '../../../Assets/HeroSection/Magzines.png'
import ProductCard from '../Shared/ProductCard'
import FeaturedCategory from '../Shared/FeaturedCategory'
import axios from 'axios'

const AllProductList = () => {
  const {categoryName} = useParams();
  const [searchParams] = useSearchParams();
  const categoryID = searchParams.get('cid');
  const [subcategories , setSubCategories] = useState([]);
  const [chunks, setChunks] = useState([]);
  const [hero, setHero] = useState('')
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'instant'});
    
  },[])

  useEffect(()=>{
    if(!categoryID) return;
    axios.get(`http://localhost:8080/api/subcategories/${categoryID}`).then((res)=>{
      setSubCategories(res.data);
      // console.log("Subcategory useEffect got triggered")
    }).catch(err=>{console.log(err)})

    axios.get(`http://localhost:8080/api/categories/hero/${categoryID}`).then((res)=> setHero(res.data[0].heroImage)).catch(error=> console.log(error));
    axios.get(`http://localhost:8080/api/products/${categoryID}?spec=category`).then((res) => {setProducts(res.data); console.log(res.data)}).catch(error=> console.log(error))
    },[categoryID])

  
  useEffect(()=>{
    if(subcategories.length > 0){
      const chunkSize = 3;
      const chunks = [];
      for (let i = 0; i < subcategories.length; i += chunkSize) {
      chunks.push(subcategories.slice(i, i + chunkSize));}
      setChunks(chunks);
    }
  },[subcategories])

const [productChunk, setProductChunk]= useState([])
useEffect(()=>{
  if(products.length==0) return;
  const proChunkSize = 4;
  const proChunks = [];
  for(let i=0; i< products.length; i += proChunkSize){
    proChunks.push(products.slice(i, i+ proChunkSize));
  }
  setProductChunk(proChunks);
  console.log(proChunks)
},[products])

  const navigate = useNavigate();
  return (
    <>
    <div className='AllProductList'>
        <div className="title">{categoryName.charAt(0).toUpperCase()+ categoryName.slice(1)}</div>
        <div className="heroimg"><img src={`http://localhost:8080/adminUploads/categories/${hero}`} alt="HeroImage" /></div>

        <div className="center">
        <div className="subcategoryList">
            {chunks[0] && chunks[0].map((slide, index)=>(
              <SubCategoryCard
              onClick={()=>navigate(`/categories/${categoryName}/${slide.name}`)} 
              key={index}
              imgURL={`http://localhost:8080/adminUploads/subCategories/${slide.cardImage}`}
              title={slide.name}
              />
            ))}
            </div>
        </div>
        
        <div className="CatTitle">Shop All</div>
        <div className="shopAll"></div>
        {productChunk && productChunk.map((group, index)=>(
          <div className="allProducts" key={index}>   
            {group.map((slide, sindex)=>(
              <ProductCard key={sindex} subCategoryID={slide.subCategory} category={categoryName} image={slide.images[0].filename} title={slide.name} rate={slide.rate} />
            ))}
          </div>
  
        ))}
    </div>
        <WhoWeAre/>
        <FeaturedCategory shouldFetch={true} heading={"Browse More Categories"}/>
</>  )
}

export default AllProductList