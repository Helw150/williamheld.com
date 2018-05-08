import React from "react";
import Helmet from "react-helmet";

import PostListing from "../components/PostListing/PostListing";
import ExpandedHeader from "../components/article-components/ExpandedHeader.jsx";
import SearchBar from "../components/SearchBar/SearchBar";
import SEO from "../components/SEO/SEO";

import { getPostList } from "../utils/gatsbyHelpers";

import config from "../../data/SiteConfig";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.searchArticles = searchTerm => this.setState({ searchTerm });
    this.state = {
      searchTerm: ""
    };
  }

  filterArticles(postEdges) {
    const postList = getPostList(postEdges);
    const searchTerm = this.state.searchTerm.toLowerCase();
    const filteredPostList = postList.filter(
      article =>
        ~article.title.toLowerCase().indexOf(searchTerm) ||
        article.tags.find(tag => ~tag.toLowerCase().indexOf(searchTerm))
    );
    return filteredPostList;
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="blog-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <ExpandedHeader>
          <h1>Blog</h1>
          <SearchBar onChange={this.searchArticles} />
        </ExpandedHeader>
        <PostListing postEdges={this.filterArticles(postEdges)} />
      </div>
    );
  }
}

export default Blog;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
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
