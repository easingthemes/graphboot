import React, { Component } from "react";
import PropTypes from 'prop-types';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import range from 'lodash.range';
import { shiftDate } from '../../helpers/dateHelpers';

import "./styles.css";

const today = new Date();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomValues(count, date = today) {
  return range(count).map((index) => {
    return {
      date: shiftDate(date, -index),
      count: getRandomInt(1, 3),
    };
  })
}

function githubClassForValue(value) {
  if (!value) {
    return 'color-empty';
  }
  return `color-github-${value.count}`;
}

function customTitleForValue(value) {
  return value ? `You're hovering over ${value.date.toDateString()} with value ${value.count}` : null;
}

function customOnClick(value) {
  if (value) {
    alert(`Clicked on ${value.date.toDateString()} with value ${value.count}`);
  }
}

const customTooltipDataAttrs = value => {
    return {
        'data-for': `tip-${Date.parse(value.date)}`,
        'data-tip': `${value.count ? value.count : 'No'} contributions on ${value.date.toDateString()}`
    }
};

const randomValues = generateRandomValues(200);

class Calendar extends Component {
  renderTooltips(values) {
      return values.map(value => {
          const id = Date.parse(value.date);
          return <ReactTooltip
              key={id}
              id={`tip-${id}`}
          />
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row m-b-3">
          <div className="col-xs-12 col-md-6">
            <CalendarHeatmap
              values={randomValues}
              classForValue={githubClassForValue}
              titleForValue={customTitleForValue}
              tooltipDataAttrs={customTooltipDataAttrs}
              onClick={customOnClick}
            />
            {this.renderTooltips(randomValues)}
          </div>
          <div className="col-xs-12 col-md-6">
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  location: PropTypes.object
};

export default Calendar;
