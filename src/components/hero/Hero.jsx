import React from 'react'
import "./hero.css"
function Hero() {
    return (
        <section class="hero paddingY">
            <div class="conatiner flex-container">
                <header class="heroHeader">
                    <p>Hello i'm</p>
                    <h1 class="heroTitle">ALEX SMITH</h1>
                    <p>professional web
                        <span class="txt-rotate" data-period="500" data-rotate='[ "Developer", "Designer"]'></span>
                    </p>
                </header>
            </div>
        </section>
    )
}

export default Hero