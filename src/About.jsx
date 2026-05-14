import React from "react";
import Style from "./About.module.css";

const About = () => {
  return (
    <>
    <div className={`${Style.main}  d-flex  justify-content-center align-items-center vh-100 w-100 container-fluid`} >
      <div className="  ">
        <div className="title container">
          <h2 className="w-100 text-center text-white fs-1 fw-bold text-uppercase">
            About component
          </h2>
          <div className=" icons d-flex justify-content-center align-items-center mb-3">
            <div className={`${Style.line} me-4 bg-white`}></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className={`${Style.line} ms-4 bg-white`}></div>
          </div>
        </div>

        <div className="explanation">
          <div className="container ">
            <div className=" row">
              <div className="col-md-6 ps-md-5">
                 <p className=" text-capitalize text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>

              </div>


                   <div className="col-md-6">
                 <p className=" text-capitalize text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>

              </div>
             
            
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default About;
