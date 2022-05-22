import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'cover' }} className="bg-no-repeat bg-bottom p-10">
            <div className="footer">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/home' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/home' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/home' className="link link-hover">Weekly Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to="/home" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="/home" className="link link-hover">Cavity Filling</Link>
                    <Link to="/home" className="link link-hover">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to="/home" className="link link-hover">New York - 101010 Hudson</Link>

                </div>
            </div>
            <p className='text-center my-10'>Copyright © 2022 All Rights Reserved</p>
        </footer>
    );
};

export default Footer;