import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../css/form.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Form extends Component {
  state = {
    name: "",
    location: "",
    open: false,
    message: true,
    type:""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleRequest = () => {
    let image = document.getElementById("listing-image").files[0];
    if (
      !image ||
      this.state.location.trim() === "" ||
      this.state.name.trim() === ""
    ) {
      this.setState({
        open:true,  
        message: "Please fill in the details",
        type:"error"
    });
    } else {
      let formData = new FormData();
      formData.append("image", image, image.name);
      formData.append("address", this.state.location);
      formData.append("name", this.state.name);
      axios
        .post("/pg", formData)
        .then((res) => {
          this.setState({
            message: res.data.message,
            open: true,
            type:"success"
          });
        })
        .catch((err) => {
          this.setState({
            message: err.response.data.message,
            open: true,
            type:"error"
          });
        });
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      open: false,
      message: "",
    });
  };

  render() {
    return (
      <div className="form">
        <div className="form-input-container">
          <div className="message">List your property</div>
          <TextField
            id="outlined"
            name="name"
            label="Name"
            variant="outlined"
            className="text-field"
            fullWidth={true}
            autoFocus={true}
            onChange={this.handleChange}
          />
          <div className="spacing"></div>
          <TextField
            id="outlined"
            name="location"
            label="Location"
            variant="outlined"
            className="text-field"
            fullWidth={true}
            onChange={this.handleChange}
          />
          <div className="spacing"></div>
          <div className="spacing"></div>
          <label htmlFor="listing-image" className="upload-label">
            Add a room's image:
          </label>
          <input
            type="file"
            id="listing-image"
            className="image-upload"
          ></input>
          <Button className="upload-button" onClick={this.handleRequest}>
            Request
          </Button>
        </div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity={this.state.type}>
              {this.state.message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default Form;
