import React, { Component } from "react";
import style from "./About.module.css";
export default class About extends Component {
  render() {
    return (
      <>
        <section className={style.about}>
          <div className="container">
            <h2 className="head-section uppercase">About</h2>
            <div className={style.divider}>
              <i class="fa-solid fa-star fa-xlg"></i>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-4 ">
                <p className="px-3 text-white">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-12 col-lg-4">
                <p className="px-3 text-white">
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
