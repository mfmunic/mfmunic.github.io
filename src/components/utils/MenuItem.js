import React, { Component } from "react";
import { connect } from "react-redux";
import * as display from "../../modules/actions/display";

class MenuItem extends Component {
  setLocation(item, color) {
    this.props.dispatch(display.menu(item, color));
  }

  render() {
    const { text, color } = this.props;
    return (
      <div id="fullMenuItem" onClick={this.setLocation.bind(this, text, color)}>
        <div id="menuShadow" />
        <div className="menuItem">
          <div id={`menuTail-${color}`} />
          <div className={`${color}-BG menuRibbon`}>
            <p>
              <strong>{text === "Resume" ? "R\u00E9sum\u00E9" : text}</strong>
            </p>
          </div>
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

export default connect(mapStateToProps)(MenuItem);
