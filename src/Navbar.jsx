import React from 'react'
import { NavLink } from 'react-router-dom';
import Style from "./About.module.css"

const Navbar = () => {
  return (
    <div>


<nav className= {`${Style.bgNavFooter}  navbar navbar-expand-lg p-4 fixed-top`}>
  <div className="container ">
    <NavLink className="navbar-brand text-white" to="/home">Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className=" text-white nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link text-white" to="portfolio">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="contact">contact</NavLink>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav> 





      
    </div>
  )
}

export default Navbar
