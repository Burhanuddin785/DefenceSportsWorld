import React from 'react'
import '../../../Css/UserComponents/featured/Aboutus.css'
import LOGO from '../../../Assets/favicon.jpeg'

const AboutUs = () => {
  return (
    <div className='aboutus'>
        <div className="aulogo"><img src={LOGO} alt="" /></div>
        <div className="speach">
            <h1>About us</h1>
            <h2>Welcome to Defence Sports World – India’s Premier Destination for Legal Air Guns and Shooting Accessories.</h2>
            <p>At Defence Sports World, we don’t just sell guns — we serve a passionate and responsible community of sport shooters, collectors, and firearm enthusiasts who value safety, precision, and professionalism. Founded with the vision to make gun ownership safer, more accessible, and legally compliant, we have quickly established ourselves as one of India’s most trusted online platforms for high-quality air guns and shooting gear.</p>
            <h2>Who We Are</h2>
            <p>Defence Sports World is a fully licensed gun dealership and a registered supplier of legal firearms, primarily focusing on air guns, air pistols, and a wide range of shooting accessories. Backed by deep expertise in firearm regulations, safety practices, and customer service, we cater exclusively to individuals and organizations who meet the legal standards required to own or operate firearms in India.</p>
            <p>We are not just sellers — we are enthusiasts, advocates of legal gun ownership, and believers in the sport and skill of precision shooting. Whether you're a hobbyist looking for your first air rifle or a seasoned competitor upgrading your kit, Defence Sports World is your one-stop shop.</p>
            <div className="line"></div>
            <h1> Our Mission</h1>
            <h2>Our mission is simple:</h2>
            <p>To empower India’s shooting community with access to premium-quality air guns and accessories, while upholding the highest standards of safety, legality, and ethical responsibility.</p>
            <h2>We are deeply committed to: </h2>
            <ul>
                <li>Ensuring Responsible Ownership: We strictly do not sell firearms to unlicensed individuals. Every sale goes through a thorough vetting process to ensure compliance with Indian law.</li>
                <li>Promoting Safe Sport Shooting: We advocate for shooting as a discipline, a sport, and a hobby — not as a weapon of harm. Our focus on air-powered guns ensures the thrill of the sport without the dangers of live ammunition.</li>
                <li>Simplifying the Buying Experience: Through our easy-to-use online platform, you can browse, compare, and order your favorite shooting gear from the comfort of your home — safely, securely, and legally.</li>
                <li>Delivering With Integrity: Every product is packed with care, shipped with speed, and handled with full attention to local firearm transportation laws.</li>
            </ul>
            <div className="line"></div>
            <h1>What We Offer</h1>
            <ul>
                <li>A curated selection of air rifles, air pistols, match pellets, scopes, gun cases, shooting targets, and other professional-grade accessories.</li>
                <li>Products from leading national and international brands known for quality, performance, and reliability.</li>
                <li>Transparent pricing, full product details, and prompt support.</li>
                <li>Authentic legal documentation and full compliance with India's Arms A</li>
                <li>Fast and secure delivery across India with all necessary paperwork.</li>
            </ul>
            <div className="line"></div>
            <h1>Why Choose Us</h1>
            <ul>
                <li>✅ Licensed Seller – We are authorized to sell air weapons and comply with all government norms.</li>
                <li>✅ 100% Legal & Ethical – No shady dealings. We prioritize law, safety, and moral responsibility.</li>
                <li>✅ Community-First Approach – We support India’s growing sport shooting community through education, clarity, and care.</li>
                <li>✅ Customer Support That Cares – Got a question? Need help with license verification? We're just a call or message away.</li>
                <li>✅ Verified Buyers Only – We verify every customer’s eligibility before making a sale. Your safety and the safety of our society come first.</li>
            </ul>
            <div className="line"></div>
            <h1>Serving with a Purpose</h1>
            <p>In an age where firearm misuse is a major concern, we believe that responsible gun culture must start with trust, regulation, and education. Our platform is built to offer a legal, safe, and ethical way for enthusiasts to enjoy the shooting sports — without ever compromising on the law or public safety.
            </p>
            <p>At Defence Sports World, every order we pack, every product we recommend, and every question we answer is guided by one principle: to serve India’s shooting community with honor, trust, and a clear conscience.</p>
            <p>Thank you for choosing us.</p>
        </div>
    </div>
  )
}

export default AboutUs