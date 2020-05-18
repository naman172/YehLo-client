import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/carouselComponent.css";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from '@material-ui/core/Tooltip';

class CarouselComponent extends Component {
  handleScroll = () => {
    let location = document.getElementById("all-listings");
    location.scrollIntoView({ behavior: "smooth" });
  };
  handleClick = (id) => {
    this.props.history.push(`/view/${id}`);
  };
  render() {
    let slides = () => {
      let listings = this.props.listings;

      for (let i = listings.length - 1; i > 0; i--) {
        let newIndex = Math.floor(Math.random() * i);
        let temp = listings[i];
        listings[i] = listings[newIndex];
        listings[newIndex] = temp;
      }
      let size;

      if (listings.length > 5) {
        size = 5;
      } else {
        size = listings.length;
      }
      return listings.slice(0, size).map((pg) => (
        <Carousel.Item key={pg.pgId}>
          <img src={pg.imageURL} alt={pg.name} className="slide-image" />
          <Carousel.Caption
            onClick={() => {
              this.handleClick(pg.pgId);
            }}
            style={{ cursor: "pointer", width: "fit-content", margin: "auto" }}
          >
            <h3>{pg.name}</h3>
            <p>{pg.address}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ));
    };
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
        }}
      >
        <Carousel style={{ height: "inherit" }} interval={5000}>
          {slides()}
        </Carousel>
        <Tooltip title="View All">
        <IconButton className="scroll-down" onClick={this.handleScroll}>
          <ExpandMoreIcon />
        </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default CarouselComponent;
