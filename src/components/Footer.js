import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <>
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">We believe everybody should feel great to show themselves. It is a reflection of our society, a visual representation of our values, beliefs, and attitudes. Through the way we dress, we communicate our social status, express our personality, and signal our identity.
</p></div>
          <div class="col-xs-6 col-md-3">
            <h6>Connect with us</h6>
            <ul class="footer-links">
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://twitter.com/i/flow/login">Twitter</a></li>
              <li><a href="https://instagram.com/accounts/login/">Instagram</a></li>
              <li><a href="https://in.linkedin.com/">TLinked In</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
             
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
         <a href="/"> Fashion Trends</a>
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="/"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a class="twitter" href="/"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a class="linkedin" href="/"><i class="fa-brands fa-linkedin-in"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer
