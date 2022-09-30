import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/footer.css'
import BackToTopButton from './BackToTopButton'
//import ScrollToTop from './ScrollTop'
//import BackToTopButton from './components/Footer/BackToTopButton';


function Footer() {
return (
<footer>
<div className="container">
<div className='footer-top'>

<div className="row">
<div className="scroll">
  <BackToTopButton/>
</div>
<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">

<h5>Vegefoods</h5>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

<div className="social-icons mt-5 ">
<a href="#"><i className="fa-brands fa-twitter"></i></a>
<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
<a href="#"><i className="fa-brands fa-instagram"></i></a>
</div>


</div>
<div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12">
<h5>Menu</h5>
<ul>
<li><Link to="/shop">Shop</Link></li>
<li><Link to="/about">About</Link></li>
<li><a href="#">Journal</a></li>
<li><Link to="/contact">Contact Us</Link></li>
</ul>

</div> 


<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
<h5>Help</h5>
<div className="row">
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
<ul>
<li><a href="#">Shipping Information</a></li>
<li><a href="#">Returns & Exchange</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
<ul>
<li><a href="#">FAQs</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>

</div>

</div> 
<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
<h5>Have a Questions?</h5>
<ul>
<li><span className='icon'><i className="fa-solid fa-location-dot"></i></span><span>	203 Fake St. Mountain View, San Francisco, California, USA</span></li>
<li><a href="#"><span className='icon'><i className="fa-solid fa-phone"></i></span> <span>+2 392 3929 210</span></a></li>
<li><a href="#"><span className='icon'><i className="fa-solid fa-envelope"></i></span><span>info@yourdomain.com</span></a></li>
</ul> 
</div>





</div>
</div>
<div className="footer-bottom mt-5">
<div className="row d-flex">
<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center">

<p>
Copyright ©2022 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>

</p>
</div>
</div>
</div>
</div>
</footer>

)
}

export default Footer