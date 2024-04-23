import React,{useEffect, useState} from 'react'
// import {DATA} from '../data/Data'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {addItem, decrement, deleteItem, increment} from '../redux/action/index'
import {  useNavigate } from 'react-router-dom'
// import {loadStripe} from '@stripe/stripe-js'
import './style.css'

const Cart = () => {

    const state = useSelector((state)=> state.addItem);
    console.log(state,'---------')
    
    const [totalprice, setPrice] = useState(0);
    const [totalquantity,settotalquant]=useState(0);
  
    const dispatch = useDispatch()

    const handleDelete = (product) => {
        console.log('clicked')
            dispatch(deleteItem(product))
            // setCartBtn("Add to Cart")     
      }

const navigate=useNavigate();

const handleCheckOut=()=>{
navigate('/checkout')
}

    const handleClose = (item) => {
        dispatch(deleteItem(item))
    }

    //add to cart
    const handleinc=(item)=>{
        dispatch(increment(item))
    }
    //remove to cart
    const handledec=(item)=>{
        console.log('decrement')
        dispatch(decrement(item))
    }

    //count total price
    const total=()=>{
        let totalprice=0
        state.map((ele,index)=>{
            totalprice=ele.price*ele.quantity+totalprice
        });
        setPrice(totalprice)
    }

    //count total quantity
    const countquantity=()=>{
        let totalquantity=0
        state.map((ele,index)=>{
            totalquantity=ele.quantity+totalquantity
        });
        settotalquant(totalquantity)
    }
    
   useEffect(()=>{
    total();
   },[total])

   useEffect(()=>{
    countquantity()
   },[countquantity]);

    // const cartItems = (cartItem) => {
  return (
    <>
   
<div className='container'>
    <div className='row justify-content-center mt-5 mb-5'>
        <div className='col-md-8'>
            <div className="card">
                <div className="card-header bg-dark p-3">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='text-white m-0'>Cart Calculation {state.length > 0 ? `(${state.length})` : ""}</h5>
                        {/* {state.length > 0 ? <button class='btn btn-danger btn-sm' onClick={emptyCart}>Empty Cart</button> : ""} */}
                    </div>
                </div>
                <div className="card-body p-0">
                    {state.length === 0 ? 
                        <table className='table cart-table mb-0'>
                            <tbody>
                                <tr>
                                    <td colspan={6}>
                                        <div className='cart-empty text-center'>
                                            <i className='fa fa-shopping-cart'></i>
                                            <p>Your Cart Is Empty</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                        :
                        <div className='table-responsive'>
                            <table className='table cart-table mb-0'>
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th class='text-right'>Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.map((data, index) => (
                                        <tr key={index}>
                                            <td>
                                                <button className='prdct-delete' onClick={() => handleDelete(data)}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                            <td><img src={data.image} alt="Product" height="150px" width="150px" /></td>
                                            <td><p>{data.title}</p></td>
                                            <td>{data.price}</td>
                                            <td>
                                                <div className="prdct-qty-container">
                                                    <button className='prdct-qty-btn' type='button' onClick={data.quantity >= 1 ? () => handledec(data.id) : () => handleClose(data)}>
                                                        <i className='fa fa-minus'></i>
                                                    </button>
                                                    <input type="text" className='qty-input-box' value={data.quantity} disabled />
                                                    <button className='prdct-qty-btn' type='button' onClick={() => handleinc(data.id)}>
                                                        <i className='fa fa-plus'></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='text-right'>₹ {data.quantity * data.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colspan={2}>&nbsp;</th>
                                        <th>Items In Cart: <span className='text-danger'>{totalquantity}</span></th>
                                        <th className='text-right'>Total Price: <span className='text-danger'>₹ {totalprice}</span></th>
                                        <th className='text-right'><button className='btn btn-success' 
                                        onClick={handleCheckOut} 
                                        type='button'>Checkout</button></th>
                    
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>

</div>
   

    </>
  );
}

const emptyCart = () => {
    return (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
                </div>
            </div>
    );
}


export default Cart
