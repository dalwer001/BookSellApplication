import React from 'react';
import playStore from "../../../assests/logo/google_play.png";
import appStore from "../../../assests/logo/app_store.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playStore"/>
            <img src={appStore} alt="playStore"/>
        </div>

        <div className='midFooter'>
            <h1>Book Sell</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2021 &copy; Me</p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>
        </div>
    </footer>
  )
}

export default Footer;