import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from 'react-router-dom'
import LOGO from './images/llogo.png'
import Cartbtn from './buttons/Cartbtn'
import './style.css';

const Navbar = () => {

  return (
    <>
      
    <nav className={`navbar navbar-expand-lg navbar-light bg-light  `}>
                <div className="container-fluid py-2">
                    <div className='main-head'>
                      <img src={LOGO} alt='logo'/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/log">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                                      
                        </ul>
                 
   
                    <Cartbtn/>
                    </div>
                </div>
            </nav>
               </>
    
  )
}


export default Navbar
