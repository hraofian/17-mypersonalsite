import React from "react";

function ProgressSection() {
  return (
    <div>
      {/* <!-- progress section --> */}
      <section className="w3l-progress py-5" id="progress">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row align-items-center">
            <div className="col-lg-6 about-2-secs-right mb-lg-0 mb-5">
              <img
                src="./assets/images/img2.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
            <div className="col-lg-6 about-2-secs-left ps-xl-5">
              <h5 className="small-title mb-2">Why Choose us</h5>
              <h3 className="title-style mb-sm-3 mb-2">
                A right choice that makes the difference to others
              </h3>
              <p>
                Consectetur adipiscing elit. Aliquam sit amet efficitur tortor.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunte mollit.
              </p>
              <div className="w3l-progressblock mt-md-5 mt-4">
                <div className="progress-info info1">
                  <h6 className="progress-tittle">
                    Business Planning <span className="">90%</span>
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress-info info2">
                  <h6 className="progress-tittle">
                    Creativity <span className="">85%</span>
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress-info info3">
                  <h6 className="progress-tittle">
                    Financial Advices <span className="">80%</span>
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress-info info3 mb-0">
                  <h6 className="progress-tittle">
                    Business Security <span className="">90%</span>
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //progress section --> */}
    </div>
  );
}

export default ProgressSection;
