import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


export default class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container">
            <a className="navbar-brand fw-bolder" href="#">
              START REACT
            </a>
            <button
              className="navbar-toggler display-flex align-items-center p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu <i className="fa-solid fa-bars fa-sm"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                  <NavLink
                    to="home"
                    className="nav-link fw-bolder my-4  py-3 px-4"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="portfolio"
                    className="nav-link fw-bolder my-4  py-3 px-4"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    className="nav-link fw-bolder my-4 py-3 px-4"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className="nav-link fw-bolder my-4 py-3 px-4"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
