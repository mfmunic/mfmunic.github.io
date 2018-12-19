import React, { Component } from "react";
import { connect } from "react-redux";

import ToolbarButton from "../utils/ToolbarButton";

class HomeToolbar extends Component {
  render() {
    const color = "orange";
    return (
      <div>
        <div className="imageHolder">
          <img
            src={require("../utils/images/marcandhog.JPG")}
            alt="Sexy Beast"
            id="mahToolbar"
          />
        </div>
        <div id="portfolioTools">
          <ToolbarButton text="E-Mail" color={color} />
          <ToolbarButton text="Links" color={color} />
        </div>
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

export default connect(mapStateToProps)(HomeToolbar);
