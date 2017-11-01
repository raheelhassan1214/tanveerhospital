
import React from "react";
import {GoogleMap} from "./GoogleMaps";
export const Location = (props) => {
  return (
    <div className="home-main">
      <div className="contact-container">
        <div className="contact-info-container">
          <h1>Gulshan-e-Ravi Office Directions</h1>
          <h2>Tanveer Hospital</h2>
          <p>D 106 Malik Munir Road</p>
          <p>Lahore 54000</p>
          <p>Ph:- 0333 4323242</p>
          <h1>Hours of Operation</h1>
          <h2>Regular Hours:</h2>
          <p>Monday – Satureday, 8:00 a.m. – 10:00 p.m.</p>
          <h2>Walk in Time:</h2>
          <p>Monday- Satureday, 7:15 a.m. – 7:50 a.m.</p>
          <h2>Appointment:</h2>
          <p>Monday – Friday, 7:15 a.m. – 7:00 p.m. (call for an appointment)</p>
        </div>
        <div className="map-container"> <GoogleMap/> </div>
      </div>
    </div>
  )
}
