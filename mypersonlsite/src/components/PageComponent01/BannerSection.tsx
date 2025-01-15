import React from "react";

function BannerSection() {
  return (
    <div>
      {/* <!-- banner section --> */}
      <div className="slider">
        <div className="slide current">
          <div className="bg-layer">
            <div className="content">
              <h6>Start Your Company With Us</h6>
              <h3>Plan Business to Active Goal!</h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-layer">
            <div className="content">
              <h6>Business & Finance Consultancy</h6>
              <h3>To grow & manage your business!</h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-layer">
            <div className="content">
              <h6>Start Your Company</h6>
              <h3>
                Your Vision, <br />
                Our Achievement!
              </h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-layer">
            <div className="content">
              <h6>Business Consultancy</h6>
              <h3>Building a future together!</h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button id="prev">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button id="next">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      {/* <!-- //banner section --> */}
    </div>
  );
}

export default BannerSection;
