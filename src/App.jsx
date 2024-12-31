import React, { lazy, Suspense,useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import Home from './pages/Home/Home.jsx';
const Cart = lazy(()=>import('./pages/Cart/Cart.jsx'));
const PlaceOrder= lazy(()=>import('./pages/Placeorder/PlaceOrder.jsx'));

const App=()=>{
const[showlogin, setShowLogin]= useState(false) 
  return(
    <>
      <Suspense fallback={<p>Loading</p>}>
        <Navbar showlogin={showlogin} setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
        <Footer/>
      </Suspense>
    </>
  )

}

export default App;