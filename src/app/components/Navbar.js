import React from "react";
import {Link} from "react-router-dom";
export class Navbar extends React.Component{
  render(){
    return(
      <div>
        <nav className ="navbar navbar-default">
          <div  className ="container-fluid">
            <ul className ="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/MeetUs">Meet Us</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/PatientInformation">Patient Information</Link></li>
              <li><Link to="/Resources">Resources</Link></li>
              <li><Link to="/Location">Location</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
