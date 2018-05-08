import React from "react";
import Helmet from "react-helmet";
import PostCard from "../components/PostCard/PostCard";
import SEO from "../components/SEO/SEO";
import ExpandedHeader from "../components/article-components/ExpandedHeader";

import { getPostList } from "../utils/gatsbyHelpers";

import config from "../../data/SiteConfig";
import "./index.css";

class Index extends React.Component {
  render() {
    const styles = {
      content: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        height: "92vh",
        overflow: "hidden"
      },
      header: {
        height: "50vh"
      },
      blog: {
        height: "30vh",
        width: "45vw"
      },
      code: {
        height: "30vh",
        width: "25vw"
      },
      work: {
        height: "30vh",
        width: "25vw"
      }
    };
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div className="index-content" style={styles.content}>
          <ExpandedHeader style={styles.header} />
          <div style={styles.blog}>
            <h2>Blog</h2>
            <PostCard post={getPostList(postEdges)[0]} style={styles.blog} />
          </div>
          <div style={styles.code}>
            <h2>Code</h2>
          </div>
          <div style={styles.work}>
            <h2>Work</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
