import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">We believe everybody should feel great to show themselves. It is a reflection of our society, a visual representation of our values, beliefs, and attitudes. Through the way we dress, we communicate our social status, express our personality, and signal our identity.
</p></div>
          <div className="col-xs-6 col-md-3">
            <h6>Connect with us</h6>
            <ul className="footer-links">
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://twitter.com/i/flow/login">Twitter</a></li>
              <li><a href="https://instagram.com/accounts/login/">Instagram</a></li>
              <li><a href="https://in.linkedin.com/">TLinked In</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
             
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
         <a href="/"> Fashion Trends</a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="/"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a className="twitter" href="/"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a className="linkedin" href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer
