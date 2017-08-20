import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { SQUARE_SIZE } from '../../constants';

import Weeks from '../../components/Weeks';
import Tooltip from '../Tooltip';

import {
  setDays,
} from './actions';

class Calendar extends Component {
  componentDidMount() {
    this.props.handleSetDays(this.props.initialValues);
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <svg
          className="react-calendar-heatmap"
          width="676"
          height="104"
        >
          <g transform={`translate(0, ${SQUARE_SIZE})`}>
            <Weeks
              initialValues={this.props.initialValues}
              counter={this.props.counter}
            />
          </g>
        </svg>
        <Tooltip />
      </div>
    );
  }
}

Calendar.propTypes = {
  initialValues: PropTypes.object,
  counter: PropTypes.number
};

Calendar.defaultProps = {
  initialValues: {
    'id': {
      index: 0,
      id: 'id',
      date: new Date()
    }
  },
  counter: 10
};

function mapDispatchToProps(dispatch) {
  return {
    handleSetDays: (data) => dispatch(setDays(data)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Calendar);
