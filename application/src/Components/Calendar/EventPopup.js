import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

/**
 * Creates a popup when an event is clicked on the calendar
 * @param {Properties} props Parameters needed to create the event, contains event which had an id, year, month, day, and a message
 * @return {div} Returns a div that blocks all click events below it and contains the popup window
 */
function EventPopup(props) {
    //The date of the event to display
    let date = new Date(props.event.year, props.event.month, props.event.day);

    //options is used to format how the date of the event is displayed
    let options = {year: 'numeric', month: 'short', day: 'numeric'};
    
    return (
        //This div covers the screen with an black opaque layer
         <div style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, .7)'
        }}>
            {/*This div is the body of the popup window containing the back button and the event info*/}
            <div style={{backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '5px',
                width: '50vw',
                height: '50vh',
                position: 'absolute'
            }}>
                {/*This link acts as a back button allowing the user to redirect to Calendar*/}
                <Link to='/Calendar' >
                    <Button style={{top: 5, right: 5, position: 'absolute'}}>
						<span>X</span>
					</Button>
                </Link>
                {/*This div contains all of the information for the event*/}
                <div style={{justifyContent: 'center'}}>
                    <h1>{date.toLocaleDateString("en-US", options)}</h1>
                    <h2>{props.event.message}</h2>
					<Link>
						<Button>Choice 1</Button>
					</Link>
                </div>
            </div>
        </div>
    );
}

export default EventPopup;