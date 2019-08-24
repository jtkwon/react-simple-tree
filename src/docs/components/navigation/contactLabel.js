import React from "react";
// css
import "./navigation.css";

export default ({
  icon = "",
  label = "",
  link = "",
  title = "",
  style = {},
  iconStyle = {},
  labelStyle = {}
}) => {
  return (
    <a
      href={`${link}`}
      target="_blank"
      className="contactLabel"
      title={`${title}`}
      style={style}
    >
      <i className={`icon ${icon}`} style={iconStyle} />
      <span className="label" style={labelStyle}>
        {label}
      </span>
    </a>
  );
};
