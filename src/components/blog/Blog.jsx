import React from 'react'
import blog1 from "../../assets/images/blog1.jpg"
import blog3 from "../../assets/images/blog3.jpg"
import "./blog.css"
function Blog() {
    return (
        <section class="blog">
            <div class="container flex-container">
                <h2 class="title">our blog</h2>
                <div class="blogVideos">
                    {/* <!-- start --> */}
                    <div class="blogVideo">
                        <figure>
                            <img src={blog1} alt="" />
                        </figure>
                        <div class="blogDesc">
                            <figcaption>23 November, 2015</figcaption>
                            <h3>
                                <a href="/">Web Design Blog Post</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam
                                deserunt eius incidunt repellat molestiae.
                            </p>
                            <div class="readMore">
                                <a href="/">read more <i class="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start --> */}
                    <div class="blogVideo">
                        <figure>
                            <iframe src="https://www.youtube.com/embed/uVju5--RqtY" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </figure>
                        <div class="blogDesc">
                            <figcaption>23 November, 2015</figcaption>
                            <h3>
                                <a href="/">Web Design Blog Post</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam
                                deserunt eius incidunt repellat molestiae.
                            </p>
                            <div class="readMore">
                                <a href="/">read more <i class="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start --> */}
                    <div class="blogVideo">
                        <figure>
                            <img src={blog3} alt="" />
                        </figure>
                        <div class="blogDesc">
                            <figcaption>23 November, 2015</figcaption>
                            <h3>
                                <a href="/">Web Design Blog Post</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam
                                deserunt eius incidunt repellat molestiae.
                            </p>
                            <div class="readMore">
                                <a href="/">read more <i class="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                </div>
            </div>
        </section>
    )
}

export default Blog