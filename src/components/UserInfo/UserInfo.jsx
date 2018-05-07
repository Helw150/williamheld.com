import React, { Component } from "react";

import "./UserInfo.css";

class UserInfo extends Component {
  render() {
    const { userTwitter } = this.props.config;
    const { expanded } = this.props;
    return (
      <a
        className="follow-button"
        title="Follow @WilliamBarrHeld on Twitter"
        href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fwilliamheld.com%2Fwilliamheld.com%2Fabout&amp;ref_src=twsrc%5Etfw&amp;region=follow_link&amp;screen_name=WilliamBarrHeld&amp;tw_p=followbutton"
      >
        <span class="label" id="l">
          Follow @WilliamBarrHeld
        </span>
      </a>
    );
  }
}

export default UserInfo;
