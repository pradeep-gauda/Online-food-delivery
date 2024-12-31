import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './FoodItem.css';
import { StoreContext } from "../../context/storeContext";

const FoodDisplay=({id,price,image,name,description})=>{

const{addItem,removeItem,cartitem}= useContext(StoreContext)

    return(
        <>
       
            <div className="footitem-card">
                <img src={image} className="fooditem-img" alt=""/>
                {
                  !cartitem[id] ? <img src={assets.add_icon_white} className="add-intital-item" onClick={()=>addItem(id)} /> : 
                  <div className="food-item-counter">
                    <img src={assets.remove_icon_red} className="remove-item" onClick={()=>removeItem(id)}/>
                    <p className="count-item">{cartitem[id]}</p>
                    <img src={assets.add_icon_green} className="add-item" onClick={()=>addItem(id)} /> 
                  </div>
                }
                <div className="fooditem-card-info">
                    <p>{name}</p>
                </div>
                <div className="fooditem-card-rating">
                    <img src={assets.rating_starts} />
                </div>
                <div className="fooditen-card-description">
                    <p>{description}</p>
                </div>
                <div className="fooditem-card-price">
                    <p>₹ {price}</p>
                </div>
            </div>
          
        </>
    )


}

export default FoodDisplay;