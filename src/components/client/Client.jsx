import React from 'react'
import client1 from "../../assets/images/client1.jpg"
import client2 from "../../assets/images/client2.jpg"
import "./client.css"
function Client() {
    return (
        <section className="client">
            <div className="container flex-container">
                <h2 className="title">client's feedback</h2>
                {/* <!-- start --> */}
                <div className="clientCard">
                    <figure className="clientImg">
                        <img src={client1} alt=""/>
                    </figure>
                    <div className="clientInfo">
                        <h1 className="clientName">alex ander</h1>
                        <div className="clientLocation">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>united</p>
                        </div>
                        <p className="clientComment">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Exercitationem ducimus ex magni
                            sunt,
                            architecto vel dolore, laudantium dignissimos debitis optio! Exercitationem adipisicing
                            elit.
                        </p>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>
                </div>
                {/* <!-- end  --> */}
                {/* <!-- start --> */}
                <div className="clientCard">
                    <figure className="clientImg">
                        <img src={client2} alt=""/>
                    </figure>
                    <div className="clientInfo">
                        <h1 className="clientName">alex ander</h1>
                        <div className="clientLocation">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>united</p>
                        </div>
                        <p className="clientComment">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Exercitationem ducimus ex magni
                            sunt,
                            architecto vel dolore, laudantium dignissimos debitis optio! Exercitationem adipisicing
                            elit.
                        </p>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>
                </div>
                {/* <!-- end  --> */}
                <div style={{"text-align":"center"}}>
                    <span className="dot" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
        </section>
    )
}

export default Client