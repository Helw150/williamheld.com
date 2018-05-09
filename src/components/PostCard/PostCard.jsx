import React from "react";
import Link from "gatsby-link";

import "./PostCard.css";

class PostCard extends React.Component {
  render() {
    return (
      <Link
        to={this.props.post.path}
        className="blog-list-item"
        style={this.props.style}
      >
        <div className="header">
          <span>{this.props.post.title}</span>
        </div>
        <span className="description">{this.props.post.excerpt}</span>
        <img src={this.props.post.cover} className="image" />
        <div className="follow">Read More</div>
        <span className="date">{this.props.post.date}</span>
      </Link>
    );
  }
}

export default PostCard;
