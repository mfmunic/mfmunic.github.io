import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as display from '../../modules/actions/display';

class ToolbarButton extends Component {
  toolbarLocation(item) {
    this.props.dispatch(display.toolbar(item));
  }

  render() {
    const { text, color } = this.props;
    const active = text === this.props.display.toolbar ? 'active' : 'inactive';
    const textColor = active === 'active' ? `BG--${color}` : `Text--${color}`;
    return (
      <div className={`toolbarButton-${active} ${textColor}`} onClick={this.toolbarLocation.bind(this, text)}>
        {text}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    display: state.display,
  };
}

export default connect(mapStateToProps)(ToolbarButton);
