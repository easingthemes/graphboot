import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from '../../components/Calendar'

class Home extends Component {
  render() {
    return (
      <div>
        Home page
        <Calendar />
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
