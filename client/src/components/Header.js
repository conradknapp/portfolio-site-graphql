import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Portfolio</h1>
      <div className="social-icons">
        <a
          href="https://github.com/conradknapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="https://codepen.io/conradknapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-codepen" />
        </a>
        <i className="fa fa-dribbble" />
      </div>
    </header>
  );
};

export default Header;
