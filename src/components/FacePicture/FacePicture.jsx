import React, { Component } from "react";
import config from "../../../data/SiteConfig";

class FacePicture extends Component {
  render() {
    const style = { borderRadius: "50%", height: "25vh", marginBottom: -30 };
    return (
      <img
        style={style}
        alt={`${config.userName}'s Face`}
        src={config.userAvatar}
      />
    );
  }
}

export default FacePicture;
