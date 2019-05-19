import React, { Component } from "react";
import { connect } from "react-redux";

class HomeToolbar extends Component {
  render() {
    return (
      <div>
        <div className="imageHolder">
          <img
            src={require("../utils/images/marcandhog.JPG")}
            alt="Sexy Beast"
            id="mahToolbar"
          />
        </div>
        <ul>
          <li>Links</li>
          <li>Email</li>
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
