import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as display from '../../modules/actions/display';

class MenuItem extends Component {
  setLocation(item, color) {
    this.props.dispatch(display.menu(item, color));
  }

  render() {
    const { text, color } = this.props;
    return (
      <div className='fullMenuItem' onClick={this.setLocation.bind(this, text, color)}>
        <div className='menuShadow' />
        <div className='menuItem'>
          <div className={`menuTail menuTail-${color}`} />
          <div className={`BG--${color} menuRibbon`}>
            <p>
              <strong>{text === 'Resume' ? 'R\u00E9sum\u00E9' : text}</strong>
            </p>
          </div>
          <div className={`menuPointer menuPointer-${color}`} />
        </div>
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

export default connect(mapStateToProps)(MenuItem);
