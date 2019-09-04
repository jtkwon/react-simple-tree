import React from "react";
import axios from "axios";
// css
import "./main.css";
// internal
import ReactSimpleTree from "../../../react-simple-tree/react-simple-tree";

const sampleData = axios.get("sample-data.json");
const sampleBrand = axios.get("sample-brand.json");
const sampleMobile = axios.get("sample-mobile.json");

export default props => {
  return (
    <div className="main">
      <div className="treeContainer">
        <ReactSimpleTree
          subheading={<div>Sample TreeView</div>}
          subheadingStyle={{ fontSize: "14pt" }}
          treeData={sampleData}
        />
      </div>
    </div>
  );
};
