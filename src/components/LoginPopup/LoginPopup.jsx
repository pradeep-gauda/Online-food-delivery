import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {
const[currentState, setCurrentState]= useState("Sign up")    
  return (
     <>
        <div className='login-popup'>
            <form className='login-popup-container'>
            
                <div className='login-popup-inputs'>
                 <h2>{currentState}</h2>
                
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className='popup-close'/>
                { currentState==="Login"?<></>:<input type='text' placeholder='Your Name' required/>}
                    <input type="email" placeholder='Your email' required/>
                    <input type='password' placeholder='Your Password' required />
                
                <button className='btn btn-tomato'>{currentState==="Sign up"?"create account":"login"}</button>
                
                {currentState==="Sign up"?<p>Already having account <span className='link' onClick={()=>setCurrentState("Login")}>Login</span></p> 
                : <p>Don't have account <span className='link' onClick={()=>setCurrentState("Sign up")}>Sign up</span></p>
                
                }
                 
                 
                
                </div>
            </form>
        </div>

     </>
  )
}

export default LoginPopup