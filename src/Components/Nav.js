import React, { useState } from "react"
import logo from "../Images/logo.jpg"
import { Link, Route, Routes } from "react-router-dom"
import About from "./About";
import Menu from "../Components/Menu";
import Home from "./Home";
import Reservation from "./Reservation";
import OnlineOrder from "./OnlineOrder";
import Login from "./Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons';
export default function Nav() {
    const linkstyle = { textDecoration: 'none', color: 'black' }
    const [icontoggle, setIcontoggle] = useState(true)
    function handletoggle() {
        setIcontoggle(!icontoggle);
    }
    return (
        <>
            <section className="navsection">
                <nav className="navbar">
                    <img src={logo} alt="Little Lemon logo" height="55px" />
                    <div className="navbar-div">
                        <div className="links"><Link style={linkstyle} to="./" >Home</Link> </div>
                        <div className="links"> <Link style={linkstyle} to="./About">About</Link></div>
                        <div className="links"><Link style={linkstyle} to="./Menu">Menu</Link> </div>
                        <div className="links"> <Link style={linkstyle} to="./Reservation">Reservation</Link> </div>
                        <div className="links"> <Link style={linkstyle} to="./OnlineOrder">Order Online</Link></div>
                        <div className="links"><Link style={linkstyle} to="./Login">Login</Link></div>
                    </div>
                <div className="burger" onClick={handletoggle}>
                <FontAwesomeIcon   icon={(icontoggle ? faBars : faClose)} size='2x' /></div>  
                </nav>
            </section>
            <Routes>
                <Route exact path='/little-lemon-resturant' element={<Home />}></Route>
                <Route exact path='/' element={<Home />} ></Route>
                <Route exact path='/About' element={< About />}></Route>
                <Route exact path='/Menu' element={<Menu />}></Route>
                <Route exact path='/Reservation' element={< Reservation />}></Route>
                <Route exact path='/OnlineOrder' element={< OnlineOrder />}></Route>
                <Route exact path='/Login' element={< Login />}></Route>

            </Routes>
            <style jsx>
                {`
              
                `}
            </style>
        </>
    )
}