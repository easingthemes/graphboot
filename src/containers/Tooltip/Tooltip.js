import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import selectTooltip from './selectors';

import './styles.css';

class Tooltip extends Component {
  renderTooltipContent(count, date) {
    return (
      <span>
        <strong>{count ? count : 'No'} contributions</strong> on {date.toDateString()}
      </span>
    );
  }

  renderTooltip(tooltip) {
    if (!tooltip.isActive) {
      return (
        <span />
      );
    }

    return (
      <div
        className="svg-tip svg-tip-one-line"
        style={{
          top: `${tooltip.y || 0}px`,
          left: `${tooltip.x || 0}px`
        }}
      >
        {this.renderTooltipContent(tooltip.count, tooltip.date)}
      </div>
    );
  }

  render() {
    return this.renderTooltip(this.props.tooltip);
  }
}

Tooltip.propTypes = {
  tooltip: PropTypes.object
};

Tooltip.defaultProps = {
  tooltip: {
    count: 0,
    date: '',
    isActive: false,
    x: 0,
    y: 0
  }
};

const mapStateToProps = selectTooltip();

export default connect(mapStateToProps, null)(Tooltip);
