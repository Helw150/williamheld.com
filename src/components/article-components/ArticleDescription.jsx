import React from "react";

export default class ArticleDescription extends React.Component {
  render() {
    const style = {
      marginTop: "-1vh",
      fontWeight: "normal"
    };
    return <h4 style={style}>{this.props.children}</h4>;
  }
}
