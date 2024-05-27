import React, { useState } from "react";
import NxtWave_TM_Coloured_logo from "../assets/NxtWave_TM_Coloured_logo.png";
import image1 from "../assets/S.png";
import image2 from "../assets/plusIcon.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showlogoutButton,setShowLogoutButton] = useState(false)
  const loggedinValue = localStorage.getItem("isLoggedIn")
  const addNewItem = localStorage.getItem("addNew")
  const history = useNavigate();

  console.log(addNewItem)

  const handleClick = () => {
    history("/createcard");
    localStorage.setItem("addNew",false)
  };
  const handleLogoutClick = () => {
    history("/")
    setShowLogoutButton(false)
    localStorage.removeItem("isLoggedIn")
  };
  return (
    <>
      <div className="header_container">
        <div>
          <img
            src={NxtWave_TM_Coloured_logo}
            alt="NxtWave"
            className="nxt_logo_img"
          />
        </div>
        {loggedinValue && <div className="header_buttons" >
          {addNewItem && <div onClick={handleClick}>
          <button className="button" style={{backgroundColor:"green"}}>
            <img src={image2} alt="NxtWave" />
            Add
          </button>
          </div>}
          <img src={image1} alt="NxtWave" style={{cursor:"pointer"}} onClick={()=>{setShowLogoutButton(!showlogoutButton)} }/>
        </div>}
      </div>
          {showlogoutButton && <button className="logout_button" onClick={handleLogoutClick}>Logout</button>}
      <hr />
    </>
  );
};

export default Header;
