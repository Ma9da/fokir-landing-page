import React from 'react'
import "./numbers.css"
function Numbers() {
    return (
        <section className="numbers">
            <div className="container flex-container">
                {/* <!-- start --> */}
                <div className="numbersCards">
                    <span><i className="fa-solid fa-user-group"></i></span>
                    <h3>19</h3>
                    <p>team members</p>
                </div>
                {/* <!-- end --> */}
                {/* <!-- start --> */}
                <div className="numbersCards">
                    <span><i className="fa-regular fa-copy"></i></span>
                    <h3>36</h3>
                    <p>computer projects</p>
                </div>
                {/* <!-- end --> */}
                {/* <!-- start --> */}
                <div className="numbersCards">
                    <span><i className="fa-solid fa-cloud-arrow-down"></i></span>
                    <h3>182</h3>
                    <p>files download</p>
                </div>
                {/* <!-- end --> */}
                {/* <!-- start --> */}
                <div className="numbersCards">
                    <span><i className="fa-solid fa-mug-saucer"></i></span>
                    <h3>121</h3>
                    <p>lines of code</p>
                </div>
                {/* <!-- end --> */}
            </div>
        </section>
    )
}

export default Numbers