import React from 'react'
import "./footer.css"
function Footer() {
    return (
        <footer>
            <div className="flex-container">
                <ul className="socialAccounts">
                    <li><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-google"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-github"></i></a></li>
                </ul>
                <p>Copy Right 2018 © By <a href="/">Theme-fair </a>All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer