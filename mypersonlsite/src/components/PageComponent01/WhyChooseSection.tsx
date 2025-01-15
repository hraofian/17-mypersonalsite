import React from "react";

function WhyChooseSection() {
  return (
    <div>
      {/* <!-- why choose section --> */}
      <section className="w3l-servicesblock py-5" id="whychoose">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h5 className="small-title mb-2">Why choose us</h5>
              <h3 className="title-style">
                We Provided Some Of The Good Quality To You
              </h3>
              <p className="mt-3">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Non quae, fugiat.
              </p>
              <div className="row two-grids mt-5 pt-lg-4">
                <div className="col-sm-6 grids_info d-flex">
                  <i className="fas fa-hand-holding-usd"></i>
                  <div className="detail ms-3">
                    <h4>Finance Consultant</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                  </div>
                </div>
                <div className="col-sm-6 grids_info d-flex mt-sm-0 mt-4">
                  <i className="far fa-chart-bar"></i>
                  <div className="detail ms-3">
                    <h4>Business Consultant</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 text-end mt-lg-0 mt-5 position-relative">
              <img
                src="./assets/images/img1.jpg"
                alt=""
                className="img-fluid radius-image"
              />
              <div className="imginfo__box">
                <h6 className="imginfo__title">36+</h6>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //why choose section --> */}
    </div>
  );
}

export default WhyChooseSection;
