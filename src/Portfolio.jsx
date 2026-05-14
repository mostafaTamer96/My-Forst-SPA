import React from "react";
import Style from "./About.module.css";
import Pic1 from "../src/assets/images/poert1.png";
import Pic2 from "../src/assets/images/port2.png";
import Pic3 from "../src/assets/images/port3.png";

const Portfolio = () => {
  return (
    <div>
      <div className=" contact  ">
        <div className="container pt-5 ">
          <div className={`  mt-5   vh-100 d-flex justify-content-center align-items-center `} >
            <div className="inner ">
              <div className="title   ">
                <h2 className="w-100 text-center text-black fs-1 fw-bold text-uppercase">
                  portfolio component
                </h2>
                <div className=" icons d-flex justify-content-center align-items-center mb-3">
                  <div className={`${Style.line} me-4 bg-black`}></div>
                  <i class="fa-solid fa-star "></i>
                  <div className={`${Style.line} ms-4 bg-black`}></div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <img src={Pic1} className="w-100 rounded" alt="portfolio" />
                </div>

                <div className="col-lg-4 col-md-6">
                  <img src={Pic2} className="w-100 rounded" alt="portfolio" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <img src={Pic3} className="w-100 rounded" alt="portfolio" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <img src={Pic1} className="w-100 rounded" alt="portfolio" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <img src={Pic2} className="w-100 rounded" alt="portfolio" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <img src={Pic3} className="w-100 rounded" alt="portfolio" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
