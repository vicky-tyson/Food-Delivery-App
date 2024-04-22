import React, { useContext } from 'react';
import "./navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from '../../Context/StoreContext';

export default function NavBar({ setShowLogin }) {

  const[menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="nav-bar">
       <Link to="/"><img src={assets.logo} alt="Zomato-Logo" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' className={menu === "home" ? "active" : undefined} onClick={() => setMenu("home")}>Home</Link>
            <a href="#explore-menu" className={menu === "menu" ? "active" : undefined} onClick={() => setMenu("menu")}>Menu</a>
            <a href="#app-download" className={menu === "mobile" ? "active" : undefined} onClick={() => setMenu("mobile")}>Mobile App</a>
            <a href="#footer" className={menu === "contact" ? "active" : undefined} onClick={() => setMenu("contact")}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search-Icon" />
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon} alt="Basket-Icon" /></Link> 
                <div className={getTotalCartAmount() === 0 ? undefined : "dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}
