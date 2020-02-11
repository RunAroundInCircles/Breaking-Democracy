import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
import region1 from '../../Resources/Maps/Region-1.svg.js';
import region2 from '../../Resources/Maps/Region-2.svg.js';
import region3 from '../../Resources/Maps/Region-3.svg.js';
import region4 from '../../Resources/Maps/Region-4.svg.js';
import region5 from '../../Resources/Maps/Region-5.svg.js';
import region6 from '../../Resources/Maps/Region-6.svg.js';
import region7 from '../../Resources/Maps/Region-7.svg.js';
import region8 from '../../Resources/Maps/Region-8.svg.js';

/**
 * This section will be used to add data to the map regions
 * @param       {[Property]} props These are used to access data from the map regions
 * @constructor
 */
function MapRegion(props) {
    var regions = {
        0: region1,
        1: region2,
        2: region3,
        3: region4, 
        4: region5,
        5: region6, 
        6: region7,
        7: region8
    }
    var svg = {
        __html: regions[props.region] //Formats the map to be inserted as InnnerHTML
    }
    var color = '#ff0000';
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
                width: '75vw',
                height: '75vh',
                position: 'absolute',
                justifyContent: 'center'
            }}>
                {/*This link acts as a back button allowing the user to redirect to Calendar*/}
                <Link to='/Map' >
                    <Button style={{top: 5, right: 5, position: 'absolute'}}>
						<span>X</span>
					</Button>
                </Link>
                {/*This div contains all of the information for the event*/}
                <div className="region-map" 
                    dangerouslySetInnerHTML={svg}
                />
            </div>
        </div>
    );
}

export default MapRegion;
