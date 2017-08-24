import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getDay } from '../../helpers/dateHelpers';
import { getRandomCounter } from '../../helpers/getCounterRange';

import { SQUARE_SIZE, GUTTER_SIZE } from '../../constants';

import Square from '../../components/Square';

import selectCounter from '../Palette/selectors';

import {
  setCounter
} from '../Palette/actions';
import {
  setTooltip,
} from '../Tooltip/actions';

class Day extends Component {
  constructor(props) {
    super(props);

    const { dayIndex, weekIndex, initialDays } = props,
      day = getDay(dayIndex, weekIndex),
      position = this.getPosition(weekIndex, dayIndex),
      initialValue = initialDays[day.id] || {};

    this.state = {
      count: initialValue.count || 0,
      initialCount: initialValue.count || 0,
      date: day.date,
      id: day.id,
      x: position.x,
      y: position.y
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const initialDays = this.props.initialDays,
      nextInitialDays = nextProps.initialDays,
      id = this.state.id,
      initialValue = nextInitialDays[id] || {};

    if (initialDays['id'] && !nextInitialDays['id']) {
      this.setState({
        count: initialValue.count || 0,
        initialCount: initialValue.count || 0
      });
    }
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

  handleClick() {
    const counter = this.props.counter;
    const initialCount = this.state.initialCount;
    const count = initialCount >= counter ? initialCount : counter;

    this.setState({
      count
    }, () => {
      this.props.handleSetTooltip(this.getTooltipData(true));

      if (counter !== 0) {
        this.props.handleSetCounter(getRandomCounter(counter));
      }
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
  initialDays: PropTypes.object,
  handleSetTooltip: PropTypes.func,
  counter: PropTypes.number
};

Day.defaultProps = {
  dayIndex:      0,
  weekIndex:     0,
  initialDays: {},
  counter: 0
};

const mapStateToProps = selectCounter();

function mapDispatchToProps(dispatch) {
  return {
    handleSetTooltip: (data) => dispatch(setTooltip(data)),
    handleSetCounter: (data) => dispatch(setCounter(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);
