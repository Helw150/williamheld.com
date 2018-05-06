import React from "react";
import Link from "gatsby-link";

import logo from "../../favicon.png";

class Header extends React.Component {
  render() {
    let styles = {
      nav: {
        top: "0",
        position: "fixed",
        boxShadow: "0 2px 10px 0 rgba(0,0,0,.75)",
        padding: "1vh",
        width: "100%",
        height: "8vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        background: "black"
      },
      link: {
        display: "block",
        width: "20%",
        height: "6vh",
        lineHeight: "6vh",
        color: "#FFF",
        textDecoration: "none",
        textAlign: "center"
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
        <Link style={styles.link} to={"/blog"}>
          Blog
        </Link>
        <a
          style={styles.link}
          href="https://www.linkedin.com/in/williambarrheld/"
        >
          Work
        </a>
        <Link style={styles.image} to={"/"}>
          Home
        </Link>
        <a style={styles.link} href={"https://github.com/helw150"}>
          Code
        </a>
        <Link style={styles.link} to={"/about"}>
          About
        </Link>
      </div>
    );
  }
}

export default Header;
