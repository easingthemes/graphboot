import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./styles.css";

class Breadcrumbs extends Component {
  renderBreadcrumb(breadcrumb = {}, isLast, i) {
    if (isLast) {
      return(
        <span key={`breadcrumb-${breadcrumb.label}-${i}`} className="breadcrumb-item active">{breadcrumb.label}</span>
      );
    }

    const url = breadcrumb.url || '/';
    return(
      <Link
        to={url}
        key={`breadcrumb-${breadcrumb.label}-${i}`}
        className="breadcrumb-item"
      >
        {breadcrumb.label}&nbsp;
      </Link>
    );
  }

  renderBreadcrumbs(breadcrumbs) {
    const filterBreadcrumbs = breadcrumbs.filter(breadcrumb => breadcrumb);
    const count = filterBreadcrumbs.length;
    return filterBreadcrumbs.map((breadcrumb, i) => this.renderBreadcrumb(breadcrumb, i === count - 1, i));
  }

  render() {
    return (
      <nav className="breadcrumb">
        {this.renderBreadcrumbs(this.props.breadcrumbs)}
      </nav>
    );
  }
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Breadcrumbs;
