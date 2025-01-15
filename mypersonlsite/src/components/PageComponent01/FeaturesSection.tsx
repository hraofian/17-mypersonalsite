import React from "react";

function FeaturesSection() {
  return (
    <div>
      {/* <!-- features section --> */}
      <section className="w3l-grids-block py-5" id="features">
        <div className="container py-lg-5 py-md-4 py-2">
          <div
            className="title-main text-center mx-auto mb-md-5 mb-4"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="small-title mb-2">Our Features</h5>
            <h3 className="title-style">We Make Your Agency Full Bright</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-business-time"></i>
                  <h3 className="mt-3 mb-2">Market Research</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium tempora rerum perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-md-0 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fab fa-accusoft"></i>
                  <h3 className="mt-3 mb-2">Startup Business</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium tempora rerum perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-lg-0 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-chart-line"></i>
                  <h3 className="mt-3 mb-2">Business Growth</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium tempora rerum perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-chart-pie"></i>
                  <h3 className="mt-3 mb-2">Consultancy</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium tempora rerum perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-piggy-bank"></i>
                  <h3 className="mt-3 mb-2">Financial Advices</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium tempora rerum perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-copy"></i>
                  <h3 className="mt-3 mb-2">Tax Strategy</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium tempora rerum perspiciatis?
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //features section --> */}
    </div>
  );
}

export default FeaturesSection;
