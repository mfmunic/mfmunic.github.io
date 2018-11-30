import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "./utils/MenuItem";
import Logo from "./utils/Logo";

class Sidebar extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div id="sidebar">
        <div>
          <Logo />
          <div id="menu">
            <MenuItem text="About" color="red" />
            <MenuItem text="Resume" color="yellow" />
            <MenuItem text="Portfolio" color="green" />
            <MenuItem text="Contact" color="orange" />
          </div>
        </div>
        <div id="copyright">
          Marc Munic {"\u00A9"} {year}
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

export default connect(mapStateToProps)(Sidebar);
