import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import SingleProduct from "./components/ProductDetail"
import About from './components/About'
import Contact from './components/Contact'
// import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Payy from './components/Pay'
// import { BrowserRouter } from 'react-router-dom'
import './App.css';


function App() {

  return (
  <>
      <Navbar /> 
      <Routes>   
      <Route path='/log' element={<Login/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route  path="/cart" element={<Cart/>} />
      <Route  path="/checkout" element={<Checkout/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>}/>
    <Route path='/pay' element={<Payy/>}/>
      </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;
