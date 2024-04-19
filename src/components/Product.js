import React,{ useState} from 'react'
import {DATA} from '../data/Data'
import {Link} from 'react-router-dom'
import './style.css'

const Product = () => {

  const[product,setProduct]=useState(DATA);
  // console.log("data",DATA)
  // console.log("product",product)

const allFilterProduct=(cat)=>{
  const allfilteredProducts = DATA.filter((item) => item.category !== cat);
  setProduct(allfilteredProducts);
}

const filterProduct = (category) => {
  const filteredProducts = DATA.filter((item1) => item1.category === category);
  setProduct(filteredProducts);
};


  
  return (
    <>
    <div className="all-prod">
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='head text-center mt-4'>Latest Products</h1>
          {/* <hr/> */}
        </div>
      </div>
      <div className='row justify-content-center'>
       
    <div className='buttons d-flex flex-wrap justify-content-center mb-5 '>
      <button className='btn btn-outline-dark me-2' onClick={()=>allFilterProduct(product)}>All</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewellery</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronics</button>
    </div>
    {
      product.map((item)=>{
        // console.log("map product ",item)
        return(
          <>
          <div className='col-md-3 my-4' key={item.id}>
            <div className='card h-100 text-center' >
              <img src={item.image} className="card-img " alt={item.title} />
            <div className="card-body ">
               <h5 className='card-title '>{item.title.substring(0,12)}</h5>
              <p className='card-text'>
              ₹{item.price}
              </p>
       <Link to={`/singleproduct/${item.id}`} className='btnprod'>
             Buy Now</Link>
            </div>
            </div>
          </div>
          </>
        )
      }
      )
    }
    
    
      </div>
    </div>
    </div>
    </>
  )
}

export default Product
