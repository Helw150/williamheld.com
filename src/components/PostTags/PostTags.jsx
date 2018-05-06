import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTags extends Component {
  render() {
    const style = {
      background: "black",
      fontSize: "12px",
      color: "lightgrey"
    };
    const { tags } = this.props;
    return (
      <div style={style}>
        {tags &&
          tags.map(tag => (
            <Link key={tag} style={style} to={`/tags/${_.kebabCase(tag)}`}>
              ({_.kebabCase(tag)})
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
