import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { Range } from 'immutable';

import { SQUARE_SIZE, GUTTER_SIZE } from '../../constants';

import Day from '../../containers/Day';

class Week extends PureComponent {
  render() {
    const { weekIndex, initialValues } = this.props;

    return (
      <g
        key={`week-${weekIndex}`}
        transform={`translate(${weekIndex * (SQUARE_SIZE + GUTTER_SIZE)}, 0)`}
      >
        {Range(6, -1, -1).map(dayIndex => {
          return (
            <Day
              key={`day-${dayIndex}`}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
              initialValues={initialValues}
            />
          );
        })}
      </g>
    );
  }
}

Week.propTypes = {
  weekIndex: PropTypes.number
};

Week.defaultProps = {
  weekIndex: 0
};

export default Week;
