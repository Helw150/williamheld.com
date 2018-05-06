import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const styles = {
      content: { textAlign: "justify", maxWidth: "700px", margin: "0 auto" },
      title: {
        color: "white",
        background: "black",
        textAlign: "center",
        paddingTop: "1vh",
        paddingBottom: "2vh"
      },
      description: { marginTop: "-1vh", fontWeight: "normal" }
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
    console.log(post);
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div style={styles.title}>
          <h1>{post.title}</h1>
          <h4 style={styles.description}>{post.description}</h4>
          <UserInfo config={config} />
          <PostTags tags={post.tags} />
        </div>
        <div style={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <SocialLinks postPath={slug} postNode={postNode} />
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
