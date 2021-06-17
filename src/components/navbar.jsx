import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//This is the Navbar Component
//We import bootstrap to use on the navbar

const NavBar = () => {
    return(
        <nav className ="navbar fixed-nav-bar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#navbarNav">101CARS</a>
            <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navia=gation">
                <span className="navbar-toggler-icon">
                </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="login.html">Log in </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbarNav">Register </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us">About Us </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;