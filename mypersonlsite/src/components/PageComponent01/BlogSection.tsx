import React from 'react'

function BlogSection() {
  return (
    <div>
        {/* <!-- blog section --> */}
      <div className="w3l-blog-block-5 py-5" id="blog">
        <div className="container py-md-5 py-4">
          <div
            className="title-main text-center mx-auto mb-md-5 mb-4"
            style={{ maxWidth: "700px" }}
          >
            <h5 className="small-title mb-2">News Feed</h5>
            <h3 className="title-style">Latest Blog Posts</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-single">
                <div className="grids5-info">
                  <a href="#blog">
                    <img src="./assets/images/blog1.jpg" alt="" />
                  </a>
                  <div className="blog-info">
                    <h4>
                      <a href="#blog">How To Scale a Dropshipping Business</a>
                    </h4>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua, sunt inc officia deserunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <a
                        className="d-flex align-items-center"
                        href="#blog"
                        title="23k followers"
                      >
                        <img
                          className="img-fluid"
                          src="./assets/images/testi2.jpg"
                          alt="admin"
                          style={{ maxWidth: "40px" }}
                        />
                        <span className="small ms-2">Eetey Cruis</span>
                      </a>
                      <p className="date-text">
                        <i className="far fa-calendar-alt me-1"></i>Nov 06, 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
              <div className="blog-card-single">
                <div className="grids5-info">
                  <a href="#blog">
                    <img src="./assets/images/blog3.jpg" alt="" />
                  </a>
                  <div className="blog-info">
                    <h4>
                      <a href="#blog">Customer Onboarding Strategy</a>
                    </h4>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua, sunt inc officia deserunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <a
                        className="d-flex align-items-center"
                        href="#blog"
                        title="23k followers"
                      >
                        <img
                          className="img-fluid"
                          src="./assets/images/testi1.jpg"
                          alt="admin"
                          style={{ maxWidth: "40px" }}
                        />
                        <span className="small ms-2">Molive Joe</span>
                      </a>
                      <p className="date-text">
                        <i className="far fa-calendar-alt me-1"></i>Nov 10, 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="blog-card-single">
                <div className="grids5-info">
                  <a href="#blog">
                    <img src="./assets/images/blog2.jpg" alt="" />
                  </a>
                  <div className="blog-info">
                    <h4>
                      <a href="#blog">
                        How to plan a website redesign strategy
                      </a>
                    </h4>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua, sunt inc officia deserunt.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <a
                        className="d-flex align-items-center"
                        href="#blog"
                        title="23k followers"
                      >
                        <img
                          className="img-fluid"
                          src="./assets/images/testi3.jpg"
                          alt="admin"
                          style={{ maxWidth: "40px" }}
                        />
                        <span className="small ms-2">Turne Leo </span>
                      </a>
                      <p className="date-text">
                        <i className="far fa-calendar-alt me-1"></i>Nov 12, 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //blog section --> */}
    </div>
  )
}

export default BlogSection