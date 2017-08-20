import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";

import Home from '../Home';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Route exact path="/" component={Home}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
