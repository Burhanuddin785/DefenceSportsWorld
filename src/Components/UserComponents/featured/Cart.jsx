import React,{ useEffect, useState } from 'react'
import '../../../Css/UserComponents/featured/Cart.css'
import Counter from '../Shared/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeFromCart, clearCart } from '../../../redux/slices/cartSlice'
import axios from 'axios'
import LogIn from "../Shared/LogIn";


const Cart = () => {
    const user = useSelector(state => state.user);
    const [showModal, setShowmodal] = useState(false);
      const [animate , setAnimate] = useState(false);
     const handleModal = ()=>{
        setShowmodal(true);
        let timer = setTimeout(()=>{
        setAnimate(true);
        }, 10)
        clearTimeout(timer);
    }
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const [deliveryCharge, setDeliveryCharge] = useState(2000);
    const [productData, setProductData] = useState([])
    useEffect(() => {
    // Fetch product details for all items in cart
    const fetchProducts = async () => {
      const responses = await Promise.all(
        
        cartItems?.map(item =>
          axios.get(`http://api.defencesportsworld.com/api/products/${item.productId}`).catch(err=>console.log(err))
        )
      )
      setProductData(responses.map(res => res.data[0])) // assuming .find returns an array
    }

    if (cartItems.length) fetchProducts()
  }, [cartItems])

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, quantity: Number(newQuantity) }))
  }

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const handleCheckout = async () => {
  const amount = gTotal; // from Redux or local calc

  const res = await axios.post('http://api.defencesportsworld.com/api/payment/create-order', { amount });
  const { orderId } = res.data;

  const options = {
    key: 'YOUR_KEY_ID',
    amount: amount * 100,
    currency: 'INR',
    name: 'Your Store Name',
    description: 'Order Payment',
    order_id: orderId,
    handler: async function (response) {
      // Save order in MongoDB
      const orderData = {
        cartItems, // from Redux
        amount,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
      };
      await axios.post('http://api.defencesportsworld.com/api/orders', orderData).catch((err)=>{console.log(err); alert('Payment Failed')});
      alert('Payment Successful!');
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
    },
    theme: { color: '#F37254' },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};


  const total = productData.reduce((sum, product) => {
    const item = cartItems.find(i => i.productId === product._id)
    return sum + (product.rate * item.quantity)
  }, 0)
  const gTotal = total+deliveryCharge;

    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'instant'})
      },[])

  return (
    <div className='cart'>
        <div className="topsec">
            <div className="productList">
                <div className="title">Shopping Cart</div>
                <div className="list">
                    {productData.map((value)=>{
                        const item = cartItems.find(i => i.productId === value._id)
                    return (
                    <div className="row" key={value._id}>
                        <div className="image"><img src={`http://api.defencesportsworld.com/adminUploads/products/${value.subCategory._id}/${value.images[0].filename}`}/></div>
                        <div className="deats">
                        <div className="title">{value.name}</div>
                        <Counter value={item.quantity} onChange={(newQuantity) => handleQuantityChange(value._id, newQuantity)}/> 
                        <div className="ETA">Estimated Time of Delivery : 00:00:00</div>
                        </div>
                        <div className="price">₹ {value.rate.toLocaleString('en-IN')}</div>
                    </div>
                    )})}
                </div>
            </div>
            <div className="bill">
                <div className="billRow">
                    <div className="billItem">Subtotal</div>
                    <div className="billItem">₹ {total.toLocaleString('en-IN')}</div>
                </div>
                <div className="billRow">
                    <div className="billItem">Delivery Charges</div>
                    <div className="billItem">₹ {deliveryCharge}</div>
                </div>
                <div className="billRow">
                    <div className="billItem">{`Total (${productData.length} item${productData.length>1?"s":""})`}</div>
                    <div className="billItem">₹ {gTotal.toLocaleString('en-IN')}</div>
                </div>   
                <div className="billbtn">
                    <button onClick={user? handleCheckout : handleModal }>{user? "Check Out": "Log In to Check Out"}</button>
                </div>                             
            </div>
        </div>

        {showModal && (
          <div className={`modalOverlay ${animate ? "show" : ""}`} onClick={()=>setShowmodal(false)}>
            <div className="modalContent" onClick={(e)=>{e.stopPropagation()}} >
            <LogIn/>
            {/* <button className="btn" onClick={()=> setShowmodal(false)} >X</button> */}
            </div>
            </div>
        )}
    </div>


  )
}

export default Cart