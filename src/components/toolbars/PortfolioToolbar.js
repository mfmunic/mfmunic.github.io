import React, { Component } from "react";
import { connect } from "react-redux";

import ToolbarButton from "../utils/ToolbarButton";

class PortfolioToolbar extends Component {
  render() {
    const color = "green";
    return (
      <div>
        <div className="imageHolder">
          <img
            src={require("../utils/images/marcandstatue.jpg")}
            alt="Sexy Beast"
            id="masToolbar"
          />
        </div>
        <div id="portfolioTools">
          <ToolbarButton text="Homepage" color={color} />
          <ToolbarButton text="GOH" color={color} />
          <ToolbarButton text="RPSLS" color={color} />
          <ToolbarButton text="Triviagame" color={color} />
          {/* <ToolbarButton text="Dogepile" color={color} /> */}
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

export default connect(mapStateToProps)(PortfolioToolbar);
