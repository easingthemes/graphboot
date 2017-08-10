import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import selectBadge from './selectors';
import {
  getBadge,
} from './actions';
import {
  addBreadcrumbs,
  removeBreadcrumbs,
} from '../Breadcrumbs/actions';

import TableBadgeLevel from '../../components/Table/TableBadgeLevel';

class Badge extends Component {
  componentDidMount() {
    const match = this.props.match || {};
    const params = match.params || {};
    const id = params.badgeLevelId;

    if (id && this.props.match.isExact) {
      this.props.handleGetBadge(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const badge = nextProps.badge;
    const fields = badge.fields || {};
    this.props.handleAddBreadcrumbs(4, fields.summary);
  }

  render() {
    return (
      <div>
        <TableBadgeLevel
          badge={this.props.badge}
          url={this.props.match.url}
        />
      </div>
    );
  }
}

Badge.propTypes = {
  handleGetBadge: PropTypes.func,
  badge: PropTypes.object,
  total: PropTypes.number
};

const mapStateToProps = selectBadge();

function mapDispatchToProps(dispatch) {
  return {
    handleGetBadge: (data) => dispatch(getBadge(data, true)),
    handleAddBreadcrumbs: (index, label) => dispatch(addBreadcrumbs(index, label)),
    handleRemoveBreadcrumbs: (index) => dispatch(removeBreadcrumbs(index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Badge);

