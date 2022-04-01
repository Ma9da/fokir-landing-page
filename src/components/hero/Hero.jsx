import React from 'react'
import "./hero.css"
function Hero() {
    return (
        <section className="hero paddingY">
            <div className="conatiner flex-container">
                <header className="heroHeader">
                    <p>Hello i'm</p>
                    <h1 className="heroTitle">ALEX SMITH</h1>
                    <p>professional web
                        <span className="txt-rotate" data-period="500" data-rotate='[ "Developer", "Designer"]'></span>
                    </p>
                </header>
            </div>
        </section>
    )
}

export default Hero