import React from "react";
// css
import "./footer.css";

export default ({ version = "1.0" }) => {
  return (
    <footer className="footer">
      <div className="version">{`LICENSED UNDER ISC`}</div>
    </footer>
  );
};
