import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getRandomCounter } from '../../helpers/getCounterRange';
import { COLORS } from '../../constants';

import "./styles.css";

import selectCounter from './selectors';
import {
  setCounter,
  getCounter
} from './actions';

class Palette extends Component {
  handleClick(color) {
    const value = getRandomCounter(color.value);

    this.props.handleSetCounter(value);
  }

  renderColor(color, index) {
    return (
      <li
        key={`color-${index}`}
        onClick={() => this.handleClick(color)}
        style={{backgroundColor: color.code}}
      >
      </li>
    );
  }

  renderColors() {
    return COLORS.map((color, index) => {
      return this.renderColor(color, index);
    });
  }

  render() {
    return (
      <div className="contrib-legend text-gray">
        Less
        <ul className="legend">
          {this.renderColors()}
        </ul>
        More
      </div>
    );
  }
}

Palette.propTypes = {
  counter: PropTypes.number
};

Palette.defaultProps = {
  counter: 1
};

const mapStateToProps = selectCounter();

function mapDispatchToProps(dispatch) {
  return {
    handleGetCounter: (data) => dispatch(getCounter(data)),
    handleSetCounter: (data) => dispatch(setCounter(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
