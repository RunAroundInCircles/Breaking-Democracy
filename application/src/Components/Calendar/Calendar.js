//Base code was found here: https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728
// The code needed to be recreated to work with the new version of datefns
import React from "react";
import {format,startOfWeek,addMonths,startOfMonth,addDays,subMonths,endOfWeek,endOfMonth,isSameMonth,isSameDay,isEqual}  from "date-fns";
import Event from "./Event.js";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      events: props.events
    };
  }

//Goes through all the dates and finds the one that is equal to the given date
  containsDate(date) {
    var i;
    for(i = 0; i < this.state.events.length; i++) {
      if(isEqual(date, this.state.events[i].date)) {
        return this.state.events[i].message;
      }
    }
    return null;
  }

  //Renders the Month and year at the top of the calendar
  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
        {/*Creates an arrow to allow the user to click to the previous month*/}
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        {/*Displays the month and year*/}
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        {/*Creates an arrow to allow the user to click to the next month*/}
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

//Gives the date format of the days in the week list above the cells
  renderDays() {
    const dateFormat = "eee"; //Gives the day as a 3 accronym
    const days = [];

    //Finds the start of the week based off the current month
    let startDate =  startOfWeek(this.state.currentMonth);

    //Adds each day to the week list
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format( addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  //Renders each cell in the calendar and adds the day number
  renderCells() {
    const {currentMonth, selectedDate} = this.state;
    const monthStart =  startOfMonth(currentMonth);
    const monthEnd =  endOfMonth(monthStart);
    const startDate =  startOfWeek(monthStart);
    const endDate =  endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    //Goes through every day in the month and formats them (Gives the correct day number to the cell)
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate =  format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`col cell ${
              ! isSameMonth(day, monthStart)
                ? "disabled"
                :  isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            {this.containsDate(day)}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  }

//When the day is click the cell will have a blue highlighted bar
  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

//When the right arrow is pressed by the user the month will increase by one
  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

//When the user clicks the left arrow the month will decrease by one
  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

//Renders all of the calendar
  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
