import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from '../../components/Calendar'

class Home extends Component {
  handleClick(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <Calendar handleClick={this.handleClick} />
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
