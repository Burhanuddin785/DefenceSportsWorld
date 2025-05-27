import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../Css/featured/ProductPage.css'
import Li1 from '../../Assets/ProductPage/li1.png'
import Li2 from '../../Assets/ProductPage/li2.png'
import Li3 from '../../Assets/ProductPage/li3.png'
import FeaturedCategory from '../Shared/FeaturedCategory'


const ProductPage = () => {
const shipmentDeats = {Expected_Arrival: "Date", Warrantee: "Years", Description: "Details"}
const details = {Description: "Details", description: "details",description: "details",description: "details",description: "details",description: "details",description: "details",description: "details"}
const imageList = [Li1, Li2, Li3]
const {categoryName, product} = useParams();
const [clicked, setClicked] = useState(0);
const [count, setCount] = useState(1)
  return (
    <div className='productPage'>

    <div className="topSec">
        <div className="imageList">
            {imageList.map((limage, index)=>(
                <div className={`image ${index === clicked  ? "clicked" : ""}`} ><img src={limage} onClick={()=>{setClicked(index)}} alt="image" /></div>
            ))}
        </div>
        <div className="productImage"> <img src={imageList[clicked]} alt="image" /> </div>
        <div className="heroDetails">
            <div className="title">{product}</div>
            <div className="serialNo">serial number</div>
            <div className="price">XXXX</div>
            <div className="counter">
                <div className="minus" onClick={()=>{setCount(Math.max(1, count-1))}}>-</div>
                <div className="variable">{count}</div>
                <div className="plus" onClick={()=>{setCount(count+1)}}>+</div>
            </div>
        <button >Add to Cart</button>
        </div>
    </div>

    <div className="middleSec">
        <div className="descriptionNSpecs">
            <div className="title">PRODUCT DESCRIPTION AND SPECS</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, se</div>
            <div className="specs">
                {Object.entries(details).map(([key, value])=>(
                    <div className="row">
                    <div className="left">{key}</div>
                    <div className="right">{value}</div>                    
                    </div>
                ))}
            </div>
        </div>
        <div className="shipmentDetails">
            <div className="title">Other details</div>
            <div className="shipmentDeatsTable">
                {Object.entries(shipmentDeats).map(([key, value])=>(
                    <div className="row">
                        <div className="left">{key.split('_').map((word => word.charAt(0).toUpperCase()+word.slice(1))).join(' ')}</div>
                        <div className="right">{value}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="boughtTogether"></div>
    </div>

    <FeaturedCategory heading={"Browse More Categories"}/>
    </div>
  )
}

export default ProductPage