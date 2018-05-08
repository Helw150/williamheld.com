import React from "react";

import config from "../../../data/SiteConfig.js";

export default class ExpandedHeader extends React.Component {
  render() {
    const style = {
      color: "white",
      display: "inline-block",
      width: "100%",
      background: config.backgroundColor,
      textAlign: "center",
      paddingTop: "1vh",
      paddingBottom: "2vh",
      ...this.props.style
    };
    return <div style={style}>{this.props.children}</div>;
  }
}
