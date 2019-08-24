import React from "react";
// internal
import ContactLabel from "./contactLabel";
// css
import "./navigation.css";

const navigation = props => {
  const { title = "" } = props;

  return (
    <nav className="nav">
      <div className="title">{title}</div>
      <div className="contacts">
        <ContactLabel
          icon="fab fa-github"
          label="jtkwon"
          link="https://github.com/jtkwon"
          title="Github"
          iconStyle={{
            color: "#fff",
            borderRadius: "50%",
            backgroundColor: "#000"
          }}
        />
        <ContactLabel
          icon="fab fa-linkedin"
          label="jtkwon"
          link="https://www.linkedin.com/in/jtkwon/"
          title="Linkedin"
          iconStyle={{
            color: "#0077B5",
            boxShadow: "0px 0px 0px 2px #01579b inset",
            backgroundColor: "#fff",
            marginLeft: "5px"
          }}
        />
      </div>
    </nav>
  );
};

export default navigation;
