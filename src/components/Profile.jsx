import React, { Component } from "react";
import images from "../images";
import "../App.css";

class Profile extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      image: images.logo,
      back: images.back1,
    };
  }

  changeAvi(imageDir) {
    this.setState({ image: imageDir });
  }

  changeSign() {
    if (window.screen.width <= 800) {
      this.setState({ back: images.back2 });
    }
    window.addEventListener("change", (e) => {
      // if (window.screen.width <= 800) {
      //   console.log("Yes");
      //   this.setState({ back: images.back1 });
      // } else {
      //   this.setState({ back: images.back2 });
      // }
      console.log("hey");
    });
  }

  render() {
    this.changeSign();
    return (
      <div className="ProfileTop">
        <div className="img-title">
          <img
            src={this.state.image}
            alt="logo"
            onMouseEnter={() => {
              this.changeAvi(images.logo2);
            }}
            onMouseLeave={() => {
              this.changeAvi(images.logo);
              console.log("Hey");
            }}
          ></img>
          <p>Jubril Bolajoko</p>
        </div>
        <img src={this.state.back} alt="" className="back" />
      </div>
    );
  }
}

export default Profile;
