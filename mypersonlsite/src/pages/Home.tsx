import React from "react";

// video time 8:41

function Home() {
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
                src="./src/assets/images/img1.jpg"
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

      {/* <!-- 3grids with bg-image section --> */}
      <div className="w3l-homeblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <div
            className="title-main text-center mx-auto mb-md-5 mb-4"
            style={{ maxWidth: "700px" }}
          >
            <h5 className="small-title mb-2">What we do?</h5>
            <h3 className="title-style">We take care of the Future!</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="top-pic1">
                <div className="card-body blog-details">
                  <span className="meta-value">Investment</span>
                  <a href="#blog" className="blog-desc">
                    Strength solutions{" "}
                  </a>
                  <a
                    href="#blog"
                    className="btn btn-style-primary btn-style text-white mt-4"
                  >
                    Read More<i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
              <div className="top-pic2">
                <div className="card-body blog-details">
                  <span className="meta-value">Strategy</span>
                  <a href="#blog" className="blog-desc">
                    Business analytics{" "}
                  </a>
                  <a
                    href="#blog"
                    className="btn btn-style-primary btn-style text-white mt-4"
                  >
                    Read More<i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="top-pic3">
                <div className="card-body blog-details">
                  <span className="meta-value"> Tax Consulting </span>
                  <a href="#blog" className="blog-desc">
                    Stock investments{" "}
                  </a>
                  <a
                    href="#blog"
                    className="btn btn-style-primary btn-style text-white mt-4"
                  >
                    Read More<i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //3grids with bg-image section --> */}

      {/* <!-- progress section --> */}
      <section className="w3l-progress py-5" id="progress">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row align-items-center">
            <div className="col-lg-6 about-2-secs-right mb-lg-0 mb-5">
              <img
                src="./src/assets/images/img2.jpg"
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

      {/* <!-- testimonials section --> */}
      <section className="w3l-index4 py-5" id="testimonials">
        <div className="container py-md-5 py-4">
          <div className="content-slider text-center py-4">
            <div className="clients-slider">
              <div className="mask">
                <ul>
                  <li className="anim1">
                    <img
                      src="./src/assets/images/testi1.jpg"
                      className="img-fluid rounded-circle"
                      alt="client image"
                    />
                    <blockquote className="quote">
                      <q>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </q>
                    </blockquote>
                    <div className="source">- Mario Spe</div>
                  </li>

                  <li className="anim2">
                    <img
                      src="./src/assets/images/testi2.jpg"
                      className="img-fluid rounded-circle"
                      alt="client image"
                    />
                    <blockquote className="quote">
                      <q>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore.
                      </q>
                    </blockquote>
                    <div className="source">- Petey Cru</div>
                  </li>
                  <li className="anim3">
                    <img
                      src="./src/assets/images/testi3.jpg"
                      className="img-fluid rounded-circle"
                      alt="client image"
                    />
                    <blockquote className="quote">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </q>
                    </blockquote>
                    <div className="source">- Anna Sth</div>
                  </li>
                  <li className="anim4">
                    <img
                      src="./src/assets/images/testi1.jpg"
                      className="img-fluid rounded-circle"
                      alt="client image"
                    />
                    <blockquote className="quote">
                      <q>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </q>
                    </blockquote>
                    <div className="source">- Gail For</div>
                  </li>
                  <li className="anim5">
                    <img
                      src="./src/assets/images/testi2.jpg"
                      className="img-fluid rounded-circle"
                      alt="client image"
                    />
                    <blockquote className="quote">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </q>
                    </blockquote>
                    <div className="source">- Boye Fra</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //testimonials section --> */}

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
                    <img src="./src/assets/images/blog1.jpg" alt="" />
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
                          src="./src/assets/images/testi2.jpg"
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
                    <img src="./src/assets/images/blog3.jpg" alt="" />
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
                          src="./src/assets/images/testi1.jpg"
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
                    <img src="./src/assets/images/blog2.jpg" alt="" />
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
                          src="./src/assets/images/testi3.jpg"
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
  );
}

export default Home;
