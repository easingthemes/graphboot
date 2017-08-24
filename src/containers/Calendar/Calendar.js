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
  getContributions,
} from './actions';

class Calendar extends Component {
  componentDidMount() {
    this.props.handleSetDays(this.props.initialValues);
    this.props.handleGetContributions('easingthemes');
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
  initialValues: PropTypes.object
};

Calendar.defaultProps = {
  initialValues: {
    'id': {
      index: 0,
      id: 'id',
      date: new Date()
    }
  }
};

function mapDispatchToProps(dispatch) {
  return {
    handleSetDays: data => dispatch(setDays(data)),
    handleGetContributions: data => dispatch(getContributions(data)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Calendar);
