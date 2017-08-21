import React, { Component } from "react";
import { connect } from "react-redux";

import Graph from '../../components/Graph';

class Home extends Component {
  render() {
    return (
      <div>
        <Graph />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Home);
