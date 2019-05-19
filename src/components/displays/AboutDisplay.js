import React, { Component } from "react";
import { connect } from "react-redux";

import AboutText from "./texts/AboutText";

class AboutDisplay extends Component {
  render() {
    return <div id="aboutDisplay">{AboutText}</div>;
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display
  };
}

export default connect(mapStateToProps)(AboutDisplay);
