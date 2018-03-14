import React from "react";

const SocialIcon = ({ url, altText, iconClass }) => {
  return (
    <a
      href={url}
      alt={altText}
      title={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={iconClass} />
    </a>
  );
};

export default SocialIcon;
