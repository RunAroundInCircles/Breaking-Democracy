import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

function MapRegion(props) {
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
            {/*This div is the body of the popup window containing the back button and the event info*/}
            <div style={{backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '5px',
                width: '50vw',
                height: '50vh',
                position: 'absolute'
            }}>
                {/*This link acts as a back button allowing the user to redirect to Calendar*/}
                <Link to='/Map' >
                    <Button style={{top: 5, right: 5, position: 'absolute'}}>
						<span>X</span>
					</Button>
                </Link>
                {/*This div contains all of the information for the event*/}
                <div style={{justifyContent: 'center'}}>
                    {/*Put map here*/}
                </div>
            </div>
        </div>
    );
}

export default MapRegion;
