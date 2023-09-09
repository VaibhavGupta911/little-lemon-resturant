import React from "react";
import minilogo from '../Images/logo mini.jpg'
import { Link } from "react-router-dom";
export default function Footer() {
    const linkstyle = { textDecoration: 'none', color: 'black' }

    return (
        <footer className="footer-container">
            <div className="footer-div">

                <div>
                    <div className="links"><Link style={linkstyle} to="./" > <img src={minilogo} alt="Mini logo" width="90px" /></Link></div>
                </div>
                <div>
                    <h5>LINKS</h5>
                    <div className="links"><Link style={linkstyle} to="./" >Home</Link> </div>
                    <div className="links"> <Link style={linkstyle} to="./About">About</Link></div>
                    <div className="links"><Link style={linkstyle} to="./Menu">Menu</Link> </div>
                    <div className="links"> <Link style={linkstyle} to="./Reservation">Reservation</Link> </div>
                    <div className="links"><Link style={linkstyle} to="./Login">Login</Link></div>
                </div>
                <div>
                    <h5>FOLLOW US</h5>
                    <div className="links"> <Link style={linkstyle} to="https://www.facebook.com/">Facebook</Link> </div>
                    <div className="links"> <Link style={linkstyle} to="https://www.instagram.com/">Instagram</Link></div>
                    <div className="links"><Link style={linkstyle} to="https://twitter.com/">Twitter</Link></div>
                </div>
                <div>
                    <h5>COME VISIT US</h5>
                    <div className="links">
                        <Link style={linkstyle} to="https://goo.gl/maps/y1Z6fZfsgE5xi9PX6">3475 US-9, Freehold, NJ 07728,USA</Link></div>
                    <div className="links">+17327610900</div>
                    <div className="links">little.lemon@gmail.com</div>
                </div>

            </div>

        </footer>
    )
}