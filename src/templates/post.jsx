import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Disqus from "../components/Disqus/Disqus";
import ExpandedHeader from "../components/article-components/ExpandedHeader";
import ArticleDescription from "../components/article-components/ArticleDescription";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const styles = {
      content: {
        textAlign: "justify",
        maxWidth: "710px",
        margin: "0 auto",
        padding: "10px"
      }
    };
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <ExpandedHeader>
          <h1>{post.title}</h1>
          <ArticleDescription>{post.description}</ArticleDescription>
          <UserInfo config={config} />
          <PostTags tags={post.tags} />
        </ExpandedHeader>
        <div style={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <SocialLinks postPath={slug} postNode={postNode} />
            <Disqus postNode={postNode} />
          </div>
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;
