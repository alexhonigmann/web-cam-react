import React from 'react';
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-list">
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
                <ul>
                    <li>Lorem</li>
                    <li>Copyright 2020</li>
                </ul>
                <a href="https://github.com/alexhonigmann"className="github"></a>
                <a href="https://facebook.com/" className="facebook"></a>
                <a href="https://twitter.com/explore" className="twitter"></a>
                <a href="https://www.instagram.com/" className="instagram"></a>
                <a href="#!" className="email"></a>
            </div> 
        </div>
    );
}

export default Footer;
