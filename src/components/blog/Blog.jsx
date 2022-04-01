import React from 'react'
import blog1 from "../../assets/images/blog1.jpg"
import blog3 from "../../assets/images/blog3.jpg"
import "./blog.css"
function Blog() {
    return (
        <section className="blog">
            <div className="container flex-container">
                <h2 className="title">our blog</h2>
                <div className="blogVideos">
                    {/* <!-- start --> */}
                    <div className="blogVideo">
                        <figure>
                            <img src={blog1} alt="" />
                        </figure>
                        <div className="blogDesc">
                            <figcaption>23 November, 2015</figcaption>
                            <h3>
                                <a href="/">Web Design Blog Post</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam
                                deserunt eius incidunt repellat molestiae.
                            </p>
                            <div className="readMore">
                                <a href="/">read more <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start --> */}
                    <div className="blogVideo">
                        <figure>
                            <iframe src="https://www.youtube.com/embed/uVju5--RqtY" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </figure>
                        <div className="blogDesc">
                            <figcaption>23 November, 2015</figcaption>
                            <h3>
                                <a href="/">Web Design Blog Post</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam
                                deserunt eius incidunt repellat molestiae.
                            </p>
                            <div className="readMore">
                                <a href="/">read more <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start --> */}
                    <div className="blogVideo">
                        <figure>
                            <img src={blog3} alt="" />
                        </figure>
                        <div className="blogDesc">
                            <figcaption>23 November, 2015</figcaption>
                            <h3>
                                <a href="/">Web Design Blog Post</a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam
                                deserunt eius incidunt repellat molestiae.
                            </p>
                            <div className="readMore">
                                <a href="/">read more <i className="fa-solid fa-arrow-right-long"></i></a>
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