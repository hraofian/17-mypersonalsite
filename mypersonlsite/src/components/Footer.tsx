import React from "react";

function Footer() {
  return (
    <div>
      {/* <!-- footer --> */}
      <footer className="w3l-footer py-5">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4 sub-one-left">
              <h6>About</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                officia dicta magni ea at, culpa atque, rerum dolorum voluptas
                alias qui temporibus ex totam distinctio nobis impedit minus
                rerum, nihil blan ditiis quos atque.
              </p>
              <ul className="social mt-4 pt-lg-1">
                <li>
                  <a href="#facebook">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#google-plus">
                    <span className="fab fa-google-plus-g"></span>
                  </a>
                </li>
                <li>
                  <a href="#instagram">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
              <h6>Recent Posts</h6>
              <div className="footer-post">
                <ul>
                  <li>
                    <a href="#post">Suzan Lois</a>
                  </li>
                  <li className="mx-2">
                    <a href="#post">- Nov. 21 - </a>
                  </li>
                  <li>
                    <a href="#post">3 comments</a>
                  </li>
                </ul>
                <p className="post-footer">
                  <a href="#post">
                    Delivering New Customer Experiences with Workup.
                  </a>
                </p>
              </div>
              <div className="footer-post mt-4">
                <ul>
                  <li>
                    <a href="#post">Rose Alha</a>
                  </li>
                  <li className="mx-2">
                    <a href="#post">- Nov. 21 - </a>
                  </li>
                  <li>
                    <a href="#post">3 comments</a>
                  </li>
                </ul>
                <p className="post-footer">
                  <a href="#post">
                    Discussing the current trends in the share market.
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-5 sub-one-left">
              <h6>Contact</h6>
              <div className="column2">
                <div className="href1">
                  <span className="fas fa-envelope-open"></span>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
                <div className="href2 my-3">
                  <span className="fas fa-phone-alt"></span>
                  <a href="tel:+44-123-456-78">+44-123-456-78</a>
                </div>
                <div>
                  <p className="contact-para mb-3">
                    <span className="fas fa-map-marker-alt"></span>New York, 235
                    Lane, 10001
                  </p>
                </div>
                <div>
                  <p className="contact-para">
                    <span className="fas fa-clock"></span>Office Hours: 9AM -
                    7PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-footer text-center mt-5 pt-sm-4 pt-2">
            <p>
              &copy; 2021 Workup. All rights reserved | Design by
              <a href="https://w3layouts.com/">W3Layouts</a>
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- //footer --> */}
    </div>
  );
}

export default Footer;
