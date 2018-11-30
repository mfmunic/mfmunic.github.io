import React, { Component } from "react";
import { connect } from "react-redux";
// import _ from 'lodash';

import Display from "./Display";
import Header from "./Header";
import Sidebar from "./Sidebar";

class MainPage extends Component {
  render() {
    return (
      <div id="fullPage">
        <Sidebar />
        <div id="notSidebar">
          <Header />
          <Display />
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

export default connect(mapStateToProps)(MainPage);
