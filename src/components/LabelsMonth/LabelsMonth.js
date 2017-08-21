import React, { Component } from "react";

import "./styles.css";

class LabelsMonth extends Component {
  render() {
    return (
      <g transform="translate(36, 10)">
        <text x="13" y="0" className="month">Sep</text>
        <text x="49" y="0" className="month">Oct</text>
        <text x="97" y="0" className="month">Nov</text>
        <text x="145" y="0" className="month">Dec</text>
        <text x="205" y="0" className="month">Jan</text>
        <text x="253" y="0" className="month">Feb</text>
        <text x="313" y="0" className="month">Mar</text>
        <text x="361" y="0" className="month">Apr</text>
        <text x="409" y="0" className="month">May</text>
        <text x="469" y="0" className="month">Jun</text>
        <text x="517" y="0" className="month">Jul</text>
        <text x="565" y="0" className="month">Aug</text>
      </g>
    );
  }
}

export default LabelsMonth;
