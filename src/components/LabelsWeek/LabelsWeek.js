import React, { Component } from "react";

import "./styles.css";

class LabelsWeek extends Component {
  render() {
    return (
      <g transform="translate(0, 20)">
        <text className="wday" dx="0" dy="8" style={{display: 'none'}}>Sun</text>
        <text className="wday" dx="0" dy="20">Mon</text>
        <text className="wday" dx="0" dy="32" style={{display: 'none'}}>Tue</text>
        <text className="wday" dx="0" dy="44">Wed</text>
        <text className="wday" dx="0" dy="57" style={{display: 'none'}}>Thu</text>
        <text className="wday" dx="0" dy="69">Fri</text>
        <text className="wday" dx="0" dy="81" style={{display: 'none'}}>Sat</text>
      </g>
    );
  }
}

export default LabelsWeek;
