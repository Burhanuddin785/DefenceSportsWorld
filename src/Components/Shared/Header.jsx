import React from "react";
import DSWRemovebgPreview1 from "../../Assets/Header/DSWLogo.png";
// import { PropertyDefault } from "./PropertyDefault";
import image1 from "../../Assets/Header/HeaderTexture.png";
import "../../Css/Shared/Header.css";
import vector from "../../Assets/Vector/Vector.svg";
import SearchIcon from "../../Assets/Header/SearchIcon.png";
import { useNavigate } from "react-router-dom";

 const Header = () => {

  let navigate = useNavigate();

  return (
    <div className="header">
      <div className="overlap">
        <img className="image" alt="HeaderTexture" src={image1} />

        <img
          className="DSW-removebg-preview"
          alt="Dsw removebg preview"
          src={DSWRemovebgPreview1}
        />

        <div className="seach-bar">
          <div className="overlap-group">
            <img
              className="essential"
              alt="Essential"
              src={SearchIcon}
            />

            <div className="div">Search...</div>
          </div>
        </div>

        <img className="vector" alt="Vector" src={vector} onClick={()=>{navigate('/cart')}} />

        <div className="text-wrapper-2" onClick={()=>{navigate('/')}}>About</div>

        <div className="text-wrapper-3">Contacts</div>

        <div className="text-wrapper-4" onClick={()=>{navigate('/')}} >Home</div>

        {/* <div className="text-wrapper-4">Shop</div> */}    

        {/* <PropertyDefault className="shopdropdown" /> */}
      </div>
    </div>
  );
};

export default Header