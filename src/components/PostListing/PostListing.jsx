import React from "react";
import Link from "gatsby-link";
import { getPostList } from "../../utils/gatsbyHelpers";

import PostCard from "../PostCard/PostCard";

class PostListing extends React.Component {
  render() {
    const style = {
      margin: "0 auto",
      marginTop: "1vh",
      maxWidth: "1000px",
      borderTop: "1px solid #E0E0E0",
      borderBottom: "1px solid #E0E0E0"
    };
    return (
      <div style={style}>
        {/* Your post list here. */
        this.props.postEdges.length > 0 ? (
          this.props.postEdges.map(post => (
            <PostCard post={post} key={post.path} />
          ))
        ) : (
          <div
            style={{
              color: "#BDBDBD",
              textAlign: "center",
              fontSize: "8vh"
            }}
          >
            No articles match your search
          </div>
        )}
      </div>
    );
  }
}

export default PostListing;
