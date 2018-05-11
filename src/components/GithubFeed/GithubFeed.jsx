import React from "react";
import Link from "gatsby-link";

import GithubCard from "./GithubCard";

class GithubFeed extends React.Component {
  render() {
    const repos = this.props.repos.edges.map(repo => repo.node);
    return (
      <div className="github-feed">
        {repos.map(repo => <GithubCard repo={repo} />)}
      </div>
    );
  }
}

export default GithubFeed;
