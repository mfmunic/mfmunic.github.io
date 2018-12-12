import React, { Component } from "react";
import { connect } from "react-redux";

import rpslsText from "../texts/RPSLSText";

class RPSLS extends Component {
  render() {
    return (
      <div id="RPSLSPI">
        <img
          className="preview"
          id="RPSLS"
          src={require("../../utils/images/rpslsSG.png")}
          alt="RPSLS"
        />
        <a
          href="https://mfmunic.github.io/rock-paper-scissors/"
          target="_blank"
          rel="noopener noreferrer"
          className="buttonLinks"
        >
          <button>Rock Paper Scissors Lizard Spock</button>
        </a>
        <p>{rpslsText}</p>
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

export default connect(mapStateToProps)(RPSLS);
