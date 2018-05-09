import React from "react";
import Link from "gatsby-link";
import _ from "lodash";

class GithubFeed extends React.Component {
  render() {
    const repos = this.props.repos.edges.map(repo => repo.node);
    return (
      <div className="github-feed">
        {repos.map(repo => (
          <div className="github-post">
            <h3 style={{ margin: 0 }}>
              <a href={repo.url}>{repo.name}</a>
            </h3>
            <div
              style={{
                fontSize: 14,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              {repo.description}
            </div>
            <p
              style={{
                fontSize: 14,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              Language: {repo.languages.edges[0].node.name}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default GithubFeed;
