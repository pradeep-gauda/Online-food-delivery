import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
import StoreContextProvider from './context/storeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>
  ,
)
