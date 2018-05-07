import React, { Component } from "react";
class FacePicture extends Component {
  render() {
    const style = { borderRadius: "50%", height: "25vh", marginBottom: -30 };
    return (
      <img
        style={style}
        alt="Will Held's Face"
        src="https://pbs.twimg.com/profile_images/984461647162077184/kT0LBxty_400x400.jpg"
      />
    );
  }
}

export default FacePicture;
