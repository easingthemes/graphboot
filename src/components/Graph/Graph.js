import React, { Component } from "react";

import { getInitialDays } from '../../helpers/getInitialDays';

import Calendar from '../../containers/Calendar';

import "./styles.css";

class Graph extends Component {
  render() {
    return (
      <div className="container-lg clearfix px-3 mt-4">
        <div className="col-9 float-left pl-2">
          <div className="js-contribution-graph">
            <h2 className="f4 text-normal mb-2">
              1,276 contributions
              in 2017
            </h2>

            <div className="mb-5 border border-gray-dark rounded-1 py-2">
              <div
                className="js-calendar-graph is-graph-loading graph-canvas calendar-graph height-full"
                data-graph-url="/users/easingthemes/contributions"
                data-url="/easingthemes"
                data-from="2017-02-17"
                data-to="2017-02-17"
              >
                <Calendar
                  initialValues={getInitialDays(365)}
                  counter={30}
                />
              </div>
              <div className="contrib-footer clearfix mt-1 mx-3 px-3 pb-1">
                <div className="contrib-legend text-gray">
                  Less
                  <ul className="legend">
                    <li style={{backgroundColor: '#eee'}}></li>
                    <li style={{backgroundColor: "#c6e48b"}}></li>
                    <li style={{backgroundColor: "#7bc96f"}}></li>
                    <li style={{backgroundColor: "#239a3b"}}></li>
                    <li style={{backgroundColor: "#196127"}}></li>
                  </ul>
                  More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
