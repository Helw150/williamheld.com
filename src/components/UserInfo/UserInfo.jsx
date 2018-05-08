import React, { Component } from "react";

import "./UserInfo.css";
import config from "../../../data/SiteConfig.js";

class UserInfo extends Component {
  render() {
    const { userTwitter } = this.props.config;
    const { expanded } = this.props;
    return (
      <a
        className="follow-button"
        title={`Follow @${userTwitter} on Twitter`}
        href={`https://twitter.com/intent/follow?original_referer=http%3A%2F%2F${
          config.siteUrl
        }%2F${
          config.siteUrl
        }%2Fabout&amp;ref_src=twsrc%5Etfw&amp;region=follow_link&amp;screen_name=${
          config.userTwitter
        }&amp;tw_p=followbutton`}
      >
        <span class="label" id="l">
          Follow @{config.userTwitter}
        </span>
      </a>
    );
  }
}

export default UserInfo;
