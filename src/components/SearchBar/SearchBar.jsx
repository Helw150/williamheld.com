import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onChange = event => this.props.onChange(event.target.value);
  }

  render() {
    const style = {
      fontSize: "14px",
      maxWidth: "400px",
      width: "80%",
      borderRadius: "25px",
      padding: "1vh",
      caretColor: "#9E9E9E",
      border: "none",
      outlineWidth: 0,
      textOverflow: "ellipsis"
    };
    return (
      <input
        style={style}
        type="text"
        placeholder="Have something in mind? Search Here!"
        onChange={this.onChange}
      />
    );
  }
}

export default SearchBar;
