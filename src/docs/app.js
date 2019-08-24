import React from "react";
// internal
import { Navigation, Main, Footer } from "./components";
// css
import "./app.css";

const App = () => {
  return (
    <div className="root">
      <Navigation title="react-simple-tree" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
