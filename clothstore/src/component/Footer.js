import React from "react";
import { Link } from "react-router-dom";

const Footer=()=> {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start mt-2">
        <div className="container p-4">
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{ fontWeight: "bold" }}>
                About Us
              </h5>
              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab
                quam consectetur animi ut debitis error laboriosam officia aut
                veritatis, totam quae temporibus! Ullam sequi magnam sint
                pariatur optio nihil?{" "}
              </p>
            </div>
            {/* <!--Grid column--> */}

            <div className="col-lg-3"></div>

            {/* <!--Grid column--> */}
            <div className="col-lg-3 px-5">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0 text-uppercase">
                <li>
                  <Link className="text-dark txtbld">
                    <i className="fab fa-twitter"></i> Twitter
                  </Link>
                </li>
                <li>
                  <Link className="text-dark txtbld">
                    {" "}
                    <i className="fab fa-facebook"></i> Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-dark txtbld">
                    {" "}
                    <i className="fab fa-instagram"></i> Instagram
                  </Link>
                </li>
                <li>
                  <Link className="text-dark txtbld">
                    <i className="fab fa-youtube"></i> You tube
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            fashionStore
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}

export default Footer;
