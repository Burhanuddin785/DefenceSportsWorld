import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import '../../../Css/UserComponents/featured/ProductPage.css'
import FeaturedCategory from '../Shared/FeaturedCategory'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slices/cartSlice'
import axios from 'axios'


const ProductPage = () => {
const [searchParams] = useSearchParams();
const productID = searchParams.get('pid');
const [product, setProduct] = useState(null);
useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'instant'})
  },[])
useEffect(()=>{
    axios.get(`http://localhost:8080/api/products/${productID}`).then((res)=> {setProduct(res.data[0]);  console.log(res.data[0])}).catch(err=> console.log(err))
},[productID])

const shipmentDeats = {Expected_Arrival: "Date", Warrantee: "Years", Description: "Details"}
const {categoryName, productTitle} = useParams(); //to be replaced with product.id
const [clicked, setClicked] = useState(0);
const [count, setCount] = useState(1)
const dispatch = useDispatch();
const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product._id, //to be replaced with product.id
      quantity: count
    }))
  }
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='productPage'>

    <div className="topSec">
        <div className="imageList">
            {product?.images?.map((limage, index)=>(
                <div key={index} className={`image ${index === clicked  ? "clicked" : ""}`} ><img src={`http://localhost:8080/adminUploads/products/${product.subCategory._id}/${limage.filename}`} onClick={()=>{setClicked(index)}} alt="image" /></div>
            ))}
        </div>
        <div className="productImage"> <img src={`http://localhost:8080/adminUploads/products/${product?.subCategory?._id}/${product?.images?.[clicked]?.filename}`} alt="image" /> </div>
        <div className="heroDetails">
            <div className="title">{product?.name}</div>
            <div className="serialNo">#{product?.serialNumber}</div>
            <div className="price">₹ {product?.rate.toLocaleString('en-IN')}</div>
            <div className="counter">
                <div className="minus" onClick={()=>{setCount(Math.max(1, count-1))}}>-</div>
                <div className="variable">{count}</div>
                <div className="plus" onClick={()=>{setCount(count+1)}}>+</div>
            </div>
        <button onClick={handleAddToCart}  >Add to Cart</button>
        </div>
    </div>

    <div className="middleSec">
        <div className="descriptionNSpecs">
            <div className="title">PRODUCT DESCRIPTION AND SPECS</div>
            <div className={`description ${expanded ? 'expanded' : ''}`}>{product?.description || "No Description Available"}
                </div>
                {isMobile && (
                <div className="see-more-toggle" onClick={() => setExpanded(!expanded)}>
                {expanded ? "See Less" : "See More"}
                </div>
              )}
            <div className="specs">
                {
                    product?.specifications?.map((value, index) => {                   
                    return (
                        <div className="row" key={value._id || index}>
                        <div className="left">{value.description}</div>
                        <div className="right">{value.detail}</div>
                        </div>
                    );
                }) || "No Specifications Available" }
            </div>
        </div>
        <div className="shipmentDetails">
            <div className="title">Other details</div>
            <div className="shipmentDeatsTable">
                {Object.entries(shipmentDeats).map(([key, value])=>(
                    <div className="row" >
                        <div className="left">{key.split('_').map((word => word.charAt(0).toUpperCase()+word.slice(1))).join(' ')}</div>
                        <div className="right">{value}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="boughtTogether"></div>
    </div>

    <FeaturedCategory heading={"Browse More Categories"} shouldFetch={true}/>
    </div>
  )
}

export default ProductPage