import React from "react";
import { Link } from "react-router-dom";

const Header=()=> {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-3 border">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://media.istockphoto.com/vectors/clothes-hanger-modern-icon-vector-isolated-on-white-background-shop-vector-id1159310619"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span
              className="mx-3"
              style={{
                fontFamily: " 'Anton', sans-serif",
                letterSpacing: "3px",
              }}
            >
              FAHION STORE
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclassname={"active"}
                  style={{
                    fontFamily:
                      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    letterSpacing: "2.0px",
                  }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link
                  className="nav-link"
                  activeclassname={"active"}
                  style={{
                    fontFamily:
                      " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    letterSpacing: " 2.0px",
                  }}
                  to="/category"
                >
                  Categories
                </Link>
              </li>
            </ul>
            <form className="d-flex left-0">
              <input
                style={{
                  border: "hidden",
                  borderBottom: "2px black solid",
                  outline: "0px",
                  letterSpacing: " 2.0px",
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  width: "200px",
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn icon-button mx-2" type="submit">
                {" "}
                <i className="fa fa-search"></i>{" "}
              </button>
              <Link className="btn icon-button" to="/login" type="submit">
                {" "}
                <i className="fa fa-user"></i>{" "}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
