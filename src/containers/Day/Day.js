import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getDay } from '../../helpers/dateHelpers';
import { SQUARE_SIZE, GUTTER_SIZE } from '../../constants';

import Square from '../../components/Square';

import {
  setTooltip,
} from '../Tooltip/actions';

class Day extends Component {
  constructor(props) {
    super(props);

    const { dayIndex, weekIndex, initialValues } = props,
      day = getDay(dayIndex, weekIndex),
      position = this.getPosition(weekIndex, dayIndex),
      initialValue = initialValues[day.id] || {};

    this.state = {
      count: initialValue.count,
      date: day.date,
      id: day.id,
      x: position.x,
      y: position.y
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  getPosition(weekIndex, dayIndex) {
    return {
      x: weekIndex * (SQUARE_SIZE + GUTTER_SIZE) + SQUARE_SIZE / 2 - 69,
      y: dayIndex * (SQUARE_SIZE + GUTTER_SIZE) + SQUARE_SIZE / 2 - 35
    };
  }

  getTooltipData(isActive) {
    return {
      date: this.state.date,
      count: this.state.count,
      isActive: isActive,
      x: this.state.x,
      y: this.state.y
    }
  }

  handleClick(count) {
    this.setState({
      count: count + this.props.counter
    }, () => {
      this.props.handleSetTooltip(this.getTooltipData(true));
    });
  }

  handleMouseEnter() {
    this.props.handleSetTooltip(this.getTooltipData(true));
  }

  handleMouseLeave() {
    this.props.handleSetTooltip(this.getTooltipData(false));
  }

  render() {
    return (
      <Square
        date={this.state.date}
        count={this.state.count}
        dayIndex={this.props.dayIndex}
        weekIndex={this.props.weekIndex}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    );
  }
}

Day.propTypes = {
  dayIndex: PropTypes.number,
  weekIndex: PropTypes.number,
  initialValues: PropTypes.object,
  handleSetTooltip: PropTypes.func
};

Day.defaultProps = {
  dayIndex: 0,
  weekIndex: 0,
  initialValues: {}
};

function mapDispatchToProps(dispatch) {
  return {
    handleSetTooltip: (data) => dispatch(setTooltip(data)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Day);
