import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmailCI from './contactItems/EmailCI';
import LinksCI from './contactItems/LinksCI';

class ContactDisplay extends Component {
  decidedDisplay(chosen) {
    switch (chosen) {
      case 'Links':
        return <LinksCI />;
      default:
        return <EmailCI />;
    }
  }

  render() {
    return this.decidedDisplay(this.props.display.toolbar);
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display,
  };
}

export default connect(mapStateToProps)(ContactDisplay);
