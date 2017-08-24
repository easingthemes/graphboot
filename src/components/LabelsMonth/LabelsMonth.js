import React, { Component } from "react";
import range from 'lodash/range';
import { shiftDate } from '../../helpers/dateHelpers';
import { WEEKS_TOTAL, MONTH_LABELS, GUTTER_SIZE, SQUARE_SIZE } from '../../constants';

import "./styles.css";

class LabelsMonth extends Component {
  getStartDate() {
    return shiftDate(new Date(), (WEEKS_TOTAL + 1) * 7);
  }

  renderMonthLabels() {
    const labels = [];

    const monthLabels = range(WEEKS_TOTAL).map((weekIndex) => {
      const endOfWeek = shiftDate(this.getStartDate(), (weekIndex + 1) * 7);
      const x = weekIndex * (SQUARE_SIZE + GUTTER_SIZE);
      const label = MONTH_LABELS[endOfWeek.getMonth()];

      if ((endOfWeek.getDate() >= 1 && endOfWeek.getDate() <= 7) || labels.indexOf(label) > -1) {
        return null;
      } else {
        labels.push(label);
      }

      return (
        <text
          key={weekIndex}
          x={x}
          y={0}
          className="month"
        >
          {label}
        </text>
      );
    });

    return monthLabels.filter(monthLabel => monthLabel);
  }

  render() {
    return (
      <g transform="translate(36, 10)">
        {this.renderMonthLabels()}
      </g>
    );
  }
}

export default LabelsMonth;
