import React, { Component } from "react";
import { connect } from "react-redux";

import { basicAuth } from '../../helpers/auth';

import {
  removeBreadcrumbs,
} from '../Breadcrumbs/actions';

class Home extends Component {
  componentDidMount() {
    this.props.handleRemoveBreadcrumbs(1);
    basicAuth();
  }

  render() {
    return (
      <div>
        Home page
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleRemoveBreadcrumbs: (index) => dispatch(removeBreadcrumbs(index)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Home);
