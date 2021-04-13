import React from "react";

import AboutText from "./texts/AboutText";

export const AboutDisplay = () => {
  const aboutWithBreaks = [];
  AboutText.forEach((about, index) => {
    aboutWithBreaks.push(<p key={index}>{about}</p>);
  });
  return <div id="aboutDisplay">{aboutWithBreaks}</div>;
};
