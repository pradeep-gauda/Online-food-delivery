import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext';

const PlaceOrder = () => {
let deliveryFee=10;
const{getTotalcartAmount} = useContext(StoreContext)
  return (
    <>
      <div className='container'>
      <h2>Checkout</h2>
      <hr/>
        <div className='placeorder mt-3'>
          <div className='cart-left'>
             <form>
              <div className='multi-input'>
                <input type='text' placeholder='First Name' required />
                <input type='text' placeholder='Last Name' required />
              </div>
              <div className='multi-input'>
                <input type='email' placeholder='Email' required />
                <input type='text' placeholder='Mobile' required />
              </div>
              <div>
                <input type='text' placeholder='Address' required />
                
              </div>
              <div>
                <input type='text' placeholder='Pin Code' required />
                
              </div>
             </form>
          </div>
          <div className='cart-right'>
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
        </div>
      </div>
    </>
  )
}

export default PlaceOrder