import React, { Component } from "react";
import style from "./Portfolio.module.css";
import Modal from "../Modal/Modal";
import img1 from "../../images/cabin.png";
import img2 from "../../images/cake.png";
import img3 from "../../images/circus.png";
import img4 from "../../images/game.png";
import img5 from "../../images/safe.png";
import img6 from "../../images/submarine.png";

export default class Portfolio extends Component {
  state = {
    images: [
      {
        src: img1,
        name: "LOG CABIN",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        src: img2,
        name: "TASTY CAKE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        src: img3,
        name: "CIRCUS TENT",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        src: img4,
        name: "CONTROLLER",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        src: img5,
        name: "LOCKED SAFE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        src: img6,
        name: "SUBMARINE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
    ],
  };

  render() {
    return (
      <>
        <section className={style.portfololio}>
          <div className="container">
            <h2 className="head-section">Portfolio</h2>
            <div className={style.divider}>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className={style.images}>
              <div className="row mt-4 mt-lg-5">
                {this.state.images.map((img, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-3">
                    <div className="portfolio-item">
                      <div
                        className={style.img}
                        data-bs-toggle="modal"
                        data-bs-target={`#index${i}`}
                      >
                        <img width="100%" src={img.src} alt="" />
                      </div>
                    </div>
                    <Modal
                    id={`index${i}`}
                      name={img.name}
                      image={img.src}
                      description={img.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
