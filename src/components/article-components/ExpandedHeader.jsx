import React from "react";

export default class ExpandedHeader extends React.Component {
  render() {
    const style = {
      color: "white",
      background: "black",
      textAlign: "center",
      paddingTop: "1vh",
      paddingBottom: "2vh"
    };
    return <div style={style}>{this.props.children}</div>;
  }
}
