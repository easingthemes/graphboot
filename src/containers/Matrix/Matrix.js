import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import selectMatrix from './selectors';
import {
  getMatrix,
} from './actions';

import TableMatrix from '../../components/Table/TableMatrix';

class Matrix extends Component {
  componentDidMount() {
    const match = this.props.match || {};
    const params = match.params || {};
    const id = params.matrixId || '';

    this.props.handleGetMatrix(id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.matrixName}</h3>
        <TableMatrix
          content={this.props.content}
        />
      </div>
    );
  }
}

Matrix.propTypes = {
  handleGetMatrix: PropTypes.func,
  matrixName: PropTypes.string,
  content: PropTypes.string
};

const mapStateToProps = selectMatrix();

function mapDispatchToProps(dispatch) {
  return {
    handleGetMatrix: (data) => dispatch(getMatrix(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);

