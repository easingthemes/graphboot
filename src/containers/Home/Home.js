import React, { Component } from "react";
import { connect } from "react-redux";
import range from 'lodash/range';
import { shiftDate } from '../../helpers/dateHelpers';
import Calendar from '../../containers/Calendar';

class Home extends Component {
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  generateValuesObject(count, date = new Date()) {
    const datesObject = {};


    range(165).forEach(() => {
      const randomDate = this.getRandomDate(shiftDate(date, -count), date);
      const randomDateString = randomDate.toDateString();
      const newId = randomDateString.split(' ').join('-');
      datesObject[newId] = {
        value: randomDate,
        count: this.getRandomInt(1, 255)
      };
    });

    const today = new Date();
    const dateString = today.toDateString();
    const id = dateString.split(' ').join('-');

    datesObject[id] = {
      value: today,
      count: 10
    };

    return datesObject;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row m-b-3">
            <div className="col-xs-12 col-md-12">
              <Calendar
                initialValues={this.generateValuesObject(365)}
                counter={30}
              />
            </div>
            <div className="col-xs-12 col-md-6">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Home);
