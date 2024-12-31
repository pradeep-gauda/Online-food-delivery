import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router'

const Cart = () => {
const{food_list,removeItem,cartitem,getTotalcartAmount}= useContext(StoreContext)
const deliveryFee=10;
const nagivation = useNavigate()

  return (
    <>
      <div className='container'>
      <h2>Cart</h2>
      <hr/>
      <br/>
      <div className='cart-items'>
        <div className='cart-item-titles'>
          <table>
          <thead>
            <tr>
            <td>Item</td>
            <td>Title</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Remove</td>
            </tr>
          </thead>
          <tbody>
           
            {food_list.map((item,index)=>{
            const quantity= cartitem && cartitem[item._id]?cartitem[item._id]:0;
            if(quantity>0)
            {
              return(
                
                <tr key={index}>
                  <td><img src={item.image} style={{width:"50px"}}/></td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>{quantity}</td>
                  <td>₹{quantity*item.price}</td>
                  <td><p onClick={()=>removeItem(item._id)} className='remove-item'>X</p></td>
                </tr>
                  
                
              )
            }
          })}
            
          </tbody>
          
          </table>
        </div>
        <br/>
        <hr/>
        <div className='cart-checkout mt-3'>
         <div className='cart-total'>
         <h2>Cart Totals</h2>
           <div className='cart-total-details'>
            <p>Sub-total</p>
            <p>₹{getTotalcartAmount()}</p> 
           </div>
           <hr/>
           <div className='cart-total-details'>
           <p>Delivery Fee</p>
           <p>₹{getTotalcartAmount()=== 0 ? 0:deliveryFee}</p>
           </div>
           <hr/>
           <div className='cart-total-details'>
           <p>Total</p>
           <p>₹{getTotalcartAmount()===0?0:getTotalcartAmount()+ deliveryFee}</p>
           
           </div>
           <hr/>
           <button onClick={()=>nagivation('/order')} className='btn btn-tomato'>Checkout</button>
         </div>
         <div className='cart-promo'>
          <p>Enter your promo code</p>
          <input type='text' placeholder='Promo code'/>
          <button className='btn btn-primary'>Submit</button>
         </div>
        </div>
        
         
      
      </div>
      </div>
    </>
  )
}

export default Cart