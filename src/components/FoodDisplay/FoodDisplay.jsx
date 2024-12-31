import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({category}) => {
const{food_list}= useContext(StoreContext)
  return (
    <>
        <div className='container mt-3'>
            <h2>Top dish near you </h2>
            <div className='fooditem-container'>
            {
                food_list.map((item,index)=>{
                  if(category==="All" || category===item.category)
                  {
                   return (<FoodItem key={index} id={item._id} price={item.price} description={item.description} name={item.name} image={item.image} category={item.category}/>)
                  }
                 
                })
            }
            </div>
        </div>
    </>
  )
}

export default FoodDisplay