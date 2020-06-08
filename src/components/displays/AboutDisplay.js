import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

import AboutText from './texts/AboutText';

class AboutDisplay extends Component {
  render() {
    const aboutWithBreaks = [];
    // eslint-disable-next-line array-callback-return
    AboutText.map((about, index) => {
      aboutWithBreaks.push(<p key={index}>{about}</p>);
    });
    return <div id='aboutDisplay'>{aboutWithBreaks}</div>;
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display,
  };
}

export default connect(mapStateToProps)(AboutDisplay);
