import React, { Component } from "react";
import { connect } from "react-redux";

import gohText from "../texts/GOHText";

class GOH extends Component {
  render() {
    return (
      <div id="GOH">
        <img
          className="preview"
          id="gameofhangman"
          src={require("../../utils/images/gohSG.png")}
          alt="Game Of Hangman"
        />
        <a
          href="https://mfmunic.github.io/Hangman-Game/"
          target="noopener"
          className="buttonLinks"
        >
          <button>Game of Hangman</button>
        </a>
        <p>{gohText}</p>
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

export default connect(mapStateToProps)(GOH);
