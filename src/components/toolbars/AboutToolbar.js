import React, { Component } from "react";
import { connect } from "react-redux";

class AboutToolbar extends Component {
  render() {
    return (
      <div>
        <div className="imageHolder">
          <img
            src={require("../utils/images/marcandtractor.png")}
            alt="Sexy Beast"
            id="matToolbar"
          />
        </div>
        <ul />
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

export default connect(mapStateToProps)(AboutToolbar);
