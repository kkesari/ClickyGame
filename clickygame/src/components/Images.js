import React from "react";
import Background from "../assets/images/bird-person.png";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

class Section extends React.Component {
  render() {
    return <section style={sectionStyle}></section>;
  }
}

export default Section;
