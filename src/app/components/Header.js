import React from "react";
import {Link} from "react-router-dom";
import {Navbar} from "./Navbar";
export class Header extends React.Component{
  render(){
    const imgStyle = {
      width: "70px",
      display: "inline-block"
    }
    const headStyle = {
        display: "inline-block"
      }
    return(
        <div className ="header-main">
        <img style={imgStyle} src="/app/assets/logo.jpg" />
          <h1 style={headStyle}> Tanveer Hospital
          </h1>
          <span className=" header-nav">
          <span className="glyphicon glyphicon-phone-alt">:0333-4323242</span>
            <ul className="nav navbar-nav">
              <li><Link to="/About"> About </Link> </li>
              <li><Link to="/Testimonials"> Testimonials </Link> </li>
            </ul>
          </span>
          <Navbar/>
        </div>
    )
  }
}
