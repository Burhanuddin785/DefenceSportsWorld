import React from 'react'
import '../../../Css/UserComponents/featured/Cart.css'
import Counter from '../Shared/Counter'
import Scope from '../../../Assets/ProductPage/li1.png'

const Cart = () => {
    const cart = [
        {
            title: "Name",
            image: Scope,
            quantity: 1,
            price: "XXXX"
        },
        {
            title: "Name",
            image: Scope,
            quantity: 3,
            price: "XXXX"
        }
    ]
  return (
    <div className='cart'>
        <div className="topsec">
            <div className="productList">
                <div className="title">Shopping Cart</div>
                <div className="list">
                    {cart.map((value, key)=>(
                    <div className="row" key={key}>
                        <div className="image"><img src={value.image}/></div>
                        <div className="deats">
                        <div className="title">{value.title}</div>
                        <Counter value={value.quantity} />
                        <div className="ETA">Estimated Time of Delivery : 00:00:00</div>
                        </div>
                        <div className="price">{value.price}</div>
                    </div>
                ))}
                </div>
            </div>
            <div className="bill">
                <div className="billRow">
                    <div className="billItem">Subtotal</div>
                    <div className="billItem">XXXX</div>
                </div>
                <div className="billRow">
                    <div className="billItem">Delivery Charges</div>
                    <div className="billItem">XXXX</div>
                </div>
                <div className="billRow">
                    <div className="billItem">{`Total (${cart.length} items)`}</div>
                    <div className="billItem">XXXX</div>
                </div>                                
            </div>
        </div>
    </div>
  )
}

export default Cart