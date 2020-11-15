import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Blog</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://santiagoq.medium.com/what-am-i-looking-for-in-an-ai-powered-community-manager-b25b90fed2f?sk=e9675b272e964a6c03462b999f0406b5" 
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>An AI powered <br/> community manager</h4>
                      </div>
                      <img
                        src="img/portfolio/01-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://santiagoq.medium.com/sales-as-understood-by-an-engineer-6daef67ce629"
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Sales for Engineers</h4>
                      </div>
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://santiagoq.medium.com/"
                      target="_blank"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Full Blog</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
