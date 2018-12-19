import React, { Component } from "react";
import { connect } from "react-redux";

import WorkExpDisplay from "./resumeItems/WorkExpRI";
import ResumePDF from "./resumeItems/ResumePDF";
import SkillsDisplay from "./resumeItems/SkillsRI";

class ResumeDisplay extends Component {
  decidedDisplay(chosen) {
    switch (chosen) {
      case "Skills":
        return <SkillsDisplay />;
      case "Resume PDF":
        return <ResumePDF />;
      default:
        return <WorkExpDisplay />;
    }
  }

  render() {
    const displayItem = this.decidedDisplay(this.props.display.toolbar);
    return <div>{displayItem}</div>;
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display
  };
}

export default connect(mapStateToProps)(ResumeDisplay);
