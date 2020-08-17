import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>وحدات المركز</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4>وحدة الارشاد الاسري والخدمة الاجتماعية</h4>
                      </div>
                      <img
                        src="img/portfolio/1.png"
                        className="img-responsive"
                        alt="Project Title"
                      />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                      <div className="hover-text">
                        <h4>وحدة العلاج الطبيعي</h4>
                      </div>
                      <img
                        src="img/portfolio/3.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4>وحدة العلاج الوظيفي</h4>
                      </div>
                      <img
                        src="img/portfolio/4.png"
                        className="img-responsive"
                        alt="Project Title"
                      />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4>وحدة علاج النطق والتخاطب</h4>
                      </div>
                      <img
                        src="img/portfolio/5.png"
                        className="img-responsive"
                        alt="Project Title"
                      />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4> وحدة العلاج النفسي</h4>
                      </div>
                      <img
                        src="img/portfolio/7.png"
                        className="img-responsive"
                        alt="Project Title"
                      />
                  </div>
                </div>
              </div>
         <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4>وحدة الرعاية الصحية والتمريضية</h4>
                      </div>
                      <img
                        src="img/portfolio/9.png"
                        className="img-responsive"
                        alt="Project Title"
                      />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4>وحدة العلاج بالفن التشكيلي</h4>
                      </div>
                      <img
                        src="img/portfolio/8.png"
                        className="img-responsive"
                        alt="Project Title"
                      />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4>وحدة العلاج بالترفيه</h4>
                      </div>
                      <img
                        src="img/portfolio/11.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                      <div className="hover-text">
                        <h4>وحدة الغذاء والتغذية</h4>
                      </div>
                      <img
                        src="img/portfolio/10.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
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
