import React from 'react'
import '../../../Css/UserComponents/Shared/WhoWeAre.css'
import Quality from '../../../Assets/WWA/Quality.svg'
import FastDelivery from '../../../Assets/WWA/fast-delivery.svg'
import SecurePayment from '../../../Assets/WWA/SecurePayment.svg'


const WhoWeAre = () => {

    let featuredcards =[
        {
            imgsrc : Quality,
            heading : "Premium Quality Gear",
            description : "Tested and trusted by professionals, built for performance and durability.", 
        },
        {
            imgsrc : FastDelivery,
            heading : "Fast and Secure Shipping",
            description : "Quick delivery with tracking and secure packaging for peace of mind.", 
        },
        {
            imgsrc : SecurePayment,
            heading : "100% Secure Payment",
            description : "Encrypted transactions and trusted payment gateways keep your data safe.", 
        }
    ]

    

  return (
    <div className='WhoWeAre'>
        <div className="WWAheading">At Defence Sports World, you can rest assured</div>
        <div className="featuredcards">
            {featuredcards.map((card,index)=>(
                <div className="cardgrid">
                <div className="WWAimg"><img src={card.imgsrc} alt={`CardIMG${index+1}`} /></div>
                <div className="cardHead">{card.heading}</div>
                <div className="cardDescription">{card.description}</div>
            </div>
            ))}
            
            
        </div>
    </div>
  )
}

export default WhoWeAre