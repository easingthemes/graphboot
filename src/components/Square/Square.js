import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

import { SQUARE_SIZE, GUTTER_SIZE, COLORS } from '../../constants';

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
    let colorCode;
    let fill;

      if (count <= COLORS[0].value) {
        fill = COLORS[0].code;
        colorCode = 0;
      } else if (count <= COLORS[1].value) {
        fill = COLORS[1].code;
        colorCode = 1;
      } else if (count <= COLORS[2].value) {
        fill = COLORS[2].code;
        colorCode = 2;
      } else if (count <= COLORS[3].value) {
        fill = COLORS[3].code;
        colorCode = 3;
      } else if (count > COLORS[3].value) {
        fill = COLORS[4].code;
        colorCode = 4;
      } else {
        fill = 'red';
        colorCode = 'error';
      }

    return {
      cssClass: `color-github-${colorCode}`,
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
