import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import selectMatrix from './selectors';
import {
  getAllMatrices,
} from './actions';

import Matrix from './Matrix';
import TableMatrices from '../../components/Table/TableMatrices';

class Matrices extends Component {
  componentDidMount() {
    this.props.handleGetMatrices(39783802);
  }

  render() {
    return (
      <div>
        <Route path={`${this.props.match.url}/:matrixId`} component={Matrix}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
            <h3>Pathway Definition</h3>
              <TableMatrices
                matrices={this.props.matrices}
                url={this.props.match.url}
              />
          </div>
        )}/>
      </div>
    );
  }
}

Matrices.propTypes = {
  handleGetMatrices: PropTypes.func,
  matrixName: PropTypes.string,
  matrices: PropTypes.array
};

const mapStateToProps = selectMatrix();

function mapDispatchToProps(dispatch) {
  return {
    handleGetMatrices: (data) => dispatch(getAllMatrices(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrices);

