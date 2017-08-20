import React, { PureComponent } from "react";
import { Range } from 'immutable';

import { WEEKS_TOTAL } from '../../constants';

import Week from '../Week';

class Weeks extends PureComponent  {
  render() {
    return Range(WEEKS_TOTAL, -1, -1).map(weekIndex => {
      return  (
        <Week
          key={`week-${weekIndex}`}
          weekIndex={weekIndex}
          initialValues={this.props.initialValues}
          counter={this.props.counter}
        />
      );
    });
  }
}

export default Weeks;
