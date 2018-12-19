import React, { Component } from "react";
import { connect } from "react-redux";
// import _ from "lodash";

import * as record from "../../../modules/actions/display";

class EmailCI extends Component {
  handleEmailChange(event) {
    event.preventDefault();
    this.props.dispatch(record.email(event.target.value));
  }

  handleSubjectChange(event) {
    event.preventDefault();
    this.props.dispatch(record.subject(event.target.value));
  }

  handleContentChange(event) {
    event.preventDefault();
    this.props.dispatch(record.content(event.target.value));
  }

  checkEmail(address, content) {
    const validCheck = [];
    if (!address.includes("@" && ".")) {
      validCheck.push("address");
    }
    if (content.length === 0) {
      validCheck.push("content");
    }

    this.props.dispatch(record.failValid(validCheck));
    return validCheck;
  }

  handleSubmit(address, subject, content, event) {
    event.preventDefault();
    address = address.trim();
    subject = subject.trim();
    content = content.trim();

    const validator = this.checkEmail(address, content);

    if (validator.length === 0) {
      this.props.dispatch(record.mail(address, subject, content));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(record.failValid([]));
    this.props.dispatch(record.resetEmail());
  }

  render() {
    const {
      emailAddress,
      emailSubject,
      emailContent,
      addressFail,
      contentFail,
      emailRecieved
    } = this.props.display;
    return (
      <div id="emailDisplay">
        {emailRecieved ? (
          <div>
            <h1 className="orange-Text">EMAIL SENT!</h1>
            <h3 className="orange-Text">
              I look forward to connecting with you.
            </h3>
          </div>
        ) : (
          <form>
            <div className="form-group">
              <label
                htmlFor="emailAddress"
                className={addressFail ? "failed" : ""}
              >
                Email{" "}
                {addressFail ? (
                  <span>
                    <strong>REQUIRED</strong>
                  </span>
                ) : (
                  <span className="required">(required)</span>
                )}
              </label>
              <input
                type="text"
                className="form-control"
                id="emailAddress"
                onChange={this.handleEmailChange.bind(this)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subjectLine">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subjectLine"
                onChange={this.handleSubjectChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="emailContent"
                className={contentFail ? "failed" : ""}
              >
                Content{" "}
                {contentFail ? (
                  <span>
                    <strong>REQUIRED</strong>
                  </span>
                ) : (
                  <span className="required">(required)</span>
                )}
              </label>
              <textarea
                type="text"
                className="form-control"
                id="emailContent"
                onChange={this.handleContentChange.bind(this)}
                required
              />
            </div>
            <div
              type="submit"
              className="btn btn-primary"
              id="sendEmail"
              onClick={this.handleSubmit.bind(
                this,
                emailAddress,
                emailSubject,
                emailContent
              )}
            >
              Send It!
            </div>
          </form>
        )}
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

export default connect(mapStateToProps)(EmailCI);
