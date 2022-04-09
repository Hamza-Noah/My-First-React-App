import React, { Component } from "react";
import style from "./Contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className={style.contact}>
          <div className="container">
            <h2 className="head-section text-uppercase">contact me</h2>
            <div className={style.divider}>
              <i class="fa-solid fa-star fa-xlg"></i>
            </div>
            <div className="row">
              <div className="col-lg-7 mx-auto mt-5">
                <form className={style.form}>
                  <div className="form-group ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-3 mb-3  width-100 form-control py-4"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="p-3 mb-3  width-100 form-control py-4"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="p-3 mb-3  width-100 form-control py-4"
                    />
                  </div>
                  <div className="form-group ">
                    <textarea
                      className="form-control py-4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn"
                      value={"send"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
