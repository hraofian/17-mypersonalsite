import React from "react";

function HomePageServiseGrid() {
  return (
    <div>
      {/* <!-- home page service grids --> */}
      <section className="home-services py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
          <div
            className="title-main text-center mx-auto mb-md-5 mb-4"
            style={{ maxWidth: "700px" }}
          >
            <h5 className="small-title mb-2">Valued Services</h5>
            <h3 className="title-style">
              More than 30+ years we provide business consulting
            </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-donate"></i>
                </div>
                <h4 className="number">01</h4>
                <h4>
                  <a href="#url">Financial planing</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-marker"></i>
                </div>
                <h4 className="number">02</h4>
                <h4>
                  <a href="#url">Training services</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4 className="number">03</h4>
                <h4>
                  <a href="#url">Marketing services</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4 className="number">04</h4>
                <h4>
                  <a href="#url">Taxation services</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //home page service grids --> */}
    </div>
  );
}

export default HomePageServiseGrid;
