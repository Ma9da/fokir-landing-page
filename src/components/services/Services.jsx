import React from 'react'
import "./services.css"
function Services() {
    return (
        <section className="service">
            <div className="container flex-container">
                <h2 className="title">our services</h2>
                <div className="servicesCards">
                    {/* <!-- card start --> */}
                    <div className="servicesCard">
                        <i className="fa-duotone fa-pen-ruler"></i>
                        <h3>UI/UX DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis
                            necstatibus.
                        </p>
                    </div>
                    {/* <!-- card end --> */}
                    {/* <!-- card start --> */}
                    <div className="servicesCard">
                        <i className="fa-solid fa-laptop-code"></i>
                        <h3>APP DEVELOPMENT</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis
                            necstatibus.
                        </p>
                    </div>
                    {/* <!-- card end --> */}
                    {/* <!-- card start --> */}
                    <div className="servicesCard">
                        <i className="fa-light fa-tachograph-digital"></i>
                        <h3>PRODUCT DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis
                            necstatibus.
                        </p>
                    </div>
                    {/* <!-- card end --> */}
                    {/* <!-- card start --> */}
                    <div className="servicesCard">
                        <i className="fa-light fa-gears"></i>
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