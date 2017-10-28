import React from "react";
import {CarouselArif} from "./../Carousel";
export class Home extends React.Component{
  render(){
    return(
      <div className="home-main">
          <CarouselArif/>
          <article>
            <div>Some article...</div>
          </article>
      </div>
    )
  }
}
