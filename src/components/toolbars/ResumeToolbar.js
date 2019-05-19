import React, { Component } from "react";
import { connect } from "react-redux";

class ResumeToolbar extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../utils/images/Marc.png")}
          alt="Sexy Beast"
          id="sexyBeast"
        />
        <ul>
          <li>Work Experience</li>
          <li>Skills</li>
        </ul>
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
