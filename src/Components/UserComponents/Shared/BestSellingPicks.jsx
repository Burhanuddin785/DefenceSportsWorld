import React from 'react'
import '../../../Css/UserComponents/Shared/BestSellingPicks.css'
import ProductCard from './ProductCard'
import Magzines from '../../../Assets/HeroSection/Magzines.png'

const BestSellingPicks = () => {
  return (
    <>
    <div className="bestSellingPicks">
        <h1 className="Heading">Bestselling Picks</h1>
        <ProductCard image={Magzines} title="Muzzle s350" rate="XXXX" />
    </div>
    </>
  )
}

export default BestSellingPicks