import React from "react";
import { Carousel } from 'react-responsive-carousel';
export class CarouselArif extends React.Component{
  render(){
    return(
      <div className="carousel-container">
      <Carousel autoPlay = {true} infiniteLoop = {true}>
            <div>
                <img src="./app/assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="./app/assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="./app/assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
      </div>
    )
  }
}
