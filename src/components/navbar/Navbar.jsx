import React from 'react'
import "./navbar.css"
function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <header className="navHeader">
                        <a href="/" className="navLogo">
                            <h1 className="logo">Fokir</h1>
                        </a>
                        <button className="navToggle" id="navToggle">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </header>
                    <ul className="navLinks">
                        <li className="navLink">
                            <a href="#home">Home</a>
                        </li>
                        <li className="navLink">
                            <a href="#about">About</a>
                        </li>
                        <li className="navLink">
                            <a href="#services">Services</a>
                        </li>
                        <li className="navLink">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className="navLink">
                            <a href="#testimonial">Testimonial</a>
                        </li>
                        <li className="navLink">
                            <a href="#blog">Blog</a>
                        </li>
                        <li className="navLink">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar