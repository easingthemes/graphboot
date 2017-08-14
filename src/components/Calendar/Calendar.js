import React, { Component } from "react";
import PropTypes from 'prop-types';
import CalendarHeatmap from '../CalendarHeatmap';
import ReactTooltip from 'react-tooltip';
import range from 'lodash.range';
import _findIndex from 'lodash/findIndex';
import _cloneDeep from 'lodash/cloneDeep';
import { shiftDate } from '../../helpers/dateHelpers';

import "./styles.css";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      isRandom: false,
      initValues: 0,
      values: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);
    this.handleChangeRandom = this.handleChangeRandom.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  generateRandomValues(count, date = new Date()) {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return range(count).map((index) => {
      return {
        date: shiftDate(date, -index),
        count: getRandomInt(0, 3),
      };
    })
  }

  handleClick(value) {
    const selectedDateIndex = _findIndex(this.state.values, ['date', value.date]);
    const values = _cloneDeep(this.state.values);

    values[selectedDateIndex].count = value.count + this.state.step;

    this.setState({
      values
    });
  }

  handleChangeStep(event) {
    this.setState({
      step: Number(event.target.value)
    });
  }

  handleChange(event) {
    this.setState({
      initValues: Number(event.target.value)
    });
  }

  handleChangeRandom(event) {
    console.log(event.target);
    const newState = {
      isRandom: event.target.value
    };

    if (event.target.value) {
      newState.values = this.generateRandomValues(this.state.initValues)
    }

    this.setState(newState);
  }

  githubClassForValue(value) {
    let color;

    if (!value) {
      return 'color-empty';
    }

    const colorValue = value.count;

    switch (true) {
      case colorValue === 0:
        color = 0;
        break;
      case colorValue < 50:
        color = 1;
        break;
      case colorValue < 100:
        color = 2;
        break;
      case colorValue < 200:
        color = 3;
        break;
      case colorValue >= 200:
        color = 4;
        break;
      default:
        color = 0;
    }

    return `color-github-${color}`;
  }

  customTooltipDataAttrs(value) {
    const tipFor = value.date ? Date.parse(value.date) : 'empty';
    const tip = value.date ? value.date.toDateString() : 'empty';
      return {
          'data-for': `tip-${tipFor}`,
          'data-tip': `${value.count ? value.count : 'No'} contributions on ${tip}`
      }
  }

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
    const values = this.state.values;
    return (
      <div className="container">
        <div className="row m-b-3">
          <div className="col-xs-12 col-md-6">
            <input
              type="number"
              value={this.state.step}
              onChange={this.handleChangeStep}
            />
            <input
              type="text"
              value={this.state.initValues}
              onChange={this.handleChange}
            />
            <label htmlFor="random">Random</label>
            <input
              name="random"
              type="checkbox"
              checked={this.state.isRandom}
              onChange={this.handleChangeRandom}
            />
            <CalendarHeatmap
              values={values}
              classForValue={this.githubClassForValue}
              tooltipDataAttrs={this.customTooltipDataAttrs}
              onClick={this.handleClick}
              numDays={365}
            />
            {this.renderTooltips(values)}
          </div>
          <div className="col-xs-12 col-md-6">
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  handleClick: PropTypes.func
};

export default Calendar;
