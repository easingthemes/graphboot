import React, { Component } from "react";

import { getInitialDays } from '../../helpers/getInitialDays';

import Calendar from '../../containers/Calendar';
import Palette from '../../containers/Palette';

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
              <div className="js-calendar-graph is-graph-loading graph-canvas calendar-graph height-full">
                <Calendar
                  initialValuesRandom={getInitialDays(365)}
                  counter={30}
                />
              </div>
              <div className="contrib-footer clearfix mt-1 mx-3 px-3 pb-1">
                <Palette />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
