import React from 'react'
import './style.css'
import Footer from './Footer'

const Contact = () => {
  return (
    < >
      
 <div className='contact-form'>
 <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="book-car">
        <div className="sec1">
  
          <img src="https://t4.ftcdn.net/jpg/05/81/94/11/360_F_581941110_z3bnXXVPxlwqjuX72Ls6cd7Vs8znxkbo.jpg" className="img-fluid" alt="Wireless is the way to go" />
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="cont">
        <form className="contact mb-5" method="post" id="contactForm" name="contactForm">
          {/* <h3 id="contacth">Contact Us</h3> */}
          <div className="form-group">
            <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" name="subject" id="subject" placeholder="Phone Number"/>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="btn ">Submit</button>
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
