/*MIT License

Copyright (c) 2019 Caleb Logan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

/**
 * Represents an event in the calendar. This is where users will be able
 * to start minigames and influence candidates
 * @extends React,react-router-dom
 */
class Event extends Component {

  /**
   * Creates the event to be shown within the calendar cells that allows the user to get more information about the specific event
   * @return {Link} An link to /Calendar/id of the event
   */
  render() {
    let route = "/Calendar/" + this.props.id;
    return (
      <Link to={route} className="calendar-event-link">
        <Button className="calendar-event-button">
          {this.props.message}
        </Button>
      </Link>
    );
  }

}

export default Event;
