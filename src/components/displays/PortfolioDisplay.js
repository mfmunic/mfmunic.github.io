import React, { Component } from 'react';
import { connect } from 'react-redux';

import GOH from './portfolioItems/GOHPI';
import Homepage from './portfolioItems/HomepagePI';
import RPSLS from './portfolioItems/RPSLSPI';
import Triviagame from './portfolioItems/TriviagamePI';

class PortfolioDisplay extends Component {
  decidedDisplay(chosen) {
    switch (chosen) {
      case 'Game Of Hangman':
        return <GOH />;
      case 'Rock, Paper, Scissors, Lizard, Spock':
        return <RPSLS />;
      case 'Trivia Game':
        return <Triviagame />;
      default:
        return <Homepage />;
    }
  }

  render() {
    const displayItem = this.decidedDisplay(this.props.display.toolbar);
    return <div id='portfolioDisplay'>{displayItem}</div>;
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display,
  };
}

export default connect(mapStateToProps)(PortfolioDisplay);
