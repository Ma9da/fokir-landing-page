import React from 'react'
import client1 from "../../assets/images/client1.jpg"
import client2 from "../../assets/images/client2.jpg"
import "./client.css"
function Client() {
    return (
        <section class="client">
            <div class="container flex-container">
                <h2 class="title">client's feedback</h2>
                {/* <!-- start --> */}
                <div class="clientCard">
                    <figure class="clientImg">
                        <img src={client1} alt=""/>
                    </figure>
                    <div class="clientInfo">
                        <h1 class="clientName">alex ander</h1>
                        <div class="clientLocation">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>united</p>
                        </div>
                        <p class="clientComment">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Exercitationem ducimus ex magni
                            sunt,
                            architecto vel dolore, laudantium dignissimos debitis optio! Exercitationem adipisicing
                            elit.
                        </p>
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                </div>
                {/* <!-- end  --> */}
                {/* <!-- start --> */}
                <div class="clientCard">
                    <figure class="clientImg">
                        <img src={client2} alt=""/>
                    </figure>
                    <div class="clientInfo">
                        <h1 class="clientName">alex ander</h1>
                        <div class="clientLocation">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>united</p>
                        </div>
                        <p class="clientComment">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Exercitationem ducimus ex magni
                            sunt,
                            architecto vel dolore, laudantium dignissimos debitis optio! Exercitationem adipisicing
                            elit.
                        </p>
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                </div>
                {/* <!-- end  --> */}
                <div style={{"text-align":"center"}}>
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </div>
        </section>
    )
}

export default Client