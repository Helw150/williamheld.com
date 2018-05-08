import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onChange = event => this.props.onChange(event.target.value);
  }

  render() {
    const style = {
      width: "20vw",
      borderRadius: "25px",
      padding: "8px",
      caretColor: "#9E9E9E",
      border: "none",
      outlineWidth: 0
    };
    return (
      <input
        style={style}
        type="text"
        placeholder="Don't see what you are looking for? Search Here!"
        onChange={this.onChange}
      />
    );
  }
}

export default SearchBar;
