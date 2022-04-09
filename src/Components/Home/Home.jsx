import React, { Component } from "react";
import style from "./Home.module.css";
import img1 from "../../images/avataaars.png";

class Home extends Component {
  render() {
    return (
      <header>
        <div className="container d-flex align-items-center flex-column">
          <div className={style.img}>
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <h1 className="fw-bolder text-white text-uppercase">Start React</h1>
          <div className={style.divider}>
            <i className="fa-solid fa-star fa-xlg"></i>
          </div>
          <p className="text-white text-center">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>
    );
  }
}

export default Home;
