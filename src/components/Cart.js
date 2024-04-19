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
   


<div class='container'>
    <div class='row justify-content-center mt-5 mb-5'>
        <div class='col-md-8'>
            <div class="card">
                <div class="card-header bg-dark p-3">
                    <div class='d-flex justify-content-between align-items-center'>
                        <h5 class='text-white m-0'>Cart Calculation {state.length > 0 ? `(${state.length})` : ""}</h5>
                        {/* {state.length > 0 ? <button class='btn btn-danger btn-sm' onClick={emptyCart}>Empty Cart</button> : ""} */}
                    </div>
                </div>
                <div class="card-body p-0">
                    {state.length === 0 ? 
                        <table class='table cart-table mb-0'>
                            <tbody>
                                <tr>
                                    <td colspan={6}>
                                        <div class='cart-empty text-center'>
                                            <i class='fa fa-shopping-cart'></i>
                                            <p>Your Cart Is Empty</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                        :
                        <div class='table-responsive'>
                            <table class='table cart-table mb-0'>
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
                                                <button class='prdct-delete' onClick={() => handleDelete(data)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                            <td><img src={data.image} alt="Product" height="150px" width="150px" /></td>
                                            <td><p>{data.title}</p></td>
                                            <td>{data.price}</td>
                                            <td>
                                                <div class="prdct-qty-container">
                                                    <button class='prdct-qty-btn' type='button' onClick={data.quantity >= 1 ? () => handledec(data.id) : () => handleClose(data)}>
                                                        <i class='fa fa-minus'></i>
                                                    </button>
                                                    <input type="text" class='qty-input-box' value={data.quantity} disabled />
                                                    <button class='prdct-qty-btn' type='button' onClick={() => handleinc(data.id)}>
                                                        <i class='fa fa-plus'></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td class='text-right'>₹ {data.quantity * data.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colspan={2}>&nbsp;</th>
                                        <th>Items In Cart: <span class='text-danger'>{totalquantity}</span></th>
                                        <th class='text-right'>Total Price: <span class='text-danger'>₹ {totalprice}</span></th>
                                        <th class='text-right'><button class='btn btn-success' 
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
