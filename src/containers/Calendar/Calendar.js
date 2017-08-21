import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Weeks from '../../components/Weeks';
import LabelsWeek from '../../components/LabelsWeek';
import LabelsMonth from '../../components/LabelsMonth';
import Tooltip from '../Tooltip';

import './styles.css';

import {
  setDays,
} from './actions';

class Calendar extends Component {
  componentDidMount() {
    this.props.handleSetDays(this.props.initialValues);
  }

  render() {
    return (
      <div className="calendar" style={{position: 'relative'}}>
        <svg
          className="calendar__svg"
          width="676"
          height="104"
        >
          <LabelsMonth />
          <g transform={`translate(25, 20)`}>
            <Weeks
              initialValues={this.props.initialValues}
              counter={this.props.counter}
            />
          </g>
          <LabelsWeek />
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
