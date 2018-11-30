import React, { Component } from "react";
import { connect } from "react-redux";
import * as display from "../../modules/actions/display";

class Logo extends Component {
  goHome() {
    this.props.dispatch(display.menu("Homepage", "blue"));
  }

  render() {
    const { color } = this.props.display;
    return (
      <div id="templogo">
        <div
          id="nameLogo"
          className={`${color}-BG`}
          onClick={this.goHome.bind(this)}
        >
          <h1>Marc</h1>
          <h1>Munic</h1>
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

export default connect(mapStateToProps)(Logo);
