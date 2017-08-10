import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import selectBadge from './selectors';
import {
  getBadge,
} from './actions';
import {
  addBreadcrumbs,
  removeBreadcrumbs,
} from '../Breadcrumbs/actions';

import TableBadge from '../../components/Table/TableBadge';
import BadgeLevel from './BadgeLevel';

class Badge extends Component {
  componentDidMount() {
    const match = this.props.match || {};
    const params = match.params || {};
    const id = params.badgeId || '';

    if (this.props.match.isExact) {
      this.props.handleGetBadge(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const badge = nextProps.badge;
    const fields = badge.fields || {};
    const match = nextProps.match || {};
    const url = match.url || '';

    this.props.handleAddBreadcrumbs(3, fields.summary, url);
    this.props.handleRemoveBreadcrumbs(4);
  }


  render() {
    return (
      <div>
        <Route path={`${this.props.match.url}/:badgeLevelId`} component={BadgeLevel} />
        <Route exact path={this.props.match.url} render={() => (
          <TableBadge
            badge={this.props.badge}
            url={this.props.match.url}
          />
        )}/>
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
    handleGetBadge: (data) => dispatch(getBadge(data)),
    handleAddBreadcrumbs: (index, label, url) => dispatch(addBreadcrumbs(index, label, url)),
    handleRemoveBreadcrumbs: (index) => dispatch(removeBreadcrumbs(index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Badge);

