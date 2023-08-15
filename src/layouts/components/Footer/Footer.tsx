import React from 'react'
import './style.scss'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="container_fluid">
      <div className="footer_wrapper">
        <div className="footer__col">
          <div className="footer_logo">
            <img src="src/assets/images/logo.png" alt="" />
          </div>
          <p className="footer__col-desc">
            Good health is important, so all of our products have been
            carefully designed to bring out the best in you.
          </p>
        </div>
        <div className="footer__col more-info">
            <p>MORE INFO</p> 
          <div className="footer__moreInfo">
            <ul>
              <li><a href="">Shipping & Delivery</a></li>
              <li><a href="">Refund Policy</a></li>
              <li><a href="">Partner Program</a></li>
              <li><a href="">You Buy, We Donate</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms & Conditions</a></li>
            </ul>
          </div>
          
        </div>
        <div className="footer__col more-info about-us">
          <p>CONTACT US</p> 
        <div className="footer__moreInfo">
          <ul>
            <li><a href="">Phone: +44123456789</a></li>
            <li><a href="">Address: 3517 W. Gray St. Utica, Pennsylvania 57867</a></li>
            <li><a href="">Email: good4me@gmail.com</a></li>
          </ul>
        </div>
        
      </div>
      <div className="footer__col more-info">
        <p>NAVIGATION</p> 
      <div className="footer__moreInfo">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Iphone</a></li>
          <li><a href="">Apple watch</a></li>
          <li><a href="">Fashion style</a></li>
        </ul>
      </div>
      
    </div>

      </div>
      <div className="footer_bottom">
        <div className="footer_bottom-icon">
          <img src="src/assets/images/fb.svg" alt=""/>
          <img src="src/assets/images/ins.svg" alt=""/>
          <img src="src/assets/images/twitter.svg" alt=""/>
          <img src="src/assets/images/p.svg" alt=""/>
          <img src="src/assets/images/ytb.svg" alt=""/>
        </div>
        <p className="coppyright">
          © 2021, <span>GOOD4ME.</span> Powered by Shopify
        </p>
        <div className="footer_bottom-pay">
          <img src="src/assets/images/pay.png" alt=""/>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer