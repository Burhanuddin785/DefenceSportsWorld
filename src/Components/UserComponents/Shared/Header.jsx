import DSWRemovebgPreview1 from "../../../Assets/Header/DSWLogo.png";
import "../../../Css/UserComponents/Shared/Header.css";
import vector from "../../../Assets/Vector/Vector.svg";
import SearchIcon from "../../../Assets/Header/SearchIcon.png";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import LogIn from "./LogIn";


 const Header = () => {
  const [showModal, setShowmodal] = useState(false);
  const [animate , setAnimate] = useState(false);
  let navigate = useNavigate();
  const handleModal = ()=>{
    setShowmodal(true);
    let timer = setTimeout(()=>{
      setAnimate(true);
    }, 10)
    clearTimeout(timer);
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const handleClick = () => {
    burgerRef.current?.click(); // Trigger click on .burger
  };

  return (
    <>
    <div className="header">
      <div className="grid-item one">
        <img
          className="logo"
          alt="Dsw removebg preview"
          src={DSWRemovebgPreview1}
          />
      </div>

      <div className="grid-item two">
        <div className="seach-bar">
            <img
              className="essential"
              alt="Essential"
              src={SearchIcon}
              />
            <input className="search" placeholder="Search..." type="text"/>
          </div>
        </div>
        <div className="hamburger" >
        <label class="burger" for="burger" >
          <input type="checkbox" id="burger" ref={burgerRef} onClick={() => setMenuOpen(!menuOpen)}/>
          <span></span>
          <span></span>
          <span></span>
        </label>
        </div>

        <div className={`navigation ${menuOpen ? "open" : ""}`}>
          <div className="text-wrapper" onClick={() => {navigate("/"); handleClick()}}>Home</div>
          <div className="text-wrapper" onClick={() => {navigate("/aboutUs"); handleClick()}}>About</div>
          <div className="text-wrapper">Contacts</div>
          <div className="text-wrapper" onClick={()=> {handleModal(); handleClick()}}>LogIn</div>
          <div className="text-wrapper cartIcon">
          <img className="headervector" alt="Cart" src={vector} onClick={() => {navigate("/cart"); handleClick()}} />
          </div>
        </div>
      </div>
    

    {showModal && (
      <div className={`modalOverlay ${animate ? "show" : ""}`} onClick={()=>setShowmodal(false)}>
        <div className="modalContent" onClick={(e)=>{e.stopPropagation()}} >
        <LogIn/>
        
        </div>
      </div>
    )}
    </>   
  );
};

export default Header