import React, { Component } from "react";
import { connect } from "react-redux";

import WorkExpDisplay from "./resumeItems/WorkExpRI";
import ResumePDF from "./resumeItems/ResumePDF";

class ResumeDisplay extends Component {
  decidedDisplay(chosen) {
    switch (chosen) {
      // case "Skills":
      //   return < />;
      case "Resume PDF":
        return <ResumePDF />;
      default:
        return <WorkExpDisplay />;
    }
  }

  render() {
    // return (
    //   <div>
    //     <WorkExpDisplay />
    //   </div>
    // )
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
