import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

import { SQUARE_SIZE, GUTTER_SIZE } from '../../constants';

import './styles.css';

class Square extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick() {
    const { count } = this.props;
    this.props.onClick(count);
  }

  handleMouseEnter() {
    this.props.onMouseEnter();
  }

  handleMouseLeave() {
    this.props.onMouseLeave();
  }

  squareStyle(count) {
    let color;
    let fill;

    if (count === 0) {
      fill = '#eeeeee';
      color = 'empty'
    } else if (count <= 50) {
      fill = '#d6e685';
      color = 1;
    } else if (count <= 100) {
      fill = '#8cc665';
      color = 2;
    } else if (count <= 200) {
      fill = '#44a340';
      color = 3;
    } else if (count > 200) {
      fill = '#1e6823';
      color = 4;
    } else {
      fill = 'red';
      color = 'disabled';
    }

    return {
      cssClass: `color-github-${color}`,
      fill: fill
    };
  }

  render() {
    const { dayIndex, count, date } = this.props,
      squareStyle = this.squareStyle(count),
      y = dayIndex * (SQUARE_SIZE + GUTTER_SIZE);

    return (
      <rect
        key={`rect-${dayIndex}`}
        className={squareStyle.cssClass}
        fill={squareStyle.fill}
        height={SQUARE_SIZE}
        width={SQUARE_SIZE}
        data-date={date}
        x={0}
        y={y}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    );
  }
}

Square.propTypes = {
  dayIndex: PropTypes.number,
  weekIndex: PropTypes.number,
  count: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Square.defaultProps = {
  dayIndex: 0,
  weekIndex: 0,
  count: 0,
  date: new Date(),
  onClick: function() {},
  onMouseEnter: function() {},
  onMouseLeave: function() {}
};

export default Square;
