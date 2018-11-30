import React, { Component } from "react";
import { connect } from "react-redux";

class ContactDisplay extends Component {
  render() {
    return (
      <div id="display">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/marcmunic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="linkedInIcon"
                  src={require("../utils/images/linkedinicon.png")}
                  alt="LinkedIn"
                />{" "}
                LinkedIn/marcmunic
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mfmunic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="githubIcon"
                  src={require("../utils/images/githubicon.png")}
                  alt="Github"
                />{" "}
                GitHub/mfmunic
              </a>
            </li>

            <li>
              <a
                href="http://stackoverflow.com/users/7699594/marc-munic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="stackOverflowIcon"
                  src={require("../utils/images/stackoverflowicon.png")}
                  alt="StackOverflow"
                />{" "}
                Stack Overflow/marc-munic
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/mfmunic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="twitterIcon"
                  src={require("../utils/images/twittericon.png")}
                  alt="Twitter"
                />{" "}
                @mfmunic
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/marc.munic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="facebookIcon"
                  src={require("../utils/images/facebookicon.png")}
                  alt="Facebbok"
                />{" "}
                facebook/marc.munic
              </a>
            </li>

            <li>
              <a
                href="https://plus.google.com/109951729815508132667"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="googleplusIcon"
                  src={require("../utils/images/googleplusicon.png")}
                  alt="Google"
                />{" "}
                google+/109951729815508132667
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="email">
          <h3>E-mail</h3>
          mfmunic@gmail.com
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

export default connect(mapStateToProps)(ContactDisplay);
