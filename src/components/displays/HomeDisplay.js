import React, { Component } from "react";
import { connect } from "react-redux";

class HomeDisplay extends Component {
  render() {
    return (
      <div id="homeDisplay">
        <div id="homeImages">
          <img
            src={require("../utils/images/Marc.png")}
            id="linkedInImg"
            className="homeImg"
            alt="Marc"
          />
          <img
            src={require("../utils/images/marcandhog.JPG")}
            id="mahImg"
            className="homeImg"
            alt="Marc"
          />
          <img
            src={require("../utils/images/marcandtractor.png")}
            id="matImg"
            className="homeImg"
            alt="Marc"
          />
          <img
            src={require("../utils/images/marcandstatue.jpg")}
            id="masImg"
            className="homeImg"
            alt="Marc"
          />
        </div>
        <div id="intro">
          <h1 id="introLine1">
            Hello, I'm{" "}
            <span id="myName" className="blue-Text">
              Marc F. Munic
            </span>
            .
          </h1>
          <h1 id="introLine2">I'm a full-stack web developer.</h1>
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

export default connect(mapStateToProps)(HomeDisplay);
