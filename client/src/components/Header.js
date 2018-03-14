import React, { Component } from "react";
import SocialIcon from "./SocialIcon";

class Header extends Component {
  state = {
    urls: [
      {
        alt: "My Github account",
        url: "https://github.com/conradknapp",
        iconClass: "fa fa-github"
      },
      {
        alt: "My Codepen account",
        url: "https://codepen.io/conradknapp",
        iconClass: "fa fa-codepen"
      },
      {
        alt: "My Dribbble account",
        url: "https://dribbble.com/conradknapp",
        iconClass: "fa fa-dribbble"
      }
    ]
  };

  render() {
    return (
      <header>
        <h1>Conrad</h1>
        <ul className="social-icons">
          {this.state.urls.map(({ url, iconClass, altText }, i) => (
            <SocialIcon
              key={i}
              url={url}
              iconClass={iconClass}
              altText={altText}
            />
          ))}
        </ul>
      </header>
    );
  }
}

export default Header;
