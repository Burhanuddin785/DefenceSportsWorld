import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import '../../../Css/UserComponents/featured/AllProductList.css'
import WhoWeAre from '../Shared/WhoWeAre'
import ProductCard from '../Shared/ProductCard'
import FeaturedCategory from '../Shared/FeaturedCategory'
import axios from 'axios'

const AllProductList = () => {
  const [searchParams] = useSearchParams();
  const subCategoryID = searchParams.get('sid');
  const [products, setProducts] = useState([]);
  const [proChunks, setProChunks] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'instant'})
  },[])
  useEffect(()=>{
    if(!subCategoryID) return;
    axios.get(`http://localhost:8080/api/subcategories/${subCategoryID}?spec=subcategory`).then(res=> setSubCategoryData(res.data[0])).catch(err=>console.log(err))
    axios.get(`http://localhost:8080/api/products/${subCategoryID}?spec=subCategory`).then(res=> {setProducts(res.data); console.log(res.data)}).catch(err=>console.log(err));
  },[subCategoryID])

  useEffect(()=>{
    if(!products) return;
    // console.log(products)
    const proChunkSize = 4;
    const proChunkss = [];
    for(let i=0; i< products.length; i += proChunkSize){
        proChunkss.push(products.slice(i, i+ proChunkSize));
      }
      // console.log(proChunkss);
      setProChunks(proChunkss);
  },[products])
  
  const {categoryName, subCategoryName} = useParams();
  return (
    <>
    <div className='AllProductList'>
        <div className="title">{categoryName.charAt(0).toUpperCase()+ categoryName.slice(1) + "/" +subCategoryName.charAt(0).toUpperCase()+ subCategoryName.slice(1) }</div>
        <div className="heroimg"><img src={`http://localhost:8080/adminUploads/subCategories/${subCategoryData?.heroImage}`} alt="HeroImage" /></div>
        <div className="center">

        </div>
        <div className="CatTitle">Shop All</div>
        <div className="shopAll"></div>
        {proChunks?.map((group, index)=>(
          <div className="allProducts" key={index}>   
            {group?.map((slide, sindex)=>(
              <ProductCard key={sindex} subCategory={slide.subCategory} category={categoryName} image={slide?.images?.[0]?.filename} title={slide.name} productID={slide._id} rate={slide.rate} />
            ))}
          </div>

        ))}
    </div>
        <WhoWeAre/>
        <FeaturedCategory heading={"Browse More Categories"} shouldFetch={true}/>
</>  )
}

export default AllProductList