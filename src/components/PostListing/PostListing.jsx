import React from "react";
import Link from "gatsby-link";

import PostCard from "../PostCard/PostCard";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    const style = {
      margin: "0 auto",
      marginTop: "10vh",
      maxWidth: "1000px",
      borderTop: "1px solid #E0E0E0",
      borderBottom: "1px solid #E0E0E0"
    };
    return (
      <div style={style}>
        {/* Your post list here. */
        postList.map(post => <PostCard post={post} />)}
      </div>
    );
  }
}

export default PostListing;
