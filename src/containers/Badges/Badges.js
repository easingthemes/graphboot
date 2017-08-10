import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import selectBadges from './selectors';
import {
  getBadges,
} from './actions';

import {
  addBreadcrumbs,
  removeBreadcrumbs,
} from '../Breadcrumbs/actions';

import Table from '../../components/Table/Table';

class Badges extends Component {
  componentDidMount() {
    const match = this.props.match || {};
    const params = match.params || {};
    const id = params.pathwayId || '';

    this.props.handleGetBadges(id);
  }

  componentWillReceiveProps(nextProps) {
    const match = nextProps.match || {};
    const url = match.url || '';

    this.props.handleAddBreadcrumbs(2, nextProps.epicName, url);
    this.props.handleRemoveBreadcrumbs(3);
  }

  render() {
    return (
      <div>
        <h3>{this.props.epicName}</h3>
          <Table
            badges={this.props.badges}
            total={this.props.total}
            url="/badge"
          />
      </div>
    );
  }
}

Badges.propTypes = {
  handleGetBadges: PropTypes.func,
  epicName: PropTypes.string,
  badges: PropTypes.array,
  total: PropTypes.number
};

const mapStateToProps = selectBadges();

function mapDispatchToProps(dispatch) {
  return {
    handleGetBadges: (data) => dispatch(getBadges(data)),
    handleAddBreadcrumbs: (index, label, url) => dispatch(addBreadcrumbs(index, label, url)),
    handleRemoveBreadcrumbs: (index) => dispatch(removeBreadcrumbs(index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Badges);

