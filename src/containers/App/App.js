import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Home from '../Home';
import Pathways from '../Pathways';

import Header from '../../components/Header';
import "./styles.css";


import selectUser from './selectors';
import {
  getUser,
} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.handleGetUser();
  }

  render() {
    return (
      <div>
        <Header
          location={this.props.location}
          user={this.props.user}
        />
        <div className="container">

          <Route exact path="/" component={Home}/>
          <Route path="/pathways" component={Pathways} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  handleGetUser: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = selectUser();

function mapDispatchToProps(dispatch) {
  return {
    handleGetUser: (data) => dispatch(getUser(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
