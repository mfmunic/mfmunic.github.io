import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import AboutText from "./texts/AboutText";

class AboutDisplay extends Component {
  render() {
    const aboutWithBreaks = [];
    _.forEach(AboutText, about => {
      aboutWithBreaks.push(about);
      aboutWithBreaks.push(<br />);
      aboutWithBreaks.push(<br />);
    });
    return <div id="aboutDisplay">{aboutWithBreaks}</div>;
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display
  };
}

export default connect(mapStateToProps)(AboutDisplay);
