import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

/**
 * Creates a popup for the event clicked
 * @param       {Properties} props Parameters needed to create the event
 */
function EventPopup(props) {
    let date = new Date(props.event.year, props.event.month, props.event.day);
    let options = {year: 'numeric', month: 'short', day: 'numeric'};
    return (
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
            <div style={{backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '5px',
                width: '50vw',
                height: '50vh',
                position: 'absolute'
            }}>
                <Link to='/Calendar' >
                    <Button style={{top: 5, right: 5, position: 'absolute'}}>
						<span>X</span>
					</Button>
                </Link>
                <div style={{justifyContent: 'center'}}>
                    <h1>{date.toLocaleDateString("en-US", options)}</h1>
                    <h2>{props.event.message}</h2>
                </div>
            </div>
        </div>
    );
}

export default EventPopup;

