import React from 'react'
import "./numbers.css"
function Numbers() {
    return (
        <section class="numbers">
            <div class="container flex-container">
                {/* <!-- start --> */}
                <div class="numbersCards">
                    <span><i class="fa-solid fa-user-group"></i></span>
                    <h3>19</h3>
                    <p>team members</p>
                </div>
                {/* <!-- end --> */}
                {/* <!-- start --> */}
                <div class="numbersCards">
                    <span><i class="fa-regular fa-copy"></i></span>
                    <h3>36</h3>
                    <p>computer projects</p>
                </div>
                {/* <!-- end --> */}
                {/* <!-- start --> */}
                <div class="numbersCards">
                    <span><i class="fa-solid fa-cloud-arrow-down"></i></span>
                    <h3>182</h3>
                    <p>files download</p>
                </div>
                {/* <!-- end --> */}
                {/* <!-- start --> */}
                <div class="numbersCards">
                    <span><i class="fa-solid fa-mug-saucer"></i></span>
                    <h3>121</h3>
                    <p>lines of code</p>
                </div>
                {/* <!-- end --> */}
            </div>
        </section>
    )
}

export default Numbers