import React, { Component } from "react";
import { connect } from "react-redux";

import homeText from "../texts/HomeText";

class HomepagePI extends Component {
  render() {
    return (
      <div id="HomepagePI">
        <img
          className="preview"
          id="homepagePI"
          src={require("../../utils/images/homepage.png")}
          alt="Homepage"
        />
        <p>{homeText}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display
  };
}

export default connect(mapStateToProps)(HomepagePI);
