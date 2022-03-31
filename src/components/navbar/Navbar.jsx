import React from 'react'
import "./navbar.css"
function Navbar() {
    return (
        <header>
            <nav class="navbar">
                <div class="container">
                    <header class="navHeader">
                        <a href="/" class="navLogo">
                            <h1 class="logo">Fokir</h1>
                        </a>
                        <button class="navToggle" id="navToggle">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </header>
                    <ul class="navLinks">
                        <li class="navLink">
                            <a href="#home">Home</a>
                        </li>
                        <li class="navLink">
                            <a href="#about">About</a>
                        </li>
                        <li class="navLink">
                            <a href="#services">Services</a>
                        </li>
                        <li class="navLink">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li class="navLink">
                            <a href="#testimonial">Testimonial</a>
                        </li>
                        <li class="navLink">
                            <a href="#blog">Blog</a>
                        </li>
                        <li class="navLink">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar