import React from 'react'
import './style.css'
import Footer from './Footer'

const Contact = () => {
  return (
    < >
      
 <div className='contact-form'>
 <div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="book-car">
        <div class="sec1">
  
          <img src="https://t4.ftcdn.net/jpg/05/81/94/11/360_F_581941110_z3bnXXVPxlwqjuX72Ls6cd7Vs8znxkbo.jpg" class="img-fluid" alt="Wireless is the way to go" />
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="cont">
        <form class="contact mb-5" method="post" id="contactForm" name="contactForm">
          {/* <h3 id="contacth">Contact Us</h3> */}
          <div class="form-group">
            <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
          </div>
          <div class="form-group">
            <input type="tel" class="form-control" name="subject" id="subject" placeholder="Phone Number"/>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" class="btn ">Submit</button>
        </form>
      </div>
    </div>
  </div>
 
</div>
<Footer/>
</div>

    </>
  )
}

export default Contact
