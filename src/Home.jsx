import React from "react";
import ProfilePic from "../src/assets/images/port2.png";
import Style from "./About.module.css";

const Home = () => {
  return (
    <main className="container-fluid">
      <section 
        className={`${Style.main} vh-100 d-flex flex-column justify-content-center align-items-center text-center`}
      >
       
        <div className="mb-4">
          <img 
            src={ProfilePic} 
            alt="Portrait of the artist" 
            className="rounded-circle w-25 shadow-sm" 
          />
        </div>

        <header className="title">
          <h1 className="text-uppercase fw-bold text-white">Start Framework</h1>
          
       
          <div className="d-flex justify-content-center align-items-center my-3">
            <div className={`${Style.line} me-3 bg-white`} aria-hidden="true"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className={`${Style.line} ms-3 bg-white`} aria-hidden="true"></div>
          </div>

         
          <p className="text-white fs-5">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </header>
      </section>
    </main>
  );
};

export default Home;