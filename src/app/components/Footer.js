import React from "react";
import {Link} from "react-router-dom";
export class Footer extends React.Component{
  render(){
    return(
      <div className = "footer-wrapper">
        <nav className ="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/MeetUs">Meet Us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/PatientInformation">Patient Information</Link></li>
            <li><Link to="/Resources">Resources</Link></li>
            <li><Link to="/Location">Location</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer-copyright">
          &#169; Tanveer Hospital. All rights reserved 2017.
        </div>
        <div className = "footer-logo">
          <img src="https://www.freelogoservices.com/api/main/images/1j+ojl1FOMkX9WypfBe43D6kjfKFqRVHkBzJwXs1M3EMoAJtlSAkhfVs9...w+"/>
        </div>
      </div>
    )
  }
}
