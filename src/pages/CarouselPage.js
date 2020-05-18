import React, { Component } from "react";
import CarouselComponent from "../components/CarouselComponent";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import "../css/carouselPage.css";
import ListingCard from "../components/ListingCard";
import Grid from "@material-ui/core/Grid";
class CarouselPage extends Component {
  state = {
    listings: [],
    loading: true,
  };

  componentDidMount = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("https://us-central1-yehlo-round-2.cloudfunctions.net/api/pg")
      .then((res) => {
        this.setState({
          listings: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.listings) {
      var cards = this.state.listings.map((pg) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={pg.pgId}
        >
          <ListingCard pg={pg} history={this.props.history} />
        </Grid>
      ));
    }
    if (this.state.loading) {
      return (
        <div className="loading">
          <CircularProgress
            style={{ height: "50px", width: "50px", color: "ivory" }}
          />
        </div>
      );
    } else {
      return (
        <div className="carousel-page-container">
          <section className="child">
            <div className="carousel">
              <CarouselComponent
                listings={this.state.listings}
                history={this.props.history}
              />
            </div>
          </section>
          <section className="child">
            <div id="all-listings">
              <div style={{ padding: "76px 12px 0 12px" }}>
                {!cards?(<div className="noListings">
                  No Listings Yet
                </div>):(<Grid container spacing={3}>
                  {cards}
                </Grid>)}
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default CarouselPage;
