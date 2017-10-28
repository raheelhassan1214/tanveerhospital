import React from "react";
import {render} from "react-dom";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./css/main.css";
import "./css/carousel.css";
import {Header} from "./components/Header";
import {Home} from "./components/pages/Home";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {MeetUs} from "./components/pages/MeetUs";
import {Services} from "./components/pages/Services";
import {PatientInformation} from "./components/pages/PatientInformation";
import {Resources} from "./components/pages/Resources";
import {Location} from "./components/pages/Location";
import {Contact} from "./components/pages/Contact";
import {About} from "./components/pages/About";
import {Testimonials} from "./components/pages/Testimonials";


class App extends React.Component{
  render(){
    return(
      <div className="app-container">
        <div className="test-css">
        <Router>
          <div>
            <Header/>
            <Route exact={true} path ="/" component ={Home}/>
            <Route  path ="/MeetUs" component ={MeetUs}/>
            <Route  path ="/Services" component ={Services}/>
            <Route  path ="/PatientInformation" component ={PatientInformation}/>
            <Route  path ="/Resources" component ={Resources}/>
            <Route  path ="/Location" component ={Location}/>
            <Route  path ="/Contact" component ={Contact}/>
            <Route  path ="/About" component ={About}/>
            <Route  path ="/Testimonials" component ={Testimonials}/>
            {this.props.children}
            <Footer/>
          </div>
        </Router>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById("app"));
