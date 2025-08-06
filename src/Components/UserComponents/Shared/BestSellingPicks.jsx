import React, { useEffect, useState } from 'react'
import '../../../Css/UserComponents/Shared/BestSellingPicks.css'
import ProductCard from './ProductCard'
import axios from 'axios'


const BestSellingPicks = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get('https://api.defencesportsworld.com/api/products/featured').then(res=> setProducts(res.data)).catch(err=>console.log(err))
  },[])

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

  return (
    <>
    <div className="bestSellingPicks">
        <h1 className="BSPHeading">Bestselling Picks</h1>
                {productChunk && productChunk.map((group, index)=>(
          <div className="allProducts" key={index}>   
            {group.map((slide, sindex)=>
              {
                
                return <ProductCard 
                key={sindex} 
                subCategory={slide.subCategory} 
                category={slide.category} 
                image={slide.images[0].filename} 
                title={slide.name} 
                productID={slide._id} 
                rate={slide.rate}/>
              }
                  
            )}
          </div>

        ))}
    </div>
    </>
  )
}

export default BestSellingPicks