import React from 'react'
import "./services.css"
function Services() {
    return (
        <section class="service">
            <div class="container flex-container">
                <h2 class="title">our services</h2>
                <div class="servicesCards">
                    {/* <!-- card start --> */}
                    <div class="servicesCard">
                        <i class="fa-duotone fa-pen-ruler"></i>
                        <h3>UI/UX DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis
                            necstatibus.
                        </p>
                    </div>
                    {/* <!-- card end --> */}
                    {/* <!-- card start --> */}
                    <div class="servicesCard">
                        <i class="fa-solid fa-laptop-code"></i>
                        <h3>APP DEVELOPMENT</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis
                            necstatibus.
                        </p>
                    </div>
                    {/* <!-- card end --> */}
                    {/* <!-- card start --> */}
                    <div class="servicesCard">
                        <i class="fa-light fa-tachograph-digital"></i>
                        <h3>PRODUCT DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis
                            necstatibus.
                        </p>
                    </div>
                    {/* <!-- card end --> */}
                    {/* <!-- card start --> */}
                    <div class="servicesCard">
                        <i class="fa-light fa-gears"></i>
                        <h3>UI/UX DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis
                            necstatibus.
                        </p>
                    </div>
                    {/* <!-- card end --> */}
                </div>
            </div>
        </section>
    )
}

export default Services