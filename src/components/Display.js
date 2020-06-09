import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeDisplay from './displays/HomeDisplay';
import AboutDisplay from './displays/AboutDisplay';
import ResumeDisplay from './displays/ResumeDisplay';
import PortfolioDisplay from './displays/PortfolioDisplay';
import ContactDisplay from './displays/ContactDisplay';
import NoMobileDisplay from './displays/NoMobileDisplay';

class Display extends Component {
  displayPicker(location) {
    switch (location) {
      case 'About':
        return <AboutDisplay />;
      case 'Contact':
        return <ContactDisplay />;
      case 'Resume':
        return <ResumeDisplay />;
      case 'Portfolio':
        return <PortfolioDisplay />;
      default:
        return window.innerWidth < 770 ? <NoMobileDisplay /> : <HomeDisplay />;
    }
  }
  render() {
    const { location } = this.props.display;
    const display = this.displayPicker(location);
    return <div className={`display ${location !== 'Homepage' ? 'display--padding' : ''}`}>{display}</div>;
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display,
  };
}

export default connect(mapStateToProps)(Display);
