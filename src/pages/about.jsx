import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import ExpandedHeader from "../components/article-components/ExpandedHeader";
import ArticleDescription from "../components/article-components/ArticleDescription";
import FacePicture from "../components/FacePicture/FacePicture";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <ExpandedHeader>
          <FacePicture />
          <h1>My name is {config.userName}!</h1>
          <ArticleDescription>
            If you clicked here, you must want to learn a little bit more about
            me
          </ArticleDescription>
        </ExpandedHeader>
        <About />
      </div>
    );
  }
}

export default AboutPage;
