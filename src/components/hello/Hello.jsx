import React from 'react'
import person from "../../assets/images/hello-person.jpg"
import "./hello.css"
function Hello() {
    return (
        <section className="hello paddingY">
            <div className="container flex-container">
                <figure>
                    <img src={person} alt="person" />
                    <div className="helloOverlay">
                        <ul className="socialIcons">
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-google"></i></li>
                            <li><i className="fa-brands fa-github"></i></li>
                        </ul>
                    </div>
                </figure>
                <div className="helloInfo">
                    <h3 className="helloTitle">
                        <span>I</span>HELLO,
                    </h3>
                    <div className="helloDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <ul className="helloList">
                        <li>
                            <span>name:</span> Rdam smith
                        </li>
                        <li>
                            <span>job title:</span> UI/UX Designer
                        </li>
                        <li>
                            <span>age:</span> 26 Year
                        </li>
                        <li>
                            <span>location:</span> United States, US
                        </li>
                        <li>
                            <span>freelance:</span> Available
                        </li>
                        <li>
                            <span>E-mail:</span>Nadia420@gmail.com
                        </li>
                    </ul>
                    <div className="helloAction">
                        <button className="btn">download CV <i className="fa-solid fa-download"></i></button>
                        <button className="btn">hire me <i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hello