import React, { Component } from "react";
import { connect } from "react-redux";

import ToolbarButton from "../utils/ToolbarButton";

class ResumeToolbar extends Component {
  render() {
    const color = "yellow";
    return (
      <div>
        <img
          src={require("../utils/images/Marc.png")}
          alt="Sexy Beast"
          id="sexyBeast"
        />
        {/* <ul>
          <li>Work Experience</li>
          <li>Skills</li>
        </ul> */}
        <div id="portfolioTools">
          <ToolbarButton text="Work Experience" color={color} />
          <ToolbarButton text="Skills" color={color} />
          <ToolbarButton text="Resume PDF" color={color} />
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

export default connect(mapStateToProps)(ResumeToolbar);
