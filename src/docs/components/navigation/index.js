import React from "react";
// css
import "./navigation.css";

const navigation = props => {
  const { title = "" } = props;

  return <nav className="nav">{title}</nav>;
};

export default navigation;
