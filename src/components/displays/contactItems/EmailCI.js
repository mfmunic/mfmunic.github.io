import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmailForm from './EmailForm';
import EmailRecieved from './EmailRecieved';
import EmailPending from './EmailPending';
import * as record from '../../../modules/actions/display';

class EmailCI extends Component {
  componentWillUnmount() {
    this.props.dispatch(record.failValid([]));
    this.props.dispatch(record.resetEmail());
  }

  decidesScreen() {
    const { emailRecieved, emailPending } = this.props.display;
    if (emailRecieved) {
      return <EmailRecieved />;
    } else if (emailPending) {
      return <EmailPending />;
    } else {
      return <EmailForm />;
    }
  }
  render() {
    return <div id='emailDisplay'>{this.decidesScreen()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    display: state.display,
  };
}

export default connect(mapStateToProps)(EmailCI);
