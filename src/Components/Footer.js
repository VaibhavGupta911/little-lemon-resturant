import React from "react";
import minilogo from '../Images/logo mini.jpg'
import { Link } from "react-router-dom";
export default function Footer() {
    const linkstyle = { textDecoration: 'none', color: 'black' }

    return (
        <footer className="footer-container">
            <div className="footer-div">

                <div>
                    <img src={minilogo} alt="mlogo" width="200px" />
                </div>
                <div>
                    <h5>Site Map</h5>
                    <div className="links"><Link style={linkstyle} to="./" >Home</Link> </div>
                    <div className="links"> <Link style={linkstyle} to="./About">About</Link></div>
                    <div className="links"><Link style={linkstyle} to="./Menu">Menu</Link> </div>
                    <div className="links"> <Link style={linkstyle} to="./Reservation">Reservation</Link> </div>
                    <div className="links"> <Link style={linkstyle} to="./OnlineOrder">Order Online</Link></div>
                    <div className="links"><Link style={linkstyle} to="./Login">Login</Link></div>

                </div>
                <div>
                    <h5>Contact</h5>
                    <div className="links">523 Street Long Island NYC</div>
                    <div className="links">+1(234)2856392</div>
                    <div className="links">little.lemon@gmail.com</div>
                </div>
                <div>
                    <h5>Social Media</h5>
                    <div className="links"> <Link style={linkstyle} to="https://www.facebook.com/">Facebook</Link> </div>
                    <div className="links"> <Link style={linkstyle} to="https://www.instagram.com/">Instagram</Link></div>
                    <div className="links"><Link style={linkstyle} to="https://twitter.com/">Twitter</Link></div>
                </div>
            </div>

        </footer>
    )
}