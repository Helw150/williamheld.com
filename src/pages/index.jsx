import React from "react";
import Helmet from "react-helmet";
import PostCard from "../components/PostCard/PostCard";
import SEO from "../components/SEO/SEO";
import ExpandedHeader from "../components/article-components/ExpandedHeader";
import GithubFeed from "../components/GithubFeed/GithubFeed";

import { getPostList } from "../utils/gatsbyHelpers";

import config from "../../data/SiteConfig";

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
            <h2>Newest Blog Post</h2>
            <PostCard post={getPostList(postEdges)[0]} style={styles.blog} />
          </div>
          <div style={styles.code}>
            <h2>Recent Code</h2>
            <GithubFeed repos={this.props.data.allGithubRepositories} />
          </div>
          <div style={styles.work}>
            <h2>Current Work</h2>
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
    allGithubRepositories(
      limit: 3
      sort: { fields: [pushedAt], order: DESC }
      filter: {
        isPrivate: { ne: true }
        isFork: { ne: true }
        description: { ne: null }
      }
    ) {
      edges {
        node {
          name
          description
          url
          languages {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;
