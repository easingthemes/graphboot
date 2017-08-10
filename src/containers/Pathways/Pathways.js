import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { PROJECT_ID } from '../App/private';
import selectPathways from './selectors';
import {
  getPathways,
} from './actions';

import {
  addBreadcrumbs,
  removeBreadcrumbs,
} from '../Breadcrumbs/actions';

import Table from '../../components/Table/Table';

class Pathways extends Component {
  componentDidMount() {
    if (this.props.match.isExact && this.props.pathways && this.props.pathways.length === 0) {
      this.props.handleGetPathways(PROJECT_ID);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.handleAddBreadcrumbs(1, 'Pathways', '/pathways');
    this.props.handleRemoveBreadcrumbs(2);
  }

  componentDidUpdate() {
    this.props.handleAddBreadcrumbs(1, 'Pathways', '/pathways');
    this.props.handleRemoveBreadcrumbs(2);
  }

  render() {
    return (
      <div>
        <Table
          badges={this.props.pathways}
          url="/badges"
        />
      </div>
    );
  }
}

Pathways.propTypes = {
  handleGetPathways: PropTypes.func,
  pathways: PropTypes.array,
  total: PropTypes.number
};

const mapStateToProps = selectPathways();

function mapDispatchToProps(dispatch) {
  return {
    handleGetPathways: (projectId) => dispatch(getPathways(projectId)),
    handleAddBreadcrumbs: (index, label, url) => dispatch(addBreadcrumbs(index, label, url)),
    handleRemoveBreadcrumbs: (index) => dispatch(removeBreadcrumbs(index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pathways);

