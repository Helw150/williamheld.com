import React from "react";
import Link from "gatsby-link";
import _ from "lodash";

class GithubFeed extends React.Component {
  render() {
    const repos = this.props.repos.edges.map(repo => repo.node);
    return (
      <div className="github-feed">
        {repos.map(repo => (
          <div className="github-post" style={{ height: "33%" }}>
            <h3
              style={{
                fontSize: "2.5vh",
                margin: "auto",
                marginTop: 8,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              <a href={repo.url}>{repo.name}</a>
            </h3>
            <div
              style={{
                fontSize: "1.5vh",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                borderBottom: "1px dotted #BDBDBD"
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis"
                }}
              >
                {repo.description}
              </div>
              {repo.languages.edges.map(language => (
                <span
                  style={{
                    color: language.node.color,
                    marginRight: "3px",
                    filter: "brightness(65%)"
                  }}
                >
                  {language.node.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default GithubFeed;
