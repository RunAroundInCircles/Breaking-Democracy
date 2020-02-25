//Base code was found here: https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728
// The code needed to be recreated to work with the new version of datefns
import React from "react";
import {format,startOfWeek,addMonths,startOfMonth,addDays,subMonths,endOfWeek,endOfMonth,isSameMonth,isSameDay,isEqual}  from "date-fns";

/**
 * Calendar component of the app that allows the user to click different events
 * during the political campaign to influence candidates.
 * @extends React
 */
class Calendar extends React.Component {
  state = {
    currentMonth: new Date(), //The Current Month shown to the user
    selectedDate: new Date(), //The date of the clicked cell
    eventCompleted: [],
    //The different events to be displayed on the calendar
    events: this.props.events

  };

  /**
   * Goes through all the dates and searches for an event that is on the same day as the date passed in.
   * This also goes through all the events already completed by the player and will remove them from the calendar
   * @param  {[Date]} date The date to search for.
   *  * @return {String} Returns an event if one exists, else it returns null.
   */
  containsDate(date) {
    var i;
    var found = -1;
    for(i = 0; i < this.state.events.length; i++) {

      if(isEqual(date, this.state.events[i].date)) {
        found = this.state.eventCompleted.find(function(index){
          return i === index;
        });

        if(found !== -1){
          return this.state.events[i].message;
        }
        else{
          return null;
        }
      }
    }
    return null;
  }

  /**
   * Renders the Month, year, and arrows to change months at the top of the calendar
   * @return {String} Creates the header for the calendar
   */
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

  /**
   * Gives the date format of the days in the week list above the cells
   * @return {String} Returns the days of the week to be displayed in the calendar
   */
  renderDays() {
    const dateFormat = "eee"; //Gives the day as a 3 letter accronym
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

  /**
   * Renders each cell in the calendar and adds the day number
   * @return {div} Returns a div that represent a day as a cell in the calendar
   */
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
            {this.containsDate(day)} {/*Gets the event for the day if it exists*/}
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

/**
 * When the day is click the cell will have a blue highlighted bar
 * @param  {int} day The day that needs to be selected
 * @return {int} Returns the day that needs to be selected and the page will update to highlight the cell
 */
  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

/**
 * When the right arrow is pressed by the user the month will increase by one
 * @return {int} Increments the month and the page will update to the next month
 */
  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

/**
 * When the user clicks the left arrow the month will decrease by one
 * @return {int} Decrements the month and the page will update to the previous month
 */
  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

/**
 * Renders all of the calendar
 * @return {div} Returns a div that represents the calendar
 */
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
