import React from 'react';
import {useParams, Link} from "react-router-dom";

function EventPopup(props) {
    console.log(props);
    let {id} = useParams();
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
                height: '50vh'
            }}>
                <Link to='/Calendar'>X</Link>
                <div style={{justifyContent: 'center'}}>
                    <h1>EVENT {id}!</h1>
                </div>
            </div>
        </div>
    );
}

export default EventPopup;

/*
                    <svg height='50%'>
                <rect 
                    height='100%'
                    width='100%'
                    rx='5'
                    fill='white'
                    x='0'
                    y='0'
                >
                    <rect 
                        height='25'
                        width='25'
                        fill='red'
                    />
                </rect>
            </svg>
*/