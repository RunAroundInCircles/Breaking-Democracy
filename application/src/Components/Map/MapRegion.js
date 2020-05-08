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

import React,{useEffect, useState} from 'react';
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
 * This function returns the proper map region based on the passed in prop
 * @param       {[Property]} props region: the region id to render
 * @constructor
 */
function MapRegion(props) {
    const colors = useState(props.pollData[props.region]); //The colors to be used by the region

    /**
     * Applies the coloring to the districts one the page is rendered
     */
    useEffect(() => {

      //Loops through every district on the page
        document.querySelectorAll('g > path[id~=district]').forEach((district, index) => {
            //Determines the districts name
            var districtName = document.getElementById('district-name');

            //The percentages
            var conservativeBox = document.getElementById('popup-conservative-box');
            var liberalBox = document.getElementById('popup-liberal-box');

            //The text to display above the map
            districtName.innerText = "Region of " + props.regionDistrictNames[props.region][0];

            //The color for the map region
            var color = 'rgb(' + (colors[0][index]/100)*255 +
                ', 0, ' +
                (1- (colors[0][index]/100))*255 + ')'; //Formats colors to be used
            district.style.setProperty("fill", color);
            //Function to display the name and poll percentage of the District that is being hovered over
            district.addEventListener('mouseover', function(event) {
                districtName.innerText = (index+1) + ": " + props.regionDistrictNames[props.region][index+1] + " District";
                conservativeBox.innerText = colors[0][index].toFixed(2) + "% Conservative";
                liberalBox.innerText = (100-colors[0][index]).toFixed(2) + "% Liberal";
            });
            //Function to display the name of the Region if no district is being hovered over
            district.addEventListener('mouseout', function(event) {
      				  districtName.innerText = "Region of " + props.regionDistrictNames[props.region][0];
            });
        });
    });

    //regions stores all of the regional maps so that they can be easily accessed
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

    //svg stores the raw html of the regional svg map to be inserted into the div
    var svg = {
        __html: regions[props.region] //Formats the map to be inserted as InnerHTML
    }
    return (
        //This div is the shadow that blocks the country map from being clicked on
        <div className="screen-blocker" style={{display: 'flex',
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
            {/*This div is the body of the popup window containing the back button and the regional map*/}
            <div className="popup-body" style={{backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '5px',
                width: '75vw',
                height: '75vh',
                position: 'absolute',
                justifyContent: 'center'
            }}>
            {/*This header is where the name of the region and district is displayed*/}
            <h1 id="district-name" style={{position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                left: '40%'
            }}></h1>
            <h2 id="popup-conservative-box" style={{position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                left: '10%',
                top: '50%'
            }}></h2>
            <h2 id="popup-liberal-box" style={{position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                left: '10%',
                top: '55%'
            }}></h2>
                {/*This link acts as a back button allowing the user to redirect to Map*/}
                <Link to='/Map'>
                    <Button style={{top: 5, right: 5, position: 'absolute'}}>
						              <span>X</span>
					          </Button>
                </Link>
                {/*This div contains the regional map*/}
                <div className="region-map"
                    dangerouslySetInnerHTML={svg}
                />
            </div>
        </div>
    );
}

export default MapRegion;
