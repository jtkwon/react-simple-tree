import React from "react";

const navigation = props => {
  const { title = "" } = props;

  return <nav>{title}</nav>;
};

export default navigation;