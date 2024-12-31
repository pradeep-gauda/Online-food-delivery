import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './Navbar.css';
import LoginPopup from "../LoginPopup/LoginPopup";
import { Link } from "react-router";
import { StoreContext } from "../../context/storeContext";

const Navbar=()=>{
const[menu,setMenu]= useState("home")
const[showlogin,setShowLogin]= useState(false)
const{cartitem}= useContext(StoreContext)
const getTotalNumberofItems=()=>{
  let totalItem= Object.values(cartitem).reduce((total,count)=>total + count,0)
  return totalItem;
}


    return(
        <>
        {showlogin && <LoginPopup setShowLogin={setShowLogin}/>}
        <div className="container navbar">
          <Link to="/"><img src={assets.logo} className="logo" alt="logo"/></Link> 
          <ul className="navbar-left">
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>Home</Link>
            <a href="#menu" onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>Menu</a>
            <a href="#" onClick={()=>setMenu("about")} className={menu==="about"? "active":""}>About</a>
            <a href="#" onClick={()=>setMenu("track")} className={menu==="track"? "active":""}>Track Order</a>
          </ul>  
          <div className="navbar-right">
             <img src={assets.search_icon} alt=""/>
             <div className="navbar-cart">
                <Link to="/cart"><img src={assets.basket_icon} alt=""/></Link>
                {
                  getTotalNumberofItems() > 0 && (<div className="basket-dot">{getTotalNumberofItems()}</div>)
                }
                
                
                
             </div>
            <button onClick={()=>setShowLogin(true)} className="btn btn-primary">Sign up</button>
          </div>
        </div>
        </>
)

}

export default Navbar;