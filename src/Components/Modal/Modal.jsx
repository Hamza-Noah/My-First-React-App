import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    let id = this.props.id;
    return (
      <>
        <div
          className="modal fade"
          id={id}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog rounded">
            <div className="modal-content py-5 vh-100 ">
              <h3 className="display-5 fw-bolder text-center mb-4">
                {this.props.name}
              </h3>
              <div className="divider mt-2">
                <i className="fa-solid fa-star fa-2xl"></i>
              </div>
              <button
                type="button"
                className=" position-absolute end-0 top-0 m-3 border-0 bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark main-color h1"></i>
              </button>

              <div className="modal-body">
                <div className="container">
                  <figure className="my-5">
                    <img className="img-fluid" src={this.props.image} alt="" />
                  </figure>
                  <p>{this.props.description}</p>
                </div>
              </div>
              <div className="modal-footer justify-content-center align-items-center border-top-0">
                <button
                  type="button"
                  className="btn btn-secondary main-background border-0 fw-bolder py-2 px-3"
                  data-bs-dismiss="modal"
                >
                  <span className="fw-bolder ">X</span> Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
