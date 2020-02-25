import React,{Component} from 'react';

class Echo extends Component {
  /**
   * Constructs the echo component
   * @param {Properties} props [All the necessary properties needed to generate the echo component]
   */
    constructor(props) {
        super(props);

        this.state = {
            body: props.body,
            name: props.name,
            at: props.at,
            time: props.time
        }
    }
	/**
 	* Renders and returns each state inside the ech.
 	* @return returns the div containing the time, at, name and body to be displayed on the page.
 	*/
    render() {
           return (
                <div className='echo-selected'>
					          <h4>{this.state.time}</h4>
                    <h1>{this.state.at}</h1> {/* Name of Sender */}
                    <h2>{this.state.name}</h2> {/* Ttile of Echo */}
                    <h3>{this.state.body}</h3> {/* Body of Echo*/}
                </div>
            );
    }
}

export default Echo;
