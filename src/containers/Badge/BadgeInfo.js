import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import axios from 'axios';

import { API_URL } from '../App/constants';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: 0,
      isError: false,
      badge: {}
    };
  }

  getBadge(badgeId) {
    axios.get(`${API_URL}badge/${badgeId}`)
      .then(response => {
        this.setState({
          isLoaded: 1,
          isError: false,
          badge: response.data
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: 1,
          isError: true
        });
      });
  }

  componentDidMount() {
    this.getBadge(this.props.id);
  }

  renderInfo(badge) {
    const fields = badge.fields || {};
    const status = fields.status || {};
    return (
      <span key={`badge-${badge.id}`}>
        <span>
          <Link to={`/badge/${badge.key}`}>
            {badge.key} -
          </Link>
        </span>
        <span>{fields.summary} </span>
        <span>{status.name}</span>
      </span>
    );
  }

  render() {
    if (!this.state.isLoaded) {
      return(
        <span>Loading ...</span>
      );
    }

    if (this.state.isError) {
      return(
        <span>Error loading info</span>
      );
    }

    return (
      <span>
        {this.renderInfo(this.state.badge)}
      </span>
    );
  }
}

Badge.propTypes = {
  id: PropTypes.string
};

export default Badge;

