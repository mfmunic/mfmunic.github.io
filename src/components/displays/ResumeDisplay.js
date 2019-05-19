import React, { Component } from "react";
import { connect } from "react-redux";

class ResumeDisplay extends Component {
  render() {
    return (
      <div id="resumeDisplay">
        <iframe
          src={require("./texts/resume.pdf")}
          height="100%"
          width="100%"
          title="myFrame"
          id="resumeIframe"
        />
        {/* <embed src="/texts/resume.pdf" width="100%" height="100%" /> */}
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
