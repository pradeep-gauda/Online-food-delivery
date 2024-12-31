import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/frontend_assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider =({children})=>{  
const[cartitem, setCartItem]= useState({})

//additem in cart
const addItem=(itemid)=>{

    if(!cartitem[itemid])
    {
        setCartItem((prev)=>({...prev,[itemid]:1}))
    }
    else{
        setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }

}

//remove item from cart
const removeItem=(itemid)=>{
    setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}

//total the price
const getTotalcartAmount=()=>{
    let totalAmount = 0;
    for(let item in cartitem)
    {
        if(cartitem[item]>0)
        {
        console.log(item)
        let itemInfo= food_list.find((product)=>product._id===item)
        totalAmount += itemInfo.price*cartitem[item]
        }
    }
    return totalAmount;
}



    
const contextValue = {
    food_list,
    addItem,
    removeItem,
    cartitem,
    setCartItem,
    getTotalcartAmount}

return (
    <StoreContext.Provider value={contextValue}>
        {children}
    </StoreContext.Provider>
)

}

export default StoreContextProvider;