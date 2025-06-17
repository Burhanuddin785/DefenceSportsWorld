import React from 'react'
import '../../../Css/UserComponents/Shared/Footer.css'
import Insta from '../../../Assets/Footer/insta.png'
import Twitter from '../../../Assets/Footer/twitter.png'
import FaceB from '../../../Assets/Footer/fb.png'
import Linkedin from '../../../Assets/Footer/linkedin.png'

const Footer = () => {
  return (
    <>
    <div className="footerHeader">
        <div className="headLine">Stay updated at all times. Get Defence Sports World’s news and offers</div>
        <div className="emailBlock">
            <input placeholder='Email...' type="text" />
            <button>Submit</button>
        </div>
        <div className="socialIcons">
            <img src={Insta} alt="Insta" />
            <img src={Twitter} alt="Twitter" />
            <img src={FaceB} alt="Facebook" />
            <img src={Linkedin} alt="Linkedin" />
        </div>
    </div>
    <div className="footerBody">
        <div className="QuickLinks">
            <label>Home</label>
            <label>About</label>
            <label>Shop</label>
            <label>Contact</label>
            <label>Track Order</label>
            <label>Service</label>
        </div>
        <div className="AboutDSW">
            <label>Credits</label>
            <label>Ownership</label>
            <label>Website</label>
            <label>Licenses</label>
            <label>Affiliates</label>
        </div>
    </div>
    </>
  )
}

export default Footer