import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./styles.css";

class Navigation extends Component {
  render() {
    const location = this.props.location || {};
    const pathname = location.pathname;
    const isPath1Page = pathname.indexOf('path1') > -1;
    const user = this.props.user || {};
    const avatarUrls = user.avatarUrls || [];
    const avatarUrl = avatarUrls['32x32'];

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              App
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
              <li className={isPath1Page ? 'active' : ''}>
                <Link to="/path1">
                  path1
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a>
                  <span className="nav__user">
                    {user.username}
                    <img src={avatarUrl} alt={user.username} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object
};

export default Navigation;
