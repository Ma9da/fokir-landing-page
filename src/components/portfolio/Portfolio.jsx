import React from 'react'
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jpg"
import img6 from "../../assets/images/6.jpg"
import "./portfolio.css"
function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container flex-container">
                <div className="portfolioHeader">
                    <h2 className="title">our portfolio</h2>
                    <ul className="portfolioLinks">
                        <li><button className="filterSelection active">all</button></li>
                        <li><button className="filterSelection">graphic</button></li>
                        <li><button className="filterSelection">web design</button></li>
                        <li><button className="filterSelection">branding</button></li>
                    </ul>
                </div>
                <div className="portfolioImgs">
                    <figure className="all webdesign">
                        <img src={img1} alt="" />
                        <div className="portfolioOvelay">
                            <i className="fa-light fa-image"></i>
                        </div>
                    </figure>
                    <figure className="all branding graphic">
                        <img src={img2} alt="" />
                        <div className="portfolioOvelay">
                            <i className="fa-solid fa-video-arrow-up-right"></i>
                        </div>
                    </figure>
                    <figure className="all graphic">
                        <img src={img3} alt="" />
                        <div className="portfolioOvelay">
                            <i className="fa-light fa-image"></i>
                        </div>
                    </figure>
                    <figure className="all webdesign graphic">
                        <img src={img4} alt="" />
                        <div className="portfolioOvelay">
                            <i className="fa-solid fa-video-arrow-up-right"></i>
                        </div>
                    </figure>
                    <figure className="all webdesign graphic">
                        <img src={img5} alt="" />
                        <div className="portfolioOvelay">
                            <i className="fa-solid fa-link"></i>
                        </div>
                    </figure>
                    <figure className="all branding graphic">
                        <img src={img6} alt="" />
                        <div className="portfolioOvelay">
                            <i className="fa-light fa-image"></i>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Portfolio