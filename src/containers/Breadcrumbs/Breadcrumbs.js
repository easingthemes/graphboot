import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import selectBreadcrumbs from './selectors';

import BreadcrumbsNav from '../../components/Breadcrumbs';

class Breadcrumbs extends Component {
  render() {
    const breadcrumbs = this.props.breadcrumbs || [];
    return (
      <div>
        <BreadcrumbsNav breadcrumbs={breadcrumbs} />
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array
};

const mapStateToProps = selectBreadcrumbs();

export default connect(mapStateToProps)(Breadcrumbs);

