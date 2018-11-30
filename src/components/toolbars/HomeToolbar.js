import React, { Component } from "react";
import { connect } from "react-redux";

class HomeToolbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>About</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Contact</li>
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

export default connect(mapStateToProps)(HomeToolbar);
