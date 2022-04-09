import React, { Component } from "react";
import style from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt-5  px-4">
                <div className="location">
                  <h4 className="h5 fw-bolder mb-4">Location</h4>
                  <p>
                    2215 John Daniel Drive <br />
                    Clark, MO 65243
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5  px-4">
                <div className="links">
                  <h4 className="h5 fw-bolder mb-4">Around the web</h4>
                  <ul className="d-flex justify-content-center  list-unstyled">
                    <li className="mx-2 d-flex justify-content-center align-items-center">
                      <a href="#">
                        <i class="fa-brands  fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="mx-2 d-flex justify-content-center align-items-center">
                      <a href="#">
                        <i class="fa-brands  fa-twitter"></i>
                      </a>
                    </li>
                    <li className="mx-2 d-flex justify-content-center align-items-center">
                      <a href="#">
                        <i class="fa-brands  fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="mx-2 d-flex justify-content-center align-items-center">
                      <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 mt-5   px-4">
                <h4 className="h5 fw-bolder mb-4">About freelancer</h4>
                <p className="1h-1 text-height-2">
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Hamza Nouh
                </p>
              </div>
          </div>
          </div>
          <div className={style.rights}>
            <p className="p-4 text-center">Copyright © Hamza Nouh 2022</p>
          </div>
        </footer>
      </>
    );
  }
}
