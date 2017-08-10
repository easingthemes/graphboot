import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader';

class Table extends Component {
  renderRowHeader() {
    return (
      <thead>
        <tr key="matrix-header">
          <th>#id</th>
          <th>name</th>
        </tr>
      </thead>
    );
  }

  renderRow(matrix) {
    return (
      <tr key={`matrix-${matrix.id}`}>
        <td>{matrix.id}</td>
        <td>
          <Link to={`${this.props.url}/${matrix.id}`}>
            {matrix.title}
          </Link>
        </td>
      </tr>
    );
  }

  renderRowFooter() {
    if (typeof this.props.total !== 'number' && !this.props.total) {
      return (
        <tfoot>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      );
    }

    return (
      <tfoot>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>{this.props.total}</strong></td>
        </tr>
      </tfoot>
    );
  }

  renderRows(matrices) {
    return matrices.map(matrix => {
      return this.renderRow(matrix)
    });
  }

  renderTable(matrices) {
      if (matrices.length === 0) {
        return (
          <div>No data</div>
        );
      }

      return (
        <table className="table">
          {this.renderRowHeader()}
          <tbody>
            {this.renderRows(matrices)}
          </tbody>
          {this.renderRowFooter()}
        </table>
      );
    }

  render() {
    const matrices = this.props.matrices || [];

    if (matrices.length === 0) {
      return (
        <Loader />
      );
    }

    return (
      <div>
        {this.renderTable(matrices)}
      </div>
    );
  }
}

Table.propTypes = {
  matrices: PropTypes.array,
  total: PropTypes.number,
  url: PropTypes.string
};

export default Table;
