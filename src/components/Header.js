import React, { Component } from 'react';
import { connect } from 'react-redux';

// import HomeToolbar from "./toolbars/HomeToolbar";
import AboutToolbar from './toolbars/AboutToolbar';
import ResumeToolbar from './toolbars/ResumeToolbar';
import PortfolioToolbar from './toolbars/PortfolioToolbar';
import ContactToolbar from './toolbars/ContactToolbar';

class Header extends Component {
  toolbarPicker(location) {
    switch (location) {
      case 'About':
        return <AboutToolbar />;
      case 'Contact':
        return <ContactToolbar />;
      case 'Resume':
        return <ResumeToolbar />;
      case 'Portfolio':
        return <PortfolioToolbar />;
      default:
        return <div />;
    }
  }
  render() {
    const { location, color } = this.props.display;
    const toolbar = this.toolbarPicker(location);
    return (
      <div>
        <div id="header">
          <h1 id="headerText" className={`${color}-Text`}>
            <strong>
              {location === 'Resume'
                ? 'R\u00C9SUM\u00C9'
                : location.toUpperCase()}
            </strong>
          </h1>
        </div>
        <div id="logoBorderHeader" />
        <div id="lowerLine" className={`${color}-HeaderBorder`} />
        {location !== 'Homepage' && (
          <div id="toolbar" className={`${color}-border`}>
            {toolbar}
          </div>
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

export default connect(mapStateToProps)(Header);
