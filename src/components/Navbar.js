import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
              <a className="nav-link" href="/">
                About
              </a>
            </li> */}
          </ul>

          {/* Search box */}
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}

          {/* Buttons to change the Dark Mode Color */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleModeRed}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckRed"
              aria-label="Toggle Red Dark Mode"
            />

            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckRed"
            >
              Red Dark Mode
            </label>
          </div>
          <div
            className="form-check form-switch"
            style={{ paddingLeft: "50px" }}
          >
            <input
              className="form-check-input"
              onClick={props.toggleModeBlue}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckBlue"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckBlue"
            >
              Blue Dark Mode
            </label>
          </div>
          <div className="form-check form-switch" style={{ paddingLeft: '50px' }}>
            <input
              className="form-check-input"
              onClick={props.toggleModeGreen}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckGreen"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Green Dark Mode
            </label>
          </div>

          <div className="form-check form-switch" style={{ paddingLeft: '50px' }}>
            <input
              className="form-check-input"
              onClick={props.toggleModeYellow}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckYellow"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Yellow Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleModeRed: PropTypes.func.isRequired,
  toggleModeBlue: PropTypes.func.isRequired,
  toggleModeGreen: PropTypes.func.isRequired,
  toggleModeYellow: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
};

export default Navbar;
