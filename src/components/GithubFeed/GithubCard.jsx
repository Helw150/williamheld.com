import React from "react";

class GithubCard extends React.Component {
  render() {
    return (
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
          <a href={this.props.repo.url}>{this.props.repo.name}</a>
        </h3>
        <div
          style={{
            fontSize: "1.8vh",
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
            {this.props.repo.description}
          </div>
          {this.props.repo.languages.edges.map(language => (
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
    );
  }
}

export default GithubCard;
