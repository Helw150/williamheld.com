import React from "react";
import Link from "gatsby-link";

import "./PostCard.css";

class PostCard extends React.Component {
  render() {
    return (
      <div className="blog-list-item" style={this.props.style}>
        <Link className="header" to={this.props.post.path}>
          <span>{this.props.post.title}</span>
        </Link>
        <span className="description">{this.props.post.excerpt}</span>
        <img src={this.props.post.cover} className="image" />
        <Link className="follow" to={this.props.post.path}>
          Read More
        </Link>
        <span className="date">{this.props.post.date}</span>
      </div>
    );
  }
}

export default PostCard;
