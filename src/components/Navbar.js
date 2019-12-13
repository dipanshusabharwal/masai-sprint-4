import React from "react";

function Navbar() {
  return (
    <div className="col-11 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="">
          <img
            src="logo.png"
            className="d-inline-block align-top"
            height="28px"
          />
        </a>

        <div
          className="collapse navbar-collapse small"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-dark" href="">
                Office
              </a>
            </li>
            <li className="nav-item ml-2">
              <a className="nav-link text-dark" href="">
                Windows
              </a>
            </li>
            <li className="nav-item ml-2">
              <a className="nav-link text-dark" href="">
                Surface
              </a>
            </li>
            <li className="nav-item ml-2">
              <a className="nav-link text-dark" href="">
                Xbox
              </a>
            </li>
            <li className="nav-item ml-2">
              <a className="nav-link text-dark" href="">
                Suppprt
              </a>
            </li>
          </ul>
        </div>

        <div className="small">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Microsoft
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item small" href="#">
                  Software
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item small" href="#">
                  PCS's
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item small" href="#">
                  Business
                </a>
              </div>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link text-dark" href="">
                Search
                <img
                  src="search.png"
                  className="d-inline-block align-top ml-1"
                  height="22px"
                />
              </a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link text-dark" href="">
                Cart
                <img
                  src="cart.png"
                  className="d-inline-block align-top ml-1"
                  height="22px"
                />
              </a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link text-dark" href="">
                Sign in
                <img
                  src="sign-in.png"
                  className="d-inline-block align-top ml-1"
                  height="22px"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
