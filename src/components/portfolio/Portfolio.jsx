import React from 'react'
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jpg"
import img6 from "../../assets/images/6.jpg"
function Portfolio() {
    return (
        <section class="portfolio">
            <div class="container flex-container">
                <div class="portfolioHeader">
                    <h2 class="title">our portfolio</h2>
                    <ul class="portfolioLinks">
                        <li><button class="filterSelection active">all</button></li>
                        <li><button class="filterSelection">graphic</button></li>
                        <li><button class="filterSelection">web design</button></li>
                        <li><button class="filterSelection">branding</button></li>
                    </ul>
                </div>
                <div class="portfolioImgs">
                    <figure class="all webdesign">
                        <img src={img1} alt="" />
                        <div class="portfolioOvelay">
                            <i class="fa-light fa-image"></i>
                        </div>
                    </figure>
                    <figure class="all branding graphic">
                        <img src={img2} alt="" />
                        <div class="portfolioOvelay">
                            <i class="fa-solid fa-video-arrow-up-right"></i>
                        </div>
                    </figure>
                    <figure class="all graphic">
                        <img src={img3} alt="" />
                        <div class="portfolioOvelay">
                            <i class="fa-light fa-image"></i>
                        </div>
                    </figure>
                    <figure class="all webdesign graphic">
                        <img src={img4} alt="" />
                        <div class="portfolioOvelay">
                            <i class="fa-solid fa-video-arrow-up-right"></i>
                        </div>
                    </figure>
                    <figure class="all webdesign graphic">
                        <img src={img5} alt="" />
                        <div class="portfolioOvelay">
                            <i class="fa-solid fa-link"></i>
                        </div>
                    </figure>
                    <figure class="all branding graphic">
                        <img src={img6} alt="" />
                        <div class="portfolioOvelay">
                            <i class="fa-light fa-image"></i>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Portfolio