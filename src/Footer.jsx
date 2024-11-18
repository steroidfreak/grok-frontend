import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>Your go-to store for all your shopping needs. Discover quality products at great prices!</p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
                        <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
                    </ul>
                </div>

                <div className="footer-section newsletter">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates and promotions:</p>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Your E-commerce Brand. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="https://twitter.com"><FaTwitter /></a>
                        <a href="https://instagram.com"><FaInstagram /></a>
                        <a href="https://linkedin.com"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;