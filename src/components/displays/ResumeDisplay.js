import React, { Component } from "react";
import { connect } from "react-redux";

import WorkExpDisplay from "./resumeItems/WorkExpRI";
// import ResumePDF from "./resumeItems/ResumePDF";

class ResumeDisplay extends Component {
  render() {
    return (
      <div>
        <WorkExpDisplay />
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

export default connect(mapStateToProps)(ResumeDisplay);
