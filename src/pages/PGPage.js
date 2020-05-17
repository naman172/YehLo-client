import React, { Component } from "react";
import Axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../css/pgPage.css";
class PGPage extends Component {
  state = {
    id: "",
    data: {},
    error: false,
    loading: false,
  };
  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.setState({
      id,
      loading: true,
      error: false,
    });
    Axios.get(`/pg/${id}`)
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        });
        console.log(this.state.data.data.name);
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <CircularProgress
            style={{ height: "50px", width: "50px", color: "ivory" }}
          />
        </div>
      );
    } else {
      if (!this.state.error && this.state.data.data) {
        return <div className="pgPage-container">
            <div className="pg-photo">
                <img src={this.state.data.data.imageURL}/>
            </div>
            <div className="pg-info" style={{padding:"16px", width:"50%"}}>
                <h1 style ={{color:"white"}}>{this.state.data.data.name}</h1>
                <h4 style ={{color:"white"}}>{this.state.data.data.address}</h4>
            </div>
        </div>;
      } else {
        return <div className="not-found">Error 404</div>;
      }
    }
  }
}

export default PGPage;
