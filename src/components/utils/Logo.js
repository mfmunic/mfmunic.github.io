import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as display from '../../modules/actions/display';

class Logo extends Component {
  goHome() {
    this.props.dispatch(display.menu('Homepage', 'blue'));
  }

  render() {
    const { color } = this.props.display;
    return (
      <div className="logo-border z8">
        <div
          className={`logo BG--${color} z10`}
          onClick={this.goHome.bind(this)}
        >
          <h1 className="logo-name logo-name-Marc">Marc</h1>
          <h1 className="logo-name logo-name-Munic">Munic</h1>
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

export default connect(mapStateToProps)(Logo);
