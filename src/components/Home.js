import React, { useEffect } from 'react'
import Product from './Product'
import About from './About'
import Contact from './Contact'
import './style.css'
import Cookie from 'js-cookie'
import img1 from './images/a1.png'
import img2 from './images/a2.png'
import img3 from './images/a4.png'
import img4 from './images/a3.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate=useNavigate();

  const usercheck = () => {
    const name = Cookie.get('name');
    const password = Cookie.get('pass')

    console.log(name);
    console.log(password)

    if (!name || !password || name !== 'admin' || password !== 'Admin@789') {
      navigate('/log');
    }
    
  };

  useEffect(()=>{
    usercheck()
  },[])

  return (
    <>
      
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="carsimg" src={img1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="carsimg" src={img2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="carsimg" src={img3} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="carsimg" src={img4} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<Product/>
<About/>
<Contact/>

    </>
 
  )
}

export default Home
