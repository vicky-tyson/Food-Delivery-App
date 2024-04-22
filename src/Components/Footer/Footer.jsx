import React from 'react';
import { assets } from '../../assets/assets';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" className='footer-logo'/>
                <p>Experience culinary convenience like never before with our cutting-edge food delivery app. Browse a diverse array of restaurants, from local favorites to global cuisines, all at your fingertips. Enjoy seamless ordering, swift deliveries, and tantalizing flavors brought straight to your doorstep. Savor the convenience with every bite</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>CONTACT US</h2>
                <ul>
                    <li>+91 6303763679</li>
                    <li>contactus@zomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Zomato.com - All Rights Reserved.</p>
    </div>
  )
}
