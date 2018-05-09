import React from "react";
import Link from "gatsby-link";

import config from "../../../data/SiteConfig";
import logo from "../../favicon.png";
import "./Header.css";

class Header extends React.Component {
  render() {
    let styles = {
      nav: {
        zIndex: "2",
        top: "0",
        position: "fixed",
        boxShadow: "0 2px 10px 0 rgba(0,0,0,.75)",
        padding: "1vh",
        width: "100%",
        height: "8vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        background: config.backgroundColor
      },
      image: {
        width: "10vw",
        height: "auto",
        backgroundImage: `url(${logo})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "transparent"
      }
    };
    return (
      <div style={styles.nav}>
        <Link className="header-link" to={"/blog"}>
          Blog
        </Link>
        <a
          className="header-link"
          href="https://www.linkedin.com/in/williambarrheld/"
        >
          Work
        </a>
        <Link style={styles.image} to={"/"}>
          Home
        </Link>
        <a className="header-link" href={"https://github.com/helw150"}>
          Code
        </a>
        <Link className="header-link" to={"/about"}>
          About
        </Link>
      </div>
    );
  }
}

export default Header;
