import React from "react";
import Link from "gatsby-link";

class Header extends React.Component {
  render() {
    let styles = {
      nav: {
        top: "0",
        position: "fixed",
        boxShadow: "0 2px 10px 0 rgba(0,0,0,.75)",
        padding: "1%",
        width: "100%",
        height: "10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        background: "black"
      },
      link: {
        width: "20%",
        color: "#FFF",
        textDecoration: "none",
        textAlign: "center",
        marginTop: "1%"
      },
      image: {
        width: "3%",
        height: "auto",
        backgroundImage: "url(/logos/logo.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }
    };
    return (
      <div style={styles.nav}>
        <Link style={styles.link} to={"/blog"}>
          Blog
        </Link>
        <Link style={styles.link} to={"/work"}>
          Work
        </Link>
        <Link style={styles.image} to={"/"} />
        <Link style={styles.link} to={"/code"}>
          Code
        </Link>
        <Link style={styles.link} to={"/about"}>
          About
        </Link>
      </div>
    );
  }
}

export default Header;
