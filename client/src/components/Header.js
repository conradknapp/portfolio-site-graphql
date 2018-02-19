import React from "react";
import SocialIcon from "./SocialIcon";

const Header = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <header>
        <h1>Portfolio</h1>
        <ul className="social-icons">
          {this.state.urls.map((el, i) => (
            <SocialIcon
              key={i}
              url={el.url}
              iconClass={el.iconClass}
              altText={el.altText}
            />
          ))}
        </ul>
      </header>
    );
  }
};

export default Header;
