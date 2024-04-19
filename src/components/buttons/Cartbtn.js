import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector} from 'react-redux'

import './style1.css';
const Cartbtn = () => {
    const state = useSelector((state)=> state.addItem)
   
  // console.log('///////')
  const findlength=()=>{
    let sum=0;
    console.log(sum,'=====')
    state.map((item)=>{
      console.log(item.quantity)
       sum=sum+item.quantity;
    })
    return sum;
  }
    return (
      <>
          <NavLink to="/cart" className="btn btn-outline-primary ms-2">
              <span className="fa fa-shopping-cart me-1 " ></span> Cart  {findlength()}
          </NavLink>
  </>
)
}


export default Cartbtn
