import React, { Component } from "react";
import { connect } from "react-redux";
import CalendarHeatmap from 'react-calendar-heatmap';
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
        <CalendarHeatmap
             endDate={new Date('2016-04-01')}
             numDays={100}
             values={[
               { date: '2016-01-01' },
               { date: '2016-01-22' },
               { date: '2016-01-30' }
             ]}
           />
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
