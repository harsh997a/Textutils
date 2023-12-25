import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const myStyle = {
  border: "5px solid black",
};

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      style={myStyle}
    >
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" aria-c2urrent="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/aboutus`}>
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
          </div>

          <div className="d-flex">
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
          </div>

          <div className="d-flex">
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
          </div>

          <div className="d-flex">
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "#042743" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              style={{ cursor: "pointer" }}
              role="switch"
              id="Switch"
            />
            <label className="form-check-label" htmlFor="Switch">
              Toogle Mode
            </label>
          </div>

          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypesropTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = { title: "Set title here", aboutText: "About " };
