import React, { Component } from "react";
import "../css/landingPage.css";
import { Button } from "@material-ui/core";
class LandingPage extends Component {
  render() {
    return (
      <div
        style={{
          height: "inherit",
          display: "flex",
          overflow: "hidden",
          backgroundColor: "whitesmoke",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
          }}
          className="landing-subcontainer"
        >
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="whitesmoke"
              fill-opacity="1"
              d="M0,320L720,128L1440,320L1440,320L720,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="landing-text">
          <h2 className="land-question">In need of a PG ?</h2>
          <Button
            className="yehlo"
            onClick={() => {
              this.props.history.push("/view");
            }}
          >
            YEH!O
          </Button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
