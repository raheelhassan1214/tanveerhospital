import React from "react";
import {Link} from "react-router-dom";
import {Navbar} from "./Navbar";
export class Header extends React.Component{
  render(){
    return(
        <div>
          <div className = "logo-header-container">
            <img className = "header-logo" src="/app/assets/logo.png" />
            <h1 className = "header-text"> Tanveer Hospital</h1>
          </div>
          <div className = "header-nav-container">
              <ul className="nav navbar-nav">
                <li><Link to="/About"> About </Link> </li>
                <li><Link to="/Testimonials"> Testimonials </Link> </li>
              </ul>
              <span className="header-phone glyphicon glyphicon-phone-alt">:0333-4323242</span>
          </div>
          <div className = "main-navbar-container">
          <Navbar/>
          </div>
        </div>
    )
  }
}
