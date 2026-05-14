import React from "react";
import Style from "./About.module.css"

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="  footer  mt-5   ">
          <div class={`${Style.bgNavFooter}  text-white text-center   pt-5 ` }>
            <div class="row ">
              <div className="col-md-4 p-3">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
{/* <div className=`col-md-4 ${Style.ps}`>


</div> */}
              <div className="col-md-4 ">
                <h3>AROUND THE WEB</h3>
               <div className="icons">
                 <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-globe"></i>
               </div>
              </div>

              <div className="col-md-4 ">
                <h3>ABOUT FREELANCER</h3>

                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>

            <p className={`p-5 ${Style.copyRights} text-center    mb-0 w-100 `}>
              Copyright © Your Website 2021
            </p>
          </div>
        </div>
      </div>
    </>



  );
};

export default Footer;
