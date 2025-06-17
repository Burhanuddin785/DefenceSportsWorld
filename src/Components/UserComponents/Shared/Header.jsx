import DSWRemovebgPreview1 from "../../../Assets/Header/DSWLogo.png";
import "../../../Css/UserComponents/Shared/Header.css";
import vector from "../../../Assets/Vector/Vector.svg";
import SearchIcon from "../../../Assets/Header/SearchIcon.png";
import { useNavigate } from "react-router-dom";

 const Header = () => {

  let navigate = useNavigate();

  return (
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

        <div className="navigation">
        <div className="text-wrapper" onClick={()=>{navigate('/')}} >Home</div>
        <div className="text-wrapper" onClick={()=>{navigate('/')}}>About</div>
        <div className="text-wrapper">Contacts</div>
        <div className="text-wrapper">LogIn</div>
        <img className="vector" alt="Vector" src={vector} onClick={()=>{navigate('/cart')}} />
        </div>
      </div>    
  );
};

export default Header